/* ========================================
   SBI48 — SCHEDULE INTERACTIVE EXPERIENCE
   Features: Auto Current Date Default, 6 Team Options, 1-Center Logic, Deterministic Random
======================================== */

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTXSO4F0RGtG62vXas3tz2Y5yuxK5v-4B9zvglhinBDq7IK-a-xZo2-ZMakdgOHwNM_ScpwpCa0bHs/pub?output=csv";

const membersData = [
  { name: "Radhiya Wira Sakti", team: "SIII", image: "Radhiya_SIII.png" },
  { name: "Adrian Bagus Pramudya", team: "SIII", image: "Adrian_SIII.png" },
  { name: "Akbar Firmansyah Putra Daryono", team: "SIII", image: "Akbar_SIII.png" },
  { name: "Arief Rahman Hakim", team: "SIII", image: null },
  { name: "Bima Satya Nugroho", team: "SIII", image: null },
  { name: "Dimas Arya Putranto", team: "SIII", image: null },
  { name: "Endang Suhendar", team: "SIII", image: "Endang_SIII.png" },
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
  { name: "Taufik Hidayat Nugroho", team: "SIII", image: "Taufik_SIII.png" },
  { name: "Yudha Pramana Putra", team: "SIII", image: "Yudha_SIII.png" },
  { name: "Muhammad Zaki Zulfikar", team: "BIV", image: "MZ_BIV.png" },
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
  { name: "Rafiq Alamsyah Putra", team: "BIV", image: null },
  { name: "Rizal Bagus Permana", team: "BIV", image: null },
  { name: "Rizky Aditya Pratama", team: "BIV", image: "Rizky_BIV.png" },
  { name: "Yoga Pratama Wicaksana", team: "BIV", image: null },
  { name: "Yusuf Nabil Ardiansyah", team: "BIV", image: null },
  { name: "Jaka Ginata Putra", team: "I", image: null },
  { name: "Aditya Fauzan Nugraha", team: "I", image: "Aditya F_I.png" },
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

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;

  // ===== AUTO-DETECT CURRENT DATE =====
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0'); // "01" to "12"

  let currentFilter = "ALL";
  let currentYearFilter = currentYear;   // Default ke tahun sekarang
  let currentMonthFilter = currentMonth; // Default ke bulan sekarang
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

    // Pastikan tahun sekarang selalu ada di daftar, meski belum ada event
    years.add(currentYear);

    const sortedYears = Array.from(years).sort(); // Urut dari terlama ke terbaru

    yearSelect.innerHTML = ''; // Kosongkan dulu
    sortedYears.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      if (year === currentYear) {
        option.selected = true; // Set default ke tahun sekarang
      }
      yearSelect.appendChild(option);
    });
  }

  // ===== HELPER: Set Default Month =====
  function setDefaultMonth() {
    const monthSelect = $("#monthFilter");
    if (monthSelect) {
      monthSelect.value = currentMonth; // Set default ke bulan sekarang
    }
  }

  // ===== LINEUP GENERATOR (DENGAN FITUR EXCLUDE) =====
  function generateLineup(lineupInput, team, eventName, date) {
    const cleanTeam = (team || "").trim().toUpperCase();
    let pool = [];
    let showAllMembers = false;

    // 1. Tentukan pool berdasarkan Tim
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

    // 2. Cek jika lineup kosong
    const isEmptyLineup = !lineupInput || lineupInput.trim() === "" || lineupInput.toLowerCase() === "kosong";
    if (isEmptyLineup && !showAllMembers) return [];
    if (showAllMembers && isEmptyLineup) return pool.map(m => ({ ...m, isCenter: false }));

    let lineup = [];
    let available = [...pool];
    let centerMember = null;

    // 3. Proses Input Lineup (Termasuk Exclude)
    if (!isEmptyLineup) {
      const names = lineupInput.split(",").map(n => n.trim());
      
      for (let name of names) {
        // A. Cek apakah ini perintah EXCLUDE (diawali tanda '-' atau kata 'exclude')
        if (name.startsWith("-") || name.toLowerCase().startsWith("exclude ")) {
          let cleanExcludeName = name.replace(/^[-\s]+|exclude\s+/gi, "").trim();
          let memberToExclude = pool.find(m => m.name.toLowerCase().includes(cleanExcludeName.toLowerCase()));
          
          if (memberToExclude) {
            // Hapus dari pool acak agar tidak terpilih
            available = available.filter(m => m.name !== memberToExclude.name);
          }
          continue; // Lanjut ke nama berikutnya
        }

        // B. Cek apakah ini CENTER
        let isCenter = name.toUpperCase().includes("(C)") || name.toUpperCase().includes("(CENTER)");
        let cleanName = name.replace(/\(C\)|\(CENTER\)/gi, "").trim();

        let member = available.find(m => m.name.toLowerCase().includes(cleanName.toLowerCase()));
        if (member) {
          if (isCenter) {
            centerMember = { ...member, isCenter: true };
          } else {
            lineup.push({ ...member, isCenter: false });
          }
          // Hapus dari available agar tidak teracak ulang
          available = available.filter(m => m.name !== member.name);
        }
      }
    }

    // 4. Jika mode "SBI48 Members" → tambahkan SEMUA sisa member
    if (showAllMembers) {
      available.forEach(m => {
        lineup.push({ ...m, isCenter: false });
      });
      return centerMember ? [centerMember, ...lineup] : lineup;
    }

    // 5. Mode Normal: Acak hingga 16 member (Deterministik / Anti-Refresh)
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
        setDefaultMonth(); // Set bulan sekarang sebagai default

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
        // 1. Filter Tipe
        if (currentFilter !== "ALL") {
          const type = (e.type || "").toLowerCase().trim();
          const filter = currentFilter.toLowerCase().trim();
          if (!(type === filter || type.includes(filter) || filter.includes(type))) return false;
        }
        // 2. Filter Tahun (Strict match, tidak ada "all")
        if (parsed.year !== currentYearFilter) return false;
        // 3. Filter Bulan (Strict match, tidak ada "all")
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