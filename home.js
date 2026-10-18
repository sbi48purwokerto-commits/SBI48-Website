/* ========================================
   SBI48 — HOME INTERACTIVE EXPERIENCE
   Terkoneksi dengan index.html
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;
  const random = (min, max) => Math.random() * (max - min) + min;

  // ========================================
  // 0. PAGE ENTRANCE (dari index.html)
  // ========================================
  const entranceOverlay = $("#entranceOverlay");
  const cameFromSplash = sessionStorage.getItem("sbi48_splash_seen") === "true";
  const isFirstVisit = !sessionStorage.getItem("sbi48_home_visited");

  if (cameFromSplash && isFirstVisit && entranceOverlay && !reduceMotion) {
    // Trigger animasi entrance - fade out setelah delay
    setTimeout(() => {
      entranceOverlay.classList.add("done");
    }, 100);
    // Remove element setelah animasi selesai
    setTimeout(() => {
      if (entranceOverlay) entranceOverlay.remove();
    }, 1500);
    // Tandai sudah visit
    sessionStorage.setItem("sbi48_home_visited", "true");
  } else {
    // Langsung hide jika bukan dari splash atau sudah pernah visit
    document.body.classList.add("entrance-skipped");
    if (entranceOverlay) entranceOverlay.remove();
    if (!sessionStorage.getItem("sbi48_home_visited")) {
      sessionStorage.setItem("sbi48_home_visited", "true");
    }
  }

  // Reset flag splash saat user navigate ke home dari link biasa
  // (kecuali jika memang dari index.html)
  if (!cameFromSplash) {
    sessionStorage.removeItem("sbi48_splash_seen");
  }

  // ========================================
  // 1. YEAR & LOGO FALLBACK
  // ========================================
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  $$(".site-logo").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement.innerHTML += '<span style="font:900 1.5rem var(--display); color:var(--cyan);">SBI48</span>';
    }, { once: true });
  });

  // ========================================
  // 2. RESPONSIVE NAVIGATION
  // ========================================
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

  // ========================================
  // 3. CURSOR GLOW & POINTER TRAIL
  // ========================================
  const glow = $("#cursorGlow");
  const hero = $(".hero");
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let lastSpark = 0;

  if (finePointer && !reduceMotion) {
    window.addEventListener("pointermove", event => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (glow) {
        glow.style.left = `${pointerX}px`;
        glow.style.top = `${pointerY}px`;
      }

      if (hero) {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--pointer-x", `${((pointerX - rect.left) / rect.width) * 100}%`);
        hero.style.setProperty("--pointer-y", `${((pointerY - rect.top) / rect.height) * 100}%`);
      }

      const now = performance.now();
      if (now - lastSpark > 48) {
        lastSpark = now;
        const particle = document.createElement("span");
        particle.className = "pointer-spark";
        particle.style.cssText = `
          position: fixed; z-index: 45; pointer-events: none; width: 5px; height: 5px; border-radius: 50%;
          left: ${pointerX + random(-5, 5)}px; top: ${pointerY + random(-5, 5)}px;
          background: ${Math.random() > 0.5 ? "#8ff3ff" : "#ff9bdf"};
          box-shadow: 0 0 10px currentColor; animation: pointerFade .65s ease-out forwards;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 700);
      }
    }, { passive: true });
  }

  // ========================================
  // 4. TWINKLING GLITTER FIELD
  // ========================================
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

  // ========================================
  // 5. CLICK BURST EFFECT
  // ========================================
  if (!reduceMotion) {
    document.addEventListener("click", event => {
      const burstCount = 8;
      for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement("span");
        burst.className = "click-burst";
        const angle = (i / burstCount) * Math.PI * 2;
        const velocity = random(30, 60);
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        burst.style.cssText = `
          left: ${event.clientX}px; top: ${event.clientY}px;
          background: ${Math.random() > 0.5 ? "var(--cyan)" : "var(--pink)"};
          --tx: ${tx}px; --ty: ${ty}px;
        `;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
      }
    });
  }

  // ========================================
  // 6. SCROLL PROGRESS INDICATOR
  // ========================================
  const scrollProgress = $("#scrollProgress");
  let progressTicking = false;

  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
    progressTicking = false;
  }

  if (scrollProgress && !reduceMotion) {
    window.addEventListener("scroll", () => {
      if (progressTicking) return;
      progressTicking = true;
      requestAnimationFrame(updateScrollProgress);
    }, { passive: true });
  }

  // ========================================
  // 7. MAGNETIC BUTTONS
  // ========================================
  if (finePointer && !reduceMotion) {
    const magneticElements = $$(".magnetic-btn, .magnetic-link");
    
    magneticElements.forEach(el => {
      el.addEventListener("pointermove", event => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(rect.width, rect.height);
        const strength = Math.max(0, 1 - distance / maxDistance);
        
        // Translate ke arah kursor dengan kekuatan proporsional
        const translateX = deltaX * strength * 0.3;
        const translateY = deltaY * strength * 0.3;
        
        el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ========================================
  // 8. TEXT SCRAMBLE EFFECT ON HOVER
  // ========================================
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.originalText = el.textContent;
      this.queue = [];
      this.frame = 0;
      this.frameRequest = null;
      this.resolve = null;
    }

    setText(newText) {
      const oldText = this.el.textContent;
      const length = Math.max(oldText.length, newText.length);
      this.queue = [];
      
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      
      return new Promise(resolve => this.resolve = resolve);
    }

    update() {
      let output = '';
      let complete = 0;
      
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            this.queue[i].char = char;
          }
          output += `<span style="color:var(--cyan)">${char}</span>`;
        } else {
          output += from;
        }
      }
      
      this.el.innerHTML = output;
      
      if (complete === this.queue.length) {
        if (this.resolve) this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(() => this.update());
        this.frame++;
      }
    }
  }

  // Apply scramble effect to title on hover
  const scrambleTitles = $$(".scramble-title");
  scrambleTitles.forEach(title => {
    const originalHTML = title.innerHTML;
    const originalText = title.textContent;
    const scrambler = new TextScramble(title);
    let isHovering = false;

    title.addEventListener("mouseenter", () => {
      if (reduceMotion || isHovering) return;
      isHovering = true;
      scrambler.setText(originalText).then(() => {
        // Restore HTML setelah animasi
        setTimeout(() => {
          title.innerHTML = originalHTML;
          isHovering = false;
        }, 300);
      });
    });
  });

  // ========================================
  // 9. COUNTER ANIMATION
  // ========================================
  function animateCounter(element, target) {
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();
    
    element.classList.add("counting");
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
        element.classList.remove("counting");
      }
    }
    
    requestAnimationFrame(update);
  }

  const factNumbers = $$(".fact-number[data-count]");
  if (factNumbers.length > 0 && !reduceMotion && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.count, 10);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    factNumbers.forEach(num => counterObserver.observe(num));
  }

  // ========================================
  // 10. HERO STAGE 3D TILT
  // ========================================
  const stage = $("#heroStage");
  const stageCard = $("#stageCard");

  if (finePointer && !reduceMotion && stage && stageCard) {
    stage.addEventListener("pointermove", event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stageCard.style.transform = `rotate(-7deg) rotateY(${x * 16}deg) rotateX(${-y * 12}deg) translate(${x * 7}px, ${y * 7}px)`;
    });
    stage.addEventListener("pointerleave", () => {
      stageCard.style.transform = "";
    });
  }

  // ========================================
  // 11. HERO CAROUSEL
  // ========================================
  const slides = [
    {
      tag: "INTRODUCING SBI48",
      title: 'ONE GROUP.<br><span class="outline-text">NEW HISTORY.</span>',
      lead: "Super Boy Indonesia 48 — Overseas Male Group dari AKB48 Group. Berawal dari Purwokerto, melangkah menuju panggung yang lebih luas.",
      card: "linear-gradient(145deg,rgba(115,88,240,.78),rgba(18,29,68,.94) 55%,rgba(8,11,24,.98))"
    },
    {
      tag: "THE IDOLS YOU CAN MEET",
      title: 'CLOSER TO<br><span class="outline-text">YOUR IDOLS.</span>',
      lead: "Bukan sekadar menonton dari jauh. SBI48 dibangun dengan semangat untuk bertemu, berbagi cerita, dan tumbuh bersama para fans.",
      card: "linear-gradient(145deg,rgba(13,137,174,.82),rgba(18,42,78,.95) 55%,rgba(8,11,24,.98))"
    },
    {
      tag: "FROM PURWOKERTO",
      title: 'LOCAL ROOTS.<br><span class="outline-text">GLOBAL DREAMS.</span>',
      lead: "Membawa warna Indonesia ke panggung yang lebih luas, dengan kerja keras, persahabatan, dan cerita yang terus berkembang.",
      card: "linear-gradient(145deg,rgba(187,62,145,.8),rgba(45,29,83,.95) 55%,rgba(8,11,24,.98))"
    }
  ];

  let activeSlide = 0;
  let carouselTimer = null;
  let leadTimer = null;

  const title = $("#heroTitle");
  const lead = $("#heroLead");
  const tag = $("#slideTag");
  const stageIndex = $("#stageIndex");
  const dots = $$(".slide-dot");

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;
    const slide = slides[activeSlide];

    if (title) title.innerHTML = slide.title;
    if (lead) {
      clearTimeout(leadTimer);
      lead.style.opacity = 0;
      leadTimer = setTimeout(() => {
        lead.textContent = slide.lead;
        lead.style.opacity = 1;
      }, reduceMotion ? 0 : 140);
    }
    if (tag) tag.innerHTML = `<span>${String(activeSlide + 1).padStart(2, "0")}</span> / ${slide.tag}`;
    if (stageIndex) stageIndex.innerHTML = `${String(activeSlide + 1).padStart(2, "0")} <span>—</span> 03`;
    if (stageCard) stageCard.style.background = slide.card;

    dots.forEach((dot, i) => {
      const selected = i === activeSlide;
      dot.classList.toggle("is-active", selected);
      dot.setAttribute("aria-pressed", String(selected));
    });
  }

  function stopCarousel() { clearInterval(carouselTimer); carouselTimer = null; }
  function startCarousel() {
    stopCarousel();
    if (reduceMotion || document.hidden) return;
    carouselTimer = setInterval(() => showSlide(activeSlide + 1), 7000);
  }

  $("#prevSlide")?.addEventListener("click", () => { showSlide(activeSlide - 1); startCarousel(); });
  $("#nextSlide")?.addEventListener("click", () => { showSlide(activeSlide + 1); startCarousel(); });
  dots.forEach(dot => {
    dot.addEventListener("click", () => { showSlide(Number(dot.dataset.slide)); startCarousel(); });
  });

  if (hero) {
    hero.addEventListener("mouseenter", stopCarousel);
    hero.addEventListener("mouseleave", startCarousel);
  }

  document.addEventListener("visibilitychange", () => {
    document.hidden ? stopCarousel() : startCarousel();
  });

  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || "")) return;
    if (event.key === "ArrowRight") { showSlide(activeSlide + 1); startCarousel(); }
    if (event.key === "ArrowLeft") { showSlide(activeSlide - 1); startCarousel(); }
  });

  showSlide(0);
  startCarousel();

  // ========================================
  // 12. SCROLL REVEAL
  // ========================================
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("in-view"));
  }

  // ========================================
  // 13. NEWS FILTER
  // ========================================
  const filterButtons = $$(".filter-button");
  const newsCards = $$(".news-card[data-category]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      newsCards.forEach(card => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  // ========================================
  // 14. BACK TO TOP
  // ========================================
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

  // ========================================
  // 15. 3D TILT ON CARDS
  // ========================================
  if (finePointer && !reduceMotion) {
    $$(".news-card, .sister-pill:not(.self-highlight)").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // ========================================
  // 16. DYNAMIC STYLE INJECTION
  // ========================================
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes pointerFade {
      from { opacity: .95; transform: translate(-50%, -50%) scale(1); }
      to { opacity: 0; transform: translate(-50%, -50%) scale(0); }
    }
  `;
  document.head.appendChild(styleSheet);

  // ========================================
  // 17. CONSOLE EASTER EGG
  // ========================================
  console.log(
    "%c✦ SBI48 HOME ✦%c\nWelcome back, idol fans!\nExplore our universe.",
    "background: linear-gradient(90deg, #6de1ff, #9b7bff); color: #06101b; padding: 8px 16px; font-size: 16px; font-weight: 900; border-radius: 4px;",
    "color: #9ca7c3; font-size: 12px;"
  );
});