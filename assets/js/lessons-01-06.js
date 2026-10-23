/* บทที่ 1–6  |  โครงสร้างข้อมูลแต่ละบท:
   no, ms, th, clos, goals[], scene, dialog[[ผู้พูด, มลายู, ไทย]],
   vocab[{g, items[[มลายู, ไทย, หมายเหตุ]]}], grammar[{h, p, t:{head, rows, ms:[คอลัมน์ภาษามลายู]}, ex[[มลายู, ไทย]]}],
   idioms[[สำนวน, ความหมาย, ตัวอย่าง, คำแปล]], culture, tool, exercises[]
   ในข้อความ ใช้ <i>...</i> ครอบคำภาษามลายู */
window.LESSONS.push(
{
  no: 1, ms: "Bangsa dan Bahasa Melayu", th: "ความรู้ทั่วไปเกี่ยวกับภาษาและชนชาติมลายู",
  clos: ["CLO1", "CLO3"],
  goals: [
    "อธิบายข้อสันนิษฐานเกี่ยวกับที่มาของคำว่า “มลายู” ได้",
    "เล่าประวัติความเป็นมาของชนชาติมลายูโดยสังเขปได้",
    "บอกความแตกต่างของนิยาม “คนมลายู” ในมาเลเซียและในประเทศไทยได้",
    "อธิบายพัฒนาการของภาษามลายูและอักษรยาวี–รูมีได้"
  ],
  grammar: [
    { h: "ที่มาของคำว่า “มลายู”", p:
      "<p>คำว่า <i>Melayu</i> ยังไม่มีข้อยุติว่ามีที่มาจากอะไร นักวิชาการตั้งข้อสันนิษฐานไว้หลายทาง (รวบรวมโดย Ismail Hamid, 1991)</p>" +
      "<ul><li><b>Wernley</b> — มาจาก <i>melaju</i> รากศัพท์ <i>laju</i> แปลว่า รวดเร็ว คล่องแคล่ว</li>" +
      "<li><b>Van der Tuuk</b> — หมายถึง <i>penyeberang</i> ผู้ข้ามฟาก ที่หันมานับถือศาสนาอิสลาม</li>" +
      "<li><b>Hollander</b> — หมายถึงผู้รักการผจญภัยและการเดินทาง</li>" +
      "<li><b>Harun Aminurrashid</b> — มาจากภาษาสันสกฤต <i>Malayu</i> และภาษาทมิฬ <i>Malai</i> แปลว่า ภูเขาหรือที่สูง</li>" +
      "<li><b>Omar Amir Husin</b> — มาจากชื่อถิ่น <i>Mahaluyah</i> ในเปอร์เซีย หรือจากคำว่า <i>mulia</i> (ผู้ประเสริฐ)</li>" +
      "<li><b>Darus Ahmad</b> — มาจากชื่อไม้จันทน์ ไม้เศรษฐกิจของคาบสมุทรมลายู</li></ul>" +
      "<p>หลักฐานเก่าแก่ที่สุดคือบันทึกของภิกษุจีน อี้จิง (I-Tsing) ในคริสต์ศตวรรษที่ 7 ที่เรียกดินแดนนี้ว่า <i>Mo-lo-yeu</i> ส่วนพงศาวดาร <i>Sejarah Melayu</i> ระบุว่า <i>Melayu</i> เป็นชื่อแม่น้ำสายหนึ่งในปาเล็มบัง</p>" },
    { h: "ประวัติชนชาติมลายู", p:
      "<p>ข้อสันนิษฐานของ Hendrik Kern และ Von Heine Geldern ที่ได้รับการยอมรับกว้างขวาง ระบุว่าบรรพบุรุษชาวมลายูอพยพจากมณฑลยูนนานลงมาสู่เอเชียตะวันออกเฉียงใต้เป็นสองระลอก</p>" },
    { h: "", t: { head: ["กลุ่ม", "ช่วงเวลา", "ลักษณะ"], ms: [0], rows: [
      ["Melayu Proto", "ราว 2,500 ปีก่อนคริสตกาล", "นิยมอาศัยในป่าเขา"],
      ["Melayu Deutro", "ราว 1,500 ปีก่อนคริสตกาล", "ตั้งชุมชน มีหมู่บ้านและหัวหน้าหมู่บ้าน"]] } },
    { h: "นิยามคำว่า “คนมลายู” (Orang Melayu)", p:
      "<p>รัฐธรรมนูญมาเลเซีย มาตรา 160 นิยามคนมลายูว่า เป็นผู้นับถือศาสนาอิสลาม พูดภาษามลายูเป็นปกติ และถือขนบธรรมเนียมมลายู พร้อมเงื่อนไขเรื่องถิ่นกำเนิด</p>" +
      "<p>นิยามนี้ใช้กับประเทศไทยได้ไม่ทั้งหมด คนไทยเชื้อสายมลายูในปัตตานี ยะลา นราธิวาส และบางพื้นที่ของสตูลและสงขลา ยังพูดภาษามลายูและถือขนบธรรมเนียมมลายู แต่คนไทยเชื้อสายมลายูในภาคกลาง เช่น มีนบุรี หนองจอก หรืออยุธยา ส่วนใหญ่พูดภาษามลายูไม่ได้แล้ว อย่างไรก็ตาม สำหรับชาวสามจังหวัดชายแดนภาคใต้ ภาษามลายูยังคงเป็นเครื่องบ่งบอกตัวตนอย่างเหนียวแน่น</p>" },
    { h: "ภาษามลายูในตระกูลภาษา", p:
      "<p>ภาษามลายูอยู่ในตระกูลภาษาออสโตรนีเซียน (Austronesian หรือ Malayo-Polynesian) ซึ่งแบ่งเป็น 4 สาขาหลัก (Nik Safiah Karim และคณะ)</p>" },
    { h: "", t: { head: ["สาขา", "ภาษาที่อยู่ในสาขา"], ms: [0], rows: [
      ["Nusantara", "ภาษาอินโดนีเซีย ภาษามาเลเซีย และภาษาในหมู่เกาะมลายู"],
      ["Polynesia", "หมู่เกาะแปซิฟิกตอนกลาง นิวซีแลนด์ ฮาวาย ซามัว"],
      ["Micronesia", "หมู่เกาะแปซิฟิกตะวันตกเฉียงเหนือ เช่น มาเรียนา แคโรไลน์ มาร์แชลล์"],
      ["Melanesia", "หมู่เกาะแปซิฟิกตะวันตก เช่น นิวแคลิโดเนีย ฟิจิ"]] } },
    { h: "อักษรยาวีและอักษรรูมี", p:
      "<p>ในสมัยอาณาจักรมะละกา (คริสต์ศตวรรษที่ 15) ภาษามลายูรุ่งเรืองเป็นภาษากลาง (<i>lingua franca</i>) ของการค้า การทูต และศาสนา ชาวมลายูดัดแปลงอักษรอาหรับเป็น <b>อักษรยาวี</b> (<i>Tulisan Jawi</i>) ต่อมาชาวยุโรปนำอักษรโรมันมาเขียนภาษามลายู เรียกว่า <b>อักษรรูมี</b> (<i>Tulisan Rumi</i>) ซึ่งเข้าสู่โรงเรียนในมลายาตั้งแต่ ค.ศ. 1901 และแพร่หลายจนถึงปัจจุบัน</p>" +
      "<p>หลังได้รับเอกราช (ค.ศ. 1957) ภาษามลายูกลายเป็นภาษาประจำชาติของมาเลเซีย สถาบัน <i>Dewan Bahasa dan Pustaka</i> ดูแลมาตรฐานภาษาที่เรียกว่า <i>Bahasa Melayu Baku</i> รัฐธรรมนูญมาเลเซียเรียกภาษานี้ว่า <i>Bahasa Malaysia</i> อินโดนีเซียเรียก <i>Bahasa Indonesia</i> บรูไนและสิงคโปร์เรียก <i>Bahasa Melayu</i> ส่วนชาวมลายูในสามจังหวัดชายแดนภาคใต้เรียกว่า <i>bahasa nayu</i> หรือ <i>baso nayu</i></p>" }
  ],
  culture: "<p>มาเลเซียเป็น “พหุสังคม” (<i>masyarakat majmuk</i>) ประกอบด้วยชาวมลายู–ภูมิบุตร (<i>Bumiputera</i>) ชาวจีน ชาวอินเดีย และชนพื้นเมืองดั้งเดิม เช่น <i>Orang Asli</i> อาหารประจำชาติคือ <i>nasi lemak</i> ข้าวหุงกะทิกินกับซัมบัล ถั่วลิสง ปลาเล็กทอด และไข่ต้ม ชุดประจำตัวผู้หญิงมลายูคือ <i>baju kurung</i></p>",
  exercises: [
    { type: "mc", title: "ทบทวนความรู้", items: [
      { q: "หลักฐานเก่าแก่ที่สุดที่บันทึกคำว่า “Mo-lo-yeu” คือบันทึกของใคร", o: ["ภิกษุจีน อี้จิง", "พ่อค้าชาวโปรตุเกส", "สุลต่านแห่งมะละกา", "ข้าราชการอังกฤษ"], a: 0 },
      { q: "ชาวมลายูกลุ่มแรกที่อพยพลงมาเมื่อราว 2,500 ปีก่อนคริสตกาลเรียกว่าอะไร", o: ["Melayu Deutro", "Melayu Proto", "Orang Asli", "Bumiputera"], a: 1 },
      { q: "อักษรที่ดัดแปลงจากอักษรอาหรับเพื่อเขียนภาษามลายูเรียกว่าอะไร", o: ["อักษรรูมี", "อักษรยาวี", "อักษรปัลลวะ", "อักษรละติน"], a: 1 },
      { q: "ภาษามลายูอยู่ในตระกูลภาษาใด", o: ["ไท–กะได", "ออสโตรเอเชียติก", "ออสโตรนีเซียน", "จีน–ทิเบต"], a: 2 },
      { q: "หน่วยงานที่ดูแลมาตรฐานภาษามลายูของมาเลเซียคือข้อใด", o: ["Dewan Rakyat", "Dewan Bahasa dan Pustaka", "Kementerian Pelancongan", "Universiti Malaya"], a: 1 }
    ]}
  ]
},
{
  no: 2, ms: "Sistem Bunyi dan Ejaan", th: "ระบบเสียงและการสะกดคำภาษามลายู",
  clos: ["CLO1"],
  goals: [
    "ออกเสียงสระเดี่ยว 6 หน่วยเสียงและสระประสม 3 เสียงในภาษามลายูได้",
    "แยกเสียง e (เอ) กับ e (เออ) ในคำที่เขียนเหมือนกันได้",
    "ออกเสียงพยัญชนะต้น พยัญชนะประสม และพยัญชนะท้ายได้ถูกต้อง",
    "อ่านและสะกดคำพื้นฐานด้วยอักษรรูมีได้"
  ],
  grammar: [
    { h: "สระเดี่ยว (Vokal)", p: "<p>ภาษามลายูมีรูปสระเดี่ยว 5 รูป คือ a e i o u แต่มี 6 หน่วยเสียง เพราะรูป e ออกเสียงได้สองแบบ พยางค์เปิด (ไม่มีตัวสะกด) สระมักออกเสียงยาว พยางค์ปิดมักออกเสียงสั้น</p>" },
    { h: "", t: { head: ["รูป", "เสียง", "ตัวอย่าง", "ความหมาย"], ms: [2], rows: [
      ["a", "อา", "ada · santan", "มี · กะทิ"],
      ["e (taling)", "เอ", "enak · sate · pendek", "อร่อย · สะเต๊ะ · สั้น"],
      ["e (pepet)", "เออ", "emak · embun · hendak", "แม่ · น้ำค้าง · ต้องการ"],
      ["i", "อี", "itik · intan", "เป็ด · เพชร"],
      ["o", "โอ", "obor · tolong", "คบเพลิง · ช่วย"],
      ["u", "อู", "umum · untung", "ทั่วไป · กำไร"]] } },
    { h: "", p: "<div class=\"note\"><p><b>เคล็ดลับ:</b> รูป e ไม่มีกฎตายตัว ต้องจำเป็นคำ ๆ แต่ถ้าต้องเดา ให้เดาเป็นเสียง “เออ” (pepet) เพราะพบบ่อยกว่า พจนานุกรม <i>Kamus Dewan</i> ใช้ <i>é</i> แทนเสียง “เอ”</p></div>" },
    { h: "คำที่เขียนเหมือนกันแต่ออกเสียงต่างกัน", t: { head: ["คำ", "เสียง เอ (é)", "เสียง เออ (e)"], ms: [0], rows: [
      ["perak", "โลหะเงิน", "ขี้แง"],
      ["perang", "สีน้ำตาล", "สงคราม"],
      ["semak", "ตรวจสอบ", "รกรุงรัง"],
      ["rendang", "ดก ทึบ", "ผัด คั่ว (เช่น daging rendang)"]] } },
    { h: "สระประสม (Diftong)", t: { head: ["รูป", "เสียง", "ตัวอย่าง", "ความหมาย"], ms: [2], rows: [
      ["ai", "ไอ", "pantai · hairan", "ชายหาด · สงสัย"],
      ["au", "เอา", "pulau · kerbau", "เกาะ · ควาย"],
      ["oi", "โอย", "dodoi · sepoi", "กล่อมเด็ก · (ลม) พัดเบา ๆ"]] } },
    { h: "", p: "<p>ถ้ามีตัวสะกดตามหลัง ai/au จะแยกอ่านเป็นสองพยางค์ เช่น <i>laut</i> = ลา-อุต (ทะเล), <i>kait</i> = กา-อิต (สอย)</p>" },
    { h: "พยัญชนะที่คนไทยมักออกเสียงผิด", t: { head: ["พยัญชนะ", "เสียง", "ตัวอย่าง", "ความหมาย"], ms: [2], rows: [
      ["c", "จ", "cucu", "หลาน"],
      ["g", "ฆ (เหมือน g ใน girl)", "gigi", "ฟัน"],
      ["j", "ฌ (เหมือน j ใน jam)", "janji", "สัญญา"],
      ["ng", "ง", "bunga", "ดอกไม้"],
      ["ny", "ญ (ขึ้นจมูก)", "nyanyi", "ร้องเพลง"],
      ["sy", "ช (เหมือน sh)", "syarikat", "บริษัท"],
      ["kh", "ค (เสียงคอ)", "khabar", "ข่าวคราว"],
      ["gh", "ฆ (เสียงลึกในลำคอ)", "ghaib", "หายตัว"],
      ["r", "ร (รัวลิ้น)", "rasa", "รู้สึก"]] } },
    { h: "พยัญชนะท้าย", p: "<p>คำมลายูแท้มีพยัญชนะท้ายได้ 10 ตัว คือ p t k s h r l m n ng โดย <b>k ท้ายคำ</b> ออกเสียงหยุดที่เส้นเสียง ฟังคล้ายไม่มีตัวสะกด เช่น <i>emak</i> (เออ-มะ) <i>banyak</i> (บา-ญะ) ส่วน <b>h ท้ายคำ</b> ต้องออกเสียงลมหายใจ เช่น <i>rumah</i> (รู-มะฮฺ)</p>" }
  ],
  vocab: [{ g: "คำฝึกออกเสียง", items: [
    ["bahasa", "ภาษา"], ["rumah", "บ้าน"], ["emak", "แม่"], ["pantai", "ชายหาด"], ["pulau", "เกาะ"],
    ["bunga", "ดอกไม้"], ["nyanyi", "ร้องเพลง"], ["gigi", "ฟัน"], ["janji", "สัญญา"], ["cucu", "หลาน"],
    ["pensyarah", "อาจารย์"], ["khabar", "ข่าวคราว"], ["laut", "ทะเล"], ["pasar", "ตลาด"], ["universiti", "มหาวิทยาลัย"]] }],
  exercises: [
    { type: "mc", title: "เลือกเสียงอ่านที่ถูกต้อง", items: [
      { q: "<i>cucu</i> อ่านว่า", o: ["คูคู", "จูจู", "ซูซู", "ชูชู"], a: 1 },
      { q: "<i>gigi</i> อ่านว่า", o: ["จีจี", "ยียี", "ฆีฆี", "ฌีฌี"], a: 2 },
      { q: "<i>nyanyi</i> อ่านว่า", o: ["นยานยี", "ญาญี", "งางี", "ยายี"], a: 1 },
      { q: "<i>emak</i> (แม่) อ่านว่า", o: ["เอ-มัก", "เออ-มะ", "อี-มาก", "แอ-มัค"], a: 1 },
      { q: "<i>laut</i> (ทะเล) อ่านว่า", o: ["เลา", "ลาว", "ลา-อุต", "ลอต"], a: 2 },
      { q: "<i>perang</i> ที่แปลว่า “สงคราม” ออกเสียงสระ e อย่างไร", o: ["เอ (taling)", "เออ (pepet)", "อี", "แอ"], a: 1 }
    ]}
  ]
},
{
  no: 3, ms: "Ucap Selamat / Sapaan", th: "การกล่าวทักทาย",
  clos: ["CLO1", "CLO2", "CLO3", "CLO4"],
  goals: [
    "ใช้คำ <i>Selamat</i> ร่วมกับคำบอกเวลาทักทายได้เหมาะกับช่วงเวลา",
    "ฟัง พูด และแสดงบทสนทนาสั้น ๆ เกี่ยวกับการทักทายและการแนะนำตัวได้",
    "ใช้ถ้อยคำสุภาพ 6 กลุ่ม: ทักทาย ขอบคุณ ขอโทษ เชื้อเชิญ อวยพร และขออนุญาต",
    "บอกมารยาทและธรรมเนียมของชาวมลายูเกี่ยวกับการกล่าวคำสุภาพได้"
  ],
  scene: "Ahmad และ Somchai เป็นนิสิตชั้นปีที่ 1 พบกันครั้งแรกหน้าห้องเรียน ทั้งสองทักทายและแนะนำตัวกันสั้น ๆ",
  dialog: [
    ["Ahmad", "Selamat pagi.", "สวัสดีตอนเช้า"],
    ["Somchai", "Selamat pagi. Apa khabar?", "สวัสดี สบายดีไหม"],
    ["Ahmad", "Khabar baik. Terima kasih.", "สบายดี ขอบคุณ"],
    ["Somchai", "Sama-sama.", "ด้วยความยินดี"],
    ["Ahmad", "Nama saya Ahmad.", "ฉันชื่ออัฮมัด"],
    ["Somchai", "Nama saya Somchai.", "ฉันชื่อสมชาย"],
    ["Ahmad", "Selamat berkenalan, Somchai.", "ยินดีที่ได้รู้จักนะ สมชาย"],
    ["Somchai", "Selamat berkenalan juga, Ahmad.", "ยินดีที่ได้รู้จักเช่นกัน อัฮมัด"],
    ["Ahmad", "Selamat tinggal.", "ลาก่อนนะ (ผู้ที่จะจากไปพูด)"],
    ["Somchai", "Selamat jalan.", "เดินทางปลอดภัยนะ (ผู้ที่อยู่พูดกับผู้จะไป)"]
  ],
  vocab: [{ g: "คำศัพท์จากบทสนทนา", items: [
    ["selamat", "ความสุขสวัสดิ์ ปลอดภัย", "ใช้ขึ้นต้นคำทักทาย/อวยพร"], ["pagi", "เวลาเช้า"], ["apa", "อะไร"],
    ["khabar", "ข่าวคราว ความเป็นอยู่"], ["baik", "ดี"], ["terima kasih", "ขอบคุณ"],
    ["sama-sama", "ด้วยความยินดี", "คำตอบรับคำขอบคุณ"], ["nama", "ชื่อ"], ["saya", "ฉัน ผม ดิฉัน"],
    ["berkenalan", "ทำความรู้จัก"], ["juga", "เช่นกัน ด้วย"], ["tinggal", "อยู่ พัก"], ["jalan", "ถนน เดินทาง"]] }],
  grammar: [
    { h: "คำทักทายตามช่วงเวลา", p: "<p>ใช้ <i>Selamat</i> (เทียบได้กับ “สวัสดี”) นำหน้าคำบอกเวลา</p>",
      t: { head: ["คำทักทาย", "ช่วงเวลาที่ใช้"], ms: [0], say: 0, rows: [
        ["Selamat pagi", "ตั้งแต่ย่ำรุ่งจนก่อนเที่ยงวัน"],
        ["Selamat tengah hari", "12.00–13.59 น."],
        ["Selamat petang", "14.00–18.59 น."],
        ["Selamat malam", "19.00–00.59 น. และใช้ในความหมาย “ราตรีสวัสดิ์”"]] } },
    { h: "คำจากลาและต้อนรับ", t: { head: ["คำ", "ใครพูด / ใช้เมื่อใด"], ms: [0], say: 0, rows: [
      ["Selamat jalan", "ผู้ที่อยู่หรือเจ้าของบ้าน พูดกับผู้ที่กำลังจะเดินทางไป"],
      ["Selamat tinggal", "ผู้ที่กำลังจะจากไป พูดกับผู้ที่อยู่"],
      ["Selamat datang", "กล่าวต้อนรับ “ยินดีต้อนรับ”"]] },
      ex: [["Selamat makan.", "ทานให้อร่อยนะ"], ["Selamat tidur.", "นอนหลับฝันดี"]] },
    { h: "ถ้อยคำสุภาพ 6 กลุ่ม", t: { head: ["กลุ่ม", "ถ้อยคำ", "ความหมาย"], ms: [1], say: 1, rows: [
      ["ทักทาย", "Apa khabar? — Khabar baik.", "สบายดีไหม — สบายดี"],
      ["ทักทาย (มุสลิม)", "Assalamualaikum — Waalaikumsalam", "ขอความสันติสุขจงมีแด่ท่าน — และแด่ท่านเช่นกัน"],
      ["ขอบคุณ", "Terima kasih banyak-banyak.", "ขอบคุณมาก"],
      ["ขอโทษ", "Maaf. / Minta maaf. / Maafkan saya.", "ขอโทษ / ขออภัย / ขอโทษฉันด้วย"],
      ["เชื้อเชิญ", "Sila masuk. / Sila duduk. / Jemput makan.", "เชิญเข้ามา / เชิญนั่ง / เชิญรับประทาน"],
      ["ขออนุญาต", "Boleh saya bertanya?", "ขอถามได้ไหม"],
      ["ขออนุญาต", "Saya minta diri dulu.", "ขอตัวก่อนนะ"]] } },
    { h: "คำอวยพร", t: { head: ["คำอวยพร", "ความหมาย"], ms: [0], say: 0, rows: [
      ["Selamat Hari Raya", "สุขสันต์วันรายอ (วันตรุษ)"],
      ["Selamat Tahun Baharu", "สวัสดีปีใหม่"],
      ["Selamat Tahun Baharu Cina", "สวัสดีปีใหม่จีน"],
      ["Selamat Hari Lahir / Hari Jadi", "สุขสันต์วันเกิด"],
      ["Selamat Hari Ibu / Bapa", "สุขสันต์วันแม่ / วันพ่อ"],
      ["Selamat bertugas", "ขอให้ปฏิบัติหน้าที่ราบรื่น"],
      ["Selamat maju jaya", "ขอให้ประสบความสำเร็จ"]] } }
  ],
  idioms: [
    ["kaki ayam", "เดินเท้าเปล่า ไม่สวมรองเท้า", "Budak itu suka berkaki ayam ketika bermain di padang bola.", "เด็กคนนั้นชอบเดินเท้าเปล่าเวลาเล่นที่สนามฟุตบอล"],
    ["kaki judi", "คนชอบเล่นการพนัน", "Bapanya seorang kaki judi.", "พ่อของเขาเป็นคนชอบเล่นการพนัน"]
  ],
  culture: "<p>ชาวมลายูให้ความสำคัญกับการทักทายอย่างอ่อนน้อม โดยเฉพาะต่อผู้อาวุโส และนิยมใช้คำนำหน้าชื่อ เช่น <i>Encik</i> (นาย) <i>Cik</i> (นางสาว) <i>Puan</i> (นาง/คุณนาย) การกล่าว <i>Terima kasih</i> แม้เรื่องเล็กน้อย และการขอตัวก่อนลากลับด้วย <i>Saya minta diri dulu</i> ถือเป็นมารยาทที่ควรปฏิบัติเสมอ</p>",
  exercises: [
    { type: "fill", title: "เติมคำในช่องว่าง", lead: "พิมพ์คำตอบภาษามลายู แล้วกด ตรวจคำตอบ", items: [
      { q: "Ahmad กล่าวต้อนรับนักท่องเที่ยวด้วยคำว่า", a: ["Selamat datang"] },
      { q: "ผู้อ่านข่าวภาคดึกกล่าวอำลาผู้ชมด้วยคำว่า", a: ["Selamat malam"] },
      { q: "Sufian พบ Rosita เวลา 16.30 น. จะทักว่า “Selamat ____, Rosita.”", a: ["petang"] },
      { q: "Rosita ตอบว่า “Khabar ____.” (สบายดี)", a: ["baik"] },
      { q: "ปัทมากล่าวอำลาเพื่อน ๆ เพื่อออกเดินทางไปกรุงเทพฯ ด้วยคำว่า", a: ["Selamat tinggal"] },
      { q: "เพื่อน ๆ อวยพรกมลวรรณที่กำลังจะเดินทางไปต่างประเทศว่า", a: ["Selamat jalan"] }
    ]},
    { type: "mc", title: "เลือกคำสุภาพให้เหมาะกับสถานการณ์", items: [
      { q: "เพื่อนอวยพรวันเกิดให้คุณ คุณควรตอบว่า", o: ["Terima kasih", "Maaf", "Sila duduk", "Minta izin"], a: 0, ms: true },
      { q: "คุณมาสายและต้องการขอโทษอาจารย์", o: ["Selamat jalan", "Minta maaf", "Sama-sama", "Jemput makan"], a: 1, ms: true },
      { q: "คุณต้อนรับแขกเข้าบ้านและให้แขกนั่ง", o: ["Sila duduk", "Selamat tinggal", "Maafkan saya", "Khabar baik"], a: 0, ms: true },
      { q: "คุณต้องการออกจากห้องประชุมก่อนเวลา", o: ["Selamat datang", "Sama-sama", "Saya minta diri dulu", "Apa khabar?"], a: 2, ms: true },
      { q: "มีคนพูดกับคุณว่า Terima kasih คุณตอบว่า", o: ["Sama-sama", "Terima kasih", "Selamat pagi", "Maaf"], a: 0, ms: true }
    ]},
    { type: "speak", title: "ฝึกพูดเป็นคู่", text: "จับคู่กับเพื่อน สร้างบทสนทนาอย่างน้อย 6 ประโยค ให้มีครบ 3 ส่วน คือ ทักทาย แนะนำตัว และกล่าวลา โดยใช้คำสุภาพจากบทนี้อย่างน้อย 3 คำ" }
  ]
},
{
  no: 4, ms: "Berkenalan", th: "การสนทนาทำความรู้จักกัน",
  clos: ["CLO1", "CLO2", "CLO4"],
  goals: [
    "แนะนำตนเองและทำความรู้จักผู้อื่นเป็นภาษามลายูได้",
    "ใช้คำสรรพนามบุรุษที่ 1, 2 และ 3 ได้ถูกต้องตามระดับความสุภาพ",
    "ใช้ปฤจฉาสรรพนาม <i>siapa</i>, <i>di mana</i>, <i>berapa</i> ตั้งคำถามได้",
    "ใช้คำ <i>sila</i> และ partikel <i>-kah</i> ในประโยคได้เหมาะสม"
  ],
  scene: "อัฮหมัด (Ahmad) อาจารย์คณะมนุษยศาสตร์และสังคมศาสตร์ ทำความรู้จักกับสมชาย (Somchai) นิสิตชั้นปีที่ 1",
  dialog: [
    ["Ahmad", "Sila masuk.", "เชิญเข้ามาครับ"],
    ["Somchai", "Terima kasih.", "ขอบคุณครับ"],
    ["Ahmad", "Sama-sama. Siapakah nama saudara?", "ยินดีครับ คุณชื่ออะไรครับ"],
    ["Somchai", "Nama saya Somchai. Saya pelajar tahun satu, Universiti Thaksin.", "ผมชื่อสมชาย เป็นนิสิตชั้นปีที่ 1 มหาวิทยาลัยทักษิณ"],
    ["Ahmad", "Baik. Saudara pelajar fakulti apa?", "ดีครับ คุณเป็นนิสิตคณะอะไร"],
    ["Somchai", "Saya pelajar Fakulti Sains Kemanusiaan dan Sains Sosial, Encik.", "ผมเป็นนิสิตคณะมนุษยศาสตร์และสังคมศาสตร์ครับ"],
    ["Ahmad", "Baik. Saya seorang pensyarah Fakulti Sains Kemanusiaan dan Sains Sosial juga.", "ดีครับ ผมก็เป็นอาจารย์คณะมนุษยศาสตร์และสังคมศาสตร์เหมือนกัน"],
    ["Somchai", "Maafkan saya. Encik, nama siapa?", "ขอโทษครับ อาจารย์ชื่ออะไรครับ"],
    ["Ahmad", "Nama saya Ahmad bin Abdullah.", "ผมชื่ออัฮหมัด บิน อับดุลลอฮ์"]
  ],
  vocab: [{ g: "คำศัพท์จากบทสนทนา", items: [
    ["sila", "เชิญ โปรด", "รากศัพท์อาหรับ"], ["masuk", "เข้า"], ["siapa", "ใคร"], ["nama", "ชื่อ", "เสียงคล้าย name แต่ไม่ใช่คำยืม"],
    ["saya", "ฉัน"], ["pelajar", "นิสิต ผู้เรียน", "pe- + ajar (สอน)"], ["tahun", "ปี"], ["satu", "หนึ่ง"],
    ["universiti", "มหาวิทยาลัย", "ยืมจาก university"], ["fakulti", "คณะ", "ยืมจาก faculty"],
    ["pensyarah", "อาจารย์ (มหาวิทยาลัย)", "รากศัพท์อาหรับ syarah"], ["maaf", "ขอโทษ", "รากศัพท์อาหรับ"]] }],
  grammar: [
    { h: "คำสรรพนาม (Kata Ganti Nama Diri)", t: { head: ["", "บุรุษที่ 1", "บุรุษที่ 2", "บุรุษที่ 3"], ms: [1, 2, 3], rows: [
      ["เอกพจน์", "saya, aku, hamba", "awak, anda, kamu, engkau, saudara, saudari, encik, cik, tuan, puan", "dia, ia, beliau"],
      ["พหูพจน์", "kita, kami", "kamu semua, saudara-saudara, tuan-tuan, puan-puan", "mereka"]] } },
    { h: "", p: "<div class=\"note\"><p><b>ระดับความสุภาพของ “คุณ”:</b> <i>awak</i> ใช้กับเพื่อนสนิท <i>anda</i> ใช้แบบกลาง ๆ เป็นทางการ <i>saudara / saudari</i> ใช้เรียกชาย/หญิงอย่างสุภาพ ส่วน <i>encik, cik, tuan, puan</i> สุภาพมาก ใช้กับผู้อาวุโสหรืออาจารย์ <br><i>kita</i> = เรา (รวมผู้ฟัง) ส่วน <i>kami</i> = เรา (ไม่รวมผู้ฟัง)</p></div>" },
    { h: "การใช้คำ Sila", p: "<p>ใช้ <i>sila</i> นำหน้าคำกริยาเพื่อเชิญหรือขอร้องอย่างสุภาพ</p>", ex: [["Sila masuk.", "เชิญเข้ามา"], ["Sila duduk.", "เชิญนั่ง"], ["Sila baca.", "เชิญอ่าน"]] },
    { h: "ปฤจฉาสรรพนาม (Kata Tanya)", ex: [
      ["Nama anda siapa?", "คุณชื่ออะไร"], ["Siapakah nama saudara?", "คุณชื่ออะไร (สุภาพ)"],
      ["Di mana anda tinggal?", "คุณพักอยู่ที่ไหน"], ["Berapa orangkah keluarga anda?", "ครอบครัวคุณมีกี่คน"],
      ["Anda pelajar tahun berapa?", "คุณเป็นนิสิตชั้นปีที่เท่าไร"]] },
    { h: "Partikel -kah", p: "<p>เติม <i>-kah</i> ท้ายคำแสดงคำถามที่อยู่ต้นประโยค เพื่อให้คำถามสุภาพและชัดเจนขึ้น เช่น <i>Siapakah nama anda?</i> <i>Berapa orangkah keluarga anda?</i> ประโยคบอกเล่าจบด้วยมหัพภาค (.) ประโยคคำถามจบด้วยเครื่องหมายคำถาม (?)</p>" }
  ],
  idioms: [
    ["makan angin", "ท่องเที่ยวพักผ่อน", "Kami akan pergi makan angin ke Chiang Mai selama lima hari.", "เราจะไปเที่ยวเชียงใหม่เป็นเวลาห้าวัน"],
    ["khabar angin", "ข่าวลือ ข่าวที่ยังเชื่อไม่ได้", "Mengikut khabar angin, bapa Ali akan pergi ke Indonesia bulan depan.", "ตามข่าวลือ พ่อของอาลีจะไปอินโดนีเซียเดือนหน้า"]
  ],
  exercises: [
    { type: "mc", title: "หาคำสรรพนามในประโยค", items: [
      { q: "<i>Mereka sedang bermain bola.</i>", o: ["Mereka", "sedang", "bermain", "bola"], a: 0, ms: true },
      { q: "<i>Saya pelajar Universiti Thaksin.</i>", o: ["pelajar", "Saya", "Universiti", "Thaksin"], a: 1, ms: true },
      { q: "<i>Awak datang dari mana?</i>", o: ["datang", "dari", "Awak", "mana"], a: 2, ms: true },
      { q: "<i>Siapakah nama saudari?</i>", o: ["Siapakah", "nama", "saudari"], a: 2, ms: true },
      { q: "<i>Dia seorang pelakon.</i>", o: ["Dia", "seorang", "pelakon"], a: 0, ms: true }
    ]},
    { type: "mc", title: "เลือกคำที่เหมาะสม", items: [
      { q: "เมื่อคุยกับอาจารย์ผู้ชาย ควรใช้คำว่า “คุณ” แบบใด", o: ["awak", "engkau", "encik", "kamu"], a: 2, ms: true },
      { q: "“เรา” ที่รวมผู้ฟังด้วยคือคำใด", o: ["kami", "kita", "mereka", "dia"], a: 1, ms: true },
      { q: "เติม -kah ให้ถูกตำแหน่ง: “___ nama anda?”", o: ["Siapakah", "Namakah", "Andakah"], a: 0, ms: true }
    ]},
    { type: "speak", title: "งานที่มอบหมาย", text: "แต่งบทสนทนาแนะนำตนเองอย่างน้อย 6 ประโยค ใช้คำสรรพนามและปฤจฉาสรรพนามจากบทนี้ แล้วตอบคำถามต่อไปนี้ด้วยข้อมูลของตนเอง: <i>Siapakah nama anda? Di manakah anda belajar? Anda pelajar fakulti apa? Anda pelajar tahun berapa?</i>" }
  ]
},
{
  no: 5, ms: "Universiti Saya", th: "มหาวิทยาลัยของฉัน",
  clos: ["CLO1", "CLO2", "CLO3", "CLO4"],
  goals: [
    "ใช้คำศัพท์เกี่ยวกับสถานที่ คณะ และหน่วยงานในมหาวิทยาลัยได้",
    "ถาม–ตอบด้วยประโยคคำถามใช่/ไม่ใช่ (partikel <i>-kah</i>) ได้",
    "แยกใช้คำปฏิเสธ <i>tidak</i> กับ <i>bukan</i> ได้ถูกต้อง",
    "ใช้คำบอกทิศทาง (<i>kata arah</i>) บอกตำแหน่งอาคารได้"
  ],
  scene: "วันปฐมนิเทศ ณ มหาวิทยาลัยทักษิณ วิทยาเขตสงขลา ซาฟีรา (Safira) รุ่นพี่ปี 2 ในบทบาท “Malay Buddy” พาไพลิน (Pailin) นิสิตใหม่ชมมหาวิทยาลัย สังเกตคำถามที่ลงท้ายด้วย -kah",
  dialog: [
    ["Safira", "Selamat datang ke Universiti Thaksin. Inikah kali pertama saudari sampai ke sini?", "ยินดีต้อนรับสู่มหาวิทยาลัยทักษิณค่ะ นี่เป็นครั้งแรกที่คุณมาที่นี่ใช่ไหมคะ"],
    ["Pailin", "Ya, betul. Saya masih keliru. Bangunan besar berwarna kelabu itu, bangunan apa?", "ใช่ค่ะ ฉันยังงงอยู่เลย อาคารใหญ่สีเทาหลังนั้นคืออาคารอะไรคะ"],
    ["Safira", "Oh, itu Perpustakaan Pusat kami. Besarkah bangunan itu, pada pendapat saudari?", "อ๋อ นั่นคือหอสมุดกลางของเรา คุณว่าอาคารนั้นใหญ่ไหมคะ"],
    ["Pailin", "Ya, besar sekali. Bolehkah saya belajar di sana pada waktu malam?", "ใหญ่มากเลยค่ะ ฉันไปอ่านหนังสือที่นั่นตอนกลางคืนได้ไหมคะ"],
    ["Safira", "Boleh. Perpustakaan buka sampai pukul sepuluh malam. Jom, kita pergi ke fakulti kita dahulu.", "ได้ค่ะ ห้องสมุดเปิดถึงสี่ทุ่ม ไปกันเถอะ เราไปที่คณะของเรากันก่อน"],
    ["Pailin", "Jauhkah dari sini?", "ไกลจากตรงนี้ไหมคะ"],
    ["Safira", "Tidak jauh. Fakulti Sains Kemanusiaan dan Sains Sosial terletak di sebelah kanan, dekat dengan Dewan Parichat.", "ไม่ไกลค่ะ คณะมนุษยศาสตร์และสังคมศาสตร์อยู่ทางขวา ใกล้หอประชุมปาริชาต"],
    ["Pailin", "Dewan Parichat? Cantiknya nama itu! Apakah maksudnya?", "หอประชุมปาริชาต ชื่อเพราะจัง หมายความว่าอะไรคะ"],
    ["Safira", "“Parichat” ialah nama pokok kebanggaan universiti kita. Bunganya harum dan cantik, sama seperti universiti kita.", "“ปาริชาต” คือต้นไม้ที่เป็นความภาคภูมิใจของมหาวิทยาลัยเรา ดอกหอมและสวย เหมือนมหาวิทยาลัยของเรานั่นแหละค่ะ"],
    ["Pailin", "Menariknya. Terima kasih, Kak Safira. Sekarang saya faham sedikit tentang universiti ini.", "น่าสนใจจัง ขอบคุณนะคะพี่ซาฟีรา ตอนนี้ฉันเข้าใจมหาวิทยาลัยนี้มากขึ้นแล้ว"],
    ["Safira", "Sama-sama! Jom, kantin kita pun sedap. Laparkah saudari sekarang?", "ยินดีค่ะ ไปกันเถอะ โรงอาหารเราก็อร่อยนะ ตอนนี้หิวไหมคะ"],
    ["Pailin", "Lapar sikit. Jom kita pergi!", "หิวนิดหน่อยค่ะ ไปกันเลย"]
  ],
  vocab: [
    { g: "สถาบันการศึกษา", items: [
      ["universiti", "มหาวิทยาลัย"], ["fakulti / pusat pengajian", "คณะ"], ["jabatan", "ภาควิชา"], ["jurusan", "สาขาวิชาเอก"],
      ["bidang", "สาขา แขนง"], ["kursus", "รายวิชา"], ["presiden", "อธิการบดี"], ["dekan", "คณบดี"],
      ["ketua jabatan", "หัวหน้าภาควิชา"], ["pensyarah", "อาจารย์"], ["kakitangan", "เจ้าหน้าที่ บุคลากร"],
      ["mahasiswa / mahasiswi", "นิสิตชาย / นิสิตหญิง"], ["dewan kuliah", "ห้องบรรยาย"], ["perpustakaan", "ห้องสมุด"],
      ["persatuan", "ชมรม สมาคม"], ["bangunan", "อาคาร"], ["bilik", "ห้อง"], ["asrama", "หอพัก"], ["kantin", "โรงอาหาร"]] },
    { g: "ชื่อคณะ (Nama Fakulti)", items: [
      ["Sains Kemanusiaan dan Sains Sosial", "มนุษยศาสตร์และสังคมศาสตร์"], ["Pendidikan", "ศึกษาศาสตร์"],
      ["Pengurusan dan Pentadbiran", "การจัดการและบริหารธุรกิจ"], ["Sains", "วิทยาศาสตร์"], ["Sains Komputer", "วิทยาการคอมพิวเตอร์"],
      ["Undang-undang", "นิติศาสตร์"], ["Sains Politik", "รัฐศาสตร์"], ["Farmasi", "เภสัชศาสตร์"], ["Perubatan", "แพทยศาสตร์"],
      ["Kejururawatan", "พยาบาลศาสตร์"], ["Kejuruteraan", "วิศวกรรมศาสตร์"], ["Ekonomi", "เศรษฐศาสตร์"],
      ["Pengajian Islam", "อิสลามศึกษา"], ["Kesihatan Awam", "สาธารณสุขศาสตร์"]] },
    { g: "สาขาวิชา (Bidang)", items: [
      ["Bahasa Melayu", "ภาษามลายู"], ["Bahasa Inggeris", "ภาษาอังกฤษ"], ["Bahasa Cina", "ภาษาจีน"], ["Bahasa Thai", "ภาษาไทย"],
      ["Geografi", "ภูมิศาสตร์"], ["Psikologi", "จิตวิทยา"], ["Kimia", "เคมี"], ["Fizik", "ฟิสิกส์"], ["Biologi", "ชีววิทยา"]] }
  ],
  grammar: [
    { h: "ประโยคคำถามใช่/ไม่ใช่", p: "<p>ใช้โครงสร้างประโยคบอกเล่า แล้วขึ้นเสียงสูงท้ายประโยค หรือเติม <i>-kah</i> ที่คำที่ต้องการถาม</p>",
      t: { head: ["ถาม", "ตอบ"], ms: [0, 1], rows: [
        ["Itu Ali?", "Ya, itu Ali."], ["Nasi gorengkah ini?", "Bukan, ini nasi lemak."], ["Anda tinggal di Songkhlakah?", "Tidak, saya tinggal di Satun."]] } },
    { h: "คำปฏิเสธ tidak กับ bukan", p: "<p><b><i>tidak</i></b> ปฏิเสธคำกริยาและคำคุณศัพท์ ส่วน <b><i>bukan</i></b> ปฏิเสธคำนาม</p>",
      t: { head: ["บอกเล่า", "ปฏิเสธ"], ms: [0, 1], rows: [
        ["Itu bangunan pentadbiran.", "Itu bukan bangunan pentadbiran."],
        ["Dia dekan fakulti kami.", "Dia bukan dekan fakulti kami."],
        ["Saya belajar di dewan kuliah.", "Saya tidak belajar di dewan kuliah."],
        ["Perpustakaan itu jauh.", "Perpustakaan itu tidak jauh."]] } },
    { h: "คำบอกทิศทาง (Kata Arah)", p: "<p>ใช้คู่กับ <i>di</i> (อยู่ที่) หรือ <i>ke</i> (ไปยัง)</p>",
      t: { head: ["Kata arah", "ความหมาย", "ตัวอย่าง"], ms: [0, 2], rows: [
        ["atas / bawah", "บน / ล่าง", "Pejabat dekan di atas bangunan itu."],
        ["depan / hadapan", "หน้า", "Perpustakaan di hadapan Fakulti Sains."],
        ["belakang", "หลัง", "Asrama di belakang bangunan pentadbiran."],
        ["dalam / luar", "ใน / นอก", "Pelajar berkumpul di luar dewan kuliah."],
        ["kiri / kanan", "ซ้าย / ขวา", "Fakulti Ekonomi di sebelah kanan."],
        ["utara / selatan / timur / barat", "เหนือ / ใต้ / ตะวันออก / ตะวันตก", "Asrama di bahagian utara universiti."]] } }
  ],
  idioms: [
    ["kutu buku", "หนอนหนังสือ", "Wanisa seorang kutu buku, dia selalu berada di perpustakaan.", "วานิสาเป็นหนอนหนังสือ เธออยู่ที่ห้องสมุดเสมอ"],
    ["buah fikiran", "ความคิดเห็น ข้อเสนอแนะ", "Pensyarah itu meminta buah fikiran daripada pelajar.", "อาจารย์ท่านนั้นขอความคิดเห็นจากนิสิต"]
  ],
  culture: "<p>“ปาริชาต” เป็นชื่อต้นไม้ประจำมหาวิทยาลัยทักษิณ และเป็นที่มาของชื่ออาคารและหอพักหลายแห่ง ลองคิดดูว่าในมหาวิทยาลัยของมาเลเซีย เช่น <i>Universiti Malaya</i> หรือ <i>UPSI</i> มีสัญลักษณ์อะไรที่มีความหมายคล้ายกันบ้าง</p>",
  exercises: [
    { type: "fill", title: "เติม tidak หรือ bukan", items: [
      { q: "Encik Ahmad ____ pensyarah Fakulti Sains. Dia pensyarah Fakulti Undang-undang.", a: ["bukan"] },
      { q: "Wanisa ____ belajar di Fakulti Perubatan.", a: ["tidak"] },
      { q: "Bangunan itu ____ tinggi, tetapi sangat besar.", a: ["tidak"] },
      { q: "Ini ____ bilik kakitangan. Ini bilik kuliah.", a: ["bukan"] },
      { q: "Perpustakaan universiti kami ____ jauh dari asrama.", a: ["tidak"] },
      { q: "Saya ____ tahu Fakulti Sains Komputer di sebelah mana.", a: ["tidak"] }
    ]},
    { type: "match", title: "จับคู่ชื่อคณะกับความหมาย", pairs: [
      ["Kejuruteraan", "วิศวกรรมศาสตร์"], ["Kejururawatan", "พยาบาลศาสตร์"], ["Pendidikan", "ศึกษาศาสตร์"],
      ["Undang-undang", "นิติศาสตร์"], ["Kesihatan Awam", "สาธารณสุขศาสตร์"]] }
  ]
},
{
  no: 6, ms: "Nombor", th: "จำนวนนับ",
  clos: ["CLO1", "CLO2", "CLO4"], tool: "number",
  goals: [
    "บอกจำนวนนับภาษามลายูตั้งแต่ 0 ถึงหลักล้านได้",
    "ใช้กฎ <i>belas, puluh, ratus, ribu, juta</i> สร้างคำบอกจำนวนได้",
    "ใช้ลักษณนาม (<i>penjodoh bilangan</i>) ให้เหมาะกับคำนาม",
    "ถาม–ตอบเรื่องจำนวนและราคาในสถานการณ์ซื้อขายได้อย่างสุภาพ"
  ],
  scene: "สมชาย (Somchai) ไปซื้อผลไม้ที่ตลาดกับป้าอามีนะห์ (Makcik Aminah)",
  dialog: [
    ["Makcik Aminah", "Selamat pagi. Nak beli apa?", "สวัสดีค่ะ จะซื้ออะไรดีคะ"],
    ["Somchai", "Selamat pagi, Makcik. Ada mangga dan pisang tak?", "สวัสดีครับป้า มีมะม่วงกับกล้วยไหมครับ"],
    ["Makcik Aminah", "Ada. Mangga lima ringgit sekilo. Pisang tiga ringgit sepuluh biji.", "มีค่ะ มะม่วงกิโลละ 5 ริงกิต กล้วย 10 ลูก 3 ริงกิต"],
    ["Somchai", "Baik, Makcik. Saya nak dua kilo mangga dan dua puluh biji pisang.", "ได้ครับป้า ผมขอมะม่วง 2 กิโล และกล้วย 20 ลูกครับ"],
    ["Makcik Aminah", "Baik. Semuanya enam belas ringgit.", "ได้ค่ะ ทั้งหมด 16 ริงกิต"],
    ["Somchai", "Ini wang saya, dua puluh ringgit.", "นี่เงินครับ 20 ริงกิต"],
    ["Makcik Aminah", "Ini baki awak, empat ringgit. Terima kasih.", "นี่เงินทอน 4 ริงกิตค่ะ ขอบคุณค่ะ"],
    ["Somchai", "Sama-sama, Makcik. Selamat tinggal.", "ยินดีครับป้า ลาก่อนครับ"]
  ],
  vocab: [{ g: "คำศัพท์จากบทสนทนา", items: [
    ["nombor", "ตัวเลข จำนวน"], ["kosong / sifar", "ศูนย์"], ["beli", "ซื้อ"], ["jual", "ขาย"], ["harga", "ราคา"],
    ["ringgit", "ริงกิต (สกุลเงินมาเลเซีย)"], ["sekilo", "หนึ่งกิโลกรัม"], ["biji", "ลูก เม็ด", "ลักษณนาม"],
    ["semua", "ทั้งหมด"], ["wang / duit", "เงิน"], ["baki", "เงินทอน ส่วนที่เหลือ"], ["mangga", "มะม่วง"],
    ["pisang", "กล้วย"], ["berapa", "เท่าไร กี่"], ["nak", "จะ อยาก", "ภาษาพูด ย่อจาก hendak"]] },
    { g: "เลข 0–10", items: [
    ["kosong", "0"], ["satu", "1"], ["dua", "2"], ["tiga", "3"], ["empat", "4"], ["lima", "5"],
    ["enam", "6"], ["tujuh", "7"], ["lapan", "8"], ["sembilan", "9"], ["sepuluh", "10"]] }],
  grammar: [
    { h: "11–19 ใช้ belas", p: "<p>รูปแบบ [เลขหลักหน่วย] + <i>belas</i> ยกเว้น 11 ใช้ <i>se-</i> แทน <i>satu</i>: <i>sebelas</i> (11) <i>dua belas</i> (12) <i>lima belas</i> (15) <i>sembilan belas</i> (19)</p>" },
    { h: "หลักสิบ ใช้ puluh", p: "<p>รูปแบบ [เลข] + <i>puluh</i> + [หลักหน่วย]: <i>dua puluh satu</i> (21) <i>empat puluh lima</i> (45) <i>sembilan puluh sembilan</i> (99)</p>" },
    { h: "ร้อย พัน หมื่น แสน ล้าน", p: "<p>ใช้ <i>se-</i> แทน <i>satu</i> เมื่อเป็นหนึ่งของหน่วยนั้น: <i>seratus, seribu, sejuta</i> หลักการวางคล้ายภาษาไทยมาก</p>",
      t: { head: ["หน่วย", "ตัวอย่าง 1", "ตัวอย่าง 2"], ms: [1, 2], rows: [
        ["ratus (ร้อย)", "100 = seratus", "256 = dua ratus lima puluh enam"],
        ["ribu (พัน)", "1,000 = seribu", "5,432 = lima ribu empat ratus tiga puluh dua"],
        ["puluh ribu (หมื่น)", "10,000 = sepuluh ribu", "50,000 = lima puluh ribu"],
        ["ratus ribu (แสน)", "100,000 = seratus ribu", "300,000 = tiga ratus ribu"],
        ["juta (ล้าน)", "1,000,000 = sejuta", "2,000,000 = dua juta"]] } },
    { h: "เลขลำดับที่", p: "<p><i>ke-</i> + ตัวเลข ยกเว้นที่หนึ่งใช้ <i>pertama</i>: <i>pertama, kedua, ketiga, keempat, kelima</i> … เช่น <i>anak yang pertama</i> (ลูกคนแรก)</p>" },
    { h: "ลักษณนาม (Penjodoh Bilangan)", t: { head: ["ลักษณนาม", "ใช้กับ", "ตัวอย่าง"], ms: [0, 2], rows: [
      ["orang", "คน", "lima orang pelajar"], ["ekor", "สัตว์", "tiga ekor kucing"], ["buah", "สิ่งของขนาดใหญ่ บ้าน รถ หนังสือ", "dua buah rumah"],
      ["biji", "ผลไม้ ของกลม ๆ เล็ก ๆ", "sepuluh biji telur"], ["helai", "ของแบนบาง ผืน แผ่น", "dua helai kertas"], ["batang", "ของทรงยาว", "lima batang pensel"]] } },
    { h: "ถามจำนวนและราคาด้วย berapa", ex: [
      ["Berapa harganya?", "ราคาเท่าไร"], ["Berapa harga mangga sekilo?", "มะม่วงกิโลละเท่าไร"],
      ["Berapa orang dalam keluarga anda?", "ครอบครัวคุณมีกี่คน"]] }
  ],
  idioms: [
    ["empat mata", "คุยกันสองต่อสอง", "Bos nak berbincang empat mata dengan saya.", "เจ้านายอยากคุยกับฉันสองต่อสอง"],
    ["seribu satu", "มากมายนับไม่ถ้วน", "Dia ada seribu satu alasan untuk tidak datang.", "เขามีข้ออ้างร้อยแปดที่จะไม่มา"]
  ],
  exercises: [
    { type: "fill", title: "เขียนตัวเลขเป็นภาษามลายู", items: [
      { q: "7", a: ["tujuh"] }, { q: "15", a: ["lima belas"] }, { q: "23", a: ["dua puluh tiga"] }, { q: "46", a: ["empat puluh enam"] },
      { q: "100", a: ["seratus"] }, { q: "256", a: ["dua ratus lima puluh enam"] }, { q: "1,000", a: ["seribu"] },
      { q: "5,432", a: ["lima ribu empat ratus tiga puluh dua"] }
    ]},
    { type: "fill", title: "ตอบคำถามจากบทสนทนา", items: [
      { q: "Berapa harga mangga sekilo?", a: ["lima ringgit", "RM5", "5 ringgit"] },
      { q: "Somchai nak beli berapa kilo mangga?", a: ["dua kilo", "2 kilo"] },
      { q: "Somchai nak beli berapa biji pisang?", a: ["dua puluh biji", "20 biji"] },
      { q: "Berapa baki yang Somchai dapat?", a: ["empat ringgit", "4 ringgit", "RM4"] }
    ]},
    { type: "fill", title: "เติมลักษณนาม", lead: "เลือกจาก orang, ekor, biji, batang", items: [
      { q: "Ada lima ____ pelajar dalam bilik itu.", a: ["orang"] },
      { q: "Ibu membeli tiga ____ ikan di pasar.", a: ["ekor"] },
      { q: "Saya ada dua ____ kucing di rumah.", a: ["ekor"] },
      { q: "Dia membeli sepuluh ____ telur.", a: ["biji"] },
      { q: "Ayah menanam lima ____ pokok mangga.", a: ["batang"] }
    ]}
  ]
}
);
