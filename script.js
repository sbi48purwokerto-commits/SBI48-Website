/* ========================================
   SBI48 — SPLASH LANDING INTERACTION
   script.js
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobile = window.matchMedia("(max-width: 850px)").matches;
  const random = (min, max) => Math.random() * (max - min) + min;

  // ========================================
  // 1. SKIP ANIMATION CHECK
  // Jika user kembali dari home.html (atau sudah pernah lihat animasi),
  // langsung tampilkan state final tanpa animasi masuk.
  // ========================================
  const hasSeenAnimation = sessionStorage.getItem("sbi48_splash_seen");
  const cameFromHome = document.referrer.includes("home.html");

  if (hasSeenAnimation || cameFromHome) {
    document.body.classList.add("skip-animations");
  } else {
    // Tandai bahwa user sudah melihat animasi
    sessionStorage.setItem("sbi48_splash_seen", "true");
  }

  // ========================================
  // 2. YEAR
  // ========================================
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // ========================================
  // 3. CURSOR GLOW
  // ========================================
  const glow = $("#cursorGlow");

  if (finePointer && !reduceMotion) {
    window.addEventListener("pointermove", event => {
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    }, { passive: true });
  }

  // ========================================
  // 4. SPARKLE FIELD
  // ========================================
  function createSparkleField() {
    if (reduceMotion) return;
    const layer = $("#sparkleLayer");
    if (!layer) return;

    const count = isMobile ? 40 : 80;
    const colors = ["#ffffff", "#8ff3ff", "#b9a6ff", "#ff9bdf"];

    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("span");
      const isStar = i % 6 === 0;
      sparkle.className = isStar ? "sparkle star" : "sparkle";
      if (isStar) sparkle.textContent = "✦";

      sparkle.style.setProperty("--spark-x", `${random(1, 99)}%`);
      sparkle.style.setProperty("--spark-y", `${random(3, 97)}%`);
      sparkle.style.setProperty("--spark-size", isStar ? `${random(10, 18)}px` : `${random(2, 5)}px`);
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
      // Jangan burst kalau klik tombol enter (akan ada exit animation)
      if (event.target.closest(".enter-button")) return;

      const burstCount = 10;
      for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement("span");
        burst.className = "click-burst";
        const angle = (i / burstCount) * Math.PI * 2;
        const velocity = random(35, 70);
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        burst.style.cssText = `
          left: ${event.clientX}px; top: ${event.clientY}px;
          background: ${["var(--cyan)", "var(--pink)", "var(--violet)"][Math.floor(Math.random() * 3)]};
          --tx: ${tx}px; --ty: ${ty}px;
        `;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
      }
    });
  }

  // ========================================
  // 6. LOGO HOVER TILT (subtle, bukan follow cursor)
  // ========================================
  const logoStage = $("#logoStage");
  const logoRotate = $("#logoRotate");

  if (finePointer && !reduceMotion && logoStage && logoRotate) {
    logoStage.addEventListener("pointermove", event => {
      const rect = logoStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      // Tilt halus, tidak mengikuti penuh
      logoRotate.style.transition = "transform .3s ease-out";
      logoRotate.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.03)`;
    });

    logoStage.addEventListener("pointerleave", () => {
      logoRotate.style.transition = "transform .6s ease-out";
      logoRotate.style.transform = "";
    });
  }

  // ========================================
  // 7. ENTER BUTTON — EXIT ANIMATION
  // ========================================
  const enterButton = $("#enterButton");
  const exitOverlay = $("#exitOverlay");

  if (enterButton && exitOverlay) {
    enterButton.addEventListener("click", event => {
      event.preventDefault();

      // Cegah double click
      if (exitOverlay.classList.contains("active")) return;

      // Tandai bahwa user sudah masuk ke home
      sessionStorage.setItem("sbi48_splash_seen", "true");

      // Hitung posisi klik untuk origin animasi
      const rect = enterButton.getBoundingClientRect();
      const originX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const originY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;

      exitOverlay.style.transformOrigin = `${originX}% ${originY}%`;

      // Trigger exit animation
      exitOverlay.classList.add("active");

      // Redirect setelah animasi selesai
      setTimeout(() => {
        window.location.href = enterButton.href;
      }, 900);
    });
  }

  // ========================================
  // 8. KEYBOARD SUPPORT — ENTER untuk masuk
  // ========================================
  document.addEventListener("keydown", event => {
    if (event.key === "Enter" && enterButton && !exitOverlay.classList.contains("active")) {
      enterButton.click();
    }
  });

  // ========================================
  // 9. PARALLAX SUBTLE PADA BACKGROUND
  // ========================================
  if (finePointer && !reduceMotion) {
    const glows = $$(".bg-glow");
    const orbits = $$(".orbit-ring");

    window.addEventListener("pointermove", event => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      glows.forEach((glow, i) => {
        const depth = (i + 1) * 8;
        glow.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });

      // Orbit tidak perlu transform karena sudah punya animasi sendiri
    }, { passive: true });
  }

  // ========================================
  // 10. CLEAR SESSION FLAG SAAT TAB DITUTUP
  // (opsional — biar next visit tetap lihat animasi)
  // ========================================
  window.addEventListener("pagehide", () => {
    // Biarkan sessionStorage tetap ada selama tab masih hidup
    // agar saat kembali dari home.html, animasi tidak terulang
  });

  // ========================================
  // 11. LOGO FALLBACK HANDLING
  // ========================================
  const splashLogo = $("#splashLogo");
  const logoFallback = $("#logoFallback");
  if (splashLogo && logoFallback) {
    splashLogo.addEventListener("error", () => {
      splashLogo.style.display = "none";
      logoFallback.style.display = "flex";
    }, { once: true });
  }

  // ========================================
  // 12. DYNAMIC STYLE INJECTION
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
  // 13. CONSOLE EASTER EGG
  // ========================================
  console.log(
    "%c✦ SBI48 ✦%c\nThe Idols You Can Meet.\nFrom Purwokerto, with pride.",
    "background: linear-gradient(90deg, #6de1ff, #9b7bff); color: #06101b; padding: 8px 16px; font-size: 16px; font-weight: 900; border-radius: 4px;",
    "color: #9ca7c3; font-size: 12px;"
  );
});