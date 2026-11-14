/* Rakam & Banding — อัดเสียงตนเองแล้วฟังเทียบกับเสียงต้นแบบ
   เสียงที่อัดอยู่ในเบราว์เซอร์ของผู้เรียนเท่านั้น ไม่ถูกส่งไปที่ใด
   เปิดจากปุ่มไมโครโฟน [data-rec] ข้างปุ่มฟังเสียง (สร้างใน app.js) */
(function () {
  "use strict";
  const BM = window.BM; if (!BM) return;
  const $ = (s, r = document) => r.querySelector(s);
  const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  const inApp = /Line\/|FBAN|FBAV|Instagram|MicroMessenger/i.test(navigator.userAgent);
  const MAX_WORD = 15, MAX_FREE = 120; // วินาที

  const S = { text: "", th: "", free: false, rec: null, stream: null, chunks: [], blob: null, url: "", ext: "webm", timer: 0, t0: 0, self: null };

  const PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const STOP = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>';
  const MIC = BM.MIC.replace("<svg", '<svg width="18" height="18"');

  const dlg = document.createElement("dialog");
  dlg.id = "rakam"; dlg.className = "rk"; dlg.setAttribute("aria-labelledby", "rk-title");
  dlg.innerHTML = `<div class="rk-in">
    <div class="rk-head"><h2 id="rk-title">Rakam &amp; Banding <span>อัดเสียงแล้วฟังเทียบ</span></h2>
      <button type="button" class="rk-x" data-rk="close" aria-label="ปิด">×</button></div>
    <p class="rk-ms" lang="ms"></p><p class="rk-th"></p>
    <ol class="rk-steps">
      <li class="rk-model-only"><button type="button" class="btn btn-line" data-rk="model">${PLAY} ฟังต้นแบบ</button></li>
      <li><button type="button" class="btn btn-solid rk-recbtn" data-rk="rec">${MIC} <span>อัดเสียง</span></button> <span class="rk-time" aria-live="off"></span></li>
      <li><button type="button" class="btn btn-line" data-rk="self" disabled>${PLAY} ฟังเสียงของฉัน</button></li>
      <li class="rk-model-only"><button type="button" class="btn btn-line" data-rk="both" disabled>${PLAY} ฟังเทียบ</button></li>
    </ol>
    <div class="rk-waves">
      <div class="rk-wave rk-model-only"><span class="rk-lbl">ต้นแบบ</span><canvas width="560" height="56" data-w="model"></canvas><span class="rk-dur" data-d="model"></span></div>
      <div class="rk-wave"><span class="rk-lbl">ของฉัน</span><canvas width="560" height="56" data-w="self"></canvas><span class="rk-dur" data-d="self"></span></div>
    </div>
    <p class="rk-status" role="status" aria-live="polite"></p>
    <details class="rk-tips rk-model-only"><summary>ฟังเทียบแล้วสังเกตอะไร</summary>
      <ul><li>เสียง e สองแบบ: เอ (<i lang="ms">sate</i>) กับ เออ (<i lang="ms">emak</i>)</li>
      <li>เสียงท้ายคำ r, l, h ต้องได้ยินชัด เช่น <i lang="ms">pasar, jual, rumah</i></li>
      <li>ความยาวเสียงพูดใกล้เคียงต้นแบบหรือไม่ ถ้ายาวกว่ามาก แปลว่ายังหยุดคิดระหว่างคำ</li>
      <li>ประโยคคำถามมีเสียงสูงขึ้นท้ายประโยค</li></ul></details>
    <div class="rk-foot"><a class="btn btn-line rk-dl" hidden>ดาวน์โหลดเสียงของฉัน</a>
      <small>เสียงที่อัดอยู่ในเครื่องนี้เท่านั้น ไม่ถูกส่งไปที่ใด ปิดหน้าต่างนี้แล้วจะถูกลบ</small></div></div>`;
  document.body.appendChild(dlg);

  const msg = t => { $(".rk-status", dlg).textContent = t; };
  const btn = k => $(`[data-rk="${k}"]`, dlg);
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  /* ---------- waveform ---------- */
  let AC = null;
  const ctx = () => AC || (AC = new (window.AudioContext || window.webkitAudioContext)());
  const decode = ab => new Promise((res, rej) => ctx().decodeAudioData(ab, res, rej));
  function speechSpan(data) { // ช่วงที่มีเสียงพูดจริง (ตัดความเงียบหัวท้าย)
    let peak = 0; for (let i = 0; i < data.length; i++) peak = Math.max(peak, Math.abs(data[i]));
    const th = peak * 0.08; let a = 0, b = data.length - 1;
    while (a < b && Math.abs(data[a]) < th) a++;
    while (b > a && Math.abs(data[b]) < th) b--;
    return [a, b, peak];
  }
  function draw(kind, buf) {
    const c = $(`[data-w="${kind}"]`, dlg), g = c.getContext("2d"), W = c.width, H = c.height;
    g.clearRect(0, 0, W, H);
    const dur = $(`[data-d="${kind}"]`, dlg);
    if (!buf) { dur.textContent = ""; return; }
    const d = buf.getChannelData(0), [a, b, peak] = speechSpan(d);
    const col = getComputedStyle(document.documentElement).getPropertyValue(kind === "self" ? "--aksen" : "--biru").trim() || "#1D4E89";
    g.fillStyle = col; const step = Math.max(1, Math.floor(d.length / W));
    for (let x = 0; x < W; x++) {
      let m = 0; for (let i = x * step, e = Math.min(d.length, i + step); i < e; i++) m = Math.max(m, Math.abs(d[i]));
      const h = Math.max(1, (m / (peak || 1)) * (H - 4));
      g.globalAlpha = (x * step >= a && x * step <= b) ? 1 : 0.35;
      g.fillRect(x, (H - h) / 2, 1, h);
    }
    g.globalAlpha = 1;
    dur.textContent = `${((b - a) / buf.sampleRate).toFixed(1)} วิ`;
  }
  async function drawModel() {
    const url = BM.audioUrl(S.text);
    draw("model", null);
    if (!url) { $('[data-d="model"]', dlg).textContent = "เสียงสังเคราะห์"; return; }
    try { const r = await fetch(url); if (!r.ok) throw 0; draw("model", await decode(await r.arrayBuffer())); }
    catch (e) { $('[data-d="model"]', dlg).textContent = "เสียงสังเคราะห์"; }
  }

  /* ---------- playback ---------- */
  function playSelf(onend) {
    if (!S.url) return;
    BM.stopAudio(); if (S.self) S.self.pause();
    const a = new Audio(S.url); S.self = a;
    a.onended = () => { S.self = null; if (onend) onend(); };
    a.play().catch(() => msg("เล่นเสียงไม่ได้ ลองกดอีกครั้ง"));
  }
  function stopPlay() { BM.stopAudio(); if (S.self) { S.self.pause(); S.self = null; } }

  /* ---------- recording ---------- */
  function pickMime() {
    const list = ["audio/webm;codecs=opus", "audio/mp4", "audio/webm", "audio/ogg;codecs=opus"];
    return (MediaRecorder.isTypeSupported && list.find(m => MediaRecorder.isTypeSupported(m))) || "";
  }
  async function startRec() {
    if (!canRecord) { msg(inApp ? "เบราว์เซอร์ในแอปนี้อัดเสียงไม่ได้ ให้กดเมนู ⋯ แล้วเลือก “เปิดในเบราว์เซอร์” (Chrome หรือ Safari)" : "เบราว์เซอร์นี้อัดเสียงไม่ได้ ลองใช้ Chrome หรือ Safari รุ่นใหม่"); return; }
    stopPlay();
    try { S.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }); }
    catch (e) {
      msg(e && e.name === "NotAllowedError" ? "ยังไม่ได้อนุญาตให้ใช้ไมโครโฟน กดไอคอนแม่กุญแจข้างช่องที่อยู่เว็บ แล้วเลือก “อนุญาต” ไมโครโฟน" : inApp ? "เบราว์เซอร์ในแอปนี้อัดเสียงไม่ได้ ให้เปิดเว็บใน Chrome หรือ Safari" : "เปิดไมโครโฟนไม่ได้ ตรวจว่ามีไมโครโฟนและไม่มีแอปอื่นใช้อยู่");
      return;
    }
    const mime = pickMime();
    S.rec = new MediaRecorder(S.stream, mime ? { mimeType: mime } : undefined);
    S.ext = /mp4/.test(S.rec.mimeType || mime) ? "m4a" : /ogg/.test(S.rec.mimeType || mime) ? "ogg" : "webm";
    S.chunks = [];
    S.rec.ondataavailable = e => { if (e.data && e.data.size) S.chunks.push(e.data); };
    S.rec.onstop = finishRec;
    S.rec.start();
    S.t0 = Date.now();
    const max = S.free ? MAX_FREE : MAX_WORD, tm = $(".rk-time", dlg);
    tm.textContent = "0:00";
    S.timer = setInterval(() => { const s = (Date.now() - S.t0) / 1000; tm.textContent = `${fmt(s)} / ${fmt(max)}`; if (s >= max) stopRec(); }, 250);
    const rb = btn("rec"); rb.classList.add("recording"); rb.innerHTML = `${STOP} <span>หยุดอัด</span>`;
    msg(S.free ? "กำลังอัด… พูดคำตอบของคุณ แล้วกด หยุดอัด" : "กำลังอัด… อ่านข้อความด้านบน แล้วกด หยุดอัด");
  }
  function stopRec() {
    clearInterval(S.timer);
    if (S.rec && S.rec.state !== "inactive") S.rec.stop();
    if (S.stream) { S.stream.getTracks().forEach(t => t.stop()); S.stream = null; }
    const rb = btn("rec"); rb.classList.remove("recording"); rb.innerHTML = `${MIC} <span>อัดใหม่</span>`;
  }
  async function finishRec() {
    if (!S.chunks.length) { msg("ไม่ได้ยินเสียง ลองอัดใหม่อีกครั้ง"); return; }
    S.blob = new Blob(S.chunks, { type: S.rec.mimeType || "audio/webm" });
    if (S.url) URL.revokeObjectURL(S.url);
    S.url = URL.createObjectURL(S.blob);
    btn("self").disabled = false; btn("both").disabled = false;
    const dl = $(".rk-dl", dlg), slug = S.free ? "jawapan-lisan" : S.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "rakaman";
    dl.href = S.url; dl.download = `${slug}.${S.ext}`; dl.hidden = false;
    try { draw("self", await decode(await S.blob.arrayBuffer())); } catch (e) { draw("self", null); }
    msg(S.free ? "อัดเสร็จแล้ว กดฟังเสียงของฉัน หรือดาวน์โหลดไปส่งใน Padlet" : "อัดเสร็จแล้ว กด “ฟังเทียบ” เพื่อฟังต้นแบบต่อด้วยเสียงของคุณ");
  }

  /* ---------- open / close ---------- */
  function reset() {
    stopPlay(); if (S.rec && S.rec.state !== "inactive") stopRec();
    clearInterval(S.timer);
    if (S.url) URL.revokeObjectURL(S.url);
    Object.assign(S, { rec: null, chunks: [], blob: null, url: "", self: null });
    btn("self").disabled = true; btn("both").disabled = true;
    btn("rec").classList.remove("recording"); btn("rec").innerHTML = `${MIC} <span>อัดเสียง</span>`;
    $(".rk-time", dlg).textContent = ""; $(".rk-dl", dlg).hidden = true; msg("");
    draw("self", null); draw("model", null);
  }
  function open(text, th, free) {
    reset();
    Object.assign(S, { text, th, free });
    dlg.classList.toggle("free", free);
    $(".rk-ms", dlg).textContent = free ? "" : text;
    $(".rk-th", dlg).textContent = th;
    $(".rk-ms", dlg).hidden = free;
    if (!free) drawModel();
    if (!canRecord) msg(inApp ? "เบราว์เซอร์ในแอปนี้อัดเสียงไม่ได้ ให้กดเมนู ⋯ แล้วเลือก “เปิดในเบราว์เซอร์” (Chrome หรือ Safari)" : "เบราว์เซอร์นี้อัดเสียงไม่ได้ ลองใช้ Chrome หรือ Safari รุ่นใหม่");
    else msg(free ? "กด อัดเสียง แล้วพูดคำตอบได้ไม่เกิน 2 นาที" : "ฟังต้นแบบก่อน แล้วกด อัดเสียง และอ่านตาม");
    if (dlg.showModal) { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute("open", "");
    setTimeout(() => (free ? btn("rec") : btn("model")).focus(), 30);
  }
  function close() { reset(); if (dlg.open) { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); } }
  dlg.addEventListener("close", reset);
  dlg.addEventListener("click", e => {
    if (e.target === dlg) return close(); // คลิกพื้นหลัง
    const b = e.target.closest("[data-rk]"); if (!b || b.disabled) return;
    const k = b.dataset.rk;
    if (k === "close") close();
    else if (k === "model") { stopPlay(); BM.speak(S.text); }
    else if (k === "rec") { if (S.rec && S.rec.state === "recording") stopRec(); else startRec(); }
    else if (k === "self") playSelf();
    else if (k === "both") { stopPlay(); msg("ต้นแบบ…"); BM.speak(S.text, () => setTimeout(() => { msg("เสียงของฉัน…"); playSelf(() => msg("ฟังซ้ำ หรืออัดใหม่ได้")); }, 350)); }
  });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-rec]"); if (!b || dlg.contains(b)) return;
    open(b.dataset.rec, b.dataset.th || "", b.dataset.free === "1");
  });

  window.Rakam = { open, close };
})();
