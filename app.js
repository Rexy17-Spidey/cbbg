/**
 * ═══════════════════════════════════════════════════════════════
 *  A LITTLE WORLD FOR YOU ♡ — CORE APPLICATION LOGIC
 * ═══════════════════════════════════════════════════════════════
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.STORY_CONFIG;
  if (!config) {
    console.error("STORY_CONFIG not found.");
    return;
  }

  // ─── 1. FLOATING PARTICLES CANVAS ─────────────────────────
  initStarCanvas();

  // ─── 2. THEME SELECTION & STORAGE ─────────────────────────
  initThemeManager(config);

  // ─── 3. CHAPTER NAVIGATION ────────────────────────────────
  initNavigation(config);

  // ─── 4. VIDEO CALL MEMORIES & LIGHTBOX ────────────────────
  initPhotoGallery(config);

  // ─── 5. VIRTUAL HUG INTERACTION ───────────────────────────
  initVirtualHug(config);

  // ─── 6. OPEN WHEN LOVE LETTERS ────────────────────────────
  initLoveLetters(config);

  // ─── 7. PERSONAL VOICE MESSAGE ────────────────────────────
  initVoiceSection(config);

  // ─── 8. MAGIC FLOWER GARDEN ───────────────────────────────
  initMagicGarden(config);

  // ─── 9. TREASURE HUNT ─────────────────────────────────────
  initTreasureHunt(config);

  // ─── 10. SILLY MEDICINE / GIGGLES ─────────────────────────
  initGiggles(config);

  // ─── 11. SCROLL UTILITIES ─────────────────────────────────
  initScrollActions();
});

/* ─── 1. FLOATING PARTICLES CANVAS ───────────────────────── */
function initStarCanvas() {
  const canvas = document.getElementById("starCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 32 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.2 + 0.8,
    speedY: Math.random() * 0.35 + 0.15,
    speedX: (Math.random() - 0.5) * 0.25,
    opacity: Math.random() * 0.65 + 0.25,
    pulseSpeed: Math.random() * 0.02 + 0.01,
    isGold: Math.random() > 0.4
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.006;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.isGold
        ? `rgba(197, 164, 109, ${Math.max(0.15, Math.min(0.85, p.opacity))})`
        : `rgba(8, 127, 120, ${Math.max(0.15, Math.min(0.75, p.opacity))})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  // Check reduced motion
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animate();
  }
}

/* ─── 2. THEME SELECTION & STORAGE ───────────────────────── */
function initThemeManager(config) {
  const root = document.documentElement;
  const screen = document.getElementById("screenColourSelect");
  const swatchesContainer = document.getElementById("swatchesGrid");
  const responseBox = document.getElementById("colourResponse");
  const glowNote = document.getElementById("glowNote");
  const compliment = document.getElementById("compliment");
  const beginBtn = document.getElementById("btnBeginStory");
  const themePickerToggle = document.getElementById("themePickerToggle");

  let selectedKey = localStorage.getItem("story_emerald_theme") || "emerald";

  function applyTheme(themeKey) {
    const theme = config.themes[themeKey] || config.themes.emerald;
    Object.entries(theme.vars).forEach(([k, v]) => {
      root.style.setProperty(k, v);
    });
    selectedKey = themeKey;
  }

  // Initial apply
  applyTheme(selectedKey);

  // Render swatches
  if (swatchesContainer) {
    swatchesContainer.innerHTML = Object.entries(config.themes)
      .map(([key, t]) => {
        const isEmerald = key === "emerald";
        return `
        <button class="swatch-btn ${key === selectedKey ? "active" : ""}" 
                data-theme="${key}" 
                style="--swatch-glow: ${t.glow}"
                aria-label="Select ${t.name} colour palette">
          <div class="swatch-circle" style="background-color: ${t.swatch}"></div>
          <span class="swatch-name">${t.name}</span>
        </button>
      `;
      })
      .join("");

    swatchesContainer.querySelectorAll(".swatch-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const themeKey = btn.dataset.theme;
        swatchesContainer.querySelectorAll(".swatch-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyTheme(themeKey);
        updateResponse(themeKey);
      });
    });
  }

  function updateResponse(themeKey) {
    if (!responseBox) return;
    responseBox.classList.remove("show");

    setTimeout(() => {
      if (themeKey === "emerald") {
        glowNote.textContent = config.welcome.emeraldSelectedNote;
        compliment.textContent = config.welcome.emeraldCompliment;
      } else {
        glowNote.textContent = config.welcome.otherSelectedNote;
        compliment.textContent = config.welcome.otherCompliment;
      }
      responseBox.classList.add("show");
    }, 150);
  }

  // Show opening response for default
  updateResponse(selectedKey);

  // If already visited and user chose a theme before, we can still give them a welcoming entry or allow begin
  const hasVisited = localStorage.getItem("story_visited_before");
  if (hasVisited === "true" && screen) {
    // If returning visitor, smoothly hide screen directly or let them change
    screen.classList.add("hidden");
  }

  if (beginBtn) {
    beginBtn.addEventListener("click", () => {
      localStorage.setItem("story_emerald_theme", selectedKey);
      localStorage.setItem("story_visited_before", "true");
      if (screen) {
        screen.classList.add("hidden");
      }
      // Smooth scroll to top of story
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Settings button to re-open theme chooser
  if (themePickerToggle) {
    themePickerToggle.addEventListener("click", () => {
      if (screen) {
        screen.classList.remove("hidden");
      }
    });
  }
}

/* ─── 3. CHAPTER NAVIGATION ──────────────────────────────── */
function initNavigation(config) {
  const navContainer = document.getElementById("storyNav");
  if (!navContainer) return;

  navContainer.innerHTML = config.chapters
    .map(
      (ch) => `
    <button class="nav-pill" data-target="${ch.id}" aria-label="Go to ${ch.title}">
      <span>${ch.icon}</span>
      <span>${ch.short}</span>
    </button>
  `
    )
    .join("");

  const pills = navContainer.querySelectorAll(".nav-pill");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const targetId = pill.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // IntersectionObserver for active section highlight
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          pills.forEach((pill) => {
            if (pill.dataset.target === id) {
              pill.classList.add("active");
              pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            } else {
              pill.classList.remove("active");
            }
          });
        }
      });
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ─── 4. VIDEO CALL MEMORIES & LIGHTBOX ──────────────────── */
function initPhotoGallery(config) {
  const grid = document.getElementById("videoCallGrid");
  const lightbox = document.getElementById("lightboxModal");
  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbCaption = document.getElementById("lightboxCaption");
  const lbClose = document.getElementById("lightboxClose");

  if (grid && config.videoCalls && config.videoCalls.photos) {
    grid.innerHTML = config.videoCalls.photos
      .map(
        (photo, idx) => `
      <div class="video-frame" data-index="${idx}" tabindex="0" role="button" aria-label="${photo.title}">
        <div class="photo-container">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
          <div class="call-badge">${photo.tag}</div>
        </div>
        <div class="caption-snippet">${photo.title}</div>
      </div>
    `
      )
      .join("");

    grid.querySelectorAll(".video-frame").forEach((frame) => {
      frame.addEventListener("click", () => {
        const idx = parseInt(frame.dataset.index, 10);
        openLightbox(config.videoCalls.photos[idx]);
      });
      frame.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          const idx = parseInt(frame.dataset.index, 10);
          openLightbox(config.videoCalls.photos[idx]);
        }
      });
    });
  }

  // Also bind favourite black & white picture
  const bwWrap = document.getElementById("favouriteBwWrap");
  if (bwWrap && config.favouriteBw) {
    bwWrap.addEventListener("click", () => {
      openLightbox({
        src: config.favouriteBw.src,
        title: "My favourite picture of you.",
        caption: "My favourite girl, in my favourite frame. ♡"
      });
    });
  }

  // Scrapbook keepsakes drawer toggle
  const toggleBtn = document.getElementById("scrapbookToggle");
  const drawer = document.getElementById("scrapbookDrawer");
  if (toggleBtn && drawer && config.videoCalls.scrapbookPhotos) {
    drawer.innerHTML = config.videoCalls.scrapbookPhotos
      .map(
        (p, idx) => `
      <div class="video-frame" data-sb-index="${idx}" tabindex="0" role="button" aria-label="${p.title}">
        <div class="photo-container" style="aspect-ratio: auto; min-height: 220px;">
          <img src="${p.src}" alt="${p.title}" style="height: 220px; object-fit: cover;" loading="lazy">
          <div class="call-badge">${p.tag}</div>
        </div>
        <div class="caption-snippet">${p.title}</div>
      </div>
    `
      )
      .join("");

    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggleBtn.textContent = isOpen ? "Hide extra scrapbook memories ✿" : "Open our extra scrapbook keepsakes ✿";
    });

    drawer.querySelectorAll(".video-frame").forEach((frame) => {
      frame.addEventListener("click", () => {
        const idx = parseInt(frame.dataset.sbIndex, 10);
        openLightbox(config.videoCalls.scrapbookPhotos[idx]);
      });
    });
  }

  function openLightbox(item) {
    if (!lightbox || !item) return;
    lbImg.src = item.src;
    lbTitle.textContent = item.title;
    lbCaption.textContent = item.caption || "";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ─── 5. VIRTUAL HUG INTERACTION ─────────────────────────── */
function initVirtualHug(config) {
  const hugBtn = document.getElementById("btnVirtualHug");
  const hugModal = document.getElementById("hugModal");
  const hugClose = document.getElementById("hugModalClose");

  if (hugBtn && hugModal) {
    hugBtn.addEventListener("click", () => {
      hugModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  function closeHug() {
    if (!hugModal) return;
    hugModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hugClose) hugClose.addEventListener("click", closeHug);
  if (hugModal) {
    hugModal.addEventListener("click", (e) => {
      if (e.target === hugModal) closeHug();
    });
  }
}

/* ─── 6. OPEN WHEN LOVE LETTERS ──────────────────────────── */
function initLoveLetters(config) {
  const container = document.getElementById("envelopesGrid");
  const viewer = document.getElementById("letterViewer");
  const letterSeal = document.getElementById("letterTopSeal");
  const letterTitle = document.getElementById("letterDisplayTitle");
  const letterBody = document.getElementById("letterDisplayBody");
  const closeBtn = document.getElementById("letterCloseBtn");

  if (!container || !config.letters) return;

  container.innerHTML = config.letters
    .map(
      (letter, idx) => `
    <div class="envelope-card" data-index="${idx}" tabindex="0" role="button" aria-label="${letter.envelopeLabel}">
      <div class="wax-seal-badge">${letter.seal}</div>
      <div class="envelope-label">${letter.envelopeLabel}</div>
      <div class="envelope-tagline">${letter.tagline}</div>
      <div class="envelope-tap">Break seal & open ↗</div>
    </div>
  `
    )
    .join("");

  container.querySelectorAll(".envelope-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.index, 10);
      openLetter(config.letters[idx]);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const idx = parseInt(card.dataset.index, 10);
        openLetter(config.letters[idx]);
      }
    });
  });

  function openLetter(letter) {
    if (!viewer || !letter) return;
    letterSeal.textContent = letter.seal;
    letterTitle.textContent = letter.letterTitle;
    letterBody.textContent = letter.content;
    viewer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLetter() {
    if (!viewer) return;
    viewer.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLetter);
  if (viewer) {
    viewer.addEventListener("click", (e) => {
      if (e.target === viewer) closeLetter();
    });
  }
}

/* ─── 7. PERSONAL VOICE MESSAGE ──────────────────────────── */
function initVoiceSection(config) {
  const emptyState = document.getElementById("voiceEmptyState");
  const playerWrap = document.getElementById("customAudioPlayer");
  const playBtn = document.getElementById("btnAudioPlay");
  const progressFill = document.getElementById("audioProgressFill");
  const progressBar = document.getElementById("audioProgressBar");
  const timeLabel = document.getElementById("audioTimeLabel");
  const waveform = document.getElementById("voiceWaveform");
  const toolsToggle = document.getElementById("voiceToolsToggle");
  const toolsPanel = document.getElementById("voiceToolsPanel");

  const audio = new Audio();
  let isPlaying = false;
  const audioSrc = config.voiceMessage.audioPath;

  // Gracefully check if audio file is present (works on both http/https and file:// protocols)
  if (audioSrc) {
    let mounted = false;
    const probe = new Audio();
    const handleSuccess = () => {
      if (mounted) return;
      mounted = true;
      mountAudioPlayer(audioSrc);
    };
    const handleError = () => {
      if (!mounted) showEmptyVoiceState();
    };

    probe.addEventListener("loadedmetadata", handleSuccess, { once: true });
    probe.addEventListener("canplay", handleSuccess, { once: true });
    probe.addEventListener("canplaythrough", handleSuccess, { once: true });
    probe.addEventListener("error", handleError, { once: true });

    probe.src = audioSrc;
    probe.load();

    if (probe.readyState >= 1) {
      handleSuccess();
    }

    setTimeout(() => {
      if (!mounted) {
        showEmptyVoiceState();
      }
    }, 1500);
  } else {
    showEmptyVoiceState();
  }

  function showEmptyVoiceState() {
    if (emptyState) emptyState.style.display = "block";
    if (playerWrap) playerWrap.classList.remove("active");
  }

  function mountAudioPlayer(src) {
    audio.src = src;
    if (emptyState) emptyState.style.display = "none";
    if (playerWrap) playerWrap.classList.add("active");

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && timeLabel) {
        timeLabel.textContent = `0:00 / ${formatTime(audio.duration)}`;
      }
    };
    audio.addEventListener("loadedmetadata", updateDuration, { once: true });
    audio.addEventListener("canplay", updateDuration, { once: true });
    audio.load();

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressFill) progressFill.style.width = `${pct}%`;
        if (timeLabel) {
          timeLabel.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }
      }
    });

    audio.addEventListener("ended", () => {
      isPlaying = false;
      if (playBtn) playBtn.textContent = "▶";
      if (waveform) waveform.classList.remove("playing");
      if (progressFill) progressFill.style.width = "0%";
    });

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (isPlaying) {
          audio.pause();
          isPlaying = false;
          playBtn.textContent = "▶";
          if (waveform) waveform.classList.remove("playing");
        } else {
          audio.play().then(() => {
            isPlaying = true;
            playBtn.textContent = "⏸";
            if (waveform) waveform.classList.add("playing");
          }).catch(err => {
            console.warn("Audio autoplay blocked:", err);
          });
        }
      });
    }

    if (progressBar) {
      progressBar.addEventListener("click", (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        if (audio.duration) {
          audio.currentTime = (clickX / width) * audio.duration;
        }
      });
    }
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  // Preserve recording & file upload tools for testing
  if (toolsToggle && toolsPanel) {
    toolsToggle.addEventListener("click", () => {
      const isOpen = toolsPanel.classList.toggle("open");
      toolsToggle.textContent = isOpen ? "Hide recording tools ▲" : "Or record / upload a voice note here ▼";
    });

    const recordBtn = document.getElementById("recordBtn");
    const recordStatus = document.getElementById("recordStatus");
    const audioFileInput = document.getElementById("audioFileInput");
    let mediaRecorder = null;
    let chunks = [];
    let isRecording = false;

    if (recordBtn) {
      recordBtn.addEventListener("click", async () => {
        if (isRecording) {
          mediaRecorder.stop();
          isRecording = false;
          recordBtn.textContent = "Start recording";
          if (recordStatus) recordStatus.textContent = "Your voice hug is ready.";
          return;
        }

        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          chunks = [];
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
          mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: "audio/webm" });
            const url = URL.createObjectURL(blob);
            mountAudioPlayer(url);
            stream.getTracks().forEach((t) => t.stop());
          };
          mediaRecorder.start();
          isRecording = true;
          recordBtn.textContent = "Stop recording";
          if (recordStatus) recordStatus.textContent = "Recording… say something lovely.";
        } catch (err) {
          if (recordStatus) {
            recordStatus.textContent = "Microphone unavailable. You can upload an audio file instead.";
          }
        }
      });
    }

    if (audioFileInput) {
      audioFileInput.addEventListener("change", (e) => {
        if (e.target.files[0]) {
          const url = URL.createObjectURL(e.target.files[0]);
          mountAudioPlayer(url);
          if (recordStatus) recordStatus.textContent = "Your audio note is loaded ♡";
        }
      });
    }
  }
}

/* ─── 8. MAGIC FLOWER GARDEN ─────────────────────────────── */
function initMagicGarden(config) {
  const grid = document.getElementById("gardenGrid");
  const counter = document.getElementById("gardenCount");
  const reasonText = document.getElementById("flowerReasonText");
  const congratsBox = document.getElementById("gardenCongrats");
  const resetBtn = document.getElementById("btnResetGarden");

  if (!grid || !config.garden || !config.garden.reasons) return;

  const bloomed = new Set();
  const flowerIcons = ["🌷", "🌸", "🌼", "🌻", "🌺", "🌹", "💐", "🌿", "🪻", "🌾"];

  function renderGarden() {
    grid.innerHTML = config.garden.reasons
      .map((reason, idx) => {
        const isBloomed = bloomed.has(idx);
        const icon = isBloomed ? flowerIcons[idx % flowerIcons.length] : "🌱";
        return `
        <button class="flower-slot ${isBloomed ? "bloomed" : ""}" 
                data-index="${idx}" 
                aria-label="Flower ${idx + 1}: ${isBloomed ? reason : 'Tap to bloom'}">
          <span class="${isBloomed ? "flower-icon" : "seed-icon"}">${icon}</span>
        </button>
      `;
      })
      .join("");

    if (counter) {
      counter.textContent = config.garden.progressTemplate.replace("{count}", bloomed.size);
    }

    if (congratsBox) {
      if (bloomed.size === config.garden.reasons.length) {
        congratsBox.classList.add("show");
      } else {
        congratsBox.classList.remove("show");
      }
    }

    grid.querySelectorAll(".flower-slot").forEach((slot) => {
      slot.addEventListener("click", () => {
        const idx = parseInt(slot.dataset.index, 10);
        bloomed.add(idx);
        renderGarden();
        showReason(config.garden.reasons[idx]);
      });
    });
  }

  function showReason(text) {
    if (!reasonText) return;
    reasonText.style.opacity = "0";
    setTimeout(() => {
      reasonText.textContent = `“${text}”`;
      reasonText.style.opacity = "1";
    }, 150);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      bloomed.clear();
      renderGarden();
      if (reasonText) reasonText.textContent = "Tap any seed above to plant a reason ♡";
    });
  }

  renderGarden();
}

/* ─── 9. TREASURE HUNT ───────────────────────────────────── */
function initTreasureHunt(config) {
  const hunt = config.treasureHunt;
  if (!hunt) return;

  let currentIdx = 0;
  const titleEl = document.getElementById("huntClueTitle");
  const textEl = document.getElementById("huntClueText");
  const countEl = document.getElementById("huntClueCount");
  const progressFill = document.getElementById("huntProgressFill");
  const inputEl = document.getElementById("huntAnswerInput");
  const hintEl = document.getElementById("huntHintText");
  const clueBox = document.getElementById("huntClueBox");
  const wonBox = document.getElementById("huntWonBox");
  const unlockBtn = document.getElementById("btnUnlockClue");
  const hintBtn = document.getElementById("btnShowHint");

  function renderClue() {
    if (currentIdx >= hunt.clues.length) {
      if (clueBox) clueBox.style.display = "none";
      if (wonBox) wonBox.classList.add("show");
      if (progressFill) progressFill.style.width = "100%";
      if (countEl) countEl.textContent = `Treasure unlocked · ${hunt.clues.length} of ${hunt.clues.length}`;
      return;
    }

    const clue = hunt.clues[currentIdx];
    if (titleEl) titleEl.textContent = `Clue ${currentIdx + 1} of ${hunt.clues.length}`;
    if (textEl) textEl.textContent = clue.q;
    if (countEl) countEl.textContent = `Clue ${currentIdx + 1} of ${hunt.clues.length}`;
    if (progressFill) progressFill.style.width = `${(currentIdx / hunt.clues.length) * 100}%`;
    if (inputEl) {
      inputEl.value = "";
      inputEl.placeholder = "Type your answer here…";
    }
    if (hintEl) hintEl.textContent = "";
  }

  function checkAnswer() {
    if (!inputEl) return;
    const userVal = inputEl.value.trim().toLowerCase();
    if (!userVal) {
      if (hintEl) hintEl.textContent = "A little answer first, sweetheart ♡";
      return;
    }

    const accepted = hunt.clues[currentIdx].a.map((ans) => ans.toLowerCase());
    const isCorrect = accepted.some(
      (ans) => userVal === ans || userVal.includes(ans) || ans.includes(userVal)
    );

    if (isCorrect) {
      currentIdx++;
      renderClue();
    } else {
      if (hintEl) {
        hintEl.textContent = "Not quite, my love! Try another word or tap Hint. No rush at all. ♡";
      }
    }
  }

  if (unlockBtn) unlockBtn.addEventListener("click", checkAnswer);
  if (inputEl) {
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkAnswer();
    });
  }

  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      if (hintEl && hunt.clues[currentIdx]) {
        hintEl.textContent = `Hint: ${hunt.clues[currentIdx].hint}`;
      }
    });
  }

  renderClue();
}

/* ─── 10. SILLY MEDICINE / GIGGLES ───────────────────────── */
function initGiggles(config) {
  const jokes = config.giggles.jokes;
  if (!jokes || jokes.length === 0) return;

  let jokeIdx = 0;
  const jokeQ = document.getElementById("jokeQuestion");
  const jokeA = document.getElementById("jokeAnswer");
  const nextBtn = document.getElementById("btnNextJoke");

  function renderJoke() {
    const item = jokes[jokeIdx];
    if (jokeQ) jokeQ.textContent = item.q;
    if (jokeA) jokeA.textContent = item.a;
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      jokeIdx = (jokeIdx + 1) % jokes.length;
      renderJoke();
    });
  }

  renderJoke();
}

/* ─── 11. SCROLL UTILITIES ───────────────────────────────── */
function initScrollActions() {
  const backToTop = document.getElementById("backToTopBtn");
  const turnPageBtn = document.getElementById("btnTurnPage");

  if (turnPageBtn) {
    turnPageBtn.addEventListener("click", () => {
      const firstChapter = document.getElementById("memories");
      if (firstChapter) {
        firstChapter.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      if (backToTop) backToTop.classList.add("visible");
    } else {
      if (backToTop) backToTop.classList.remove("visible");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
