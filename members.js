/* ========================================
   SBI48 — MEMBERS INTERACTIVE EXPERIENCE
   Features: Team Filter, Gen Filter, Name Search, 
             Modal Nav, Jikoshoukai
======================================== */

const membersData = [
  // ===== TEAM SIII =====
  { name: "Radhiya Wira Sakti", team: "SIII", gen: 1, dob: "12 Jan 2004", mbti: "ENFP", height: "174 cm", blood: "A", horoscope: "Capricorn", ig: "@radhiya.sbi48", x: "@radhiya_sbi48", image: "Radhiya_SIII.png", jiko: "Dari sudut Purwokerto, aku datang membawa badai energi! Siap untuk terpesona?" },
  { name: "Adrian Bagus Pramudya", team: "SIII", gen: 3, dob: "17 Agu 2007", mbti: "ISTP", height: "168 cm", blood: "B", horoscope: "Leo", ig: "@adrian.sbi48", x: "@adrian_sbi48", image: "Adrian_SIII.png", jiko: "Si perakit panggung yang tenang—tapi saat musik dimulai, lihat aku berubah!" },
  { name: "Akbar Firmansyah Putra Daryono", team: "SIII", gen: 1, dob: "4 Jun 2005", mbti: "INFP", height: "174 cm", blood: "O", horoscope: "Gemini", ig: "@akbar.sbi48", x: "@akbar_sbi48", image: "Akbar_SIII.png", jiko: "Dari rumus kalkulus yang rumit, sampai detak jantung kalian yang berdegup cepat karena tarianku! Hallo Aku Akbar!" },
  { name: "Arief Rahman Hakim", team: "SIII", gen: 3, dob: "29 Okt 2006", mbti: "INTJ", height: "170 cm", blood: "A", horoscope: "Scorpio", ig: "@arief.sbi48", x: "@arief_sbi48", image: null, jiko: "Strategiku tajam, gerakanku lebih tajam lagi. Arief di sini, siap memimpin." },
  { name: "Bima Satya Nugroho", team: "SIII", gen: 3, dob: "6 Feb 2007", mbti: "ESFJ", height: "173 cm", blood: "O", horoscope: "Aquarius", ig: "@bima.sbi48", x: "@bima_sbi48", image: null, jiko: "Teman terbaikmu di panggung! Ayo kita bersenang-senang bersama!" },
  { name: "Dimas Arya Putranto", team: "SIII", gen: 3, dob: "21 Jun 2007", mbti: "INFP", height: "169 cm", blood: "A", horoscope: "Gemini", ig: "@dimas.sbi48", x: "@dimas_sbi48", image: null, jiko: "Puisi adalah bahasaku, panggung adalah puisiku. Selamat datang di duniaku." },
  { name: "Endang Suhendar", team: "SIII", gen: 2, dob: "2 Mar 2005", mbti: "ESTJ", height: "174 cm", blood: "B", horoscope: "Pisces", ig: "@endang.sbi48", x: "@endang_sbi48", image: "Endang_SIII.png", jiko: "Disiplin adalah kunci, dan panggung adalah tugasku. Endang siap!" },
  { name: "Ilman Arya Fathurrahman", team: "SIII", gen: 6, dob: "14 Sep 2009", mbti: "ISFJ", height: "165 cm", blood: "A", horoscope: "Virgo", ig: "@ilman.sbi48", x: "@ilman_sbi48", image: null, jiko: "Kecil tapi penuh perhatian—aku akan mengingat setiap wajah di antara kalian!" },
  { name: "Iqbal Nur Fathurrahman", team: "SIII", gen: 4, dob: "25 Nov 2007", mbti: "INFJ", height: "171 cm", blood: "B", horoscope: "Sagitarius", ig: "@iqbal.sbi48", x: "@iqbal_sbi48", image: null, jiko: "Bijaksana di luar, penuh petualangan di dalam. Iqbal di sini untuk membawamu terbang!" },
  { name: "Jendra Prasetyo Wibowo", team: "SIII", gen: 1, dob: "4 Jun 2005", mbti: "ENTJ", height: "174 cm", blood: "O", horoscope: "Gemini", ig: "@jendra.sbi48", x: "@jendra_sbi48", image: "Jendra_SIII.png", jiko: "Pemimpin alami, energi tak terbatas. Siapakah yang berani menantangku?" },
  { name: "Julio Triwira Frediyanto", team: "SIII", gen: 2, dob: "8 Jul 2005", mbti: "ESFP", height: "173 cm", blood: "A", horoscope: "Cancer", ig: "@julio.sbi48", x: "@julio_sbi48", image: "Julio_SIII.png", jiko: "Senyumku adalah senjatuku, tarianku adalah bahasaku. Julio hadir untuk menghibur!" },
  { name: "Kevin Alvaro Wijaya", team: "SIII", gen: 3, dob: "19 Apr 2007", mbti: "ISTJ", height: "170 cm", blood: "B", horoscope: "Aries", ig: "@kevin.sbi48", x: "@kevin_sbi48", image: null, jiko: "Detail adalah kekuatanku, panggung adalah kanvas sempurna. Saksikan karyaku." },
  { name: "Krisna Bayu Saputra", team: "SIII", gen: 4, dob: "3 Jan 2008", mbti: "ENFJ", height: "168 cm", blood: "O", horoscope: "Capricorn", ig: "@krisna.sbi48", x: "@krisna_sbi48", image: null, jiko: "Energi hangat yang menerangi panggung. Krisna hadir untuk menginspirasi!" },
  { name: "Miko Fajar Santoso", team: "SIII", gen: 3, dob: "27 Sep 2006", mbti: "ISFP", height: "172 cm", blood: "A", horoscope: "Libra", ig: "@miko.sbi48", x: "@miko_sbi48", image: null, jiko: "Seniman di atas panggung, penyair di balik layar. Selamat datang di galeriku." },
  { name: "Muhammad Arkan Pradipta", team: "SIII", gen: 1, dob: "11 Des 2004", mbti: "ENFP", height: "174 cm", blood: "O", horoscope: "Sagitarius", ig: "@arkan.sbi48", x: "@arkan_sbi48", image: "Arkan_SIII.png", jiko: "Semangatku seperti api yang tak pernah padam! Ayo bakar panggung bersamaku!" },
  { name: "Rendy Prakoso Utama", team: "SIII", gen: 3, dob: "15 Mei 2007", mbti: "INTP", height: "171 cm", blood: "B", horoscope: "Taurus", ig: "@rendy.sbi48", x: "@rendy_sbi48", image: null, jiko: "Logikaku tajam, kreasiku lebih tajam. Rendy, si pemikir yang menari!" },
  { name: "Syafril Firman Syah", team: "SIII", gen: 1, dob: "1 Mei 2004", mbti: "ESTP", height: "175 cm", blood: "A", horoscope: "Taurus", ig: "@syafril.sbi48", x: "@syafril_sbi48", image: "Syafril_SIII.png", jiko: "Petualang panggung, penakluk hati. Siapa yang berani menemani perjalananku?" },
  { name: "Taufik Hidayat Nugroho", team: "SIII", gen: 1, dob: "23 Apr 2003", mbti: "ISTJ", height: "176 cm", blood: "O", horoscope: "Taurus", ig: "@taufik.sbi48", x: "@taufik_sbi48", image: "Taufik_SIII.png", jiko: "Konsisten, tulus, selalu siap. Taufik di sini untuk memberikan yang terbaik!" },
  { name: "Yudha Pramana Putra", team: "SIII", gen: 1, dob: "9 Okt 2004", mbti: "ENFJ", height: "173 cm", blood: "B", horoscope: "Libra", ig: "@yudha.sbi48", x: "@yudha_sbi48", image: "Yudha_SIII.png", jiko: "Energi positif untuk semua yang kusayangi. Mari kita ciptakan momen indah!" },

  // ===== TEAM BIV =====
  { name: "Muhammad Zaki Zulfikar", team: "BIV", gen: 2, dob: "18 Mei 2005", mbti: "ESFP", height: "174 cm", blood: "B", horoscope: "Taurus", ig: "@zaki.sbi48", x: "@zaki_sbi48", image: "MZ_BIV.png", jiko: "Energi murni yang tak pernah padam. Zaki hadir untuk menggebrak!" },
  { name: "Bagas Mahendra Putra", team: "BIV", gen: 4, dob: "7 Feb 2008", mbti: "ISFJ", height: "169 cm", blood: "A", horoscope: "Aquarius", ig: "@bagas.sbi48", x: "@bagas_sbi48", image: null, jiko: "Langkahku ringan, tapi kesan yang kutinggalkan berat di hatimu." },
  { name: "Daffa Rizky Ramadhan", team: "BIV", gen: 4, dob: "18 Jul 2008", mbti: "ENFP", height: "170 cm", blood: "O", horoscope: "Cancer", ig: "@daffa.sbi48", x: "@daffa_sbi48", image: null, jiko: "Bintang muda yang siap bersinar lebih terang dari matahari!" },
  { name: "Dewa Guntur Saputra", team: "BIV", gen: 6, dob: "23 Mar 2010", mbti: "INFP", height: "165 cm", blood: "B", horoscope: "Aries", ig: "@dewa.sbi48", x: "@dewa_sbi48", image: null, jiko: "Imajinasi adalah senjata terkuatku, dan panggung adalah medanku." },
  { name: "Dion Arya Saputro", team: "BIV", gen: 5, dob: "9 Nov 2009", mbti: "ENTP", height: "167 cm", blood: "A", horoscope: "Scorpio", ig: "@dion.sbi48", x: "@dion_sbi48", image: null, jiko: "Penantang, pencipta, pencuri hatimu. Siapa berani berdebat denganku?" },
  { name: "Evan Pratama Nugraha", team: "BIV", gen: 6, dob: "16 Jan 2010", mbti: "ESFJ", height: "166 cm", blood: "O", horoscope: "Capricorn", ig: "@evan.sbi48", x: "@evan_sbi48", image: null, jiko: "Kehangatan yang tak pernah kau duga. Evan siap menjadi sahabatmu!" },
  { name: "Farhan Dzikri Ramadhan", team: "BIV", gen: 6, dob: "28 Mei 2010", mbti: "ISTP", height: "164 cm", blood: "B", horoscope: "Gemini", ig: "@farhan.sbi48", x: "@farhan_sbi48", image: null, jiko: "Si kecil lincah yang selalu mengejutkan! Jangan kedip, atau kau akan melewatkanku!" },
  { name: "Fikri Alwan Prasetyo", team: "BIV", gen: 4, dob: "12 Okt 2008", mbti: "INTJ", height: "171 cm", blood: "A", horoscope: "Libra", ig: "@fikri.sbi48", x: "@fikri_sbi48", image: null, jiko: "Cerdas di atas panggung, bijak di luar. Fikri hadir untuk memukau!" },
  { name: "Galih Ginata Putra", team: "BIV", gen: 3, dob: "26 Mei 2007", mbti: "ENFJ", height: "173 cm", blood: "O", horoscope: "Gemini", ig: "@galih.sbi48", x: "@galih_sbi48", image: "Galih_BIV.png", jiko: "Energi yang mengalir dari dalam, untuk menghidupkan panggung kita!" },
  { name: "Gerry Alvaro Santoso", team: "BIV", gen: 6, dob: "5 Agu 2010", mbti: "ISFP", height: "165 cm", blood: "B", horoscope: "Leo", ig: "@gerry.sbi48", x: "@gerry_sbi48", image: null, jiko: "Seniman panggung dengan jiwa perasa. Selamat datang di karyaku." },
  { name: "Haidar Zainal Abidin", team: "BIV", gen: 4, dob: "30 Apr 2008", mbti: "ESTJ", height: "170 cm", blood: "A", horoscope: "Taurus", ig: "@haidar.sbi48", x: "@haidar_sbi48", image: null, jiko: "Disiplin adalah jalan menuju panggung sempurna. Haidar siap memimpin!" },
  { name: "Irfan Kurniawan Putra", team: "BIV", gen: 5, dob: "22 Feb 2009", mbti: "INFJ", height: "168 cm", blood: "O", horoscope: "Pisces", ig: "@irfan.sbi48", x: "@irfan_sbi48", image: null, jiko: "Tenang seperti danau, dalam seperti samudra. Irfan hadir untuk menyentuh hatimu." },
  { name: "Khalid Naufal Hakim", team: "BIV", gen: 6, dob: "11 Sep 2010", mbti: "ENTJ", height: "166 cm", blood: "B", horoscope: "Virgo", ig: "@khalid.sbi48", x: "@khalid_sbi48", image: null, jiko: "Pemimpin masa depan, hari ini. Siapakah yang akan mengikutiku?" },
  { name: "Luthfi Arkan Prasetyo", team: "BIV", gen: 6, dob: "3 Des 2010", mbti: "ENFP", height: "164 cm", blood: "A", horoscope: "Sagitarius", ig: "@luthfi.sbi48", x: "@luthfi_sbi48", image: null, jiko: "Petualang kecil dengan mimpi raksasa. Ayo terbang bersamaku!" },
  { name: "Muhammad Ilham Setiawan", team: "BIV", gen: 4, dob: "14 Jun 2008", mbti: "ISTJ", height: "171 cm", blood: "O", horoscope: "Gemini", ig: "@ilham.sbi48", x: "@ilham_sbi48", image: null, jiko: "Konsisten, tulus, penuh kejutan. Ilham siap untukmu!" },
  { name: "Rafiq Alamsyah Putra", team: "BIV", gen: 4, dob: "26 Sep 2008", mbti: "INFP", height: "169 cm", blood: "A", horoscope: "Libra", ig: "@rafiq.sbi48", x: "@rafiq_sbi48", image: null, jiko: "Pemimpi dengan pena di tangan. Selamat datang di puisiku." },
  { name: "Rizal Bagus Permana", team: "BIV", gen: 6, dob: "8 Apr 2010", mbti: "INTP", height: "165 cm", blood: "O", horoscope: "Aries", ig: "@rizal.sbi48", x: "@rizal_sbi48", image: null, jiko: "Analis panggung, penghibur sejati. Rizal hadir untuk membuatmu tertawa!" },
  { name: "Rizky Aditya Pratama", team: "BIV", gen: 1, dob: "17 Nov 2004", mbti: "ENTP", height: "175 cm", blood: "B", horoscope: "Scorpio", ig: "@rizky.sbi48", x: "@rizky_sbi48", image: "Rizky_BIV.png", jiko: "Energi dan karisma dalam satu paket. Siapa yang bisa menandingiku?" },
  { name: "Yoga Pratama Wicaksana", team: "BIV", gen: 3, dob: "31 Jan 2007", mbti: "ISFJ", height: "172 cm", blood: "A", horoscope: "Aquarius", ig: "@yoga.sbi48", x: "@yoga_sbi48", image: null, jiko: "Penjaga rahasia, penghibur hati. Yoga hadir untukmu." },
  { name: "Yusuf Nabil Ardiansyah", team: "BIV", gen: 4, dob: "20 Agu 2008", mbti: "ENFJ", height: "170 cm", blood: "O", horoscope: "Leo", ig: "@yusuf.sbi48", x: "@yusuf_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Yusuf hadir untuk bersinar!" },

  // ===== TEAM I =====
  { name: "Jaka Ginata Putra", team: "I", gen: 2, dob: "4 Jul 2005", mbti: "ENFP", height: "173 cm", blood: "A", horoscope: "Cancer", ig: "@jaka.sbi48", x: "@jaka_sbi48", image: null, jiko: "Semangatku seperti ombak—tak terduga, tapi selalu menyentuh pantai hatimu." },
  { name: "Aditya Fauzan Nugraha", team: "I", gen: 4, dob: "17 Sep 2009", mbti: "ISTP", height: "168 cm", blood: "O", horoscope: "Virgo", ig: "@aditf.sbi48", x: "@aditf_sbi48", image: "Aditya F_I.png", jiko: "Teknisi panggung, pencipta keajaiban. Siap untuk melihatku bekerja?" },
  { name: "Aditya Prama Wicaksana", team: "I", gen: 6, dob: "6 Jan 2010", mbti: "INFP", height: "166 cm", blood: "B", horoscope: "Capricorn", ig: "@adityap.sbi48", x: "@adityap_sbi48", image: "Aditya P_I.png", jiko: "Pemimpi di balik senyum. Aditya hadir untuk membawamu ke dunia khayalku." },
  { name: "Ahmad Farel Ramadhan", team: "I", gen: 5, dob: "24 Apr 2009", mbti: "ENTJ", height: "170 cm", blood: "A", horoscope: "Taurus", ig: "@farel.sbi48", x: "@farel_sbi48", image: null, jiko: "Pemimpin alami dengan tatapan tajam. Farel hadir untuk menaklukkan!" },
  { name: "Alvin Prakoso Wijanarko", team: "I", gen: 5, dob: "13 Okt 2009", mbti: "ISFJ", height: "169 cm", blood: "O", horoscope: "Libra", ig: "@alvin.sbi48", x: "@alvin_sbi48", image: null, jiko: "Teman yang selalu ada saat kau butuh. Alvin siap menjadi sahabatmu." },
  { name: "Bayu Seto Pranata", team: "I", gen: 6, dob: "18 Feb 2010", mbti: "ESFP", height: "167 cm", blood: "B", horoscope: "Aquarius", ig: "@bayu.sbi48", x: "@bayu_sbi48", image: null, jiko: "Energi muda yang tak terbendung! Bayu hadir untuk membawamu terbang!" },
  { name: "Cahya Rizki Mahardika", team: "I", gen: 6, dob: "29 Jun 2010", mbti: "ENFJ", height: "165 cm", blood: "A", horoscope: "Cancer", ig: "@cahya.sbi48", x: "@cahya_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Cahya hadir untuk menerangi harimu!" },
  { name: "Fathan Zaky Pratama", team: "I", gen: 5, dob: "7 Mar 2009", mbti: "INTP", height: "171 cm", blood: "O", horoscope: "Pisces", ig: "@fathan.sbi48", x: "@fathan_sbi48", image: null, jiko: "Logika di atas panggung, keajaiban di hati. Fathan hadir untuk memukau!" },
  { name: "Gilang Surya Mahesa", team: "I", gen: 5, dob: "21 Jul 2009", mbti: "ESTP", height: "172 cm", blood: "B", horoscope: "Cancer", ig: "@gilang.sbi48", x: "@gilang_sbi48", image: null, jiko: "Petualang panggung, penakluk hati. Gilang hadir untuk petualangan!" },
  { name: "Hafiz Reyhan Nugroho", team: "I", gen: 5, dob: "2 Des 2009", mbti: "INFJ", height: "168 cm", blood: "A", horoscope: "Sagitarius", ig: "@hafiz.sbi48", x: "@hafiz_sbi48", image: null, jiko: "Pengingat setia di panggungmu. Hafiz hadir untuk menemani perjalanan." },
  { name: "Jonathan Rizal Pradana", team: "I", gen: 5, dob: "16 Mei 2009", mbti: "ENTP", height: "170 cm", blood: "O", horoscope: "Taurus", ig: "@jonathan.sbi48", x: "@jonathan_sbi48", image: null, jiko: "Kreatif, cerdas, dan selalu mengejutkan. Jonathan hadir untuk membuatmu terpesona!" },
  { name: "M. Rafi Akmal Hidayat", team: "I", gen: 5, dob: "27 Agu 2009", mbti: "ISFP", height: "169 cm", blood: "B", horoscope: "Virgo", ig: "@rafi.sbi48", x: "@rafi_sbi48", image: null, jiko: "Seniman yang melukis dengan gerakan. Selamat datang di galeriku." },
  { name: "Naufal Arya Prasetyo", team: "I", gen: 2, dob: "10 Nov 2005", mbti: "ISTJ", height: "174 cm", blood: "A", horoscope: "Scorpio", ig: "@naufal.sbi48", x: "@naufal_sbi48", image: null, jiko: "Disiplin adalah kunci, panggung adalah rumah. Naufal siap!" },
  { name: "Nico Andhika Saputra", team: "I", gen: 5, dob: "4 Feb 2009", mbti: "ENFP", height: "168 cm", blood: "O", horoscope: "Aquarius", ig: "@nico.sbi48", x: "@nico_sbi48", image: null, jiko: "Semangatku meledak seperti kembang api! Nico hadir untuk merayakan!" },
  { name: "Rama Dwi Kurniawan", team: "I", gen: 2, dob: "22 Sep 2005", mbti: "INTJ", height: "173 cm", blood: "B", horoscope: "Virgo", ig: "@rama.sbi48", x: "@rama_sbi48", image: null, jiko: "Pemikir yang selalu selangkah di depan. Rama hadir untuk memimpin." },
  { name: "Reza Maulana Hakim", team: "I", gen: 2, dob: "15 Des 2005", mbti: "ESFJ", height: "171 cm", blood: "A", horoscope: "Sagitarius", ig: "@reza.sbi48", x: "@reza_sbi48", image: null, jiko: "Kehangatan yang tak pernah kau duga. Reza hadir untukmu!" },
  { name: "Surya Adi Wicaksono", team: "I", gen: 2, dob: "9 Apr 2006", mbti: "ENFJ", height: "172 cm", blood: "O", horoscope: "Aries", ig: "@surya.sbi48", x: "@surya_sbi48", image: null, jiko: "Cahaya yang menerangi panggung. Surya hadir untuk bersinar!" },
  { name: "Syahrul Fikri Ananta", team: "I", gen: 6, dob: "12 Jul 2010", mbti: "ISTP", height: "166 cm", blood: "B", horoscope: "Cancer", ig: "@syahrul.sbi48", x: "@syahrul_sbi48", image: null, jiko: "Si kecil lincah yang selalu mengejutkan. Syahrul hadir untukmu!" },
  { name: "Zidan Farrel Alamsyah", team: "I", gen: 5, dob: "30 Okt 2009", mbti: "INFP", height: "167 cm", blood: "A", horoscope: "Scorpio", ig: "@zidan.sbi48", x: "@zidan_sbi48", image: null, jiko: "Pemimpi dengan hati penuh cerita. Zidan hadir untuk berbagi." },

  // ===== TRAINEE GEN 7 =====
  { name: "Adnan Rizky Pramudya", team: "GEN7", gen: 7, dob: "18 Jan 2011", mbti: "ENFP", height: "165 cm", blood: "O", horoscope: "Capricorn", ig: "@adnan.sbi48", x: "@adnan_sbi48", image: null, jiko: "Generasi baru, semangat baru! Adnan hadir untuk mengubah dunia!" },
  { name: "Aksa Bintang Mahesa", team: "GEN7", gen: 7, dob: "7 Apr 2011", mbti: "ISTJ", height: "164 cm", blood: "A", horoscope: "Aries", ig: "@aksa.sbi48", x: "@aksa_sbi48", image: null, jiko: "Bintang yang siap melesat ke langit tertinggi! Aksa di sini!" },
  { name: "Althaf Zidan Prakoso", team: "GEN7", gen: 7, dob: "25 Jun 2011", mbti: "ENTP", height: "163 cm", blood: "B", horoscope: "Cancer", ig: "@althaf.sbi48", x: "@althaf_sbi48", image: null, jiko: "Penantang kecil dengan mimpi raksasa. Siapakah yang berani menantangku?" },
  { name: "Bagus Arya Saputro", team: "GEN7", gen: 7, dob: "13 Sep 2011", mbti: "ISFJ", height: "162 cm", blood: "O", horoscope: "Virgo", ig: "@bagus.sbi48", x: "@bagus_sbi48", image: null, jiko: "Kebaikan adalah namaku, panggung adalah rumahku. Bagus hadir!" },
  { name: "Damar Fawwaz Nugroho", team: "GEN7", gen: 7, dob: "2 Feb 2012", mbti: "INFP", height: "160 cm", blood: "A", horoscope: "Aquarius", ig: "@damar.sbi48", x: "@damar_sbi48", image: null, jiko: "Cahaya kecil yang tak akan padam. Damar hadir untuk menerangi!" },
  { name: "Erlangga Putra Wicaksono", team: "GEN7", gen: 7, dob: "19 Mei 2011", mbti: "ESTJ", height: "164 cm", blood: "B", horoscope: "Taurus", ig: "@erlangga.sbi48", x: "@erlangga_sbi48", image: null, jiko: "Disiplin adalah jalan menuju bintang. Erlangga siap menanjak!" },
  { name: "Fauzan Nabil Ramadhan", team: "GEN7", gen: 7, dob: "28 Nov 2011", mbti: "ENFJ", height: "161 cm", blood: "O", horoscope: "Sagitarius", ig: "@fauzan.sbi48", x: "@fauzan_sbi48", image: null, jiko: "Energi positif yang selalu mengalir. Fauzan hadir untuk menginspirasi!" },
  { name: "Gibran Alif Santosa", team: "GEN7", gen: 7, dob: "11 Agu 2011", mbti: "INTJ", height: "163 cm", blood: "A", horoscope: "Leo", ig: "@gibran.sbi48", x: "@gibran_sbi48", image: null, jiko: "Cerdas di luar, manis di dalam. Gibran hadir untuk membuatmu penasaran!" },
  { name: "Haris Dwi Pratama", team: "GEN7", gen: 7, dob: "6 Jan 2012", mbti: "ISFP", height: "159 cm", blood: "B", horoscope: "Capricorn", ig: "@haris.sbi48", x: "@haris_sbi48", image: null, jiko: "Seniman panggung dengan jiwa perasa. Haris hadir untuk menghibur." },
  { name: "Iqbal Fathir Maulana", team: "GEN7", gen: 7, dob: "22 Mar 2011", mbti: "ENTP", height: "162 cm", blood: "O", horoscope: "Aries", ig: "@iqbalf.sbi48", x: "@iqbalf_sbi48", image: null, jiko: "Penantang yang selalu siap. Iqbal Fathir hadir untuk mengejutkan!" },
  { name: "Jovan Reynaldo Putra", team: "GEN7", gen: 7, dob: "15 Okt 2011", mbti: "ESFP", height: "161 cm", blood: "A", horoscope: "Libra", ig: "@jovan.sbi48", x: "@jovan_sbi48", image: null, jiko: "Bintang muda yang bersinar terang! Jovan hadir untuk menyilaukan!" },
  { name: "Kautsar Ilham Ardiansyah", team: "GEN7", gen: 7, dob: "9 Jul 2012", mbti: "INFJ", height: "158 cm", blood: "B", horoscope: "Cancer", ig: "@kautsar.sbi48", x: "@kautsar_sbi48", image: null, jiko: "Permata tersembunyi di panggung. Siapakah yang akan menemukanku?" },
  { name: "Mikael Bintang Saputra", team: "GEN7", gen: 7, dob: "27 Apr 2011", mbti: "ENFP", height: "163 cm", blood: "O", horoscope: "Taurus", ig: "@mikael.sbi48", x: "@mikael_sbi48", image: null, jiko: "Bintang yang siap bersinar. Mikael hadir untuk bersinar terang!" },
  { name: "Rivan Prakoso Hidayat", team: "GEN7", gen: 7, dob: "3 Des 2011", mbti: "ISTP", height: "160 cm", blood: "A", horoscope: "Sagitarius", ig: "@rivan.sbi48", x: "@rivan_sbi48", image: null, jiko: "Energi murni yang tak pernah berhenti. Rivan hadir untuk bergerak!" },
  { name: "Tegar Putra Ramadhani", team: "GEN7", gen: 7, dob: "16 Feb 2012", mbti: "INTJ", height: "159 cm", blood: "B", horoscope: "Aquarius", ig: "@tegar.sbi48", x: "@tegar_sbi48", image: null, jiko: "Tegar di luar, lembut di dalam. Tegar hadir untuk menyentuh hatimu." },
  { name: "Zaky Firdaus Nugraha", team: "GEN7", gen: 7, dob: "30 Sep 2012", mbti: "ISFJ", height: "158 cm", blood: "O", horoscope: "Libra", ig: "@zaky.sbi48", x: "@zaky_sbi48", image: null, jiko: "Kebaikan yang tak pernah pudar. Zaky hadir untukmu!" }
];

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;
  const random = (min, max) => Math.random() * (max - min) + min;

  // ===== STATE =====
  let currentTeamFilter = "ALL";
  let currentGenFilter = "all";
  let currentFilteredMembers = [];
  let currentModalIndex = -1;

  // ===== HELPERS =====
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  $$(".site-logo").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.innerHTML += '<span style="font:900 1.5rem var(--display); color:var(--cyan);">SBI48</span>';
    }, { once: true });
  });

  // ===== NAVIGATION =====
  const menuButton = $("#menuButton");
  const nav = $("#siteNav");
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(isOpen));
      nav.classList.toggle("open", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });
    $$("a", nav).forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  // ===== CURSOR GLOW + SPARKLES + CLICK BURST =====
  const glow = $("#cursorGlow");
  let pointerX = window.innerWidth / 2, pointerY = window.innerHeight / 2, lastSpark = 0;

  if (finePointer && !reduceMotion) {
    window.addEventListener("pointermove", event => {
      pointerX = event.clientX; pointerY = event.clientY;
      if (glow) { glow.style.left = `${pointerX}px`; glow.style.top = `${pointerY}px`; }
      const now = performance.now();
      if (now - lastSpark > 48) {
        lastSpark = now;
        const particle = document.createElement("span");
        particle.className = "pointer-spark";
        particle.style.cssText = `position: fixed; z-index: 45; pointer-events: none; width: 5px; height: 5px; border-radius: 50%; left: ${pointerX + random(-5, 5)}px; top: ${pointerY + random(-5, 5)}px; background: ${Math.random() > 0.5 ? "#8ff3ff" : "#ff9bdf"}; box-shadow: 0 0 10px currentColor; animation: pointerFade .65s ease-out forwards;`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 700);
      }
    }, { passive: true });

    document.addEventListener("click", event => {
      const burstCount = 8;
      for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement("span");
        burst.className = "click-burst";
        const angle = (i / burstCount) * Math.PI * 2;
        const velocity = random(30, 60);
        burst.style.cssText = `left: ${event.clientX}px; top: ${event.clientY}px; background: ${Math.random() > 0.5 ? "var(--cyan)" : "var(--pink)"}; --tx: ${Math.cos(angle) * velocity}px; --ty: ${Math.sin(angle) * velocity}px;`;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
      }
    });
  }

  function createSparkleField() {
    if (reduceMotion) return;
    const layer = $("#sparkleLayer");
    if (!layer) return;
    const count = isMobile ? 35 : 70;
    const colors = ["#ffffff", "#8ff3ff", "#b9a6ff", "#ff9bdf"];
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("span");
      const isStar = i % 7 === 0;
      sparkle.className = isStar ? "sparkle star" : "sparkle";
      if (isStar) sparkle.textContent = "✦";
      sparkle.style.setProperty("--spark-x", `${random(1, 99)}%`);
      sparkle.style.setProperty("--spark-y", `${random(3, 97)}%`);
      sparkle.style.setProperty("--spark-size", isStar ? `${random(9, 15)}px` : `${random(2, 4)}px`);
      sparkle.style.setProperty("--spark-color", colors[Math.floor(Math.random() * colors.length)]);
      sparkle.style.setProperty("--spark-duration", `${random(2, 5)}s`);
      sparkle.style.setProperty("--spark-delay", `${random(0, 5)}s`);
      layer.appendChild(sparkle);
    }
  }
  createSparkleField();

  // ===== MEMBER RENDERING & FILTERING =====
  const memberGrid = $("#memberGrid");
  const countDisplay = $("#countDisplay");
  const filterInfo = $("#filterInfo");
  const filterButtons = $$(".filter-button");
  const genFilterSelect = $("#genFilter");
  const memberSearchSelect = $("#memberSearch");
  const emptyState = $("#emptyState");

  function getInitials(name) {
    return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
  }

  function getTeamClass(team) {
    return `team-${team.toLowerCase()}`;
  }

  function getTeamDisplay(team) {
    return team === "GEN7" ? "TRAINEE" : `TEAM ${team}`;
  }

  function applyFilters() {
    let filtered = membersData;

    // Apply team filter
    if (currentTeamFilter !== "ALL") {
      filtered = filtered.filter(m => m.team === currentTeamFilter);
    }

    // Apply generation filter
    if (currentGenFilter !== "all") {
      filtered = filtered.filter(m => m.gen === parseInt(currentGenFilter, 10));
    }

    // Sort alphabetically for ALL MEMBERS view
    if (currentTeamFilter === "ALL") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, "id"));
    }

    currentFilteredMembers = filtered;
    return filtered;
  }

  function updateSearchDropdown() {
    if (!memberSearchSelect) return;
    const currentValue = memberSearchSelect.value;
    
    // Clear and rebuild
    memberSearchSelect.innerHTML = '<option value="">— PILIH MEMBER —</option>';
    
    currentFilteredMembers.forEach(member => {
      const opt = document.createElement("option");
      const fullName = member.name.split(" ")[0]; // first name
      const teamLabel = getTeamDisplay(member.team);
      opt.value = member.name;
      opt.textContent = `${member.name} (${teamLabel})`;
      memberSearchSelect.appendChild(opt);
    });

    // Restore selection if still valid
    if (currentValue && currentFilteredMembers.some(m => m.name === currentValue)) {
      memberSearchSelect.value = currentValue;
    }
  }

  function renderMembers() {
    const filtered = applyFilters();
    countDisplay.textContent = filtered.length;

    // Filter info
    const infoBits = [];
    if (currentTeamFilter !== "ALL") infoBits.push(getTeamDisplay(currentTeamFilter));
    if (currentGenFilter !== "all") infoBits.push(`Gen ${currentGenFilter}`);
    filterInfo.textContent = infoBits.length ? `· ${infoBits.join(" × ")}` : "";

    // Update search dropdown
    updateSearchDropdown();

    memberGrid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.style.display = "block";
      return;
    }
    emptyState.style.display = "none";

    filtered.forEach((member, index) => {
      const card = document.createElement("div");
      card.className = `member-card ${getTeamClass(member.team)} reveal`;
      card.style.transitionDelay = `${Math.min(index * 0.04, 0.8)}s`;

      let imageHTML = "";
      if (member.image) {
        imageHTML = `<img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
      }
      const fallbackHTML = `
        <div class="fallback-avatar" style="display: ${member.image ? 'none' : 'flex'}">
          <span>${getInitials(member.name)}</span>
        </div>
      `;

      card.innerHTML = `
        <div class="card-image">
          ${imageHTML}
          ${fallbackHTML}
        </div>
        <div class="card-info">
          <span class="card-team">${getTeamDisplay(member.team)}</span>
          <h3 class="card-name">${member.name}</h3>
          <div class="card-meta">
            <span>Gen ${member.gen}</span>
            <span>${member.mbti}</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        const idx = currentFilteredMembers.findIndex(m => m.name === member.name);
        openModal(idx);
      });

      // 3D Tilt
      if (finePointer && !reduceMotion) {
        card.addEventListener("pointermove", event => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-5px)`;
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      }

      memberGrid.appendChild(card);
    });

    observeReveals();
  }

  // ===== FILTER BUTTON HANDLERS =====
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      currentTeamFilter = btn.dataset.filter;
      renderMembers();
      if ($("#memberModal").classList.contains("active")) closeModal();
    });
  });

  // ===== GENERATION SELECT HANDLER =====
  genFilterSelect.addEventListener("change", () => {
    currentGenFilter = genFilterSelect.value;
    renderMembers();
    if ($("#memberModal").classList.contains("active")) closeModal();
  });

  // ===== NAME SEARCH HANDLER =====
  memberSearchSelect.addEventListener("change", () => {
    const selectedName = memberSearchSelect.value;
    if (!selectedName) return;
    const idx = currentFilteredMembers.findIndex(m => m.name === selectedName);
    if (idx !== -1) openModal(idx);
    // Reset select to placeholder after selection
    setTimeout(() => { memberSearchSelect.value = ""; }, 300);
  });

  // Initial render
  renderMembers();

  // ===== MODAL LOGIC =====
  const modal = $("#memberModal");
  const modalClose = $("#modalClose");
  const modalBackdrop = $("#modalBackdrop");
  const modalPrev = $("#modalPrev");
  const modalNext = $("#modalNext");

  function populateModal(index) {
    if (index < 0 || index >= currentFilteredMembers.length) return;
    currentModalIndex = index;
    const member = currentFilteredMembers[index];

    $("#modalName").textContent = member.name;
    $("#modalGen").textContent = `GENERATION ${member.gen}`;
    $("#modalDob").textContent = member.dob;
    $("#modalMbti").textContent = member.mbti;
    $("#modalHeight").textContent = member.height;
    $("#modalBlood").textContent = member.blood;
    $("#modalHoroscope").textContent = member.horoscope;
    $("#modalTeamBadge").textContent = getTeamDisplay(member.team);
    $("#modalJiko").textContent = `"${member.jiko}"`;

    // Image
    const imgWrapper = $("#modalImageWrapper");
    if (member.image) {
      imgWrapper.innerHTML = `<img src="${member.image}" alt="${member.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="fallback-avatar ${getTeamClass(member.team)}" style="display:none"><span>${getInitials(member.name)}</span></div>`;
    } else {
      imgWrapper.innerHTML = `<div class="fallback-avatar ${getTeamClass(member.team)}"><span>${getInitials(member.name)}</span></div>`;
    }

    // Socials
    const igLink = $("#modalIg");
    const xLink = $("#modalX");
    if (member.ig) {
      igLink.href = `https://instagram.com/${member.ig.replace('@', '')}`;
      igLink.style.display = "flex";
      $("#modalIgHandle").textContent = member.ig;
    } else {
      igLink.style.display = "none";
    }
    if (member.x) {
      xLink.href = `https://twitter.com/${member.x.replace('@', '')}`;
      xLink.style.display = "flex";
      $("#modalXHandle").textContent = member.x;
    } else {
      xLink.style.display = "none";
    }

    // Counter
    $("#modalCounterCurrent").textContent = index + 1;
    $("#modalCounterTotal").textContent = currentFilteredMembers.length;

    // Prev / Next buttons
    const prevIndex = (index - 1 + currentFilteredMembers.length) % currentFilteredMembers.length;
    const nextIndex = (index + 1) % currentFilteredMembers.length;
    const prevMember = currentFilteredMembers[prevIndex];
    const nextMember = currentFilteredMembers[nextIndex];

    $("#prevName").textContent = prevMember.name.split(" ")[0];
    $("#nextName").textContent = nextMember.name.split(" ")[0];

    // Disable if only one member
    if (currentFilteredMembers.length <= 1) {
      modalPrev.disabled = true;
      modalNext.disabled = true;
    } else {
      modalPrev.disabled = false;
      modalNext.disabled = false;
    }

    // Apply transition animation for navigation
    const modalInfo = $(".modal-info");
    if (modalInfo) {
      modalInfo.style.animation = "none";
      void modalInfo.offsetWidth; // reflow
      modalInfo.style.animation = "slideIn .4s ease";
    }
  }

  function openModal(index) {
    populateModal(index);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentModalIndex = -1;
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  modalPrev.addEventListener("click", () => {
    const newIndex = (currentModalIndex - 1 + currentFilteredMembers.length) % currentFilteredMembers.length;
    populateModal(newIndex);
  });
  modalNext.addEventListener("click", () => {
    const newIndex = (currentModalIndex + 1) % currentFilteredMembers.length;
    populateModal(newIndex);
  });

  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("active")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") modalPrev.click();
    if (event.key === "ArrowRight") modalNext.click();
  });

  // Add slide animation to CSS dynamically
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes pointerFade {
      from { opacity: .95; transform: translate(-50%, -50%) scale(1); }
      to { opacity: 0; transform: translate(-50%, -50%) scale(0); }
    }
  `;
  document.head.appendChild(styleSheet);

  // ===== SCROLL REVEAL =====
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
    } else {
      revealItems.forEach(item => item.classList.add("in-view"));
    }
  }
  observeReveals();

  // ===== BACK TO TOP =====
  const toTop = $("#toTop");
  let scrollTicking = false;
  function updateTopButton() {
    if (!toTop) return;
    toTop.classList.toggle("visible", window.scrollY > 450);
    scrollTicking = false;
  }
  window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateTopButton);
  }, { passive: true });
  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

    // ===== AUTO-OPEN MEMBER MODAL FROM URL PARAM (Deep Linking) =====
  const urlParams = new URLSearchParams(window.location.search);
  const searchName = urlParams.get("search");
  
  if (searchName) {
    // Tunggu sebentar agar grid selesai di-render
    setTimeout(() => {
      const targetIndex = currentFilteredMembers.findIndex(m => m.name.toLowerCase() === searchName.toLowerCase());
      if (targetIndex !== -1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        openModal(targetIndex);
        
        // Bersihkan URL agar tidak terbuka lagi saat refresh
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }, 600);
  }
});
