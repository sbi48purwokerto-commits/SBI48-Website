/* ========================================
   SBI48 — SCHEDULE INTERACTIVE EXPERIENCE
   Features: Auto Current Date Default, 6 Team Options, 1-Center Logic, Deterministic Random
======================================== */

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTXSO4F0RGtG62vXas3tz2Y5yuxK5v-4B9zvglhinBDq7IK-a-xZo2-ZMakdgOHwNM_ScpwpCa0bHs/pub?output=csv";

const membersData = [
  // ===== TEAM SIII (25 Members) =====
  { name: "Adnan Rizky Pramudya", team: "SIII", gen: 7, dob: "18 Jan 2011", mbti: "ENFP", height: "165 cm", blood: "O", horoscope: "Capricorn", ig: "@adnan.sbi48", x: "@adnan_sbi48", image: null, jiko: "Generasi baru, semangat baru! Adnan hadir untuk mengubah dunia!" },
  { name: "Adrian Bagus Pramudya", team: "SIII", gen: 3, dob: "17 Agu 2007", mbti: "ISTP", height: "168 cm", blood: "B", horoscope: "Leo", ig: "@adrian.sbi48", x: "@adrian_sbi48", image: "Adrian_SIII.png", jiko: "Si perakit panggung yang tenang—tapi saat musik dimulai, lihat aku berubah!" },
  { name: "Akbar Firmansyah Putra Daryono", team: "SIII", gen: 1, dob: "4 Jun 2005", mbti: "INFP", height: "174 cm", blood: "O", horoscope: "Gemini", ig: "@akbar.sbi48", x: "@akbar_sbi48", image: "Akbar_SIII.png", jiko: "Dari rumus kalkulus yang rumit, sampai detak jantung kalian yang berdegup cepat karena tarianku! Hallo Aku Akbar!" },
  { name: "Aksa Bintang Mahesa", team: "SIII", gen: 7, dob: "7 Apr 2011", mbti: "ISTJ", height: "164 cm", blood: "A", horoscope: "Aries", ig: "@aksa.sbi48", x: "@aksa_sbi48", image: null, jiko: "Bintang yang siap melesat ke langit tertinggi! Aksa di sini!" },
  { name: "Arief Rahman Hakim", team: "SIII", gen: 3, dob: "29 Okt 2006", mbti: "INTJ", height: "170 cm", blood: "A", horoscope: "Scorpio", ig: "@arief.sbi48", x: "@arief_sbi48", image: null, jiko: "Strategiku tajam, gerakanku lebih tajam lagi. Arief di sini, siap memimpin." },
  { name: "Bima Satya Nugroho", team: "SIII", gen: 3, dob: "6 Feb 2007", mbti: "ESFJ", height: "173 cm", blood: "O", horoscope: "Aquarius", ig: "@bima.sbi48", x: "@bima_sbi48", image: null, jiko: "Teman terbaikmu di panggung! Ayo kita bersenang-senang bersama!" },
  { name: "Damar Fawwaz Nugroho", team: "SIII", gen: 7, dob: "2 Feb 2012", mbti: "INFP", height: "160 cm", blood: "A", horoscope: "Aquarius", ig: "@damar.sbi48", x: "@damar_sbi48", image: null, jiko: "Cahaya kecil yang tak akan padam. Damar hadir untuk menerangi!" },
  { name: "Dimas Arya Putranto", team: "SIII", gen: 3, dob: "21 Jun 2007", mbti: "INFP", height: "169 cm", blood: "A", horoscope: "Gemini", ig: "@dimas.sbi48", x: "@dimas_sbi48", image: null, jiko: "Puisi adalah bahasaku, panggung adalah puisiku. Selamat datang di duniaku." },
  { name: "Endang Suhendar", team: "SIII", gen: 2, dob: "2 Mar 2005", mbti: "ESTJ", height: "174 cm", blood: "B", horoscope: "Pisces", ig: "@endang.sbi48", x: "@endang_sbi48", image: "Endang_SIII.png", jiko: "Disiplin adalah kunci, dan panggung adalah tugasku. Endang siap!" },
  { name: "Fauzan Nabil Ramadhan", team: "SIII", gen: 7, dob: "28 Nov 2011", mbti: "ENFJ", height: "161 cm", blood: "O", horoscope: "Sagitarius", ig: "@fauzan.sbi48", x: "@fauzan_sbi48", image: null, jiko: "Energi positif yang selalu mengalir. Fauzan hadir untuk menginspirasi!" },
  { name: "Haris Dwi Pratama", team: "SIII", gen: 7, dob: "6 Jan 2012", mbti: "ISFP", height: "159 cm", blood: "B", horoscope: "Capricorn", ig: "@haris.sbi48", x: "@haris_sbi48", image: null, jiko: "Seniman panggung dengan jiwa perasa. Haris hadir untuk menghibur." },
  { name: "Ilman Arya Fathurrahman", team: "SIII", gen: 6, dob: "14 Sep 2009", mbti: "ISFJ", height: "165 cm", blood: "A", horoscope: "Virgo", ig: "@ilman.sbi48", x: "@ilman_sbi48", image: null, jiko: "Kecil tapi penuh perhatian—aku akan mengingat setiap wajah di antara kalian!" },
  { name: "Iqbal Nur Fathurrahman", team: "SIII", gen: 4, dob: "25 Nov 2007", mbti: "INFJ", height: "171 cm", blood: "B", horoscope: "Sagitarius", ig: "@iqbal.sbi48", x: "@iqbal_sbi48", image: null, jiko: "Bijaksana di luar, penuh petualangan di dalam. Iqbal di sini untuk membawamu terbang!" },
  { name: "Jendra Prasetyo Wibowo", team: "SIII", gen: 1, dob: "4 Jun 2005", mbti: "ENTJ", height: "174 cm", blood: "O", horoscope: "Gemini", ig: "@jendra.sbi48", x: "@jendra_sbi48", image: "Jendra_SIII.png", jiko: "Pemimpin alami, energi tak terbatas. Siapakah yang berani menantangku?" },
  { name: "Julio Triwira Frediyanto", team: "SIII", gen: 2, dob: "8 Jul 2005", mbti: "ESFP", height: "173 cm", blood: "A", horoscope: "Cancer", ig: "@julio.sbi48", x: "@julio_sbi48", image: "Julio_SIII.png", jiko: "Senyumku adalah senjatuku, tarianku adalah bahasaku. Julio hadir untuk menghibur!" },
  { name: "Kautsar Ilham Ardiansyah", team: "SIII", gen: 7, dob: "9 Jul 2012", mbti: "INFJ", height: "158 cm", blood: "B", horoscope: "Cancer", ig: "@kautsar.sbi48", x: "@kautsar_sbi48", image: null, jiko: "Permata tersembunyi di panggung. Siapakah yang akan menemukanku?" },
  { name: "Kevin Alvaro Wijaya", team: "SIII", gen: 3, dob: "19 Apr 2007", mbti: "ISTJ", height: "170 cm", blood: "B", horoscope: "Aries", ig: "@kevin.sbi48", x: "@kevin_sbi48", image: null, jiko: "Detail adalah kekuatanku, panggung adalah kanvas sempurna. Saksikan karyaku." },
  { name: "Krisna Bayu Saputra", team: "SIII", gen: 4, dob: "3 Jan 2008", mbti: "ENFJ", height: "168 cm", blood: "O", horoscope: "Capricorn", ig: "@krisna.sbi48", x: "@krisna_sbi48", image: null, jiko: "Energi hangat yang menerangi panggung. Krisna hadir untuk menginspirasi!" },
  { name: "Miko Fajar Santoso", team: "SIII", gen: 3, dob: "27 Sep 2006", mbti: "ISFP", height: "172 cm", blood: "A", horoscope: "Libra", ig: "@miko.sbi48", x: "@miko_sbi48", image: null, jiko: "Seniman di atas panggung, penyair di balik layar. Selamat datang di galeriku." },
  { name: "Muhammad Arkan Pradipta", team: "SIII", gen: 1, dob: "11 Des 2004", mbti: "ENFP", height: "174 cm", blood: "O", horoscope: "Sagitarius", ig: "@arkan.sbi48", x: "@arkan_sbi48", image: "Arkan_SIII.png", jiko: "Semangatku seperti api yang tak pernah padam! Ayo bakar panggung bersamaku!" },
  { name: "Radhiya Wira Sakti", team: "SIII", gen: 1, dob: "12 Jan 2004", mbti: "ENFP", height: "174 cm", blood: "A", horoscope: "Capricorn", ig: "@radhiya.sbi48", x: "@radhiya_sbi48", image: "Radhiya_SIII.png", jiko: "Dari sudut Purwokerto, aku datang membawa badai energi! Siap untuk terpesona?" },
  { name: "Rendy Prakoso Utama", team: "SIII", gen: 3, dob: "15 Mei 2007", mbti: "INTP", height: "171 cm", blood: "B", horoscope: "Taurus", ig: "@rendy.sbi48", x: "@rendy_sbi48", image: null, jiko: "Logikaku tajam, kreasiku lebih tajam. Rendy, si pemikir yang menari!" },
  { name: "Syafril Firman Syah", team: "SIII", gen: 1, dob: "1 Mei 2004", mbti: "ESTP", height: "175 cm", blood: "A", horoscope: "Taurus", ig: "@syafril.sbi48", x: "@syafril_sbi48", image: "Syafril_SIII.png", jiko: "Petualang panggung, penakluk hati. Siapa yang berani menemani perjalananku?" },
  { name: "Taufik Hidayat Nugroho", team: "SIII", gen: 1, dob: "23 Apr 2003", mbti: "ISTJ", height: "176 cm", blood: "O", horoscope: "Taurus", ig: "@taufik.sbi48", x: "@taufik_sbi48", image: "Taufik_SIII.png", jiko: "Konsisten, tulus, selalu siap. Taufik di sini untuk memberikan yang terbaik!" },
  { name: "Yudha Pramana Putra", team: "SIII", gen: 1, dob: "9 Okt 2004", mbti: "ENFJ", height: "173 cm", blood: "B", horoscope: "Libra", ig: "@yudha.sbi48", x: "@yudha_sbi48", image: "Yudha_SIII.png", jiko: "Energi positif untuk semua yang kusayangi. Mari kita ciptakan momen indah!" },

  // ===== TEAM BIV (24 Members) =====
  { name: "Althaf Zidan Prakoso", team: "BIV", gen: 7, dob: "25 Jun 2011", mbti: "ENTP", height: "163 cm", blood: "B", horoscope: "Cancer", ig: "@althaf.sbi48", x: "@althaf_sbi48", image: null, jiko: "Penantang kecil dengan mimpi raksasa. Siapakah yang berani menantangku?" },
  { name: "Bagas Mahendra Putra", team: "BIV", gen: 4, dob: "7 Feb 2008", mbti: "ISFJ", height: "169 cm", blood: "A", horoscope: "Aquarius", ig: "@bagas.sbi48", x: "@bagas_sbi48", image: null, jiko: "Langkahku ringan, tapi kesan yang kutinggalkan berat di hatimu." },
  { name: "Bagus Arya Saputro", team: "BIV", gen: 7, dob: "13 Sep 2011", mbti: "ISFJ", height: "162 cm", blood: "O", horoscope: "Virgo", ig: "@bagus.sbi48", x: "@bagus_sbi48", image: null, jiko: "Kebaikan adalah namaku, panggung adalah rumahku. Bagus hadir!" },
  { name: "Daffa Rizky Ramadhan", team: "BIV", gen: 4, dob: "18 Jul 2008", mbti: "ENFP", height: "170 cm", blood: "O", horoscope: "Cancer", ig: "@daffa.sbi48", x: "@daffa_sbi48", image: null, jiko: "Bintang muda yang siap bersinar lebih terang dari matahari!" },
  { name: "Dewa Guntur Saputra", team: "BIV", gen: 6, dob: "23 Mar 2010", mbti: "INFP", height: "165 cm", blood: "B", horoscope: "Aries", ig: "@dewa.sbi48", x: "@dewa_sbi48", image: null, jiko: "Imajinasi adalah senjata terkuatku, dan panggung adalah medanku." },
  { name: "Dion Arya Saputro", team: "BIV", gen: 5, dob: "9 Nov 2009", mbti: "ENTP", height: "167 cm", blood: "A", horoscope: "Scorpio", ig: "@dion.sbi48", x: "@dion_sbi48", image: null, jiko: "Penantang, pencipta, pencuri hatimu. Siapa berani berdebat denganku?" },
  { name: "Erlangga Putra Wicaksono", team: "BIV", gen: 7, dob: "19 Mei 2011", mbti: "ESTJ", height: "164 cm", blood: "B", horoscope: "Taurus", ig: "@erlangga.sbi48", x: "@erlangga_sbi48", image: null, jiko: "Disiplin adalah jalan menuju bintang. Erlangga siap menanjak!" },
  { name: "Evan Pratama Nugraha", team: "BIV", gen: 6, dob: "16 Jan 2010", mbti: "ESFJ", height: "166 cm", blood: "O", horoscope: "Capricorn", ig: "@evan.sbi48", x: "@evan_sbi48", image: null, jiko: "Kehangatan yang tak pernah kau duga. Evan siap menjadi sahabatmu!" },
  { name: "Farhan Dzikri Ramadhan", team: "BIV", gen: 6, dob: "28 Mei 2010", mbti: "ISTP", height: "164 cm", blood: "B", horoscope: "Gemini", ig: "@farhan.sbi48", x: "@farhan_sbi48", image: null, jiko: "Si kecil lincah yang selalu mengejutkan! Jangan kedip, atau kau akan melewatkanku!" },
  { name: "Fikri Alwan Prasetyo", team: "BIV", gen: 4, dob: "12 Okt 2008", mbti: "INTJ", height: "171 cm", blood: "A", horoscope: "Libra", ig: "@fikri.sbi48", x: "@fikri_sbi48", image: null, jiko: "Cerdas di atas panggung, bijak di luar. Fikri hadir untuk memukau!" },
  { name: "Galih Ginata Putra", team: "BIV", gen: 3, dob: "26 Mei 2007", mbti: "ENFJ", height: "173 cm", blood: "O", horoscope: "Gemini", ig: "@galih.sbi48", x: "@galih_sbi48", image: "Galih_BIV.png", jiko: "Energi yang mengalir dari dalam, untuk menghidupkan panggung kita!" },
  { name: "Gerry Alvaro Santoso", team: "BIV", gen: 6, dob: "5 Agu 2010", mbti: "ISFP", height: "165 cm", blood: "B", horoscope: "Leo", ig: "@gerry.sbi48", x: "@gerry_sbi48", image: null, jiko: "Seniman panggung dengan jiwa perasa. Selamat datang di karyaku." },
  { name: "Haidar Zainal Abidin", team: "BIV", gen: 4, dob: "30 Apr 2008", mbti: "ESTJ", height: "170 cm", blood: "A", horoscope: "Taurus", ig: "@haidar.sbi48", x: "@haidar_sbi48", image: null, jiko: "Disiplin adalah jalan menuju panggung sempurna. Haidar siap memimpin!" },
  { name: "Irfan Kurniawan Putra", team: "BIV", gen: 5, dob: "22 Feb 2009", mbti: "INFJ", height: "168 cm", blood: "O", horoscope: "Pisces", ig: "@irfan.sbi48", x: "@irfan_sbi48", image: null, jiko: "Tenang seperti danau, dalam seperti samudra. Irfan hadir untuk menyentuh hatimu." },
  { name: "Jovan Reynaldo Putra", team: "BIV", gen: 7, dob: "15 Okt 2011", mbti: "ESFP", height: "161 cm", blood: "A", horoscope: "Libra", ig: "@jovan.sbi48", x: "@jovan_sbi48", image: null, jiko: "Bintang muda yang bersinar terang! Jovan hadir untuk menyilaukan!" },
  { name: "Khalid Naufal Hakim", team: "BIV", gen: 6, dob: "11 Sep 2010", mbti: "ENTJ", height: "166 cm", blood: "B", horoscope: "Virgo", ig: "@khalid.sbi48", x: "@khalid_sbi48", image: null, jiko: "Pemimpin masa depan, hari ini. Siapakah yang akan mengikutiku?" },
  { name: "Luthfi Arkan Prasetyo", team: "BIV", gen: 6, dob: "3 Des 2010", mbti: "ENFP", height: "164 cm", blood: "A", horoscope: "Sagitarius", ig: "@luthfi.sbi48", x: "@luthfi_sbi48", image: null, jiko: "Petualang kecil dengan mimpi raksasa. Ayo terbang bersamaku!" },
  { name: "Muhammad Ilham Setiawan", team: "BIV", gen: 4, dob: "14 Jun 2008", mbti: "ISTJ", height: "171 cm", blood: "O", horoscope: "Gemini", ig: "@ilham.sbi48", x: "@ilham_sbi48", image: null, jiko: "Konsisten, tulus, penuh kejutan. Ilham siap untukmu!" },
  { name: "Muhammad Zaki Zulfikar", team: "BIV", gen: 2, dob: "18 Mei 2005", mbti: "ESFP", height: "174 cm", blood: "B", horoscope: "Taurus", ig: "@zaki.sbi48", x: "@zaki_sbi48", image: "MZ_BIV.png", jiko: "Energi murni yang tak pernah padam. Zaki hadir untuk menggebrak!" },
  { name: "Rafiq Alamsyah Putra", team: "BIV", gen: 4, dob: "26 Sep 2008", mbti: "INFP", height: "169 cm", blood: "A", horoscope: "Libra", ig: "@rafiq.sbi48", x: "@rafiq_sbi48", image: null, jiko: "Pemimpi dengan pena di tangan. Selamat datang di puisiku." },
  { name: "Rizal Bagus Permana", team: "BIV", gen: 6, dob: "8 Apr 2010", mbti: "INTP", height: "165 cm", blood: "O", horoscope: "Aries", ig: "@rizal.sbi48", x: "@rizal_sbi48", image: null, jiko: "Analis panggung, penghibur sejati. Rizal hadir untuk membuatmu tertawa!" },
  { name: "Rizky Aditya Pratama", team: "BIV", gen: 1, dob: "17 Nov 2004", mbti: "ENTP", height: "175 cm", blood: "B", horoscope: "Scorpio", ig: "@rizky.sbi48", x: "@rizky_sbi48", image: "Rizky_BIV.png", jiko: "Energi dan karisma dalam satu paket. Siapa yang bisa menandingiku?" },
  { name: "Rivan Prakoso Hidayat", team: "BIV", gen: 7, dob: "3 Des 2011", mbti: "ISTP", height: "160 cm", blood: "A", horoscope: "Sagitarius", ig: "@rivan.sbi48", x: "@rivan_sbi48", image: null, jiko: "Energi murni yang tak pernah berhenti. Rivan hadir untuk bergerak!" },
  { name: "Yoga Pratama Wicaksana", team: "BIV", gen: 3, dob: "31 Jan 2007", mbti: "ISFJ", height: "172 cm", blood: "A", horoscope: "Aquarius", ig: "@yoga.sbi48", x: "@yoga_sbi48", image: null, jiko: "Penjaga rahasia, penghibur hati. Yoga hadir untukmu." },
  { name: "Yusuf Nabil Ardiansyah", team: "BIV", gen: 4, dob: "20 Agu 2008", mbti: "ENFJ", height: "170 cm", blood: "O", horoscope: "Leo", ig: "@yusuf.sbi48", x: "@yusuf_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Yusuf hadir untuk bersinar!" },

  // ===== TEAM I (23 Members) =====
  { name: "Aditya Fauzan Nugraha", team: "I", gen: 4, dob: "17 Sep 2009", mbti: "ISTP", height: "168 cm", blood: "O", horoscope: "Virgo", ig: "@aditf.sbi48", x: "@aditf_sbi48", image: "Aditya F_I.png", jiko: "Teknisi panggung, pencipta keajaiban. Siap untuk melihatku bekerja?" },
  { name: "Aditya Prama Wicaksana", team: "I", gen: 6, dob: "6 Jan 2010", mbti: "INFP", height: "166 cm", blood: "B", horoscope: "Capricorn", ig: "@adityap.sbi48", x: "@adityap_sbi48", image: "Aditya P_I.png", jiko: "Pemimpi di balik senyum. Aditya hadir untuk membawamu ke dunia khayalku." },
  { name: "Ahmad Farel Ramadhan", team: "I", gen: 5, dob: "24 Apr 2009", mbti: "ENTJ", height: "170 cm", blood: "A", horoscope: "Taurus", ig: "@farel.sbi48", x: "@farel_sbi48", image: null, jiko: "Pemimpin alami dengan tatapan tajam. Farel hadir untuk menaklukkan!" },
  { name: "Alvin Prakoso Wijanarko", team: "I", gen: 5, dob: "13 Okt 2009", mbti: "ISFJ", height: "169 cm", blood: "O", horoscope: "Libra", ig: "@alvin.sbi48", x: "@alvin_sbi48", image: null, jiko: "Teman yang selalu ada saat kau butuh. Alvin siap menjadi sahabatmu." },
  { name: "Bayu Seto Pranata", team: "I", gen: 6, dob: "18 Feb 2010", mbti: "ESFP", height: "167 cm", blood: "B", horoscope: "Aquarius", ig: "@bayu.sbi48", x: "@bayu_sbi48", image: null, jiko: "Energi muda yang tak terbendung! Bayu hadir untuk membawamu terbang!" },
  { name: "Cahya Rizki Mahardika", team: "I", gen: 6, dob: "29 Jun 2010", mbti: "ENFJ", height: "165 cm", blood: "A", horoscope: "Cancer", ig: "@cahya.sbi48", x: "@cahya_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Cahya hadir untuk menerangi harimu!" },
  { name: "Fathan Zaky Pratama", team: "I", gen: 5, dob: "7 Mar 2009", mbti: "INTP", height: "171 cm", blood: "O", horoscope: "Pisces", ig: "@fathan.sbi48", x: "@fathan_sbi48", image: null, jiko: "Logika di atas panggung, keajaiban di hati. Fathan hadir untuk memukau!" },
  { name: "Gilang Surya Mahesa", team: "I", gen: 5, dob: "21 Jul 2009", mbti: "ESTP", height: "172 cm", blood: "B", horoscope: "Cancer", ig: "@gilang.sbi48", x: "@gilang_sbi48", image: null, jiko: "Petualang panggung, penakluk hati. Gilang hadir untuk petualangan!" },
  { name: "Gibran Alif Santosa", team: "I", gen: 7, dob: "11 Agu 2011", mbti: "INTJ", height: "163 cm", blood: "A", horoscope: "Leo", ig: "@gibran.sbi48", x: "@gibran_sbi48", image: null, jiko: "Cerdas di luar, manis di dalam. Gibran hadir untuk membuatmu penasaran!" },
  { name: "Hafiz Reyhan Nugroho", team: "I", gen: 5, dob: "2 Des 2009", mbti: "INFJ", height: "168 cm", blood: "A", horoscope: "Sagitarius", ig: "@hafiz.sbi48", x: "@hafiz_sbi48", image: null, jiko: "Pengingat setia di panggungmu. Hafiz hadir untuk menemani perjalanan." },
  { name: "Iqbal Fathir Maulana", team: "I", gen: 7, dob: "22 Mar 2011", mbti: "ENTP", height: "162 cm", blood: "O", horoscope: "Aries", ig: "@iqbalf.sbi48", x: "@iqbalf_sbi48", image: null, jiko: "Penantang yang selalu siap. Iqbal Fathir hadir untuk mengejutkan!" },
  { name: "Jaka Ginata Putra", team: "I", gen: 2, dob: "4 Jul 2005", mbti: "ENFP", height: "173 cm", blood: "A", horoscope: "Cancer", ig: "@jaka.sbi48", x: "@jaka_sbi48", image: null, jiko: "Semangatku seperti ombak—tak terduga, tapi selalu menyentuh pantai hatimu." },
  { name: "Jonathan Rizal Pradana", team: "I", gen: 5, dob: "16 Mei 2009", mbti: "ENTP", height: "170 cm", blood: "O", horoscope: "Taurus", ig: "@jonathan.sbi48", x: "@jonathan_sbi48", image: null, jiko: "Kreatif, cerdas, dan selalu mengejutkan. Jonathan hadir untuk membuatmu terpesona!" },
  { name: "M. Rafi Akmal Hidayat", team: "I", gen: 5, dob: "27 Agu 2009", mbti: "ISFP", height: "169 cm", blood: "B", horoscope: "Virgo", ig: "@rafi.sbi48", x: "@rafi_sbi48", image: null, jiko: "Seniman yang melukis dengan gerakan. Selamat datang di galeriku." },
  { name: "Mikael Bintang Saputra", team: "I", gen: 7, dob: "27 Apr 2011", mbti: "ENFP", height: "163 cm", blood: "O", horoscope: "Taurus", ig: "@mikael.sbi48", x: "@mikael_sbi48", image: null, jiko: "Bintang yang siap bersinar. Mikael hadir untuk bersinar terang!" },
  { name: "Naufal Arya Prasetyo", team: "I", gen: 2, dob: "10 Nov 2005", mbti: "ISTJ", height: "174 cm", blood: "A", horoscope: "Scorpio", ig: "@naufal.sbi48", x: "@naufal_sbi48", image: null, jiko: "Disiplin adalah kunci, panggung adalah rumah. Naufal siap!" },
  { name: "Nico Andhika Saputra", team: "I", gen: 5, dob: "4 Feb 2009", mbti: "ENFP", height: "168 cm", blood: "O", horoscope: "Aquarius", ig: "@nico.sbi48", x: "@nico_sbi48", image: null, jiko: "Semangatku meledak seperti kembang api! Nico hadir untuk merayakan!" },
  { name: "Rama Dwi Kurniawan", team: "I", gen: 2, dob: "22 Sep 2005", mbti: "INTJ", height: "173 cm", blood: "B", horoscope: "Virgo", ig: "@rama.sbi48", x: "@rama_sbi48", image: null, jiko: "Pemikir yang selalu selangkah di depan. Rama hadir untuk memimpin." },
  { name: "Reza Maulana Hakim", team: "I", gen: 2, dob: "15 Des 2005", mbti: "ESFJ", height: "171 cm", blood: "A", horoscope: "Sagitarius", ig: "@reza.sbi48", x: "@reza_sbi48", image: null, jiko: "Kehangatan yang tak pernah kau duga. Reza hadir untukmu!" },
  { name: "Surya Adi Wicaksono", team: "I", gen: 2, dob: "9 Apr 2006", mbti: "ENFJ", height: "172 cm", blood: "O", horoscope: "Aries", ig: "@surya.sbi48", x: "@surya_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Surya hadir untuk bersinar!" },
  { name: "Syahrul Fikri Ananta", team: "I", gen: 6, dob: "12 Jul 2010", mbti: "ISTP", height: "166 cm", blood: "B", horoscope: "Cancer", ig: "@syahrul.sbi48", x: "@syahrul_sbi48", image: null, jiko: "Si kecil lincah yang selalu mengejutkan. Syahrul hadir untukmu!" },
  { name: "Tegar Putra Ramadhani", team: "I", gen: 7, dob: "16 Feb 2012", mbti: "INTJ", height: "159 cm", blood: "B", horoscope: "Aquarius", ig: "@tegar.sbi48", x: "@tegar_sbi48", image: null, jiko: "Tegar di luar, lembut di dalam. Tegar hadir untuk menyentuh hatimu." },
  { name: "Zaky Firdaus Nugraha", team: "I", gen: 7, dob: "30 Sep 2012", mbti: "ISFJ", height: "158 cm", blood: "O", horoscope: "Libra", ig: "@zaky.sbi48", x: "@zaky_sbi48", image: null, jiko: "Kebaikan yang tak pernah pudar. Zaky hadir untukmu!" },
  { name: "Zidan Farrel Alamsyah", team: "I", gen: 5, dob: "30 Okt 2009", mbti: "INFP", height: "167 cm", blood: "A", horoscope: "Scorpio", ig: "@zidan.sbi48", x: "@zidan_sbi48", image: null, jiko: "Pemimpi dengan hati penuh cerita. Zidan hadir untuk berbagi." }
];

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;

  // ===== AUTO-DETECT CURRENT DATE =====
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');

  let currentFilter = "ALL";
  let currentYearFilter = currentYear;
  let currentMonthFilter = currentMonth;
  let groupedData = [];

  // ===== HELPER: Parse Date =====
  function parseDate(dateStr) {
    const monthMap = {
      "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04",
      "Mei": "05", "Jun": "06", "Jul": "07", "Agu": "08", "Aug": "08",
      "Sep": "09", "Okt": "10", "Oct": "10", "Nov": "11", "Des": "12", "Dec": "12"
    };
    const parts = dateStr.split(" ");
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = monthMap[parts[1]] || "01";
      const year = parts[2];
      return { year, month, day, full: `${year}-${month}-${day}` };
    }
    if (dateStr.includes("-")) {
      const [year, month, day] = dateStr.split("-");
      return { year, month, day, full: dateStr };
    }
    return { year: "0000", month: "00", day: "00", full: dateStr };
  }

  // ===== HELPER: Seeded Random =====
  function createSeededRandom(seedStr) {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      const char = seedStr.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    let state = Math.abs(hash) || 1;
    return function() {
      state = (state * 1664525 + 1013904223) % 4294967296;
      return state / 4294967296;
    };
  }

  // ===== HELPER: Populate Year Filter =====
  function populateYearFilter(data) {
    const yearSelect = $("#yearFilter");
    if (!yearSelect) return;

    const years = new Set();
    data.forEach(group => {
      const parsed = parseDate(group.date);
      if (parsed.year !== "0000") years.add(parsed.year);
    });

    years.add(currentYear);
    const sortedYears = Array.from(years).sort();

    yearSelect.innerHTML = '';
    sortedYears.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      if (year === currentYear) {
        option.selected = true;
      }
      yearSelect.appendChild(option);
    });
  }

  // ===== HELPER: Set Default Month =====
  function setDefaultMonth() {
    const monthSelect = $("#monthFilter");
    if (monthSelect) {
      monthSelect.value = currentMonth;
    }
  }

  // ===== LINEUP GENERATOR =====
  function generateLineup(lineupInput, team, eventName, date) {
    const cleanTeam = (team || "").trim().toUpperCase();
    let pool = [];
    let showAllMembers = false;

    if (cleanTeam.includes("SIII")) pool = membersData.filter(m => m.team === "SIII");
    else if (cleanTeam.includes("BIV")) pool = membersData.filter(m => m.team === "BIV");
    else if (cleanTeam === "I" || cleanTeam.includes("TEAM I")) pool = membersData.filter(m => m.team === "I");
    else if (cleanTeam.includes("TRAINEE")) pool = membersData.filter(m => m.team === "GEN7");
    else if (cleanTeam.includes("MEMBERS")) {
      pool = [...membersData];
      showAllMembers = true;
    } else {
      pool = [...membersData];
    }

    if (pool.length === 0) pool = [...membersData];

    const isEmptyLineup = !lineupInput || lineupInput.trim() === "" || lineupInput.toLowerCase() === "kosong";
    if (isEmptyLineup && !showAllMembers) return [];
    if (showAllMembers && isEmptyLineup) return pool.map(m => ({ ...m, isCenter: false }));

    let lineup = [];
    let available = [...pool];
    let centerMember = null;

    if (!isEmptyLineup) {
      const names = lineupInput.split(",").map(n => n.trim());
      
      for (let name of names) {
        if (name.startsWith("-") || name.toLowerCase().startsWith("exclude ")) {
          let cleanExcludeName = name.replace(/^[-\s]+|exclude\s+/gi, "").trim();
          let memberToExclude = pool.find(m => m.name.toLowerCase().includes(cleanExcludeName.toLowerCase()));
          
          if (memberToExclude) {
            available = available.filter(m => m.name !== memberToExclude.name);
          }
          continue;
        }

        let isCenter = name.toUpperCase().includes("(C)") || name.toUpperCase().includes("(CENTER)");
        let cleanName = name.replace(/\(C\)|\(CENTER\)/gi, "").trim();

        let member = available.find(m => m.name.toLowerCase().includes(cleanName.toLowerCase()));
        if (member) {
          if (isCenter) {
            centerMember = { ...member, isCenter: true };
          } else {
            lineup.push({ ...member, isCenter: false });
          }
          available = available.filter(m => m.name !== member.name);
        }
      }
    }

    if (showAllMembers) {
      available.forEach(m => {
        lineup.push({ ...m, isCenter: false });
      });
      return centerMember ? [centerMember, ...lineup] : lineup;
    }

    const targetCount = 16;
    const seedStr = `${eventName}-${date}-${cleanTeam}`;
    const seededRandom = createSeededRandom(seedStr);

    while ((lineup.length + (centerMember ? 1 : 0)) < targetCount && available.length > 0) {
      const randIdx = Math.floor(seededRandom() * available.length);
      lineup.push({ ...available[randIdx], isCenter: false });
      available.splice(randIdx, 1);
    }

    return centerMember ? [centerMember, ...lineup] : lineup;
  }

  // ===== FETCH DATA =====
  function fetchSchedule() {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const allEvents = results.data.map(row => ({
          date: row["Tanggal"] || row["Date"] || "",
          time: row["Waktu"] || row["Time"] || "",
          eventName: row["Nama Event"] || row["Event Name"] || "Untitled Event",
          team: row["Team"] || "TBA",
          location: row["Lokasi"] || row["Location"] || "TBA",
          type: row["Tipe"] || row["Type"] || "Event",
          lineupInput: row["Lineup"] || ""
        }));

        const groupMap = new Map();
        allEvents.forEach(event => {
          const key = event.date;
          if (!groupMap.has(key)) groupMap.set(key, []);
          groupMap.get(key).push(event);
        });

        groupedData = Array.from(groupMap.entries()).map(([date, events]) => {
          events.sort((a, b) => {
            const timeA = a.time || "99:99";
            const timeB = b.time || "99:99";
            return timeA.localeCompare(timeB);
          });
          return { date, events };
        });

        groupedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        populateYearFilter(groupedData);
        setDefaultMonth();

        $("#loadingState").style.display = "none";
        renderSchedule();
      },
      error: function(err) {
        console.error("Error parsing CSV:", err);
        $("#loadingState").innerHTML = `<p style="color: var(--pink);">Gagal memuat data. Pastikan link "Publish to Web" CSV sudah benar.</p>`;
      }
    });
  }

  // ===== RENDER SCHEDULE =====
  function renderSchedule() {
    const grid = $("#scheduleGrid");
    grid.innerHTML = "";

    const filteredGroups = groupedData.map(group => {
      const parsed = parseDate(group.date);

      const filteredEvents = group.events.filter(e => {
        if (currentFilter !== "ALL") {
          const type = (e.type || "").toLowerCase().trim();
          const filter = currentFilter.toLowerCase().trim();
          if (!(type === filter || type.includes(filter) || filter.includes(type))) return false;
        }
        if (parsed.year !== currentYearFilter) return false;
        if (parsed.month !== currentMonthFilter) return false;
        
        return true;
      });

      return { date: group.date, events: filteredEvents };
    }).filter(group => group.events.length > 0);

    if (filteredGroups.length === 0) {
      $("#emptyState").style.display = "block";
      return;
    }
    $("#emptyState").style.display = "none";

    filteredGroups.forEach((group, index) => {
      const card = document.createElement("div");
      const types = [...new Set(group.events.map(e => e.type))];
      const cardTypeClass = types.length === 1 ? `type-${types[0]}` : "type-mixed";
      card.className = `schedule-card ${cardTypeClass} reveal`;
      card.style.transitionDelay = `${index * 0.05}s`;

      const dateParts = group.date.split(" ");
      const day = dateParts[0] || "?";
      const month = dateParts[1] || "";

      let typeBadgeHTML = types.length === 1 
        ? `<span class="card-type">${types[0].toUpperCase()}</span>` 
        : `<span class="card-type multi">MULTI SHOW</span>`;

      const eventCount = group.events.length;
      const countBadge = eventCount > 1 ? `<span class="event-count-badge">${eventCount} SHOWS</span>` : "";

      const eventsListHTML = group.events.map((event, idx) => {
        return `
          <div class="event-item" data-event-index="${idx}" data-date="${group.date}">
            <div class="event-time">${event.time || "--:--"}</div>
            <div class="event-details">
              <h4 class="event-name">${event.eventName}</h4>
              <div class="event-meta">
                <span>📍 ${event.location}</span>
                <span>👥 ${event.team}</span>
              </div>
            </div>
            <span class="event-arrow">→</span>
          </div>
        `;
      }).join("");

      card.innerHTML = `
        <div class="card-header">
          <div class="card-date-badge">
            <div class="day">${day}</div>
            <div class="month">${month}</div>
            ${countBadge}
          </div>
          ${typeBadgeHTML}
        </div>
        <div class="card-body events-list">
          ${eventsListHTML}
        </div>
      `;

      if (finePointer && !reduceMotion) {
        card.addEventListener("pointermove", e => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      }

      card.querySelectorAll(".event-item").forEach(item => {
        item.addEventListener("click", e => {
          e.stopPropagation();
          const dateKey = item.dataset.date;
          const eventIdx = parseInt(item.dataset.eventIndex);
          const targetGroup = groupedData.find(g => g.date === dateKey);
          if (targetGroup && targetGroup.events[eventIdx]) {
            openModal(targetGroup.events[eventIdx]);
          }
        });
      });

      grid.appendChild(card);
    });

    observeReveals();
  }

  // ===== MOBILE MENU HANDLER =====
  const menuButton = $("#menuButton");
  const nav = $("#siteNav");
  
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
  
  if (menuButton && nav) {
    menuButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    
    // Close menu when clicking on nav links
    $$("a", nav).forEach(link => {
      link.addEventListener("click", closeMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
        closeMenu();
      }
    });
    
    // Close menu on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ===== MODAL LOGIC =====
  const modal = $("#scheduleModal");
  const modalClose = $("#modalClose");
  const modalBackdrop = $("#modalBackdrop");

  function openModal(item) {
    $("#modalType").textContent = item.type.toUpperCase();
    $("#modalType").className = `modal-type-badge ${item.type}`;
    $("#modalEventName").textContent = item.eventName;
    $("#modalDate").textContent = item.date;
    $("#modalTime").textContent = item.time;
    $("#modalLocation").textContent = item.location;
    $("#modalTeam").textContent = item.team;

    const lineup = generateLineup(item.lineupInput, item.team, item.eventName, item.date);
    const lineupGrid = $("#modalLineupGrid");
    lineupGrid.innerHTML = "";

    if (lineup.length === 0) {
      lineupGrid.innerHTML = `<p style="grid-column: 1/-1; color: var(--muted); font-style: italic; text-align: center; padding: 20px;">Lineup akan diumumkan segera.</p>`;
    } else {
      const cleanTeam = item.team.trim().toUpperCase();
      const isAllMembersMode = cleanTeam.includes("MEMBERS");
      
      if (isAllMembersMode) lineupGrid.classList.add("all-members-mode");
      else lineupGrid.classList.remove("all-members-mode");

      lineup.forEach(member => {
        const memberEl = document.createElement("div");
        memberEl.className = `lineup-member ${member.isCenter ? 'is-center' : ''}`;
        
        const initials = member.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
        const imgHTML = member.image 
          ? `<img src="${member.image}" alt="${member.name}" class="member-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="member-fallback" style="display:none">${initials}</div>`
          : `<div class="member-fallback">${initials}</div>`;

        const centerBadge = member.isCenter ? `<div class="center-badge">CENTER</div>` : '';

        memberEl.innerHTML = `
          ${centerBadge}
          ${imgHTML}
          <div class="member-name">${member.name.split(" ")[0]}</div>
          <div class="member-team">${member.team}</div>
        `;

        memberEl.addEventListener("click", () => {
          window.location.href = `members.html?search=${encodeURIComponent(member.name)}`;
        });

        lineupGrid.appendChild(memberEl);
      });
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("active")) closeModal(); });

  // ===== FILTER HANDLERS =====
  $$(".filter-button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-button").forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      currentFilter = btn.dataset.filter;
      renderSchedule();
    });
  });

  const yearFilter = $("#yearFilter");
  const monthFilter = $("#monthFilter");

  if (yearFilter) {
    yearFilter.addEventListener("change", () => {
      currentYearFilter = yearFilter.value;
      renderSchedule();
    });
  }

  if (monthFilter) {
    monthFilter.addEventListener("change", () => {
      currentMonthFilter = monthFilter.value;
      renderSchedule();
    });
  }

  // ===== GLOBAL EFFECTS =====
  const glow = $("#cursorGlow");
  if (finePointer && !reduceMotion) {
    window.addEventListener("pointermove", e => {
      if (glow) { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; }
    }, { passive: true });

    document.addEventListener("click", e => {
      const burstCount = 8;
      for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement("span");
        burst.className = "click-burst";
        const angle = (i / burstCount) * Math.PI * 2;
        const velocity = 30 + Math.random() * 30;
        burst.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; background: ${Math.random() > 0.5 ? "var(--cyan)" : "var(--pink)"}; --tx: ${Math.cos(angle) * velocity}px; --ty: ${Math.sin(angle) * velocity}px;`;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
      }
    });
  }

  function createSparkleField() {
    if (reduceMotion) return;
    const layer = $("#sparkleLayer");
    if (!layer) return;
    const colors = ["#ffffff", "#8ff3ff", "#b9a6ff", "#ff9bdf"];
    for (let i = 0; i < (isMobile ? 30 : 60); i++) {
      const sparkle = document.createElement("span");
      sparkle.className = (i % 7 === 0) ? "sparkle star" : "sparkle";
      if (i % 7 === 0) sparkle.textContent = "✦";
      sparkle.style.setProperty("--spark-x", `${(Math.random() * 98 + 1)}%`);
      sparkle.style.setProperty("--spark-y", `${(Math.random() * 94 + 3)}%`);
      sparkle.style.setProperty("--spark-size", (i % 7 === 0) ? `${9 + Math.random() * 6}px` : `${2 + Math.random() * 2}px`);
      sparkle.style.setProperty("--spark-color", colors[Math.floor(Math.random() * colors.length)]);
      sparkle.style.setProperty("--spark-duration", `${2 + Math.random() * 3}s`);
      sparkle.style.setProperty("--spark-delay", `${Math.random() * 5}s`);
      layer.appendChild(sparkle);
    }
  }
  createSparkleField();

  // ===== SCROLL REVEAL & BACK TO TOP =====
  function observeReveals() {
    const revealItems = $$(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
      revealItems.forEach(item => observer.observe(item));
    }
  }

  const toTop = $("#toTop");
  window.addEventListener("scroll", () => {
    if (toTop) toTop.classList.toggle("visible", window.scrollY > 450);
  }, { passive: true });
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  fetchSchedule();
});