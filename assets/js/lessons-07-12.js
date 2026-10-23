/* บทที่ 7–12 (โครงสร้างข้อมูลเหมือน lessons-01-06.js) */
window.LESSONS.push(
{
  no: 7, ms: "Hari Bulan", th: "การบอกวัน เดือน และปี",
  clos: ["CLO1", "CLO2"], tool: "date",
  goals: [
    "บอกชื่อวันทั้ง 7 วันและชื่อเดือนทั้ง 12 เดือนเป็นภาษามลายูได้",
    "ถาม–ตอบเกี่ยวกับวัน เดือน ปี โดยใช้ <i>semalam, hari ini, besok, lusa</i> ได้",
    "แยกสกรรมกริยาและอกรรมกริยาในประโยคได้",
    "เขียนและอ่านวันที่ตามรูปแบบภาษามลายูได้"
  ],
  scene: "สมชาย (Somchai) และสุเฟียน (Sufian) ถามตอบกันเรื่องวันในสัปดาห์",
  dialog: [
    ["Somchai", "Sufian, hari ini hari apa?", "สุเฟียน วันนี้วันอะไร"],
    ["Sufian", "Hari ini hari Isnin.", "วันนี้วันจันทร์"],
    ["Somchai", "Semalam hari apa?", "เมื่อวานวันอะไร"],
    ["Sufian", "Semalam hari Ahad. Somchai, tahukah seminggu ada berapa hari?", "เมื่อวานวันอาทิตย์ สมชาย รู้ไหมว่าหนึ่งสัปดาห์มีกี่วัน"],
    ["Somchai", "Ya. Seminggu ada tujuh hari.", "รู้สิ หนึ่งสัปดาห์มีเจ็ดวัน"],
    ["Sufian", "Apakah tujuh hari itu?", "เจ็ดวันนั้นมีอะไรบ้าง"],
    ["Somchai", "Hari Ahad, Isnin, Selasa, Rabu, Khamis, Jumaat dan hari Sabtu.", "วันอาทิตย์ จันทร์ อังคาร พุธ พฤหัสบดี ศุกร์ และวันเสาร์"],
    ["Sufian", "Baik. Kalau hari ini hari Selasa, besok hari apa?", "ดี ถ้าวันนี้วันอังคาร พรุ่งนี้วันอะไร"],
    ["Somchai", "Besok hari Rabu.", "พรุ่งนี้วันพุธ"],
    ["Sufian", "Bagus!", "เยี่ยม"]
  ],
  vocab: [
    { g: "ชื่อวัน (Hari)", items: [
      ["Ahad", "วันอาทิตย์"], ["Isnin", "วันจันทร์"], ["Selasa", "วันอังคาร"], ["Rabu", "วันพุธ"],
      ["Khamis", "วันพฤหัสบดี"], ["Jumaat", "วันศุกร์"], ["Sabtu", "วันเสาร์"]] },
    { g: "ชื่อเดือน (Bulan)", items: [
      ["Januari", "มกราคม"], ["Februari", "กุมภาพันธ์"], ["Mac", "มีนาคม"], ["April", "เมษายน"], ["Mei", "พฤษภาคม"], ["Jun", "มิถุนายน"],
      ["Julai", "กรกฎาคม"], ["Ogos", "สิงหาคม"], ["September", "กันยายน"], ["Oktober", "ตุลาคม"], ["November", "พฤศจิกายน"], ["Disember", "ธันวาคม"]] },
    { g: "คำบอกเวลา", items: [
      ["hari ini", "วันนี้"], ["semalam", "เมื่อวาน"], ["kelmarin", "เมื่อวานซืน"], ["besok / esok", "พรุ่งนี้"], ["lusa", "มะรืนนี้"],
      ["minggu", "สัปดาห์"], ["seminggu", "หนึ่งสัปดาห์"], ["bulan ini", "เดือนนี้"], ["bulan depan", "เดือนหน้า"], ["tahun", "ปี"]] }
  ],
  grammar: [
    { h: "คำกริยา (Kata Kerja)", p: "<p>คำกริยาแบ่งเป็น 2 ชนิด <b>สกรรมกริยา</b> (<i>kata kerja transitif</i>) ต้องมีกรรมมารองรับ และ <b>อกรรมกริยา</b> (<i>kata kerja tak transitif</i>) ไม่ต้องมีกรรม</p>",
      t: { head: ["ชนิด", "ประโยค", "ความหมาย"], ms: [1], rows: [
        ["สกรรมกริยา", "Saya membeli baju.", "ฉันซื้อเสื้อ"], ["สกรรมกริยา", "Adik makan roti.", "น้องกินโรตี"],
        ["สกรรมกริยา", "Ali minum susu.", "อาลีดื่มนม"], ["อกรรมกริยา", "Adik dia menangis.", "น้องของเขาร้องไห้"],
        ["อกรรมกริยา", "Mereka sedang menyanyi.", "พวกเขากำลังร้องเพลง"], ["อกรรมกริยา", "Mali bercakap kuat.", "มาลีพูดเสียงดัง"]] } },
    { h: "การเขียนและอ่านวันที่", p: "<p>เรียง: <b>วัน</b> → <b>วันที่</b> + <i>hb</i> (ย่อจาก <i>hari bulan</i>) → <b>ชื่อเดือน</b> → <b>ปีคริสต์ศักราช</b></p>",
      ex: [["Rabu, 19 hb April 2011", "เขียนแบบนี้"], ["Rabu sembilan belas hari bulan April tahun dua ribu sebelas", "อ่านแบบนี้"]] }
  ],
  idioms: [
    ["mandi kerbau", "อาบน้ำลวก ๆ ไม่สะอาด", "Budak yang nakal itu suka mandi kerbau di sungai.", "เด็กซนคนนั้นชอบอาบน้ำลวก ๆ ในแม่น้ำ"],
    ["orang gaji", "คนรับใช้ ลูกจ้าง", "Orang gaji Encik Hasan sangat rajin.", "คนรับใช้ของคุณฮาซันขยันมาก"]
  ],
  exercises: [
    { type: "fill", title: "ตอบคำถาม", items: [
      { q: "Hari ini hari Rabu, semalam hari apa?", a: ["Selasa", "hari Selasa", "semalam hari Selasa"] },
      { q: "Hari ini hari Khamis, besok hari apa?", a: ["Jumaat", "hari Jumaat", "besok hari Jumaat"] },
      { q: "Besok hari Isnin, lusa hari apa?", a: ["Selasa", "hari Selasa", "lusa hari Selasa"] },
      { q: "Bulan ini Oktober, bulan depan bulan apa?", a: ["November", "bulan November"] }
    ]},
    { type: "fill", title: "เขียนวันที่", lead: "22 กุมภาพันธ์ 2015 ตรงกับวันอาทิตย์ เขียนตามรูปแบบภาษามลายู", items: [
      { q: "เขียนว่า", a: ["Ahad, 22 hb Februari 2015", "Ahad 22 hb Februari 2015"] },
      { q: "อ่านว่า", a: ["Ahad dua puluh dua hari bulan Februari tahun dua ribu lima belas"] }
    ]},
    { type: "mc", title: "สกรรมกริยาหรืออกรรมกริยา", items: [
      { q: "<i>Adik makan roti.</i> คำกริยาในประโยคนี้เป็น", o: ["สกรรมกริยา", "อกรรมกริยา"], a: 0 },
      { q: "<i>Mereka sedang menyanyi.</i> คำกริยาในประโยคนี้เป็น", o: ["สกรรมกริยา", "อกรรมกริยา"], a: 1 },
      { q: "<i>Saya membeli baju.</i> คำกริยาในประโยคนี้เป็น", o: ["สกรรมกริยา", "อกรรมกริยา"], a: 0 }
    ]}
  ]
},
{
  no: 8, ms: "Jam dan Waktu", th: "นาฬิกาและเวลา",
  clos: ["CLO1", "CLO2", "CLO4"], tool: "time",
  goals: [
    "บอกช่วงเวลาในหนึ่งวัน <i>pagi, tengah hari, petang, malam, tengah malam</i> ได้",
    "ใช้คำ <i>pukul</i> และ <i>jam</i> บอกเวลาได้เหมาะสม",
    "อ่านและเขียนเวลาแบบเต็มชั่วโมง ครึ่งชั่วโมง และนาทีย่อยได้",
    "ถาม–ตอบเรื่องตารางเวลาประจำวันได้อย่างสุภาพ"
  ],
  scene: "นูรไลลา (Nurlaila) และโรสิตา (Rosita) นิสิตชั้นปีที่ 1 ถามตอบเรื่องตารางเวลาในแต่ละวัน",
  dialog: [
    ["Nurlaila", "Rosita, saudari bangun pada pukul berapa?", "โรสิตา คุณตื่นนอนตอนกี่โมงคะ"],
    ["Rosita", "Saya bangun pada pukul lima setengah pagi. Saya sembahyang subuh.", "ฉันตื่นตีห้าครึ่งค่ะ แล้วละหมาดซุบฮิ"],
    ["Nurlaila", "Pukul berapakah saudari pergi ke universiti?", "คุณไปมหาวิทยาลัยกี่โมงคะ"],
    ["Rosita", "Saya pergi ke universiti pada pukul tujuh lima puluh minit pagi.", "ฉันไปมหาวิทยาลัยเจ็ดโมงห้าสิบนาทีค่ะ"],
    ["Nurlaila", "Saudari mula belajar pada pukul berapa?", "คุณเริ่มเรียนกี่โมงคะ"],
    ["Rosita", "Saya mula belajar pada pukul lapan setengah pagi.", "ฉันเริ่มเรียนแปดโมงครึ่งค่ะ"],
    ["Nurlaila", "Saudari belajar hingga pukul berapa?", "คุณเรียนถึงกี่โมงคะ"],
    ["Rosita", "Saya belajar hingga pukul empat setengah petang.", "ฉันเรียนถึงสี่โมงครึ่งเย็นค่ะ"],
    ["Nurlaila", "Berapa jamkah saudari belajar dalam sehari?", "วันหนึ่งคุณเรียนกี่ชั่วโมงคะ"],
    ["Rosita", "Saya belajar lapan jam sehari.", "ฉันเรียนวันละแปดชั่วโมงค่ะ"]
  ],
  vocab: [
    { g: "เวลาและกิจวัตร", items: [
      ["bangun", "ตื่นนอน"], ["pukul", "ตี (ใช้บอกเวลา)"], ["sembahyang", "ละหมาด"], ["pergi", "ไป"], ["belajar", "เรียน"],
      ["mula", "เริ่ม"], ["jam", "นาฬิกา ชั่วโมง"], ["minit", "นาที"], ["saat", "วินาที"], ["setengah", "ครึ่ง"],
      ["sesuku", "หนึ่งในสี่ (15 นาที)"], ["tiga suku", "สามในสี่ (45 นาที)"], ["hingga", "จนถึง"], ["sehari", "หนึ่งวัน วันละ"]] },
    { g: "นาฬิกา", items: [
      ["jam tangan", "นาฬิกาข้อมือ"], ["jam dinding", "นาฬิกาติดผนัง"], ["jam kejut", "นาฬิกาปลุก"],
      ["jarum pendek", "เข็มสั้น (ชั่วโมง)"], ["jarum panjang", "เข็มยาว (นาที)"], ["jarum kecil", "เข็มเล็ก (วินาที)"],
      ["waktu siang", "เวลากลางวัน"], ["waktu malam", "เวลากลางคืน"], ["tengah malam", "เที่ยงคืน"]] }
  ],
  grammar: [
    { h: "pukul และ jam", p: "<p>ธรรมเนียมมลายูนับเวลาเป็นสองผลัด ผลัดละ 12 ชั่วโมง คือ <i>waktu siang</i> และ <i>waktu malam</i> ใช้ <i>pukul</i> นำหน้าตัวเลขเมื่อบอกเวลา ส่วน <i>jam</i> แปลว่านาฬิกา และเป็นลักษณนามแปลว่าชั่วโมง เช่น <i>tiga jam</i> (สามชั่วโมง)</p><div class=\"note\"><p>คำว่า <i>pukul</i> (ตี) คล้ายการบอกเวลาแบบไทยถิ่นใต้ที่ใช้ “ตี” (ตีเจ็ด ตีแปด) และ <i>jam</i> ใกล้เคียงกับคำว่า “ยาม” ในภาษาไทย</p></div>" },
    { h: "ช่วงเวลาในหนึ่งวัน", t: { head: ["ช่วงเวลา", "เวลา", "ความหมาย"], ms: [0], rows: [
      ["pagi", "01.00–11.59 น.", "เช้า"], ["tengah hari", "12.00–13.59 น.", "เที่ยง"], ["petang", "14.00–18.59 น.", "บ่าย เย็น"],
      ["malam", "19.00–23.59 น.", "กลางคืน"], ["tengah malam", "24.00–00.59 น.", "เที่ยงคืน"]] } },
    { h: "การอ่านเวลา", p: "<p>15 นาทีนิยมพูดว่า <i>sesuku</i> 30 นาทีพูดว่า <i>setengah</i> และ 45 นาทีพูดว่า <i>tiga suku</i></p>",
      t: { head: ["เวลา", "ภาษามลายู"], ms: [1], say: 1, rows: [
        ["06.00", "pukul enam pagi"], ["11.25", "pukul sebelas dua puluh lima minit pagi"], ["12.00", "pukul dua belas tengah hari"],
        ["10.15", "pukul sepuluh sesuku pagi"], ["14.45", "pukul dua tiga suku petang"], ["22.30", "pukul sepuluh setengah malam"],
        ["24.00", "pukul dua belas tengah malam"]] } }
  ],
  idioms: [
    ["berat mata", "ง่วงนอน", "Kalau anda berasa berat mata, lebih baik anda tidur.", "ถ้าคุณรู้สึกง่วง ก็ไปนอนเสียดีกว่า"],
    ["berat lidah", "คนไม่ค่อยพูด", "Gadis itu berat lidah, apabila ditanya barulah dia menjawab.", "หญิงสาวคนนั้นไม่ค่อยพูด ถูกถามจึงจะตอบ"]
  ],
  exercises: [
    { type: "time", title: "เขียนคำอ่านเวลาเป็นภาษามลายู", lead: "พิมพ์ได้ทั้งแบบใช้ sesuku/setengah/tiga suku หรือแบบบอกนาทีเต็ม",
      items: ["06:45", "08:15", "09:30", "12:10", "15:55", "17:35", "19:40", "21:18", "23:57", "24:00"] }
  ]
},
{
  no: 9, ms: "Keluarga Kami", th: "ครอบครัวของเรา",
  clos: ["CLO1", "CLO2", "CLO3", "CLO4"],
  goals: [
    "บอกคำเรียกสมาชิกในครอบครัวและเครือญาติได้",
    "เปรียบเทียบระบบเครือญาติมลายูกับไทยได้",
    "ใช้คำบุพบท <i>di, ke, dari, daripada, dengan</i> ได้ถูกต้อง",
    "ใช้คำเรียกขาน แนะนำครอบครัว ถามอาชีพ และถามอายุได้อย่างสุภาพ"
  ],
  scene: "สุเฟียน (Sufian) และนูรไลลา (Nurlaila) พบกันในงานวันครอบครัว สังเกตคำเรียกขาน Encik และ Cik",
  dialog: [
    ["Sufian", "Selamat petang, Cik Nurlaila.", "สวัสดีตอนเย็นครับ คุณนูรไลลา"],
    ["Nurlaila", "Selamat petang, Encik Sufian. Encik datang seorangkah?", "สวัสดีค่ะ คุณสุเฟียน มาคนเดียวหรือคะ"],
    ["Sufian", "Tidak, saya datang bersama isteri dan anak-anak saya. Hari ini hari keluarga, bukan?", "ไม่ครับ ผมมากับภรรยาและลูก ๆ วันนี้วันครอบครัวใช่ไหมครับ"],
    ["Nurlaila", "Ya, betul. Maafkan saya, sekarang sudah berapa orang cahaya mata?", "ใช่ค่ะ ขอโทษนะคะ ตอนนี้มีลูกกี่คนแล้วคะ"],
    ["Sufian", "Kami baru dapat dua orang cahaya mata, seorang anak perempuan dan seorang anak lelaki. Cik Nurlaila, bolehkah saya bertanya?", "เรามีลูกสองคนครับ ลูกสาวหนึ่งลูกชายหนึ่ง คุณนูรไลลา ผมขอถามอะไรหน่อยได้ไหมครับ"],
    ["Nurlaila", "Tentu sahaja boleh. Apanya?", "ได้แน่นอนค่ะ เรื่องอะไรคะ"],
    ["Sufian", "Saya selalu nampak cik ke mana-mana seorang sahaja. Cik Nurlaila tidak ada adik-beradikkah?", "ผมเห็นคุณไปไหนมาไหนคนเดียวเสมอ คุณไม่มีพี่น้องหรือครับ"],
    ["Nurlaila", "Ada. Saya ada seorang adik lelaki dan dua orang kakak. Mereka semua tinggal di kampung bersama dengan ibu bapa saya.", "มีค่ะ ฉันมีน้องชายหนึ่งคนและพี่สาวสองคน ทุกคนอยู่บ้านเกิดกับพ่อแม่ค่ะ"],
    ["Sufian", "Baguslah. Kedua-dua orang tua cik tidak begitu sunyi. Isteri dan anak-anak saya sudah datang. Saya minta diri dulu, ya.", "ดีจังครับ พ่อแม่ของคุณคงไม่เหงา ภรรยาและลูกผมมาแล้ว ผมขอตัวก่อนนะครับ"],
    ["Nurlaila", "Silakan. Berjumpa lagi.", "เชิญค่ะ แล้วพบกันใหม่"]
  ],
  vocab: [
    { g: "เครือญาติ", items: [
      ["bapa / ayah", "พ่อ"], ["ibu / emak", "แม่"], ["anak", "ลูก"], ["datuk", "ปู่ ตา"], ["nenek", "ย่า ยาย"],
      ["cucu", "หลาน (ลูกของลูก)"], ["cicit", "เหลน"], ["abang", "พี่ชาย"], ["kakak", "พี่สาว"], ["adik", "น้อง"],
      ["suami", "สามี"], ["isteri", "ภรรยา"], ["sepupu", "ลูกพี่ลูกน้อง"], ["anak saudara", "หลาน (ลูกของพี่น้อง)"],
      ["emak saudara", "ป้า น้า อา (หญิง)"], ["bapa saudara", "ลุง น้า อา (ชาย)"], ["ibu / bapa mentua", "แม่ / พ่อตาหรือแม่ / พ่อสามี"],
      ["menantu", "ลูกเขย ลูกสะใภ้"], ["cahaya mata", "ลูก", "สำนวนสุภาพ แปลตรงว่า แสงแห่งดวงตา"], ["adik-beradik", "พี่น้อง"]] },
    { g: "คำเรียกขาน (Kata Panggilan)", items: [
      ["Encik", "นาย คุณ (ผู้ชาย)"], ["Cik", "นางสาว คุณ (ผู้หญิง)"], ["Puan", "นาง คุณ (หญิงที่แต่งงานแล้ว)"],
      ["Tuan", "ท่าน (ชายที่มีตำแหน่งสูง)"], ["saudara / saudari", "คุณ (ชาย / หญิง) เป็นทางการ"],
      ["Pak Cik / Mak Cik", "ลุง / ป้า"], ["abang (bang) / kakak (kak)", "พี่ชาย / พี่สาว ใช้เรียกรุ่นพี่"]] },
    { g: "อาชีพ (Pekerjaan)", items: [
      ["guru / cikgu", "ครู"], ["pensyarah", "อาจารย์"], ["doktor", "แพทย์"], ["jururawat", "พยาบาล"], ["peguam", "ทนายความ"],
      ["jurutera", "วิศวกร"], ["polis", "ตำรวจ"], ["askar", "ทหาร"], ["peniaga", "นักธุรกิจ พ่อค้า"], ["petani", "ชาวนา เกษตรกร"],
      ["nelayan", "ชาวประมง"], ["pengurus", "ผู้จัดการ"]] },
    { g: "ลักษณะของคน", items: [
      ["tinggi", "สูง"], ["rendah / pendek", "เตี้ย"], ["gemuk", "อ้วน"], ["kurus", "ผอม"], ["cantik", "สวย"], ["kacak", "หล่อ"],
      ["baik hati", "ใจดี"], ["peramah", "เป็นมิตร"], ["rajin", "ขยัน"], ["malas", "ขี้เกียจ"]] }
  ],
  grammar: [
    { h: "คำบุพบท (Kata Sendi Nama)", t: { head: ["คำ", "ใช้เมื่อ", "ตัวอย่าง"], ms: [0, 2], rows: [
      ["di", "บอกสถานที่อยู่", "Saya belajar di Universiti Thaksin."],
      ["ke", "บอกจุดหมายที่ไป", "Saya pergi ke rumah nenek."],
      ["dari", "บอกจุดเริ่มต้น สถานที่ที่มา", "Saya datang dari Bangkok."],
      ["daripada", "บอกที่มาจากบุคคล หรือใช้เปรียบเทียบ", "Surat itu daripada kakak saya."],
      ["dengan", "ร่วมกับ หรือด้วยวิธีใด", "Saya pergi makan dengan kawan-kawan."]] } },
    { h: "", p: "<div class=\"note\"><p><i>dari</i> ใช้กับสถานที่และเวลา ส่วน <i>daripada</i> ใช้กับบุคคล สิ่งของ หรือการเปรียบเทียบ เช่น <i>Ali lebih tinggi daripada Ahmad.</i> (อาลีสูงกว่าอัฮมัด)</p></div>" },
    { h: "ถามอาชีพและอายุ", ex: [
      ["Apa pekerjaan anda?", "คุณมีอาชีพอะไร"], ["Saya seorang guru.", "ฉันเป็นครู"], ["Anda bekerja di mana?", "คุณทำงานที่ไหน"],
      ["Berapa umur anda?", "คุณอายุเท่าไร"], ["Umur saya dua puluh tahun.", "ฉันอายุยี่สิบปี"], ["Ayah saya tinggi dan baik hati.", "พ่อของฉันสูงและใจดี"]] }
  ],
  idioms: [
    ["asam garam", "ประสบการณ์ชีวิต", "Datuk saya telah banyak merasa asam garam hidup.", "ปู่ของฉันผ่านประสบการณ์ชีวิตมามาก"],
    ["ibu kota", "เมืองหลวง", "Bangkok ialah ibu kota negara Thai.", "กรุงเทพฯ เป็นเมืองหลวงของประเทศไทย"]
  ],
  culture: "<p>ชาวมลายูให้ความสำคัญกับลำดับอาวุโสในครอบครัวคล้ายคนไทย และมีคำเรียกตามลำดับการเกิด เช่น <i>Pak Long</i> (ลุงคนโต) <i>Pak Ngah</i> (ลุงคนกลาง) <i>Pak Su</i> (อาคนสุดท้อง) การเรียกคนแปลกหน้าด้วยคำเรียกญาติ เช่น <i>Pak Cik</i> <i>Mak Cik</i> <i>Kak</i> แสดงความสุภาพและความเป็นกันเอง</p>",
  exercises: [
    { type: "fill", title: "ตอบคำถามจากบทสนทนา", items: [
      { q: "Encik Sufian datang dengan siapakah?", a: ["isteri dan anak-anaknya", "isteri dan anak-anak", "dengan isteri dan anak-anaknya", "isteri dan anak-anak saya"] },
      { q: "Berapa orang cahaya mata Encik Sufian?", a: ["dua orang", "dua"] },
      { q: "Cik Nurlaila ada berapa orang kakak?", a: ["dua orang", "dua"] }
    ]},
    { type: "fill", title: "เติมคำบุพบท", lead: "เลือกจาก di, ke, dari, daripada, dengan", items: [
      { q: "Surat itu ____ kakak saya.", a: ["daripada"] },
      { q: "Somchai pergi ____ perpustakaan.", a: ["ke"] },
      { q: "Rosita tinggal ____ Asrama Parichat 3.", a: ["di"] },
      { q: "Sawitri datang ____ Pattani.", a: ["dari"] },
      { q: "Ali selalu makan tengah hari ____ isterinya.", a: ["dengan"] }
    ]},
    { type: "speak", title: "ฝึกพูด", text: "วาดผังครอบครัวของตนเอง ติดป้ายคำเรียกญาติภาษามลายู แล้วแนะนำสมาชิก 3 คนให้เพื่อนฟัง บอกอาชีพ อายุ และลักษณะ เช่น <i>Ini ayah saya. Dia seorang petani. Umurnya lima puluh tahun. Dia tinggi dan baik hati.</i>" }
  ]
},
{
  no: 10, ms: "Buah-buahan", th: "ผลไม้",
  clos: ["CLO1", "CLO2", "CLO3"],
  goals: [
    "บอกชื่อผลไม้ท้องถิ่นเป็นภาษามลายูได้",
    "บรรยายรูปทรง ลักษณะ สี และรสชาติของผลไม้ได้",
    "ใช้คำคุณศัพท์ (<i>kata adjektif</i>) ขยายคำนามได้",
    "ต่อรองราคาผลไม้อย่างสุภาพได้"
  ],
  scene: "วันหนึ่ง อลิซา (Alisa) ไปตลาดนัดกลางคืนเพื่อซื้อผลไม้ท้องถิ่น",
  dialog: [
    ["Alisa", "Pak cik, berapa harga sebiji cempedak?", "ลุงคะ จำปาดะลูกละเท่าไรคะ"],
    ["Pak cik", "RM5.50 sahaja.", "5.50 ริงกิตเท่านั้น"],
    ["Alisa", "Ada berapa biji di dalam bakul itu, pak cik?", "ในตะกร้านั้นมีกี่ลูกคะลุง"],
    ["Pak cik", "Di dalam bakul ada tiga biji. Harganya lebih murah.", "ในตะกร้ามีสามลูก ราคาถูกกว่า"],
    ["Alisa", "Murah! Bagus juga tu.", "ถูกจัง ดีเหมือนกันค่ะ"],
    ["Pak cik", "Awak hendak beli berapa biji?", "หนูจะซื้อกี่ลูก"],
    ["Alisa", "Saya mahu beli sebakul cempedak.", "หนูจะซื้อจำปาดะหนึ่งตะกร้าค่ะ"],
    ["Pak cik", "Wah! Banyaknya.", "ว้าว เยอะจัง"],
    ["Alisa", "Boleh kurangkan harganya, pak cik?", "ลดราคาได้ไหมคะลุง"],
    ["Pak cik", "Boleh, apa salahnya. Saya bagi semua RM15.", "ได้สิ ไม่เป็นไร ลุงให้ทั้งหมด 15 ริงกิต"],
    ["Alisa", "OK. Pak cik, berapa pula harga sekilo buah rambutan?", "โอเคค่ะ แล้วเงาะกิโลละเท่าไรคะลุง"],
    ["Pak cik", "RM3.50, tetapi kalau awak ambil dua kilo, saya boleh kurangkan harganya kepada RM6.", "3.50 ริงกิต แต่ถ้าเอาสองกิโล ลุงลดให้เหลือ 6 ริงกิต"],
    ["Alisa", "Bolehlah, pak cik. Beri saya dua kilo.", "ได้ค่ะลุง เอาสองกิโลค่ะ"]
  ],
  vocab: [
    { g: "ชื่อผลไม้", items: [
      ["durian", "ทุเรียน"], ["manggis", "มังคุด"], ["rambutan", "เงาะ"], ["dokong / langsat", "ลองกอง ลางสาด"], ["cempedak", "จำปาดะ"],
      ["nangka", "ขนุน"], ["mempelam / mangga", "มะม่วง"], ["betik", "มะละกอ"], ["pisang", "กล้วย"], ["nanas", "สับปะรด"],
      ["tembikai", "แตงโม"], ["jambu batu", "ฝรั่ง"], ["jambu air", "ชมพู่"], ["ciku", "ละมุด"], ["belimbing", "มะเฟือง"],
      ["kelapa muda", "มะพร้าวอ่อน"], ["laici", "ลิ้นจี่"], ["longan / mata kucing", "ลำไย"], ["limau / oren", "ส้ม"], ["anggur", "องุ่น"],
      ["epal", "แอปเปิล"], ["strawberi", "สตรอว์เบอร์รี"]] },
    { g: "รูปทรงและลักษณะ", items: [
      ["bulat", "กลม"], ["bujur", "รี ยาวรี"], ["berair", "ฉ่ำน้ำ"], ["berduri", "มีหนาม"], ["berambut", "มีขน"],
      ["berbentuk bintang", "รูปดาว"], ["bermata", "มีตา (เช่น สับปะรด)"], ["berbiji", "มีเมล็ด"], ["isi", "เนื้อ"], ["kulit", "เปลือก"]] },
    { g: "สีและรสชาติ", items: [
      ["merah", "แดง"], ["kuning", "เหลือง"], ["hijau", "เขียว"], ["ungu", "ม่วง"], ["jingga / oren", "ส้ม"], ["coklat", "น้ำตาล"],
      ["putih", "ขาว"], ["hitam", "ดำ"], ["kelabu", "เทา"], ["muda / tua", "อ่อน / เข้ม"], ["manis", "หวาน"], ["masam", "เปรี้ยว"],
      ["pahit", "ขม"], ["murah / mahal", "ถูก / แพง"]] }
  ],
  grammar: [
    { h: "คำคุณศัพท์ (Kata Adjektif)", p: "<p>คำคุณศัพท์ใช้ขยายคำนาม บอกรูปร่าง สี ขนาด หรือรสชาติ และวาง<b>หลัง</b>คำนามเหมือนภาษาไทย</p>",
      ex: [["buah manggis yang manis", "มังคุดที่หวาน"], ["Rambutan berwarna merah.", "เงาะสีแดง"], ["Betik berbentuk bujur.", "มะละกอมีรูปทรงรี"],
        ["Belimbing berbentuk bintang.", "มะเฟืองเป็นรูปดาว"], ["Durian berduri dan berbau kuat.", "ทุเรียนมีหนามและกลิ่นแรง"]] },
    { h: "การบอกสี", p: "<p>ใช้ <i>berwarna</i> + ชื่อสี และเติม <i>muda</i> (อ่อน) หรือ <i>tua</i> (เข้ม) ต่อท้ายสี เช่น <i>hijau muda</i> (เขียวอ่อน) <i>merah tua</i> (แดงเข้ม)</p>" },
    { h: "การต่อรองราคา", ex: [["Berapa harga sekilo?", "กิโลละเท่าไร"], ["Boleh kurangkan harganya?", "ลดราคาได้ไหม"], ["Mahalnya!", "แพงจัง"], ["Beri saya dua kilo.", "ขอสองกิโล"]] }
  ],
  idioms: [
    ["buku lima", "กำปั้น หมัด", "Ali suka menunjukkan buku lima apabila dia marah.", "อาลีชอบชูกำปั้นเวลาโกรธ"],
    ["buta huruf", "ไม่รู้หนังสือ", "Buta huruf bermaksud tidak tahu membaca dan menulis.", "ไม่รู้หนังสือหมายถึงอ่านไม่ออกเขียนไม่ได้"]
  ],
  culture: "<p>ภาคใต้ของไทยและมาเลเซียมีผลไม้ท้องถิ่นเหมือนกันมาก <i>durian</i> ได้ชื่อว่า “ราชาผลไม้” (<i>raja buah</i>) และ <i>manggis</i> เป็น “ราชินีผลไม้” (<i>ratu buah</i>) ตลาดนัดกลางคืน (<i>pasar malam</i>) เป็นที่ที่ฝึกต่อรองราคาได้ดีที่สุด</p>",
  exercises: [
    { type: "match", title: "จับคู่ผลไม้กับความหมาย", pairs: [["manggis", "มังคุด"], ["betik", "มะละกอ"], ["nanas", "สับปะรด"], ["tembikai", "แตงโม"], ["jambu batu", "ฝรั่ง"], ["belimbing", "มะเฟือง"]] },
    { type: "mc", title: "ตอบคำถาม", items: [
      { q: "<i>Apakah warna kulit rambutan?</i>", o: ["Kulitnya berwarna merah.", "Kulitnya berwarna ungu.", "Kulitnya berwarna putih."], a: 0, ms: true },
      { q: "<i>Bagaimanakah bentuk betik?</i>", o: ["Betik berbentuk bintang.", "Betik berbentuk bujur.", "Betik berduri."], a: 1, ms: true },
      { q: "<i>Bagaimana rasa nanas?</i>", o: ["Rasanya manis.", "Rasanya pahit.", "Rasanya masin."], a: 0, ms: true },
      { q: "ผลไม้ใดมีหนาม (<i>berduri</i>)", o: ["laici", "durian", "anggur", "epal"], a: 1, ms: true }
    ]},
    { type: "speak", title: "ฝึกพูดเป็นคู่", text: "ผลัดกันถาม–ตอบ: <i>Buah apakah yang anda suka? Apakah warnanya? Bagaimana bentuk dan rasanya?</i> แล้วแสดงบทบาทผู้ซื้อ–ผู้ขายต่อรองราคาผลไม้" }
  ]
},
{
  no: 11, ms: "Di Restoran", th: "ในภัตตาคาร",
  clos: ["CLO1", "CLO2", "CLO3", "CLO4"],
  goals: [
    "บอกชื่ออาหารและเครื่องดื่มยอดนิยมในสังคมมลายูได้",
    "สั่งอาหารและเครื่องดื่มเป็นภาษามลายูได้",
    "ใช้คำแสดงคำถามทั้ง 9 คำได้ถูกต้อง",
    "อธิบายวัฒนธรรมการบริโภคอาหารในสังคมมลายูได้"
  ],
  scene: "อัฮมัด (Ahmad) ภรรยาชื่อซาลีมะห์ (Salimah) และเพื่อนชาวญี่ปุ่นชื่อเอมิโกะ (Emiko) เข้าไปรับประทานอาหารในภัตตาคาร",
  dialog: [
    ["Ahmad", "Restoran ini agak besar dan bersih.", "ร้านนี้ค่อนข้างใหญ่และสะอาด"],
    ["Salimah", "Restoran ini juga menjual makanan Melayu, Cina dan India. Saya rasa eloklah kita makan di sini. Perut saya pun dah lapar.", "ร้านนี้ขายอาหารมลายู จีน และอินเดียด้วย ฉันว่าเรากินที่นี่ดีกว่า ท้องฉันก็หิวแล้ว"],
    ["Emiko", "Saya setuju.", "ฉันเห็นด้วย"],
    ["Ahmad", "Hendak makan apa?", "จะกินอะไรดี"],
    ["Salimah", "Saya ingin makan mi rebus masakan India.", "ฉันอยากกินหมี่ต้มแบบอินเดีย"],
    ["Emiko", "Adakah masakan India pedas?", "อาหารอินเดียเผ็ดไหม"],
    ["Salimah", "Ya, masakan India pedas.", "ใช่ อาหารอินเดียเผ็ด"],
    ["Emiko", "Macam mana dengan masakan Melayu?", "แล้วอาหารมลายูล่ะ"],
    ["Ahmad", "Masakan Melayu pun pedas juga.", "อาหารมลายูก็เผ็ดเหมือนกัน"],
    ["Emiko", "Kalau begitu, saya ingin makan masakan Cina. Tapi apakah yang sesuai untuk saya?", "ถ้าอย่างนั้นฉันขอกินอาหารจีน แต่อะไรที่เหมาะกับฉันล่ะ"],
    ["Salimah", "Nasi ayam tidak pedas. Bihun goreng Kantonis pun tidak pedas.", "ข้าวมันไก่ไม่เผ็ด เส้นหมี่ผัดกวางตุ้งก็ไม่เผ็ด"],
    ["Emiko", "Saya mahu cuba bihun goreng Kantonis.", "ฉันขอลองเส้นหมี่ผัดกวางตุ้ง"],
    ["Ahmad", "Minuman?", "เครื่องดื่มล่ะ"],
    ["Salimah", "Saya mahu teh o ais limau.", "ฉันขอชามะนาวเย็น"],
    ["Ahmad", "Mi rebus satu, bihun goreng Kantonis satu. Untuk saya nasi putih, kari ikan dan ulam. Minuman pula, teh o ais limau satu, air sirap satu.", "หมี่ต้มหนึ่ง เส้นหมี่ผัดกวางตุ้งหนึ่ง ของผมข้าวสวย แกงปลา และผักสด เครื่องดื่มมีชามะนาวเย็นหนึ่ง น้ำแดงหนึ่ง"],
    ["Salimah", "Selepas kami makan, tolong bawakan buah-buahan campuran.", "หลังเรากินเสร็จ ช่วยนำผลไม้รวมมาด้วยนะคะ"]
  ],
  vocab: [
    { g: "อาหาร (Makanan)", items: [
      ["nasi lemak", "ข้าวมันกะทิ", "อาหารประจำชาติมาเลเซีย"], ["nasi goreng", "ข้าวผัด"], ["nasi ayam", "ข้าวมันไก่"], ["mi goreng", "หมี่ผัด"],
      ["mi rebus", "หมี่ต้ม (น้ำแกงข้น)"], ["bihun", "เส้นหมี่"], ["laksa", "ลักซา ขนมจีนน้ำยา"], ["roti canai", "โรตี"],
      ["martabak", "มะตะบะ"], ["sate", "สะเต๊ะ"], ["kari ikan", "แกงปลา"], ["ulam", "ผักสด ผักเครื่องเคียง"], ["rojak", "ยำผลไม้/ผัก"],
      ["telur rebus", "ไข่ต้ม"], ["kek", "เค้ก"], ["aiskrim", "ไอศกรีม"]] },
    { g: "เครื่องดื่ม (Minuman)", items: [
      ["air", "น้ำ"], ["air sirap", "น้ำแดง"], ["teh tarik", "ชาชัก"], ["teh o", "ชาดำ (ไม่ใส่นม)"], ["ais", "น้ำแข็ง เย็น"],
      ["kopi", "กาแฟ"], ["jus oren", "น้ำส้ม"], ["susu", "นม"]] },
    { g: "คำในร้านอาหาร", items: [
      ["restoran", "ภัตตาคาร ร้านอาหาร"], ["pelayan", "พนักงานเสิร์ฟ"], ["pedas", "เผ็ด"], ["sedap", "อร่อย"], ["lapar", "หิว"], ["dahaga", "กระหายน้ำ"],
      ["masakan", "อาหาร การปรุง"], ["bersih", "สะอาด"], ["setuju", "เห็นด้วย"], ["bil", "บิล ใบเสร็จ"]] }
  ],
  grammar: [
    { h: "คำแสดงคำถาม (Kata Tanya)", t: { head: ["คำ", "ความหมาย", "ตัวอย่าง"], ms: [0, 2], rows: [
      ["apa", "อะไร", "Apakah itu?"], ["siapa", "ใคร", "Siapakah nama saudara?"], ["mengapa", "ทำไม", "Mengapakah saudari datang lewat?"],
      ["bagaimana", "อย่างไร", "Bagaimanakah keadaan kamu hari ini?"], ["berapa", "เท่าไร", "Berapakah harga barang ini?"],
      ["di mana", "ที่ไหน (อยู่)", "Di manakah kampung saudara?"], ["ke mana", "ไปที่ไหน", "Ke manakah dia pergi?"],
      ["dari mana", "มาจากไหน", "Dari manakah saudara datang?"], ["bila", "เมื่อไร", "Bilakah dia boleh datang?"]] } },
    { h: "", p: "<p>เติม <i>-kah</i> ท้ายคำแสดงคำถามเพื่อให้ประโยคคำถามสมบูรณ์และสุภาพขึ้น</p>" },
    { h: "คำบอกทิศทาง (Kata Arah)", p: "<p><i>atas</i> (บน) <i>bawah</i> (ล่าง) <i>tengah</i> (กลาง) <i>tepi</i> (ริม) <i>depan / hadapan</i> (หน้า) <i>belakang</i> (หลัง) <i>dalam</i> (ใน) <i>luar</i> (นอก) <i>kiri</i> (ซ้าย) <i>kanan</i> (ขวา) <i>utara</i> (เหนือ) <i>selatan</i> (ใต้) <i>timur</i> (ตะวันออก) <i>barat</i> (ตะวันตก)</p>",
      ex: [["Buku itu di atas meja.", "หนังสืออยู่บนโต๊ะ"], ["Adik turun ke tepi sungai.", "น้องลงไปที่ริมแม่น้ำ"]] },
    { h: "สั่งอาหาร", ex: [["Saya mahu nasi goreng satu.", "ขอข้าวผัดหนึ่งที่"], ["Tolong jangan pedas.", "ไม่เอาเผ็ดนะ"], ["Kira, bang!", "เก็บเงินด้วยครับพี่"]] }
  ],
  idioms: [
    ["anak buah", "ลูกน้อง หรือหลาน (ลูกของพี่น้อง)", "Sufian mempunyai ramai anak buah.", "สุเฟียนมีหลาน (ลูกน้อง) มากมาย"],
    ["duit kopi", "เงินใต้โต๊ะ", "Jangan beri duit kopi kepada sesiapa pun.", "อย่าให้เงินใต้โต๊ะกับใครทั้งนั้น"]
  ],
  culture: "<p>อาหารมาเลเซียสะท้อนพหุสังคม มีทั้งอาหารมลายู จีน และอินเดีย อาหารมลายูไม่ใช้เนื้อหมูและเครื่องดื่มแอลกอฮอล์ตามหลักศาสนาอิสลาม นิยมใช้กะทิ เครื่องเทศ และ <i>belacan</i> (กะปิ) ร้านแบบ <i>mamak</i> ของชาวมุสลิมเชื้อสายอินเดียเปิดถึงดึก มี <i>roti canai</i> กับ <i>teh tarik</i> เป็นเมนูคู่กัน</p>",
  exercises: [
    { type: "fill", title: "เติมคำแสดงคำถาม", items: [
      { q: "____ datang semalam? (ใคร)", a: ["Siapa", "Siapakah"] },
      { q: "Ini ____? (อะไร)", a: ["apa"] },
      { q: "Saudara berasal ____? (มาจากไหน)", a: ["dari mana"] },
      { q: "____ Yura demam? (ทำไม)", a: ["Mengapa", "Mengapakah", "Kenapa"] },
      { q: "Baju ini ____ harganya? (เท่าไร)", a: ["berapa"] },
      { q: "____ kamu datang? (เมื่อไร)", a: ["Bila", "Bilakah"] }
    ]},
    { type: "fill", title: "เติมคำบอกทิศทาง", lead: "เลือกจาก atas, belakang, depan, utara, selatan, tepi", items: [
      { q: "Jangan duduk di ____ meja. (บน)", a: ["atas"] },
      { q: "Rumah kawan saya di ____ bank. (หลัง)", a: ["belakang"] },
      { q: "Dia berdiri di ____ saya. (หน้า)", a: ["depan", "hadapan"] },
      { q: "Chiang Mai ialah wilayah di bahagian ____ Negara Thai.", a: ["utara"] },
      { q: "Songkhla ialah wilayah di bahagian ____ Negara Thai.", a: ["selatan"] },
      { q: "Di ____ jalan ada anak sungai. (ริม)", a: ["tepi"] }
    ]},
    { type: "speak", title: "บทบาทสมมติ", text: "แบ่งกลุ่ม 3 คน คนหนึ่งเป็นพนักงานเสิร์ฟ (<i>pelayan</i>) อีกสองคนเป็นลูกค้า สั่งอาหารและเครื่องดื่มอย่างละหนึ่งรายการ ถามความเผ็ด และขอเก็บเงิน" }
  ]
},
{
  no: 12, ms: "Ke Pasar Raya", th: "ไปซูเปอร์มาร์เก็ต",
  clos: ["CLO1", "CLO2", "CLO4"],
  goals: [
    "บอกชื่อสินค้าในร้านหนังสือและซูเปอร์มาร์เก็ตได้",
    "สนทนาซื้อขายและต่อรองราคาได้อย่างสุภาพ",
    "ใช้ลักษณนาม (<i>penjodoh bilangan</i>) 13 คำให้ถูกกับคำนาม",
    "บอกความแตกต่างของการใช้ลักษณนามภาษามลายูกับภาษาไทยได้"
  ],
  scene: "โรสิตา (Rosita) ไปร้านหนังสือ แล้วไปซูเปอร์มาร์เก็ตกับนูรไลลา (Nurlaila) น้องสาว",
  dialog: [
    ["Pekedai", "Sila masuk, cik.", "เชิญค่ะคุณ"],
    ["Rosita", "Di sini ada jual kamuskah? Saya hendak membeli sebuah kamus Melayu-Thai.", "ที่นี่ขายพจนานุกรมไหมคะ ฉันอยากซื้อพจนานุกรมมลายู–ไทยหนึ่งเล่ม"],
    ["Pekedai", "Inilah kamus Melayu-Thai yang paling baik. Ia disusun oleh seorang pensyarah universiti.", "นี่คือพจนานุกรมมลายู–ไทยที่ดีที่สุด เรียบเรียงโดยอาจารย์มหาวิทยาลัย"],
    ["Rosita", "Berapa harga kamus itu?", "พจนานุกรมเล่มนั้นราคาเท่าไรคะ"],
    ["Pekedai", "Dua ratus baht.", "สองร้อยบาท"],
    ["Rosita", "Tidak boleh kurang sedikitkah?", "ลดอีกนิดไม่ได้หรือคะ"],
    ["Pekedai", "Tidak boleh. Saya sudah beri cik potongan sepuluh peratus.", "ไม่ได้ค่ะ ลดให้สิบเปอร์เซ็นต์แล้ว"],
    ["Rosita", "Terima kasih.", "ขอบคุณค่ะ"],
    ["Nurlaila", "Kak Rosita perlukan troli?", "พี่โรสิตาต้องการรถเข็นไหมคะ"],
    ["Rosita", "Ya. Tolong ambilkan.", "ต้องการจ้ะ ช่วยหยิบให้หน่อย"],
    ["Nurlaila", "Kakak nak beli apa?", "พี่จะซื้ออะไรคะ"],
    ["Rosita", "Kakak nak beli susu dengan roti manis.", "พี่จะซื้อนมกับขนมปังหวาน"],
    ["Nurlaila", "Susu jenis apa? Susu tepung, susu segar atau susu pekat?", "นมแบบไหนคะ นมผง นมสด หรือนมข้น"],
    ["Rosita", "Susu tepung.", "นมผงจ้ะ"],
    ["Nurlaila", "Ila nak beli seketul sabun, sebatang berus gigi dan sebatang ubat gigi, kak.", "อีลาจะซื้อสบู่หนึ่งก้อน แปรงสีฟันหนึ่งด้าม และยาสีฟันหนึ่งหลอดค่ะพี่"],
    ["Rosita", "Ambil sahaja.", "หยิบไปเลย"],
    ["Nurlaila", "Ila akan membeli dua kilo mempelam dan sekilo anggur untuk Mak dan Ayah, ya.", "อีลาจะซื้อมะม่วงสองกิโลกับองุ่นหนึ่งกิโลให้แม่กับพ่อนะคะ"],
    ["Rosita", "Bagus. Mari kita pergi bayar di kaunter juruwang.", "ดีจ้ะ ไปจ่ายเงินที่เคาน์เตอร์แคชเชียร์กัน"]
  ],
  vocab: [
    { g: "ในซูเปอร์มาร์เก็ต", items: [
      ["pasar raya", "ซูเปอร์มาร์เก็ต"], ["troli", "รถเข็น"], ["bakul", "ตะกร้า"], ["kaunter juruwang", "เคาน์เตอร์แคชเชียร์"],
      ["resit", "ใบเสร็จ"], ["wang baki", "เงินทอน"], ["kad kredit", "บัตรเครดิต"], ["beg plastik", "ถุงพลาสติก"],
      ["potongan", "ส่วนลด"], ["peratus", "เปอร์เซ็นต์"], ["kamus", "พจนานุกรม"]] },
    { g: "สินค้า", items: [
      ["susu tepung / segar / pekat", "นมผง / นมสด / นมข้น"], ["roti", "ขนมปัง"], ["telur ayam", "ไข่ไก่"], ["gula", "น้ำตาล"],
      ["garam", "เกลือ"], ["kicap", "ซีอิ๊ว"], ["tepung", "แป้ง"], ["sos tomato", "ซอสมะเขือเทศ"], ["minyak masak", "น้ำมันพืช"],
      ["sabun", "สบู่"], ["berus gigi", "แปรงสีฟัน"], ["ubat gigi", "ยาสีฟัน"], ["bawang merah", "หอมแดง"], ["bawang putih", "กระเทียม"],
      ["halia", "ขิง"], ["sayur", "ผัก"], ["daging ayam", "เนื้อไก่"], ["udang", "กุ้ง"], ["sotong", "ปลาหมึก"], ["ikan", "ปลา"]] }
  ],
  grammar: [
    { h: "ลักษณนาม (Penjodoh Bilangan)", p: "<p>ลักษณนามวาง<b>ระหว่างตัวเลขกับคำนาม</b> ต่างจากภาษาไทยที่วางหลังตัวเลข: <i>tiga buah kereta</i> = รถ 3 คัน <i>lima ekor ikan</i> = ปลา 5 ตัว</p>",
      t: { head: ["ลักษณนาม", "ความหมาย", "ใช้กับ", "ตัวอย่าง"], ms: [0, 3], rows: [
        ["orang", "คน", "คน", "dua orang polis"], ["ekor", "ตัว", "สัตว์", "lima ekor ikan"],
        ["buah", "หลัง คัน เล่ม", "ของขนาดใหญ่ บ้าน รถ หนังสือ", "tiga buah kereta"], ["biji", "ลูก ฟอง ใบ", "ของกลม ผลไม้ ไข่", "sebiji durian"],
        ["botol", "ขวด", "ของในขวด", "dua botol air"], ["ketul", "ก้อน ชิ้น", "สบู่ น้ำแข็ง เนื้อ", "seketul sabun"],
        ["helai", "แผ่น ผืน ตัว", "กระดาษ ผ้า เสื้อ", "tiga helai baju"], ["batang", "แท่ง ด้าม ต้น", "ของทรงยาว", "sebatang pensel"],
        ["keping", "แผ่น ชิ้น", "ของแบนหนา ขนมปัง รูปภาพ", "dua keping roti"], ["pasang", "คู่ ชุด", "รองเท้า ถุงเท้า", "sepasang kasut"],
        ["tangkai", "ช่อ ก้าน", "ดอกไม้", "tiga tangkai bunga ros"], ["ulas", "พู กลีบ", "พูผลไม้", "dua ulas durian"],
        ["pucuk", "ฉบับ กระบอก", "จดหมาย อาวุธ", "sepucuk surat"]] } },
    { h: "", p: "<div class=\"note\"><p>เมื่อจำนวนเป็นหนึ่ง ให้ใช้ <i>se-</i> ติดกับลักษณนาม: <i>sebuah, seekor, sebiji, sebatang, sepasang</i></p></div>" }
  ],
  idioms: [
    ["kaki botol", "คนขี้เมา", "Menjadi kaki botol menyusahkan keluarga dan diri sendiri.", "การเป็นคนขี้เมาสร้างความลำบากให้ครอบครัวและตนเอง"],
    ["kaki lima", "ทางเท้า ฟุตบาท", "Ramai orang menunggu bas di kaki lima bangunan itu.", "มีคนมากมายรอรถเมล์บนทางเท้าหน้าอาคารนั้น"]
  ],
  exercises: [
    { type: "fill", title: "เติมลักษณนาม", lead: "เลือกจาก orang, ekor, buah, biji, batang, helai, keping, pasang", items: [
      { q: "Sawitri ada lima ____ kawan Melayu.", a: ["orang"] },
      { q: "Nurlaila ada enam ____ pensel.", a: ["batang"] },
      { q: "Somchai ada dua ____ kucing.", a: ["ekor"] },
      { q: "Encik Sufian ada dua ____ kereta.", a: ["buah"] },
      { q: "Semalam saya membeli lima ____ durian.", a: ["biji"] },
      { q: "Rosita ada tiga ____ baju.", a: ["helai"] },
      { q: "Usman makan dua ____ roti setiap pagi.", a: ["keping"] },
      { q: "Wanida membeli dua ____ kasut.", a: ["pasang"] },
      { q: "Dalam bilik ini ada lapan ____ meja.", a: ["buah"] },
      { q: "Nurnee membeli enam ____ ikan di pasar.", a: ["ekor"] }
    ]},
    { type: "speak", title: "ฝึกพูด", text: "เขียนรายการซื้อของ 5 อย่าง พร้อมจำนวนและลักษณนาม เช่น <i>seketul sabun</i> แล้วแสดงบทบาทซื้อของกับเพื่อน ถามราคาและขอส่วนลดอย่างสุภาพ" }
  ]
}
);
