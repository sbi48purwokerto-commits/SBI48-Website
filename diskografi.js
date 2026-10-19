/* ========================================
   SBI48 — DISCOGRAPHY INTERACTIVE EXPERIENCE
   Features: Chronological Sort, Category Filter, 
             Modal with Tracklist & Center Highlight, Prev/Next Nav
======================================== */

const releasesData = [
  {
    id: "d1", title: "Ingin Bertemu (Aitakatta)", type: "DIGITAL", date: "17 Agustus 2018", sortDate: "2018-08-17",
    cover: "Ingin_Bertemu.png",
    tracks: ["Ingin Bertemu (C: Akbar Firmansyah)"]
  },
  {
    id: "s1", title: "Heavy Rotation / Karena Kusuka Dirimu", type: "SINGLE", date: "5 Januari 2019", sortDate: "2019-01-05",
    cover: "s1.png",
    tracks: [
      "Heavy Rotation (C: Akbar Firmansyah)",
      "Karena Kusuka Dirimu (C: Akbar Firmansyah)",
      "Heavy Rotation (Off Vocal ver.)",
      "Karena Kusuka Dirimu (Off Vocal ver.)"
    ]
  },
  {
    id: "s2", title: "RIVER", type: "SINGLE", date: "20 Juni 2019", sortDate: "2019-06-20",
    cover: "s2.png",
    tracks: [
      "RIVER (C: Akbar Firmansyah & Jendra Prasetyo)",
      "Ingin Bertemu (Aitakatta)",
      "RIVER (Off Vocal ver.)",
      "Ingin Bertemu (Off Vocal ver.)"
    ]
  },
  {
    id: "a1", title: "Sungai Impian", type: "ALBUM", date: "7 Oktober 2020", sortDate: "2020-10-07",
    cover: "Sungai_Impian.png",
    tracks: [
      "Kelinci Pertama (First Rabbit)", "Ingin Bertemu (Aitakatta)", "Heavy Rotation",
      "Karena Kusuka Dirimu (Kimi no Koto ga Suki Dakara)", "Pesawat Kertas 365 Hari (365 Nichi no Kamihikouki)",
      "Hari Pertama (Shonichi)", "Jurus Rahasia Teleport (Hissatsu Teleport)",
      "Air Mata yang Tak Tersampaikan (Temodemo No Namida)", "Baby! Baby! Baby!",
      "Langkah yang Ragu (Skirt, Hirari -SBI48 Ver.-)", "Sungai Impian (Yume no Kawa)"
    ]},
    
    {id: "s3", title: "Pesawat Kertas 365 Hari", type: "SINGLE", date:  "21 Agustus 2020", sortDate: "2020-08-21",
    cover: "s3.png",
    tracks: [
      "Pesawat Kertas 365 Hari (C: Akbar Firmansyah Putra Daryono)",
      "Mari Menjadi Pohon Sakura (Sakura no Ki ni Narou)"
    ]
  },
  {
    id: "s4", title: "Beginner / Angin Sedang Berhembus", type: "SINGLE", date: "10 April 2021", sortDate: "2021-04-10",
    cover: "s4.png",
    tracks: [
      "Beginner (C: Jendra Prasetyo)",
      "Angin Sedang Berhembus (C: Akbar Firmansyah & Jendra Prasetyo)"
    ]
  },
  {
    id: "s5", title: "Everyday, Kachuusa", type: "SINGLE", date: "27 November 2021", sortDate: "2021-11-27",
    cover: "s5.png",
    tracks: [
      "Everyday, Kachuusa (C: Akbar Firmansyah)",
      "Musim Panas Sounds Good! (Manatsu no Sounds Good!)"
    ]
  },
  {
    id: "s6", title: "UZA", type: "SINGLE", date: "30 Maret 2022", sortDate: "2022-03-30",
    cover: "s6.png",
    tracks: [
      "UZA (C: Hariz Abdullah & Rizal Fahrezi)",
      "Papan Penanda Isi Hati (Kokoro no Placard)"
    ]
  },
  {
    id: "s7", title: "Kapal Baru", type: "SINGLE", date: "30 Juli 2022", sortDate: "2022-07-30",
    cover: "s7.png",
    tracks: [
      "Kapal Baru (C: Akbar Firmansyah)",
      "Sesaw Game Air Mata (C: Yoga Pratama)",
      "Laptime Masa Remaja",
      "Musim yang Selanjutnya (Tsugi no Season)",
      "Sakura, Kita Makan Bersama (Sakura, Minna de Tabeta)"
    ]
  },
  {
    id: "s8", title: "Dirimu Melody", type: "SINGLE", date: "18 Februari 2023", sortDate: "2023-02-18",
    cover: "s8.png",
    tracks: ["Dirimu Melody (C: Galih Ginata)"]
  },
  {
    id: "s9", title: "Flying Get / Alasanku Maybe", type: "SINGLE", date: "15 Mei 2023", sortDate: "2023-05-15",
    cover: "s9.png",
    tracks: [
      "Flying Get (C: Galih Ginata)",
      "Alasanku Maybe (C: Galih Ginata)"
    ]
  },
  {
    id: "a2", title: "Hanya Lihat Ke Depan", type: "ALBUM", date: "6 Oktober 2023", sortDate: "2023-10-06",
    cover: "Hanya_Lihat_Ke_Depan.png",
    tracks: [
      "Hanya Lihat Ke Depan (C: Endang Suhendar)", "Sentimental Train", "Labrador Retriever",
      "Dirimu Melody (Kimi wa Melody)", "Flying Get", "109 (Marukyuu)",
      "Bersama Kamu, Pelangi, dan Mentari (Kimi to Niji to Taiyou)", "Maafkan, Summer (Gomenne, Summer)",
      "Luar Biasa! (Saikou Kayo)", "BINGO!", "Only Today"
    ]
  },
  {
    id: "s10", title: "Sentimental Train", type: "SINGLE", date: "20 Agustus 2023", sortDate: "2023-08-20",
    cover: "s10.png",
    tracks: [
      "Sentimental Train (C: Akbar Firmansyah)",
      "Labrador Retriever (C: Reza Maulana)",
      "Suki! Suki! Skip!",
      "Kereta Kedewasaan (Otona Ressha)",
      "Sedikit Saja I Love You (Hikaemi I Love You)"
    ]
  },
  {
    id: "s11", title: "Indahnya Senyum Manismu DST.", type: "SINGLE", date: "27 Januari 2024", sortDate: "2024-01-27",
    cover: "s11.png",
    tracks: [
      "Indahnya Senyum Manismu DST. (C: Jendra Prasetyo)",
      "Cara Ceroboh Untuk Mencinta"
    ]
  },
  {
    id: "s12", title: "Green Flash", type: "SINGLE", date: "25 Mei 2024", sortDate: "2024-05-25",
    cover: "s12.png",
    tracks: [
      "Green Flash (C: Raffi Mahendra & Aditya Fauzan)",
      "After Rain",
      "Kelopak-Kelopak Bunga Sakura (Sakura no Hanabiratachi)"
    ]
  },
  {
    id: "s13", title: "GIVE ME FIVE!", type: "SINGLE", date: "4 Oktober 2024", sortDate: "2024-10-04",
    cover: "s13.png",
    tracks: [
      "GIVE ME FIVE! (C: Akbar Firmansyah Putra Daryono)",
      "Saatnya Kesempatan (Chance no Junban)",
      "Ku Tak Pantas Jadi Seorang Pujangga",
      "Saka Agari",
      "Fajar Sang Idola (Idol no Yoake)"
    ]
  },
  {
    id: "s14", title: "Pembatas Buku Sakura", type: "SINGLE", date: "15 Mei 2025", sortDate: "2025-05-15",
    cover: "s14.png",
    tracks: ["Pembatas Buku Sakura (Sakura no Shiori)"]
  },
  {
    id: "d2", title: "Oh My Pumpkin!", type: "DIGITAL", date: "13 Agustus 2025", sortDate: "2025-08-13",
    cover: "Oh_My_Pumpkin.png",
    tracks: [
      "Oh My Pumpkin! (C: Akbar Firmansyah)",
      "Oh My Pumpkin! (Instrumental)"
    ]
  },
  {
    id: "sp1", title: "Top 3 SBI48 Request Hour", type: "SPECIAL", date: "2025", sortDate: "2025-10-01",
    cover: "Request_Hour.png",
    tracks: [
      "Selamanya Pressure",
      "Must Be Now",
      "Mango No.2"
    ]
  },
  {
    id: "s15", title: "#KuSangatSuka", type: "SINGLE", date: "12 Desember 2025", sortDate: "2025-12-12",
    cover: "s15.png",
    tracks: [
      "#KuSangatSuka (C: Akbar Firmansyah)",
      "Sayonara Crawl",
      "Bibirku Berbisik, Be My Baby (Kuchibiru ni Be My Baby)",
      "Apakah Kau Melihat Langit Mentari Senja? (Yuuhi wo Miteiruka?)"
    ]
  },
  {
    id: "d3", title: "Balerina dalam Sepi (Kodoku na Ballerina)", type: "DIGITAL", date: "11 Februari 2026", sortDate: "2026-02-11",
    cover: "Balerina_dalam_Sepi.png",
    tracks: ["Balerina dalam Sepi (C: Jendra Prasetyo))"]
  },
  {
    id: "s16", title: "Andai 'Ku Bukan Idola", type: "SINGLE", date: "27 Maret 2026", sortDate: "2026-03-27",
    cover: "s16.png",
    tracks: [
      "Andai 'Ku Bukan Idola (C: Akbar Firmansyah)",
      "Oh My Pumpkin! (SBI48 Ver.)",
      "Ingatan Cosmos (Cosmos no Kioku)",
      "Balerina dalam Sepi (Kodoku na Ballerina)"
    ]
  },
  {
    id: "d4", title: "Sang Hujan yang Kejam", type: "DIGITAL", date: "8 Mei 2026", sortDate: "2026-05-08",
    cover: "Sang_Hujan_yang_Kejam.png",
    tracks: [
      "Sang Hujan yang Kejam (Zankoku na Ame)",
      "Sang Hujan yang Kejam (Off vocal ver.)"
    ]
  },
  {
    id: "d5", title: "Benang Sari, Putik, dan Kupu-Kupu Malam", type: "DIGITAL", date: "4 Juni 2026", sortDate: "2026-06-04",
    cover: "Benang_Sari.png",
    tracks: [
      "Benang Sari, Putik, dan Kupu-Kupu Malam (C: Julio Triwira Frediyanto)",
      "Benang Sari, Putik, dan Kupu-Kupu Malam (Julio & Jendra)",
      "Benang Sari, Putik, dan Kupu-Kupu Malam (Off vocal)"
    ]
  },
  {
    id: "s17", title: "Menjadi Cahaya", type: "SINGLE", date: "2 Oktober 2026", sortDate: "2026-10-02",
    cover: "s17.png",
    tracks: [
      "Menjadi Cahaya (C: Akbar Firmansyah)",
      "Di Antara Ribuan Cahaya",
      "Ponytail dan Shu-Shu (Team SIII Ver.)",
      "Ponytail dan Shu-Shu (Team BIV Ver.)",
      "Ponytail dan Shu-Shu (Team I Ver.)"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;
  const random = (min, max) => Math.random() * (max - min) + min;

  // ===== STATE =====
  let currentFilter = "ALL";
  let currentFilteredReleases = [];
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

  // Sort data chronologically
  releasesData.sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));

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

  // ===== RENDERING & FILTERING =====
  const diskoGrid = $("#diskoGrid");
  const countDisplay = $("#countDisplay");
  const filterButtons = $$(".filter-button");
  const emptyState = $("#emptyState");

  function getShortTitle(title) {
    return title.split(" / ")[0].split(" (")[0].substring(0, 20) + (title.length > 20 ? "..." : "");
  }

  function formatTracklist(tracks) {
    return tracks.map((track, index) => {
      const hasCenter = track.includes("(C:");
      let displayName = track;
      let centerHtml = "";

      if (hasCenter) {
        const match = track.match(/\(C:\s*(.*?)\)/);
        if (match) {
          displayName = track.replace(match[0], "").trim();
          centerHtml = `<span class="center-tag">👑 Center: ${match[1]}</span>`;
        }
      }

      return `
        <li class="track-item ${hasCenter ? 'has-center' : ''}">
          <span class="track-num">${String(index + 1).padStart(2, '0')}</span>
          <div class="track-details">
            <div class="track-name">${displayName}</div>
            ${centerHtml}
          </div>
        </li>
      `;
    }).join("");
  }

  function applyFilters() {
    if (currentFilter === "ALL") {
      return [...releasesData];
    }
    return releasesData.filter(r => r.type === currentFilter);
  }

  function renderDisko() {
    const filtered = applyFilters();
    currentFilteredReleases = filtered;
    countDisplay.textContent = filtered.length;

    diskoGrid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.style.display = "block";
      return;
    }
    emptyState.style.display = "none";

    filtered.forEach((release, index) => {
      const card = document.createElement("div");
      card.className = `release-card type-${release.type.toLowerCase()} reveal`;
      card.style.transitionDelay = `${Math.min(index * 0.04, 0.8)}s`;

      let coverHTML = "";
      if (release.cover) {
        coverHTML = `<img src="${release.cover}" alt="${release.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
      }
      const fallbackHTML = `
        <div class="fallback-cover" style="display: ${release.cover ? 'none' : 'flex'}">
          <span>${release.type}<br>${getShortTitle(release.title)}</span>
        </div>
      `;

      card.innerHTML = `
        <div class="card-cover">
          ${coverHTML}
          ${fallbackHTML}
        </div>
        <div class="card-info">
          <span class="card-type">${release.type}</span>
          <h3 class="card-title">${release.title}</h3>
          <div class="card-date">${release.date}</div>
        </div>
      `;

      // Spotlight Effect Logic
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        
        // Subtle 3D tilt
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

      card.addEventListener("click", () => {
        const idx = currentFilteredReleases.findIndex(r => r.id === release.id);
        openModal(idx);
      });

      diskoGrid.appendChild(card);
    });

    observeReveals();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Ripple effect for button
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);

      filterButtons.forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      currentFilter = btn.dataset.filter;
      renderDisko();
      if ($("#discoModal").classList.contains("active")) closeModal();
    });
  });

  // Initial render
  renderDisko();

  // ===== MODAL LOGIC =====
  const modal = $("#discoModal");
  const modalClose = $("#modalClose");
  const modalBackdrop = $("#modalBackdrop");
  const modalPrev = $("#modalPrev");
  const modalNext = $("#modalNext");

  function populateModal(index) {
    if (index < 0 || index >= currentFilteredReleases.length) return;
    currentModalIndex = index;
    const release = currentFilteredReleases[index];

    $("#modalTitle").textContent = release.title;
    $("#modalDate").textContent = release.date;
    $("#modalTypeBadge").textContent = release.type;
    $("#modalTracklist").innerHTML = formatTracklist(release.tracks);

    // Cover
    const coverWrapper = $("#modalCoverWrapper");
    if (release.cover) {
      coverWrapper.innerHTML = `<img src="${release.cover}" alt="${release.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="fallback-cover type-${release.type.toLowerCase()}" style="display:none"><span>${release.type}<br>${getShortTitle(release.title)}</span></div>`;
    } else {
      coverWrapper.innerHTML = `<div class="fallback-cover type-${release.type.toLowerCase()}"><span>${release.type}<br>${getShortTitle(release.title)}</span></div>`;
    }

    // Counter
    $("#modalCounterCurrent").textContent = index + 1;
    $("#modalCounterTotal").textContent = currentFilteredReleases.length;

    // Prev / Next buttons
    const prevIndex = (index - 1 + currentFilteredReleases.length) % currentFilteredReleases.length;
    const nextIndex = (index + 1) % currentFilteredReleases.length;
    const prevRelease = currentFilteredReleases[prevIndex];
    const nextRelease = currentFilteredReleases[nextIndex];

    $("#prevTitle").textContent = getShortTitle(prevRelease.title);
    $("#nextTitle").textContent = getShortTitle(nextRelease.title);

    if (currentFilteredReleases.length <= 1) {
      modalPrev.disabled = true;
      modalNext.disabled = true;
    } else {
      modalPrev.disabled = false;
      modalNext.disabled = false;
    }

    // Apply transition animation
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
    const newIndex = (currentModalIndex - 1 + currentFilteredReleases.length) % currentFilteredReleases.length;
    populateModal(newIndex);
  });
  modalNext.addEventListener("click", () => {
    const newIndex = (currentModalIndex + 1) % currentFilteredReleases.length;
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
});