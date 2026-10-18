/* =========================================
   1. DATA MEMBER (untuk line-up)
   ========================================= */
const membersData = [
  // SIII
  { name: "Radhiya Wira Sakti", team: "SIII", image: null },
  { name: "Akbar Firmansyah Putra Daryono", team: "SIII", image: "Akbar_SIII.png" },
  { name: "Adrian Bagus Pramudya", team: "SIII", image: null },
  { name: "Arief Rahman Hakim", team: "SIII", image: null },
  { name: "Bima Satya Nugroho", team: "SIII", image: null },
  { name: "Dimas Arya Putranto", team: "SIII", image: null },
  { name: "Endang Suhendar", team: "SIII", image: "Endang_SIII.png" },
  { name: "Hariz Abdullah Saputra", team: ["SIII", "BIV", "I"], image: null },
  { name: "Ilman Arya Fathurrahman", team: "SIII", image: null },
  { name: "Iqbal Nur Fathurrahman", team: "SIII", image: null },
  { name: "Jendra Prasetyo Wibowo", team: "SIII", image: "Jendra_SIII.png" },
  { name: "Julio Triwira Frediyanto", team: "SIII", image: "Julio_SIII.png" },
  { name: "Kevin Alvaro Wijaya", team: "SIII", image: null },
  { name: "Krisna Bayu Saputra", team: "SIII", image: null },
  { name: "Miko Fajar Santoso", team: "SIII", image: null },
  { name: "Muhammad Arkan Pradipta", team: "SIII", image: "Arkan_SIII.png" },
  { name: "Rendy Prakoso Utama", team: "SIII", image: null },
  { name: "Syafril Firman Syah", team: "SIII", image: "Syafril_SIII.png" },
  { name: "Taufik Hidayat Nugroho", team: "SIII", image: null },
  { name: "Yudha Pramana Putra", team: "SIII", image: "Yudha_SIII.png" },
  // BIV
  { name: "Bagas Mahendra Putra", team: "BIV", image: null },
  { name: "Daffa Rizky Ramadhan", team: "BIV", image: null },
  { name: "Dewa Guntur Saputra", team: "BIV", image: null },
  { name: "Dion Arya Saputro", team: "BIV", image: null },
  { name: "Evan Pratama Nugraha", team: "BIV", image: null },
  { name: "Farhan Dzikri Ramadhan", team: "BIV", image: null },
  { name: "Fikri Alwan Prasetyo", team: "BIV", image: null },
  { name: "Galih Ginata Putra", team: "BIV", image: "Galih_BIV.png" },
  { name: "Gerry Alvaro Santoso", team: "BIV", image: null },
  { name: "Haidar Zainal Abidin", team: "BIV", image: null },
  { name: "Irfan Kurniawan Putra", team: "BIV", image: null },
  { name: "Khalid Naufal Hakim", team: "BIV", image: null },
  { name: "Luthfi Arkan Prasetyo", team: "BIV", image: null },
  { name: "Muhammad Ilham Setiawan", team: "BIV", image: null },
  { name: "Muhammad Zaki Zulfikar", team: "BIV", image: "MZ_BIV.png" },
  { name: "Rafiq Alamsyah Putra", team: "BIV", image: null },
  { name: "Rizal Bagus Permana", team: "BIV", image: null },
  { name: "Rizky Aditya Pratama", team: "BIV", image: "Rizky_BIV.png" },
  { name: "Yoga Pratama Wicaksana", team: "BIV", image: null },
  { name: "Yusuf Nabil Ardiansyah", team: "BIV", image: null },
  // I
  { name: "Jaka Ginata Putra", team: "I", image: null },
  { name: "Aditya Fauzan Nugraha", team: "I", image: "Adit F_I.png" },
  { name: "Aditya Prama Wicaksana", team: "I", image: "Aditya P_I.png" },
  { name: "Ahmad Farel Ramadhan", team: "I", image: null },
  { name: "Alvin Prakoso Wijanarko", team: "I", image: null },
  { name: "Bayu Seto Pranata", team: "I", image: null },
  { name: "Cahya Rizki Mahardika", team: "I", image: null },
  { name: "Fathan Zaky Pratama", team: "I", image: null },
  { name: "Gilang Surya Mahesa", team: "I", image: null },
  { name: "Hafiz Reyhan Nugroho", team: "I", image: null },
  { name: "Jonathan Rizal Pradana", team: "I", image: null },
  { name: "M. Rafi Akmal Hidayat", team: "I", image: null },
  { name: "Naufal Arya Prasetyo", team: "I", image: null },
  { name: "Nico Andhika Saputra", team: "I", image: null },
  { name: "Rama Dwi Kurniawan", team: "I", image: null },
  { name: "Reza Maulana Hakim", team: "I", image: null },
  { name: "Surya Adi Wicaksono", team: "I", image: null },
  { name: "Syahrul Fikri Ananta", team: "I", image: null },
  { name: "Zidan Farrel Alamsyah", team: "I", image: null },
  // GEN7
  { name: "Adnan Rizky Pramudya", team: "GEN7", image: null },
  { name: "Aksa Bintang Mahesa", team: "GEN7", image: null },
  { name: "Althaf Zidan Prakoso", team: "GEN7", image: null },
  { name: "Bagus Arya Saputro", team: "GEN7", image: null },
  { name: "Damar Fawwaz Nugroho", team: "GEN7", image: null },
  { name: "Erlangga Putra Wicaksono", team: "GEN7", image: null },
  { name: "Fauzan Nabil Ramadhan", team: "GEN7", image: null },
  { name: "Gibran Alif Santosa", team: "GEN7", image: null },
  { name: "Haris Dwi Pratama", team: "GEN7", image: null },
  { name: "Iqbal Fathir Maulana", team: "GEN7", image: null },
  { name: "Jovan Reynaldo Putra", team: "GEN7", image: null },
  { name: "Kautsar Ilham Ardiansyah", team: "GEN7", image: null },
  { name: "Mikael Bintang Saputra", team: "GEN7", image: null },
  { name: "Rivan Prakoso Hidayat", team: "GEN7", image: null },
  { name: "Tegar Putra Ramadhani", team: "GEN7", image: null },
  { name: "Zaky Firdaus Nugraha", team: "GEN7", image: null }
];

/* =========================================
   2. DATA SHOW SEPTEMBER 2026
   ========================================= */
const showDatabase = [
  // 3 September (Kamis)
  {
    id: "2026-09-03-siii",
    date: "2026-09-03",
    day: "Kamis",
    dayNum: 3,
    title: "Tunas di Balik Seragam",
    team: "SIII",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Setlist spesial Team SIII dengan kostum seragam sekolah."
  },
  // 4 September (Jumat)
  {
    id: "2026-09-04-sbi48",
    date: "2026-09-04",
    day: "Jumat",
    dayNum: 4,
    title: "Road To Unity: Before the Serayu",
    team: "SBI48",
    category: "show",
    time: "19:30 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Show kolaborasi seluruh member SBI48 menuju era Unity."
  },
  // 5 September (Sabtu) - 2 show
  {
    id: "2026-09-05-gen7-1",
    date: "2026-09-05",
    day: "Sabtu",
    dayNum: 5,
    title: "Pajama Drive",
    team: "GEN7",
    category: "show",
    time: "14:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Show santai Trainee Generasi 7 dengan tema pajama."
  },
  {
    id: "2026-09-05-biv",
    date: "2026-09-05",
    day: "Sabtu",
    dayNum: 5,
    title: "Saka Agari",
    team: "BIV",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Setlist enerjik Team BIV dengan koreografi dinamis."
  },
  // 6 September (Minggu)
  {
    id: "2026-09-06-i",
    date: "2026-09-06",
    day: "Minggu",
    dayNum: 6,
    title: "Fajar Sang Idola",
    team: "I",
    category: "show",
    time: "15:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Show pagi Team I dengan suasana hangat dan intimate."
  },
  // 10 September (Kamis)
  {
    id: "2026-09-10-siii",
    date: "2026-09-10",
    day: "Kamis",
    dayNum: 10,
    title: "Tunas di Balik Seragam",
    team: "SIII",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Pertunjukan kedua setlist Tunas di Balik Seragam bulan ini."
  },
  // 11 September (Jumat)
  {
    id: "2026-09-11-biv",
    date: "2026-09-11",
    day: "Jumat",
    dayNum: 11,
    title: "Saka Agari",
    team: "BIV",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Saka Agari dengan line-up berbeda dari minggu lalu."
  },
  // 12 September (Sabtu) - 2 show
  {
    id: "2026-09-12-i-1",
    date: "2026-09-12",
    day: "Sabtu",
    dayNum: 12,
    title: "Fajar Sang Idola",
    team: "I",
    category: "show",
    time: "14:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Fajar Sang Idola edisi Sabtu siang."
  },
  {
    id: "2026-09-12-sbi48",
    date: "2026-09-12",
    day: "Sabtu",
    dayNum: 12,
    title: "Road To Unity: Before the Serayu",
    team: "SBI48",
    category: "show",
    time: "19:30 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Road To Unity edisi Sabtu malam dengan guest surprise."
  },
  // 13 September (Minggu) - ada event
  {
    id: "2026-09-13-event",
    date: "2026-09-13",
    day: "Minggu",
    dayNum: 13,
    title: "SBI48 Handshake Event",
    team: "SBI48",
    category: "event",
    time: "10:00 - 16:00 WIB",
    venue: "Rita Supermall Purwokerto",
    desc: "Event jabat tangan dengan member SBI48. Dapatkan tiket via fanclub."
  },
  {
    id: "2026-09-13-gen7",
    date: "2026-09-13",
    day: "Minggu",
    dayNum: 13,
    title: "Pajama Drive",
    team: "GEN7",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Pajama Drive malam Minggu bersama Trainee Gen 7."
  },
  // 17 September (Kamis)
  {
    id: "2026-09-17-biv",
    date: "2026-09-17",
    day: "Kamis",
    dayNum: 17,
    title: "Saka Agari",
    team: "BIV",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Saka Agari dengan formasi terbaru."
  },
  // 18 September (Jumat)
  {
    id: "2026-09-18-siii",
    date: "2026-09-18",
    day: "Jumat",
    dayNum: 18,
    title: "Tunas di Balik Seragam",
    team: "SIII",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Pertunjukan ketiga Tunas di Balik Seragam."
  },
  // 19 September (Sabtu) - 2 show
  {
    id: "2026-09-19-i",
    date: "2026-09-19",
    day: "Sabtu",
    dayNum: 19,
    title: "Fajar Sang Idola",
    team: "I",
    category: "show",
    time: "14:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Fajar Sang Idola dengan unit song spesial."
  },
  {
    id: "2026-09-19-sbi48",
    date: "2026-09-19",
    day: "Sabtu",
    dayNum: 19,
    title: "Road To Unity: Before the Serayu",
    team: "SBI48",
    category: "show",
    time: "19:30 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Road To Unity edisi akhir September."
  },
  // 20 September (Minggu)
  {
    id: "2026-09-20-gen7",
    date: "2026-09-20",
    day: "Minggu",
    dayNum: 20,
    title: "Pajama Drive",
    team: "GEN7",
    category: "show",
    time: "15:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Pajama Drive edisi Minggu sore."
  },
  // 24 September (Kamis)
  {
    id: "2026-09-24-i",
    date: "2026-09-24",
    day: "Kamis",
    dayNum: 24,
    title: "Fajar Sang Idola",
    team: "I",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Fajar Sang Idola malam Kamis."
  },
  // 25 September (Jumat)
  {
    id: "2026-09-25-biv",
    date: "2026-09-25",
    day: "Jumat",
    dayNum: 25,
    title: "Saka Agari",
    team: "BIV",
    category: "show",
    time: "19:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Saka Agari edisi Jumat malam."
  },
  // 26 September (Sabtu) - 2 show
  {
    id: "2026-09-26-siii",
    date: "2026-09-26",
    day: "Sabtu",
    dayNum: 26,
    title: "Tunas di Balik Seragam",
    team: "SIII",
    category: "show",
    time: "14:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Tunas di Balik Seragam edisi Sabtu siang."
  },
  {
    id: "2026-09-26-sbi48",
    date: "2026-09-26",
    day: "Sabtu",
    dayNum: 26,
    title: "Road To Unity: Before the Serayu",
    team: "SBI48",
    category: "show",
    time: "19:30 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Road To Unity edisi spesial akhir September."
  },
  // 27 September (Minggu)
  {
    id: "2026-09-27-gen7",
    date: "2026-09-27",
    day: "Minggu",
    dayNum: 27,
    title: "Pajama Drive",
    team: "GEN7",
    category: "show",
    time: "15:00 WIB",
    venue: "SBI48 Theater · Purwokerto",
    desc: "Pajama Drive penutup September untuk Trainee."
  }
];

/* =========================================
   3. SEEDED RANDOM & LINEUP GENERATOR
   ========================================= */
// Seeded random agar line-up konsisten per show
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function shuffleWithSeed(arr, seed) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i * 7 + 13) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Cek apakah member ada di tim tertentu
const isInTeam = (member, teamName) => {
  return Array.isArray(member.team) ? member.team.includes(teamName) : member.team === teamName;
};

// Generate line-up 16 member dengan blocking rules
function generateLineup(show) {
  const seed = show.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  let pool = [];
  let mandatory = [];
  let forbiddenPairs = [];
  let forbiddenTogether = [];

  if (show.team === "SIII") {
    pool = membersData.filter(m => isInTeam(m, "SIII"));
    // Akbar & Julio tidak boleh 1 show
    forbiddenPairs.push(["Akbar Firmansyah Putra Daryono", "Julio Triwira Frediyanto"]);
  } else if (show.team === "BIV") {
    pool = membersData.filter(m => isInTeam(m, "BIV"));
    // Galih & Zaki tidak boleh 1 show
    forbiddenPairs.push(["Galih Ginata Putra", "Muhammad Zaki Zulfikar"]);
  } else if (show.team === "I") {
    pool = membersData.filter(m => isInTeam(m, "I"));
    // Aditya Fauzan wajib ada
    mandatory = ["Aditya Fauzan Nugraha"];
  } else if (show.team === "GEN7") {
    pool = membersData.filter(m => m.team === "GEN7");
  } else if (show.team === "SBI48") {
    // Road To Unity: gabungan semua tim reguler
    pool = membersData.filter(m => m.team !== "GEN7" || isInTeam(m, "SIII") || isInTeam(m, "BIV") || isInTeam(m, "I"));
    pool = membersData.filter(m => isInTeam(m, "SIII") || isInTeam(m, "BIV") || isInTeam(m, "I"));
    // Akbar, Galih, Aditya Fauzan harus terpisah
    forbiddenTogether.push(["Akbar Firmansyah Putra Daryono", "Galih Ginata Putra", "Aditya Fauzan Nugraha"]);
    // Tetap apply pair rules
    forbiddenPairs.push(["Akbar Firmansyah Putra Daryono", "Julio Triwira Frediyanto"]);
    forbiddenPairs.push(["Galih Ginata Putra", "Muhammad Zaki Zulfikar"]);
    mandatory = ["Aditya Fauzan Nugraha"]; // Aditya Fauzan wajib di Road To Unity juga
  }

  // Shuffle pool
  const shuffled = shuffleWithSeed(pool, seed);

  const lineup = [];
  const usedNames = new Set();

  // Tambahkan mandatory dulu
  mandatory.forEach(name => {
    const member = shuffled.find(m => m.name === name);
    if (member) {
      lineup.push(member);
      usedNames.add(name);
    }
  });

  // Tambahkan member lain dengan cek blocking
  for (const member of shuffled) {
    if (lineup.length >= 16) break;
    if (usedNames.has(member.name)) continue;

    // Cek forbidden pairs
    let blocked = false;
    for (const pair of forbiddenPairs) {
      if (pair.includes(member.name)) {
        const other = pair.find(n => n !== member.name);
        if (usedNames.has(other)) {
          blocked = true;
          break;
        }
      }
    }
    if (blocked) continue;

    // Cek forbidden together (untuk Road To Unity)
    for (const group of forbiddenTogether) {
      if (group.includes(member.name)) {
        const othersInGroup = group.filter(n => n !== member.name);
        const othersPresent = othersInGroup.filter(n => usedNames.has(n));
        if (othersPresent.length > 0) {
          blocked = true;
          break;
        }
      }
    }
    if (blocked) continue;

    lineup.push(member);
    usedNames.add(member.name);
  }

  // Jika belum 16, tambahkan dari pool yang tersisa (abaikan blocking)
  if (lineup.length < 16) {
    for (const member of shuffled) {
      if (lineup.length >= 16) break;
      if (!usedNames.has(member.name)) {
        lineup.push(member);
        usedNames.add(member.name);
      }
    }
  }

  return lineup.slice(0, 16);
}

// Cache line-up agar konsisten
const lineupCache = {};
function getLineup(show) {
  if (!lineupCache[show.id]) {
    lineupCache[show.id] = generateLineup(show);
  }
  return lineupCache[show.id];
}

/* =========================================
   4. STATE & DOM
   ========================================= */
let currentCategory = "all";
let currentYear = 2026;
let currentMonth = 8; // September (0-indexed)

const scheduleContainer = document.getElementById("schedule-container");
const emptyState = document.getElementById("empty-state");
const showModal = document.getElementById("show-modal");

/* =========================================
   5. RENDER SCHEDULE
   ========================================= */
function renderSchedule() {
  // Filter shows
  let shows = showDatabase.filter(s => {
    const d = new Date(s.date);
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
  });

  if (currentCategory !== "all") {
    shows = shows.filter(s => s.category === currentCategory);
  }

  // Sort by date then time
  shows.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.time.localeCompare(b.time);
  });

  if (shows.length === 0) {
    scheduleContainer.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  // Group by day
  const grouped = {};
  shows.forEach(s => {
    if (!grouped[s.date]) grouped[s.date] = [];
    grouped[s.date].push(s);
  });

  const html = Object.keys(grouped).map(date => {
    const dayShows = grouped[date];
    const first = dayShows[0];
    const d = new Date(date);
    const dayName = first.day;

    return `
      <div class="day-group" data-animate="fade-up">
        <div class="day-marker">
          <div class="day-number">${d.getDate()}</div>
          <div class="day-name">${dayName}</div>
        </div>
        <div class="day-divider"></div>
        ${dayShows.map(show => renderShowCard(show)).join("")}
      </div>
    `;
  }).join("");

  scheduleContainer.innerHTML = html;

  // Attach click events
  document.querySelectorAll(".show-card").forEach(card => {
    card.addEventListener("click", () => {
      openShowModal(card.dataset.showId);
    });
  });

  // Trigger animations
  document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('is-visible');
  });
}

function renderShowCard(show) {
  const teamClass = `team-${show.team.toLowerCase()}`;
  const catClass = show.category;
  const catLabel = show.category === "show" ? "SHOW" : "EVENT";

  return `
    <div class="show-card ${teamClass}" data-show-id="${show.id}">
      <div class="show-time">${show.time}</div>
      <div class="show-info">
        <span class="show-category-tag ${catClass}">${catLabel}</span>
        <h3 class="show-title">${show.title}</h3>
        <div class="show-team">Team ${show.team === "SBI48" ? "SBI48 (Gabungan)" : show.team === "GEN7" ? "Trainee Gen 7" : show.team}</div>
        <div class="show-venue">📍 ${show.venue}</div>
      </div>
      <button class="show-cta">DETAIL →</button>
    </div>
  `;
}

/* =========================================
   6. SHOW MODAL
   ========================================= */
function openShowModal(showId) {
  const show = showDatabase.find(s => s.id === showId);
  if (!show) return;

  const lineup = getLineup(show);

  // Header info
  document.getElementById("modal-category").textContent = show.category.toUpperCase();
  document.getElementById("modal-title").textContent = show.title;
  document.getElementById("modal-date").textContent = `${show.day}, ${show.dayNum} September 2026`;
  document.getElementById("modal-time").textContent = show.time;
  document.getElementById("modal-venue").textContent = show.venue;
  document.getElementById("modal-desc").textContent = show.desc;
  document.getElementById("lineup-count").textContent = `${lineup.length} MEMBER`;

  // Render lineup grid
  const lineupGrid = document.getElementById("lineup-grid");
  lineupGrid.innerHTML = lineup.map(member => {
    const primaryTeam = Array.isArray(member.team) ? member.team[0] : member.team;
    const teamClass = primaryTeam.toLowerCase();
    const teamLabel = primaryTeam === "GEN7" ? "TRAINEE" : primaryTeam;

    return `
      <a href="members.html?focus=${encodeURIComponent(member.name)}" class="lineup-member">
        <div class="lineup-photo ${member.image ? 'has-image' : ''}">
          ${member.image 
            ? `<img src="${member.image}" alt="${member.name}" loading="lazy">`
            : `<span class="placeholder-icon">✦</span>`
          }
        </div>
        <div class="lineup-info">
          <div class="lineup-name">${member.name}</div>
          <span class="lineup-team-badge ${teamClass}">${teamLabel}</span>
        </div>
      </a>
    `;
  }).join("");

  showModal.classList.add("open");
  showModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeShowModal() {
  showModal.classList.remove("open");
  showModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* =========================================
   7. SIDEBAR
   ========================================= */
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarClose = document.getElementById('sidebar-close');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  if (!showModal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

menuBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar-link').forEach(link => link.addEventListener('click', closeSidebar));

/* =========================================
   8. FILTER EVENT LISTENERS
   ========================================= */
document.getElementById("year-filter").addEventListener("change", (e) => {
  currentYear = parseInt(e.target.value);
  renderSchedule();
});

document.getElementById("month-filter").addEventListener("change", (e) => {
  currentMonth = parseInt(e.target.value);
  renderSchedule();
});

document.querySelectorAll(".cat-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderSchedule();
  });
});

// Modal close
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeShowModal));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (showModal.classList.contains('open')) closeShowModal();
    else if (sidebar.classList.contains('open')) closeSidebar();
  }
});

/* =========================================
   9. SCROLL ANIMATIONS & INIT
   ========================================= */
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  renderSchedule();
  document.querySelectorAll('[data-animate]').forEach(el => scrollObserver.observe(el));
});