/* 0001154 ภาษามลายูในชีวิตประจำวัน — แอปหน้าเดียว (hash routing) ไม่ต้อง build */
(function () {
  "use strict";
  const C = window.COURSE;
  const L = window.LESSONS.slice().sort((a, b) => a.no - b.no);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $("#app");
  const hasThai = s => /[฀-๿]/.test(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = s => String(s).replace(/<[^>]+>/g, "");
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------- storage (per viewer, optional) ---------- */
  const KEY = "bm0001154";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* ignore */ } }
  const isDone = n => (load().done || []).includes(n);
  function setDone(n, v) { const s = load(); const d = new Set(s.done || []); v ? d.add(n) : d.delete(n); s.done = [...d]; save(s); }

  /* ---------- toast ---------- */
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600); }

  /* ---------- speech ---------- */
  let voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => /^ms([-_]|$)/i.test(v.lang)) || vs.find(v => /^id([-_]|$)/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, onend) {
    if (!("speechSynthesis" in window)) { toast("เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(strip(text));
    u.lang = voice ? voice.lang : "ms-MY"; if (voice) u.voice = voice; u.rate = 0.88;
    if (onend) { u.onend = onend; u.onerror = onend; }
    speechSynthesis.speak(u);
    if (!voice && !speak.warned) { speak.warned = true; toast("ไม่พบเสียงภาษามลายูในเครื่อง ระบบจะใช้เสียงที่ใกล้เคียงที่สุด"); }
  }
  const SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  const sayBtn = (text, label) => `<button class="say" type="button" data-say="${esc(strip(text))}" aria-label="ฟังเสียง ${esc(label || strip(text))}">${SPK}</button>`;
  document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) speak(b.dataset.say); });

  /* ---------- Malay language helpers ---------- */
  const U = ["kosong", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan"];
  function under1000(n) {
    const out = []; const h = Math.floor(n / 100), r = n % 100;
    if (h) out.push(h === 1 ? "seratus" : U[h] + " ratus");
    if (r) {
      if (r < 10) out.push(U[r]);
      else if (r === 10) out.push("sepuluh");
      else if (r === 11) out.push("sebelas");
      else if (r < 20) out.push(U[r - 10] + " belas");
      else out.push(U[Math.floor(r / 10)] + " puluh" + (r % 10 ? " " + U[r % 10] : ""));
    }
    return out.join(" ");
  }
  function numMs(n) {
    n = Math.floor(Math.abs(n)); if (n === 0) return "kosong";
    const parts = []; const m = Math.floor(n / 1e6), k = Math.floor((n % 1e6) / 1000), r = n % 1000;
    if (m) parts.push(m === 1 ? "sejuta" : under1000(m) + " juta");
    if (k) parts.push(k === 1 ? "seribu" : under1000(k) + " ribu");
    if (r) parts.push(under1000(r));
    return parts.join(" ");
  }
  function period(h) { if (h === 0 || h === 24) return "tengah malam"; if (h < 12) return "pagi"; if (h < 14) return "tengah hari"; if (h < 19) return "petang"; return "malam"; }
  function greetFor(h) { if (h >= 19 || h < 1) return "Selamat malam"; if (h < 12) return "Selamat pagi"; if (h < 14) return "Selamat tengah hari"; return "Selamat petang"; }
  function timeVariants(h, m) {
    const hh = h % 12 === 0 ? 12 : h % 12, base = "pukul " + numMs(hh), p = period(h);
    const mins = m === 0 ? [""] : m === 15 ? ["sesuku", "lima belas minit"] : m === 30 ? ["setengah", "tiga puluh minit"] : m === 45 ? ["tiga suku", "empat puluh lima minit"] : [numMs(m) + " minit", numMs(m)];
    return mins.map(x => (base + (x ? " " + x : "") + " " + p).trim());
  }
  const HARI = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
  const BULAN = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];
  const BULAN_TH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const norm = s => strip(s).toLowerCase().replace(/[.,!?;:“”"']/g, " ").replace(/\s+/g, " ").trim();

  /* ---------- shared bits ---------- */
  const lessonLink = n => `#/bab/${n}`;
  const weekOf = n => (C.schedule.find(s => s.bab === n) || {}).week;
  function setNav(route) { $$(".mainnav a").forEach(a => { if (a.dataset.route === route) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); }); $(".mainnav").classList.remove("open"); $(".menu-btn").setAttribute("aria-expanded", "false"); }

  /* ================= HOME ================= */
  function home() {
    setNav("home"); document.title = `${C.code} ${C.th} | มหาวิทยาลัยทักษิณ`;
    const next = L.find(l => !isDone(l.no)) || L[0];
    const doneCount = L.filter(l => isDone(l.no)).length;
    app.innerHTML = `
      <section class="hero"><div class="wrap">
        <div>
          <p class="hero-greet" id="greet" lang="ms"></p>
          <p class="hero-read" id="greet-read"></p>
          <p class="hero-clock" id="greet-clock"></p>
        </div>
        <div class="hero-side">
          <h1>${C.code} ${C.th}<br><span class="ms" lang="ms" style="font-weight:500;opacity:.8">${C.en}</span></h1>
          <p>บทเรียนออนไลน์ประกอบการเรียนในชั้น ${C.term} ฟังเสียง ทบทวนคำศัพท์ และทำแบบฝึกหัดได้ทุกที่</p>
          <div class="btn-row">
            <a class="btn btn-hero" href="${lessonLink(next.no)}">${doneCount ? "เรียนต่อ บทที่ " + next.no : "เริ่มบทที่ 1"}</a>
            <a class="btn btn-ghost" href="#/kursus">ดูข้อมูลรายวิชา</a>
          </div>
        </div>
      </div></section>
      <div class="rebung" role="presentation"></div>
      <section class="section"><div class="wrap">
        <div class="section-head"><h2>แผนการเรียน 15 สัปดาห์</h2><p>${doneCount ? `ทำเครื่องหมายเรียนแล้ว ${doneCount} จาก ${L.length} บท` : `${L.length} บทเรียน · 3 ชั่วโมงต่อสัปดาห์`}</p></div>
        <ol class="jadual">${C.schedule.map(s => {
          const l = s.bab && L.find(x => x.no === s.bab);
          if (!l) return `<li><div class="jrow plain"><div class="jweek"><b>สัปดาห์ ${s.week}</b></div><div class="jtitle"><span class="th">${s.th}</span></div><div></div></div></li>`;
          const d = isDone(l.no);
          return `<li><a class="jrow" href="${lessonLink(l.no)}"><div class="jweek"><b>สัปดาห์ ${s.week}</b>บทที่ ${l.no}</div>
            <div class="jtitle"><span class="ms" lang="ms">${l.ms}</span><span class="th">${l.th}</span></div>
            <div class="jstat ${d ? "done" : ""}">${d ? "✓ เรียนแล้ว" : ""}</div></a></li>`;
        }).join("")}</ol>
      </div></section>
      <section class="section" style="padding-top:0"><div class="wrap tri">
        <div><h3>ฟังเสียงทุกประโยค</h3><p>กดปุ่มลำโพงข้างบทสนทนาและคำศัพท์เพื่อฟังการออกเสียง ปิดคำแปลเพื่อทดสอบการฟังของตนเองได้</p></div>
        <div><h3>คลังคำศัพท์</h3><p>รวมคำศัพท์จากทุกบท ค้นหาได้ทั้งภาษามลายูและภาษาไทย</p><a href="#/kamus">เปิดคลังคำศัพท์</a></div>
        <div><h3>เครื่องมือฝึก</h3><p>แปลงตัวเลข เวลา และวันที่เป็นภาษามลายู ใช้ทบทวนบทที่ 6–8</p><a href="#/alat">เปิดเครื่องมือ</a></div>
      </div></section>`;
    const tick = () => {
      const g = $("#greet"); if (!g) return;
      const now = new Date(), h = now.getHours(), m = now.getMinutes();
      const greet = greetFor(h);
      g.innerHTML = esc(greet) + '<span class="dot">.</span>';
      $("#greet-read").innerHTML = `ตอนนี้ <b>${String(h).padStart(2, "0")}.${String(m).padStart(2, "0")} น.</b> ชาวมลายูทักทายกันว่า <b lang="ms">${greet}</b> ${sayBtn(greet).replace('class="say"', 'class="say hero-say"')}`;
      $("#greet-clock").innerHTML = `<span lang="ms" class="ms">${timeVariants(h, m)[0]}</span> · เรียนวิธีบอกเวลาได้ใน <a class="on-band" href="${lessonLink(8)}">บทที่ 8</a>`;
    };
    tick(); clearInterval(home.iv); home.iv = setInterval(tick, 30000);
  }

  /* ================= LESSON ================= */
  function table(t) {
    const msCols = t.ms || [];
    const wide = t.head.length + (t.say !== undefined ? 1 : 0) >= 4;
    return `<div class="tbl-wrap"><table${wide ? ' class="wide"' : ""}><thead><tr>${t.head.map(h => `<th scope="col">${h}</th>`).join("")}${t.say !== undefined ? '<th><span class="sr-only">ฟัง</span></th>' : ""}</tr></thead><tbody>${
      t.rows.map(r => `<tr>${r.map((c, i) => `<td${msCols.includes(i) ? ' class="ms" lang="ms"' : ""}>${c}</td>`).join("")}${t.say !== undefined ? `<td class="say-cell">${sayBtn(r[t.say])}</td>` : ""}</tr>`).join("")}</tbody></table></div>`;
  }
  const exList = ex => `<div class="tbl-wrap"><table><tbody>${ex.map(([m, t]) => `<tr><td class="ms" lang="ms">${m}</td><td>${t}</td><td class="say-cell">${sayBtn(m)}</td></tr>`).join("")}</tbody></table></div>`;

  function renderExercise(ex, idx) {
    const id = `ex${idx}`;
    let body = "";
    if (ex.type === "fill" || ex.type === "time") {
      const items = ex.type === "time" ? ex.items.map(t => { const [h, m] = t.split(":").map(Number); return { q: `${t.replace(":", ".")} น. อ่านว่า`, a: timeVariants(h === 24 ? 24 : h, m).concat(timeVariants(h === 24 ? 24 : h, m).map(v => v.replace(/ (pagi|tengah hari|petang|malam|tengah malam)$/, ""))) }; }) : ex.items;
      body = items.map((it, i) => `<div class="q" data-ans='${esc(JSON.stringify(it.a))}'>
        <p class="q-text${hasThai(it.q) ? "" : " ms"}" ${hasThai(it.q) ? "" : 'lang="ms"'}>${i + 1}. ${it.q}</p>
        <div class="q-row"><input type="text" lang="ms" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="คำตอบข้อ ${i + 1}"></div>
        <p class="fb" aria-live="polite"></p></div>`).join("") + `<div class="ex-foot"><button class="btn btn-solid" type="button" data-check="${id}">ตรวจคำตอบ</button><button class="btn btn-line" type="button" data-reveal="${id}">ดูเฉลย</button><span class="score" aria-live="polite"></span></div>`;
    } else if (ex.type === "mc") {
      body = ex.items.map((it, i) => `<div class="q" data-a="${it.a}"><p class="q-text">${i + 1}. ${it.q}</p>
        <div class="opts">${it.o.map((o, j) => `<button type="button" class="opt${it.ms ? " ms-opt" : ""}" data-j="${j}"${it.ms ? ' lang="ms"' : ""}>${o}</button>`).join("")}</div><p class="fb" aria-live="polite"></p></div>`).join("") + `<div class="ex-foot"><span class="score" aria-live="polite"></span><button class="btn btn-line" type="button" data-reset="${id}">ทำใหม่</button></div>`;
    } else if (ex.type === "match") {
      const rights = shuffle(ex.pairs.map(p => p[1]));
      body = ex.pairs.map(([l, r], i) => `<div class="q" data-ans='${esc(JSON.stringify([r]))}'><div class="q-row"><span class="q-text ms" lang="ms" style="flex:1 1 200px;margin:0;font-size:18px">${l}</span>
        <select aria-label="ความหมายของ ${esc(l)}"><option value="">เลือกความหมาย</option>${rights.map(x => `<option>${x}</option>`).join("")}</select></div><p class="fb" aria-live="polite"></p></div>`).join("") + `<div class="ex-foot"><button class="btn btn-solid" type="button" data-check="${id}">ตรวจคำตอบ</button><span class="score" aria-live="polite"></span></div>`;
    } else if (ex.type === "speak") {
      body = `<div class="speak-task prose"><p style="margin:0">${ex.text}</p></div>`;
    }
    return `<div class="ex" id="${id}" data-type="${ex.type}"><h3>${ex.title}</h3>${ex.lead ? `<p class="lead">${ex.lead}</p>` : ""}${body}</div>`;
  }

  function bindExercises(root) {
    root.addEventListener("click", e => {
      const chk = e.target.closest("[data-check]"), rev = e.target.closest("[data-reveal]"), opt = e.target.closest(".opt"), rst = e.target.closest("[data-reset]");
      if (chk || rev) {
        const ex = $("#" + (chk ? chk.dataset.check : rev.dataset.reveal)); let ok = 0; const qs = $$(".q", ex);
        qs.forEach(q => {
          const ans = JSON.parse(q.dataset.ans), field = $("input,select", q), fb = $(".fb", q);
          if (rev) { if (field.tagName === "INPUT") field.value = ans[0]; field.className = ""; fb.className = "fb"; fb.textContent = ""; return; }
          const right = field.value.trim() !== "" && ans.some(a => norm(a) === norm(field.value));
          if (right) ok++;
          const empty = field.value.trim() === "";
          field.classList.toggle("right", right); field.classList.toggle("wrong", !right && !empty);
          fb.className = "fb " + (right ? "right" : empty ? "" : "wrong");
          fb.innerHTML = right ? "ถูกต้อง" : field.value.trim() === "" ? "ยังไม่ได้ตอบ" : `ยังไม่ถูก คำตอบคือ <span class="ms" lang="ms">${esc(ans[0])}</span>`;
        });
        $(".score", ex).textContent = rev ? "" : `ได้ ${ok} จาก ${qs.length} ข้อ`;
      }
      if (opt && !opt.disabled) {
        const q = opt.closest(".q"), a = +q.dataset.a, j = +opt.dataset.j, ex = q.closest(".ex");
        $$(".opt", q).forEach((b, k) => { b.disabled = true; if (k === a) b.classList.add("right"); });
        if (j !== a) opt.classList.add("wrong");
        q.dataset.res = j === a ? "1" : "0";
        const fb = $(".fb", q); fb.className = "fb " + (j === a ? "right" : "wrong"); fb.textContent = j === a ? "ถูกต้อง" : "ยังไม่ถูก ดูคำตอบที่ถูกซึ่งมีกรอบสีเขียว";
        const all = $$(".q", ex), done = all.filter(x => x.dataset.res !== undefined);
        $(".score", ex).textContent = `ได้ ${done.filter(x => x.dataset.res === "1").length} จาก ${all.length} ข้อ` + (done.length < all.length ? ` (ตอบแล้ว ${done.length} ข้อ)` : "");
      }
      if (rst) {
        const ex = $("#" + rst.dataset.reset);
        $$(".q", ex).forEach(q => { delete q.dataset.res; $$(".opt", q).forEach(b => { b.disabled = false; b.classList.remove("right", "wrong"); }); const fb = $(".fb", q); fb.className = "fb"; fb.textContent = ""; });
        $(".score", ex).textContent = "";
      }
    });
    root.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches(".q input")) { const b = $("[data-check]", e.target.closest(".ex")); b && b.click(); } });
  }

  function toolHTML(kind) {
    if (kind === "number") return `<div class="tool" data-tool="number"><h3>แปลงตัวเลขเป็นภาษามลายู</h3><p class="lead">พิมพ์ตัวเลข 0 ถึง 999,999,999</p>
      <div class="tool-row"><input type="number" inputmode="numeric" min="0" max="999999999" value="2569" aria-label="ตัวเลข"><span class="tsay"></span></div><p class="tool-out" lang="ms"></p><p class="tool-alt"></p></div>`;
    if (kind === "time") return `<div class="tool" data-tool="time"><h3>บอกเวลาเป็นภาษามลายู</h3><p class="lead">เลือกเวลา แล้วดูวิธีอ่านทั้งสองแบบ</p>
      <div class="tool-row"><input type="time" value="${new Date().toTimeString().slice(0, 5)}" aria-label="เวลา"><span class="tsay"></span></div><p class="tool-out" lang="ms"></p><p class="tool-alt" lang="ms"></p></div>`;
    if (kind === "date") return `<div class="tool" data-tool="date"><h3>เขียนและอ่านวันที่</h3><p class="lead">เลือกวันที่ แล้วดูรูปแบบการเขียนและการอ่านภาษามลายู</p>
      <div class="tool-row"><input type="date" value="${new Date().toISOString().slice(0, 10)}" aria-label="วันที่"><span class="tsay"></span></div><p class="tool-out" lang="ms"></p><p class="tool-alt" lang="ms"></p></div>`;
    return "";
  }
  function bindTools(root) {
    $$(".tool", root).forEach(t => {
      const inp = $("input", t), out = $(".tool-out", t), alt = $(".tool-alt", t), ts = $(".tsay", t);
      const run = () => {
        let main = "", sub = "", read = "";
        if (t.dataset.tool === "number") {
          const v = parseInt(inp.value, 10);
          if (isNaN(v) || v < 0 || v > 999999999) { main = "พิมพ์ตัวเลขระหว่าง 0 ถึง 999,999,999"; } else { main = read = numMs(v); sub = v.toLocaleString("th-TH"); }
        } else if (t.dataset.tool === "time") {
          if (!inp.value) { main = "เลือกเวลา"; } else { const [h, m] = inp.value.split(":").map(Number); const vs = timeVariants(h, m); main = read = vs[0]; sub = vs[1] && vs[1] !== vs[0] ? "หรือ " + vs[1] : ""; }
        } else if (t.dataset.tool === "date") {
          if (!inp.value) { main = "เลือกวันที่"; } else {
            const [y, mo, d] = inp.value.split("-").map(Number), dt = new Date(y, mo - 1, d);
            main = `${HARI[dt.getDay()]}, ${d} hb ${BULAN[mo - 1]} ${y}`;
            read = sub = `${HARI[dt.getDay()]} ${numMs(d)} hari bulan ${BULAN[mo - 1]} tahun ${numMs(y)}`;
          }
        }
        out.textContent = main; alt.textContent = sub; ts.innerHTML = read ? sayBtn(read) : "";
      };
      inp.addEventListener("input", run); run();
    });
  }

  function lesson(n) {
    const l = L.find(x => x.no === n); if (!l) return notFound();
    setNav("home"); document.title = `บทที่ ${l.no} ${l.ms} | ${C.code}`;
    const i = L.indexOf(l), prev = L[i - 1], next = L[i + 1];
    const sec = [];
    sec.push(["goals", "จุดประสงค์การเรียนรู้", "", `<ul class="goals">${l.goals.map(g => `<li><span>${g}</span></li>`).join("")}</ul>`]);
    if (l.dialog) sec.push(["perbualan", "บทสนทนา", "Perbualan", `
      <p class="scene">${l.scene || ""}</p>
      <div class="dlg-tools"><button type="button" class="chip-btn" data-playall>▶ ฟังทั้งบท</button><button type="button" class="chip-btn" aria-pressed="false" data-hideth>ซ่อนคำแปล</button></div>
      <ol class="dialog">${l.dialog.map(([w, m, t]) => `<li><span class="who">${w}</span><span><span class="ms" lang="ms">${m}</span><span class="th">${t}</span></span>${sayBtn(m)}</li>`).join("")}</ol>`]);
    if (l.vocab) sec.push(["kosakata", "คำศัพท์", "Kosa Kata", `
      <div class="dlg-tools"><button type="button" class="chip-btn" data-fc aria-pressed="false">ฝึกด้วยบัตรคำ</button></div>
      <div class="fc-wrap" hidden></div>
      <div class="vlist">${l.vocab.map(g => `${l.vocab.length > 1 ? `<h3 class="vgroup">${g.g}</h3>` : ""}<div class="tbl-wrap"><table class="vt"><thead><tr><th>ภาษามลายู</th><th>ความหมาย</th><th><span class="sr-only">ฟัง</span></th></tr></thead><tbody>${
        g.items.map(([m, t, nt]) => `<tr><td class="ms" lang="ms">${m}</td><td><span class="th">${t}</span>${nt ? `<br><small style="color:var(--muted)">${nt}</small>` : ""}</td><td class="say-cell">${sayBtn(m)}</td></tr>`).join("")}</tbody></table></div>`).join("")}</div>`]);
    if (l.grammar) sec.push([l.dialog ? "tatabahasa" : "isi", l.dialog ? "หลักภาษา" : "เนื้อหา", l.dialog ? "Tatabahasa" : "", `<div class="prose">${
      l.grammar.map(g => `${g.h ? `<h3>${g.h}</h3>` : ""}${g.p || ""}${g.t ? table(g.t) : ""}${g.ex ? exList(g.ex) : ""}`).join("")}</div>`]);
    if (l.tool) sec.push(["alat", "เครื่องมือฝึก", "", toolHTML(l.tool)]);
    if (l.idioms) sec.push(["simpulan", "สำนวนภาษา", "Simpulan Bahasa", `<div class="idioms">${l.idioms.map(([m, t, e, et]) => `<div class="idiom"><span class="ms" lang="ms">${m}</span> ${sayBtn(m)}<p class="mean">${t}</p><p class="ex"><i lang="ms">${e}</i><br>${et}</p></div>`).join("")}</div>`]);
    if (l.culture) sec.push(["budaya", "วัฒนธรรมและมารยาท", "Budaya", `<div class="prose">${l.culture}</div>`]);
    if (l.exercises) sec.push(["latihan", "แบบฝึกหัด", "Latihan", l.exercises.map((e, k) => renderExercise(e, k)).join("")]);

    app.innerHTML = `
      <header class="lesson-head"><div class="wrap">
        <p class="crumb"><a href="#/">แผนการเรียน</a> / สัปดาห์ที่ ${weekOf(l.no)}</p>
        <p class="lesson-no">บทที่ ${l.no} · <span lang="ms">Pelajaran ${l.no}</span></p>
        <h1 class="lesson-title" lang="ms">${l.ms}</h1>
        <p class="lesson-th">${l.th}</p>
        <ul class="chips">${l.clos.map(c => `<li class="chip" title="${esc((C.clos.find(x => x.id === c) || {}).text || "")}">${c}</li>`).join("")}</ul>
      </div></header>
      <div class="wrap lesson-body">
        <nav class="toc" aria-label="หัวข้อในบท"><p>ในบทนี้</p><ol>${sec.map(s => `<li><a href="#/bab/${l.no}/${s[0]}" data-sec="${s[0]}">${s[1]}</a></li>`).join("")}</ol></nav>
        <div>
          ${sec.map(s => `<section class="block" id="s-${s[0]}"><h2>${s[1]}${s[2] ? ` <span class="ms" lang="ms">${s[2]}</span>` : ""}</h2>${s[3]}</section>`).join("")}
          <div class="lesson-foot">
            <div class="done-box"><button type="button" class="btn ${isDone(l.no) ? "btn-line" : "btn-solid"}" data-done>${isDone(l.no) ? "✓ เรียนบทนี้แล้ว (กดเพื่อยกเลิก)" : "ทำเครื่องหมายว่าเรียนแล้ว"}</button>
            <span style="color:var(--muted);font-size:15px">บันทึกไว้ในเบราว์เซอร์นี้เท่านั้น</span></div>
            <nav class="pn" aria-label="บทก่อนหน้าและถัดไป">
              ${prev ? `<a href="${lessonLink(prev.no)}"><small>บทก่อนหน้า · บทที่ ${prev.no}</small><span class="ms" lang="ms">${prev.ms}</span></a>` : ""}
              ${next ? `<a class="next" href="${lessonLink(next.no)}"><small>บทถัดไป · บทที่ ${next.no}</small><span class="ms" lang="ms">${next.ms}</span></a>` : ""}
            </nav>
          </div>
        </div>
      </div>`;

    const body = $(".lesson-body");
    bindExercises(body); bindTools(body);
    // TOC links scroll within page
    $$(".toc a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const t = $("#s-" + a.dataset.sec); t.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); history.replaceState(null, "", a.getAttribute("href")); }));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { $$(".toc a").forEach(a => a.classList.toggle("on", "s-" + a.dataset.sec === en.target.id)); } }), { rootMargin: "-30% 0px -60% 0px" });
      $$(".block").forEach(b => io.observe(b));
    }
    const ht = $("[data-hideth]"); if (ht) ht.addEventListener("click", () => { const on = ht.getAttribute("aria-pressed") !== "true"; ht.setAttribute("aria-pressed", on); ht.textContent = on ? "แสดงคำแปล" : "ซ่อนคำแปล"; body.classList.toggle("hide-th", on); });
    const pa = $("[data-playall]"); if (pa) pa.addEventListener("click", () => {
      const lines = $$(".dialog li"); let k = 0;
      const step = () => { lines.forEach(x => x.classList.remove("speaking")); if (k >= lines.length) return; const li = lines[k++]; li.classList.add("speaking"); speak($(".ms", li).textContent, step); };
      step();
    });
    const db = $("[data-done]"); db.addEventListener("click", () => { const v = !isDone(l.no); setDone(l.no, v); toast(v ? `บันทึกว่าเรียนบทที่ ${l.no} แล้ว` : "ยกเลิกเครื่องหมายแล้ว"); lesson(n); });
    const fcb = $("[data-fc]"); if (fcb) fcb.addEventListener("click", () => {
      const on = fcb.getAttribute("aria-pressed") !== "true"; fcb.setAttribute("aria-pressed", on);
      const w = $(".fc-wrap"); w.hidden = !on; $(".vlist").hidden = on; fcb.textContent = on ? "ดูตารางคำศัพท์" : "ฝึกด้วยบัตรคำ";
      if (on) flashcards(w, l.vocab.flatMap(g => g.items));
    });
    const sub = (location.hash.split("/")[3] || ""); if (sub && $("#s-" + sub)) setTimeout(() => $("#s-" + sub).scrollIntoView(), 30); else window.scrollTo(0, 0);
  }

  function flashcards(w, items) {
    let deck = items.slice(), k = 0;
    const draw = () => {
      const [m, t] = deck[k];
      w.innerHTML = `<div class="fc" tabindex="0" role="button" aria-label="บัตรคำ กดเพื่อพลิก"><div class="fc-inner"><div class="fc-face fc-front" lang="ms">${m}</div><div class="fc-face fc-back">${t}</div></div></div>
        <div class="fc-nav"><button class="chip-btn" type="button" data-p>ก่อนหน้า</button><button class="chip-btn" type="button" data-n>ถัดไป</button>${sayBtn(m)}<button class="chip-btn" type="button" data-s>สลับลำดับ</button><span class="fc-count">${k + 1} / ${deck.length}</span></div>`;
      const fc = $(".fc", w); const flip = () => fc.classList.toggle("flip");
      fc.addEventListener("click", flip); fc.addEventListener("keydown", e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } });
      $("[data-p]", w).onclick = () => { k = (k - 1 + deck.length) % deck.length; draw(); };
      $("[data-n]", w).onclick = () => { k = (k + 1) % deck.length; draw(); };
      $("[data-s]", w).onclick = () => { deck = shuffle(deck); k = 0; draw(); };
    };
    draw();
  }

  /* ================= GLOSSARY ================= */
  function kamus() {
    setNav("kamus"); document.title = `คลังคำศัพท์ | ${C.code}`;
    const all = L.flatMap(l => (l.vocab || []).flatMap(g => g.items.map(([m, t]) => ({ m, t, n: l.no }))));
    app.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><h2>คลังคำศัพท์ <span class="ms" lang="ms" style="font-weight:500;color:var(--muted);font-size:20px">Kamus Kecil</span></h2><p>คำศัพท์จากทุกบท ${all.length} คำ</p></div>
      <div class="gl-tools"><label class="sr-only" for="gq">ค้นหาคำศัพท์</label><input id="gq" type="search" placeholder="ค้นหา เช่น makan หรือ กิน" autocomplete="off">
      <label class="sr-only" for="gb">เลือกบท</label><select id="gb"><option value="">ทุกบท</option>${L.filter(l => l.vocab).map(l => `<option value="${l.no}">บทที่ ${l.no} ${l.ms}</option>`).join("")}</select></div>
      <p class="gl-count" aria-live="polite"></p>
      <div class="tbl-wrap" style="max-width:none"><table><thead><tr><th>ภาษามลายู</th><th>ความหมาย</th><th>บท</th><th><span class="sr-only">ฟัง</span></th></tr></thead><tbody id="gl"></tbody></table></div>
    </div></section>`;
    const q = $("#gq"), b = $("#gb"), tb = $("#gl"), cnt = $(".gl-count");
    const run = () => {
      const s = q.value.trim().toLowerCase(), bb = b.value;
      const rows = all.filter(x => (!bb || x.n === +bb) && (!s || x.m.toLowerCase().includes(s) || x.t.includes(s))).sort((a, c) => a.m.localeCompare(c.m, "ms"));
      cnt.textContent = rows.length ? `พบ ${rows.length} คำ` : "ไม่พบคำที่ค้นหา ลองพิมพ์คำให้สั้นลงหรือเลือก “ทุกบท”";
      tb.innerHTML = rows.map(x => `<tr><td class="ms" lang="ms">${esc(x.m)}</td><td>${esc(x.t)}</td><td class="gl-bab"><a href="${lessonLink(x.n)}/kosakata">บทที่ ${x.n}</a></td><td class="say-cell">${sayBtn(x.m)}</td></tr>`).join("");
    };
    q.addEventListener("input", run); b.addEventListener("change", run); run();
    window.scrollTo(0, 0);
  }

  /* ================= TOOLS ================= */
  function alat() {
    setNav("alat"); document.title = `เครื่องมือฝึก | ${C.code}`;
    app.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><h2>เครื่องมือฝึก</h2><p>ใช้ทบทวนบทที่ 6 จำนวนนับ บทที่ 7 วัน เดือน ปี และบทที่ 8 นาฬิกาและเวลา</p></div>
      ${toolHTML("number")}${toolHTML("date")}${toolHTML("time")}
    </div></section>`;
    bindTools(app); window.scrollTo(0, 0);
  }

  /* ================= COURSE INFO ================= */
  function kursus() {
    setNav("kursus"); document.title = `ข้อมูลรายวิชา | ${C.code}`;
    app.innerHTML = `<section class="section"><div class="wrap">
      <div class="section-head"><h2>${C.code} ${C.th}</h2><p>${C.term} · ${C.credits} หน่วยกิต</p></div>
      <div class="info-grid">
        <div class="prose">
          <h3>คำอธิบายรายวิชา</h3><p>${C.descTh}</p><p lang="en" style="color:var(--muted)">${C.descEn}</p>
          <h3>จุดมุ่งหมาย</h3><p>${C.goal}</p>
          <h3>ผลลัพธ์การเรียนรู้และสัดส่วนคะแนน</h3>
          <ul class="clo">${C.clos.map(c => `<li><b>${c.id}</b><div>${c.text}<div class="bar" role="img" aria-label="${c.weight} เปอร์เซ็นต์"><span style="width:${c.weight}%"></span></div><small style="color:var(--muted)">${c.weight}% · ${c.how}</small></div></li>`).join("")}</ul>
        </div>
        <div class="prose">
          <h3>ผู้สอน</h3><ul class="people">${C.teachers.map(t => `<li>${t.name}<small>${t.role}${t.email ? ` · <a href="mailto:${t.email}">${t.email}</a>` : ""}</small></li>`).join("")}</ul>
          <h3>เวลาให้คำปรึกษา</h3><p>${C.office}</p>
          <h3>กลุ่มเรียน</h3>${table({ head: ["กลุ่ม", "วันและเวลา", "ห้อง"], rows: C.groups })}
          <h3>เกณฑ์การตัดสินผล</h3>${table({ head: ["ระดับ", "คะแนน (%)", "ความหมาย"], rows: C.grades })}
          <p style="color:var(--muted);font-size:15px">นิสิตต้องได้คะแนนรวมไม่ต่ำกว่าร้อยละ 50 จึงจะผ่านรายวิชา</p>
        </div>
      </div>
      <div class="info-grid" style="margin-top:20px">
        <div class="prose"><h3>เอกสารและตำรา</h3><ul>${C.books.map(b => `<li>${b}</li>`).join("")}</ul></div>
        <div class="prose"><h3>แหล่งเรียนรู้ออนไลน์</h3><ul>${C.resources.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.th}</a></li>`).join("")}</ul></div>
      </div>
    </div></section>`;
    window.scrollTo(0, 0);
  }

  /* ================= ปกใน และ สารบัญ ================= */
  const bunga = cls => `<svg class="${cls}" viewBox="-40 -40 80 80" aria-hidden="true"><circle class="ring" r="37"/>${
    [0, 45, 90, 135, 180, 225, 270, 315].map(r => `<path class="pt" d="M0 -6C7 -14 7 -26 0 -33C-7 -26 -7 -14 0 -6Z" transform="rotate(${r})"/><circle class="dt" cy="-20" r="2" transform="rotate(${r})"/>`).join("")
  }<circle class="ct" r="5.5"/></svg>`;
  const ruleSVG = '<svg class="rule" viewBox="0 0 120 12" aria-hidden="true"><path class="ln" d="M0 6H48M72 6H120" stroke-width="1"/><path class="dm" d="M60 0 66 6 60 12 54 6Z"/></svg>';

  /* ส่วนย่อยของแต่ละบท (ต้องตรงกับที่ lesson() สร้าง) */
  function sections(l) {
    const s = [["goals", "จุดประสงค์"]];
    if (l.dialog) s.push(["perbualan", "บทสนทนา"]);
    if (l.vocab) s.push(["kosakata", "คำศัพท์"]);
    if (l.grammar) s.push(l.dialog ? ["tatabahasa", "หลักภาษา"] : ["isi", "เนื้อหา"]);
    if (l.tool) s.push(["alat", "เครื่องมือฝึก"]);
    if (l.idioms) s.push(["simpulan", "สำนวนภาษา"]);
    if (l.culture) s.push(["budaya", "วัฒนธรรม"]);
    if (l.exercises) s.push(["latihan", "แบบฝึกหัด"]);
    return s;
  }

  /* ไม่ให้ตัดคำกลางชื่อ: แต่ละกลุ่มคำ (คั่นด้วยเว้นวรรค) อยู่บรรทัดเดียวกัน */
  const nw = t => String(t).split(" ").map(w => `<span class="nw">${w}</span>`).join(" ");
  function kulitDalam() {
    setNav(""); document.title = `ปกใน | ${C.code} ${C.th}`;
    app.innerHTML = `<section class="sheet-wrap"><article class="sheet" aria-label="ปกใน">
      <div class="sheet-inner">
        ${bunga("emblem")}
        <p class="doc">${C.docType || "บทเรียนออนไลน์ประกอบการสอน"}</p>
        <p class="code">รายวิชา ${C.code}</p>
        <h1 class="t-th">${nw(C.th)}</h1>
        <p class="t-en" lang="en">${C.en}</p>
        <p class="t-ms" lang="ms">${C.ms || ""}</p>
        ${ruleSVG}
        <p class="by">เรียบเรียงโดย</p>
        <p class="author">${nw(C.author || "")}</p>
        <p class="degree">${C.authorDegree || ""}</p>
        <div class="org">${C.faculty || ""}<br><b>${C.university || ""}</b><br>${C.term}</div>
      </div>
    </article>
    <div class="sheet-actions"><a class="btn btn-solid" href="#/kandungan">ไปที่สารบัญ</a><button type="button" class="btn btn-line" data-opencover>ดูปกนอก</button></div></section>`;
    window.scrollTo(0, 0);
  }

  function kandungan() {
    setNav("kandungan"); document.title = `สารบัญ | ${C.code} ${C.th}`;
    const row = (no, title, pg, href, extra = "") => `<a class="toc-row" href="${href}"${extra}><span class="toc-no">${no}</span><span class="toc-title">${title}</span><span class="toc-dots" aria-hidden="true"></span><span class="toc-pg">${pg}</span></a>`;
    const vocabCount = L.reduce((n, l) => n + (l.vocab || []).reduce((m, g) => m + g.items.length, 0), 0);
    app.innerHTML = `<section class="section"><div class="wrap toc-page">
      <header class="toc-head"><h1>สารบัญ</h1><p lang="ms">Kandungan</p></header>

      <div class="toc-part"><h2>ส่วนนำ</h2><ul class="toc-list">
        <li><button type="button" class="toc-row" data-opencover><span class="toc-no"></span><span class="toc-title"><span class="solo">ปกนอก</span></span><span class="toc-dots" aria-hidden="true"></span><span class="toc-pg">หน้าปก</span></button></li>
        <li>${row("", '<span class="solo">ปกใน</span>', "ผู้เรียบเรียง", "#/kulit-dalam")}</li>
        <li>${row("", '<span class="solo">ข้อมูลรายวิชา</span>', "CLOs · การวัดผล", "#/kursus")}</li>
        <li>${row("", '<span class="solo">แผนการเรียน 15 สัปดาห์</span>', "หน้าแรก", "#/")}</li>
      </ul></div>

      <div class="toc-part"><h2>บทเรียน</h2><ol class="toc-list">${L.map(l => {
        const d = isDone(l.no);
        return `<li>${row("บทที่ " + l.no, `<span class="ms" lang="ms">${l.ms}</span><span class="th">${l.th}</span>`, `<span class="${d ? "toc-pg done" : ""}">${d ? "✓ " : ""}สัปดาห์ที่ ${weekOf(l.no)}</span>`, lessonLink(l.no))}
          <ul class="toc-subs" aria-label="หัวข้อในบทที่ ${l.no}">${sections(l).map(([id, t]) => `<li><a href="${lessonLink(l.no)}/${id}">${t}</a></li>`).join("")}</ul></li>`;
      }).join("")}</ol></div>

      <div class="toc-part"><h2>ภาคผนวก</h2><ul class="toc-list">
        <li>${row("", '<span class="solo">คลังคำศัพท์</span>', vocabCount + " คำ", "#/kamus")}</li>
        <li>${row("", '<span class="solo">เครื่องมือฝึก: ตัวเลข วันที่ เวลา</span>', "บทที่ 6–8", "#/alat")}</li>
        <li>${row("", '<span class="solo">เอกสารและตำรา · แหล่งเรียนรู้ออนไลน์</span>', "ข้อมูลรายวิชา", "#/kursus")}</li>
      </ul></div>
    </div></section>`;
    window.scrollTo(0, 0);
  }

  function notFound() { app.innerHTML = `<section class="section"><div class="wrap"><h2>ไม่พบหน้านี้</h2><p>ลิงก์อาจพิมพ์ผิด กลับไปที่ <a href="#/">แผนการเรียน</a> เพื่อเลือกบทเรียน</p></div></section>`; }

  /* ---------- ปุ่มนำทางด้านล่าง (ทุกหน้า) ---------- */
  const ICON = {
    home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    prev: '<path d="M15 5 8 12l7 7"/>',
    next: '<path d="M9 5l7 7-7 7"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M9 8h6"/>',
    top: '<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/>'
  };
  const ico = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
  /* ลำดับหน้าสำหรับปุ่ม ก่อนหน้า/ถัดไป */
  const SEQ = [{ key: "kulit-dalam", href: "#/kulit-dalam", name: "ปกใน" }, { key: "kandungan", href: "#/kandungan", name: "สารบัญ" }, { key: "home", href: "#/", name: "แผนการเรียน" }]
    .concat(L.map(l => ({ key: "bab" + l.no, href: lessonLink(l.no), name: "บทที่ " + l.no })))
    .concat([{ key: "kamus", href: "#/kamus", name: "คลังคำศัพท์" }, { key: "alat", href: "#/alat", name: "เครื่องมือฝึก" }, { key: "kursus", href: "#/kursus", name: "ข้อมูลรายวิชา" }]);
  function pageNav(key) {
    const nav = $("#pagenav"); const i = SEQ.findIndex(x => x.key === key);
    const prev = i > 0 ? SEQ[i - 1] : null, next = i >= 0 && i < SEQ.length - 1 ? SEQ[i + 1] : null;
    const cur = k => key === k ? ' aria-current="page"' : "";
    nav.innerHTML = `
      <a href="#/"${cur("home")}>${ico("home")}หน้าแรก</a>
      <span class="sep" aria-hidden="true"></span>
      ${key === "kulit-dalam" ? `<button type="button" class="pn-wide" data-opencover aria-label="ก่อนหน้า: ปกนอก">${ico("prev")}<span><small>ก่อนหน้า</small>ปกนอก</span></button>`
        : prev ? `<a class="pn-wide" href="${prev.href}" aria-label="ก่อนหน้า: ${prev.name}">${ico("prev")}<span><small>ก่อนหน้า</small>${prev.name}</span></a>`
             : `<span class="pn-wide is-off" aria-hidden="true">${ico("prev")}<span><small>ก่อนหน้า</small>—</span></span>`}
      ${next ? `<a class="pn-wide next" href="${next.href}" aria-label="ถัดไป: ${next.name}"><span><small>ถัดไป</small>${next.name}</span>${ico("next")}</a>`
             : `<span class="pn-wide next is-off" aria-hidden="true"><span><small>ถัดไป</small>—</span>${ico("next")}</span>`}
      <span class="sep" aria-hidden="true"></span>
      <a href="#/kamus"${cur("kamus")}>${ico("book")}คำศัพท์</a>
      <button type="button" data-top>${ico("top")}บนสุด</button>`;
    $("[data-top]", nav).onclick = () => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  /* ---------- หน้าปก (เปิด/ปิดได้) ---------- */
  const cover = $("#cover");
  $("#cover-term").textContent = C.term;  /* ภาคเรียนบนหน้าปก ดึงจาก course.js */
  function openCover() {
    document.documentElement.classList.remove("no-cover");
    cover.classList.remove("closing"); cover.hidden = false;
    $("#cover-skip").checked = load().cover === "off";
    document.body.style.overflow = "hidden";
    setTimeout(() => $("#cover-enter").focus(), 50);
  }
  function closeCover() {
    const s = load(); s.cover = $("#cover-skip").checked ? "off" : "on"; save(s);
    document.body.style.overflow = "";
    const done = () => { cover.hidden = true; cover.classList.remove("closing"); };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) done();
    else { cover.classList.add("closing"); setTimeout(done, 340); }
    app.focus({ preventScroll: true });
  }
  $("#cover-enter").addEventListener("click", closeCover);
  $$("[data-close-cover]", cover).forEach(a => a.addEventListener("click", closeCover));
  document.addEventListener("click", e => { if (e.target.closest("[data-opencover]")) openCover(); });
  $("#cover-open").addEventListener("click", openCover);
  $("#cover-skip").addEventListener("change", e => { const s = load(); s.cover = e.target.checked ? "off" : "on"; save(s); toast(e.target.checked ? "จะไม่แสดงหน้าปกอีก เปิดได้จากปุ่ม “หน้าปก” มุมขวาบน" : "จะแสดงหน้าปกทุกครั้งที่เปิดเว็บ"); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !cover.hidden) closeCover(); });
  if (document.documentElement.classList.contains("no-cover")) cover.hidden = true;
  else { document.body.style.overflow = "hidden"; $("#cover-skip").checked = false; setTimeout(() => $("#cover-enter").focus(), 50); }

  /* ---------- router ---------- */
  function route() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    clearInterval(home.iv);
    const p = location.hash.replace(/^#\/?/, "").split("/");
    const n = parseInt(p[1], 10);
    pageNav(!p[0] ? "home" : p[0] === "bab" ? "bab" + n : p[0]);
    if (!p[0]) home();
    else if (p[0] === "bab") lesson(parseInt(p[1], 10));
    else if (p[0] === "kamus") kamus();
    else if (p[0] === "alat") alat();
    else if (p[0] === "kursus") kursus();
    else if (p[0] === "kulit-dalam") kulitDalam();
    else if (p[0] === "kandungan") kandungan();
    else notFound();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- chrome ---------- */
  $(".menu-btn").addEventListener("click", e => { const n = $(".mainnav"); const o = n.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); });
  const themeBtn = $(".theme-btn");
  function applyTheme(t) { if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme"); }
  applyTheme(load().theme);
  themeBtn.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark" || (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    const t = dark ? "light" : "dark"; applyTheme(t); const s = load(); s.theme = t; save(s);
  });
  route();
})();
