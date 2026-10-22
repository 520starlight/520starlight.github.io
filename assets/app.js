(function () {
  "use strict";

  var P = window.PROFILE || {};
  var BRAND = window.ICONS || {};
  var root = document.documentElement;
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');
  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };

  /* ---- generic (non-brand) icons ---------------------------------------- */
  var GENERIC = {
    sparkles:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.4 2.6c.6 4.7 2.3 6.9 6.1 7.6-3.8.7-5.5 2.9-6.1 7.7-.6-4.8-2.3-7-6.1-7.7 3.8-.7 5.5-2.9 6.1-7.6Z"/><path d="M18.4 14.7c.3 2.2 1.1 3.2 2.9 3.5-1.8.3-2.6 1.3-2.9 3.5-.3-2.2-1.1-3.2-2.9-3.5 1.8-.3 2.6-1.3 2.9-3.5Z"/></svg>',
    star:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4c.6 4.9 2.4 7.2 6.4 7.9-4 .7-5.8 3-6.4 8-.6-5-2.4-7.3-6.4-8 4-.7 5.8-3 6.4-7.9Z"/></svg>',
    camera:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 4.5A1.5 1.5 0 0 1 10.5 3.8h3a1.5 1.5 0 0 1 1.3.7l.6 1h2.1A3.5 3.5 0 0 1 21 9v8a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17V9a3.5 3.5 0 0 1 3.5-3.5h2.1l.6-1ZM12 9.5a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 1.9a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 6.8A2.8 2.8 0 0 1 5.3 4h13.4a2.8 2.8 0 0 1 2.8 2.8v.3L12 12.6 2.5 7.1v-.3Zm0 2.8v7.6A2.8 2.8 0 0 0 5.3 20h13.4a2.8 2.8 0 0 0 2.8-2.8V9.6L12 15.1 2.5 9.6Z"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z"/></svg>',
    heart:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6S3.4 15.4 3.4 9.4A4.9 4.9 0 0 1 12 6.3a4.9 4.9 0 0 1 8.6 3.1c0 6-8.6 11.2-8.6 11.2Z"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.7 13.3a1.2 1.2 0 0 1 0-1.7l2.5-2.5a3.1 3.1 0 0 1 4.4 4.4l-1.4 1.4-1.6-1.6 1.4-1.4a.9.9 0 0 0-1.3-1.3l-2.5 2.5a1.2 1.2 0 0 1-1.5-.1Zm2.6-2.6a1.2 1.2 0 0 1 1.5.1 1.2 1.2 0 0 1 0 1.7l-2.5 2.5a3.1 3.1 0 0 1-4.4-4.4l1.4-1.4 1.6 1.6-1.4 1.4a.9.9 0 0 0 1.3 1.3l2.5-2.5Z"/></svg>',
    music:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.1 18.1a2.9 2.9 0 1 1-1.7-2.6V6.6c0-.7.5-1.3 1.2-1.4l8-1.6c.9-.2 1.7.5 1.7 1.4v10.2a2.9 2.9 0 1 1-1.6-2.6V7.4l-6.1 1.2v9.5Z"/></svg>',
    book:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5Zm2.5-.5a.5.5 0 0 0-.5.5V19c.4-.1.8-.2 1.2-.2H18V4H6.5Z"/></svg>',
    coffee:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h12v6.4A5.6 5.6 0 0 1 10.4 19h-1A5.6 5.6 0 0 1 4 13.4V7Zm12 1.6h1.4a2.6 2.6 0 0 1 0 5.2H16V8.6ZM5 21h10v1.6H5V21ZM7.2 2h1.8v3.4H7.2V2Zm4 0H13v3.4h-1.8V2Z"/></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3.5A2.5 2.5 0 0 1 21 7.5v2.3a24 24 0 0 1-18 0V7.5A2.5 2.5 0 0 1 5.5 5H9V4Zm2 1h2V4h-2v1ZM3 11.7a26 26 0 0 0 18 0V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5.3Z"/></svg>'
  };

  function iconSvg(name) {
    if (GENERIC[name]) return GENERIC[name];
    var path = BRAND[name];
    if (!path) path = BRAND.link || null;
    if (!path) return GENERIC.link;
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + path + '"/></svg>';
  }

  /* ---- tiny helpers ------------------------------------------------------ */
  var toastTimer;

  function toast(message) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove("is-visible");
    }, 2000);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return legacyCopy(text); }
      );
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    try {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.cssText = "position:fixed;top:0;left:-9999px;opacity:0";
      document.body.appendChild(area);
      area.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function setText(id, value) {
    var el = $("#" + id);
    if (!el) return;
    if (value == null || value === "") {
      el.hidden = true;
      return;
    }
    el.textContent = value;
    el.hidden = false;
  }

  function appendRichText(el, text) {
    String(text).split(/(\*\*[^*]+\*\*|\n)/g).forEach(function (part) {
      if (!part) return;
      if (part === "\n") {
        el.appendChild(document.createElement("br"));
      } else if (part.slice(0, 2) === "**" && part.slice(-2) === "**") {
        var mark = document.createElement("mark");
        mark.textContent = part.slice(2, -2);
        el.appendChild(mark);
      } else {
        el.appendChild(document.createTextNode(part));
      }
    });
  }

  /* ---- profile text ------------------------------------------------------ */
  var name = P.name || "my links";
  document.title = P.pageTitle || name + " ✧ links";

  setText("eyebrow", P.eyebrow);
  setText("name", P.name);
  setText("banner-note", P.bannerNote);

  /* handle pill (click = copy) */
  var handleBtn = $("#handle");
  if (P.handle) {
    $("#handle-text").textContent = P.handle;
    handleBtn.setAttribute("aria-label", "copy handle " + P.handle);
    handleBtn.addEventListener("click", function () {
      copyText(P.handle).then(function (ok) {
        toast(ok ? "copied " + P.handle + " ♡" : "couldn't copy, sorry!");
      });
    });
  } else {
    handleBtn.hidden = true;
  }

  /* small meta facts */
  var meta = $("#meta");
  var metaBits = (P.meta || []).filter(Boolean);
  if (metaBits.length) {
    metaBits.forEach(function (bit) {
      var span = document.createElement("span");
      span.textContent = bit;
      meta.appendChild(span);
    });
  } else {
    meta.hidden = true;
  }

  /* bio, with **highlights** */
  var bio = $("#bio");
  if (P.bio) {
    appendRichText(bio, P.bio);
  } else {
    bio.hidden = true;
  }

  /* tags */
  var tags = $("#tags");
  (P.tags || []).filter(Boolean).forEach(function (tag) {
    var li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });

  /* ---- about me ---------------------------------------------------------- */
  var about = P.about;
  var aboutSection = $("#about");
  if (about && aboutSection) {
    aboutSection.hidden = false;
    setText("about-greeting", about.greeting);

    var factsEl = $("#about-facts");
    (about.facts || []).filter(Boolean).forEach(function (fact) {
      var li = document.createElement("li");
      li.textContent = fact;
      factsEl.appendChild(li);
    });
    if (!factsEl.children.length) factsEl.hidden = true;

    var aboutText = $("#about-text");
    (about.paragraphs || []).filter(Boolean).forEach(function (paragraph) {
      var p = document.createElement("p");
      appendRichText(p, paragraph);
      aboutText.appendChild(p);
    });
    if (!aboutText.children.length) aboutText.hidden = true;
  }

  /* ---- currently playing ------------------------------------------------- */
  var playing = (P.playing || []).filter(Boolean);
  var playingSection = $("#playing");
  if (playing.length && playingSection) {
    playingSection.hidden = false;
    var playingList = $("#playing-list");
    playing.forEach(function (game) {
      var li = document.createElement("li");
      li.textContent = game;
      playingList.appendChild(li);
    });
  }

  /* ---- lore threads ------------------------------------------------------ */
  var threads = P.threads;
  var threadsSection = $("#threads");
  if (threads && threads.items && threads.items.length && threadsSection) {
    threadsSection.hidden = false;
    setText("threads-intro", threads.intro);

    var threadsList = $("#threads-list");
    threads.items.forEach(function (thread) {
      if (!thread || !thread.href) return;

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "thread";
      a.href = thread.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer me";

      var title = document.createElement("span");
      title.className = "thread__title";
      title.textContent = thread.title || "lore thread";

      var arrow = document.createElement("span");
      arrow.className = "thread__arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";

      a.appendChild(title);
      a.appendChild(arrow);
      li.appendChild(a);
      threadsList.appendChild(li);
    });
  }

  /* ---- before you follow ------------------------------------------------- */
  var boundaries = P.boundaries;
  var boundariesSection = $("#boundaries");
  if (boundaries && boundariesSection) {
    boundariesSection.hidden = false;

    if (boundaries.dni) {
      setText("dni", boundaries.dni);
    } else {
      $("#dni").hidden = true;
    }

    var byfList = $("#byf");
    (boundaries.byf || []).filter(Boolean).forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      byfList.appendChild(li);
    });
    if (!byfList.children.length) byfList.hidden = true;
  }

  /* ---- favorites --------------------------------------------------------- */
  var favorites = (P.favorites || []).filter(Boolean);
  var favoritesSection = $("#favorites");
  if (favorites.length && favoritesSection) {
    favoritesSection.hidden = false;
    var favoritesList = $("#favorites-list");

    favorites.forEach(function (favorite) {
      var block = document.createElement("div");
      block.className = "favorite";

      var title = document.createElement("h3");
      title.className = "favorite__title";

      if (favorite.icon) {
        var favIcon = document.createElement("span");
        favIcon.className = "favorite__icon";
        favIcon.setAttribute("aria-hidden", "true");
        favIcon.innerHTML = iconSvg(favorite.icon);
        title.appendChild(favIcon);
      }

      title.appendChild(document.createTextNode(favorite.label || "favorite"));
      block.appendChild(title);

      if (favorite.text) {
        var text = document.createElement("p");
        appendRichText(text, favorite.text);
        block.appendChild(text);
      }

      favoritesList.appendChild(block);
    });
  }

  /* ---- avatar ------------------------------------------------------------ */
  var avatar = $("#avatar");
  var avatarImg = $("#avatar-img");
  var status = P.status == null ? "online" : String(P.status);

  avatar.dataset.status = status;
  avatar.classList.toggle("has-status", status !== "");
  if (status) {
    var statusLabel = status === "online" ? "online now" : status === "away" ? "away" : "offline";
    $("#avatar-status").title = statusLabel;
  }

  avatarImg.alt = P.avatarAlt || (P.name ? P.name + "'s avatar" : "avatar");
  if (P.avatar) {
    avatarImg.src = P.avatar;
  } else {
    avatarImg.hidden = true;
  }

  $("#avatar .avatar__initial").textContent = (P.name || "✧").trim().charAt(0);

  avatarImg.addEventListener("error", function () {
    if (P.avatarFallback && avatarImg.getAttribute("src") !== P.avatarFallback) {
      avatarImg.src = P.avatarFallback;
      return;
    }
    avatarImg.hidden = true;
  });

  /* ---- links ------------------------------------------------------------- */
  var linksEl = $("#links");
  (P.links || []).forEach(function (item) {
    if (!item || !item.href) return;

    var a = document.createElement("a");
    a.className = "link";
    a.href = item.href;
    if (/^https?:/i.test(item.href) && item.newTab !== false) {
      a.target = "_blank";
      a.rel = "noopener noreferrer me";
    }
    if (item.tint) a.style.setProperty("--item-tint", item.tint);

    var icon = document.createElement("span");
    icon.className = "link__icon";
    icon.setAttribute("aria-hidden", "true");

    if (item.image) {
      var iconImg = document.createElement("img");
      iconImg.src = item.image;
      iconImg.alt = "";
      iconImg.width = 24;
      iconImg.height = 24;
      iconImg.decoding = "async";
      icon.appendChild(iconImg);
    } else {
      icon.innerHTML = iconSvg(item.icon);
    }

    var text = document.createElement("span");
    text.className = "link__text";

    var label = document.createElement("span");
    label.className = "link__label";
    label.appendChild(document.createTextNode(item.label || "link"));
    if (item.badge) {
      var badge = document.createElement("span");
      badge.className = "link__badge";
      badge.textContent = item.badge;
      label.appendChild(badge);
    }
    text.appendChild(label);

    if (item.sub) {
      var sub = document.createElement("span");
      sub.className = "link__sub";
      sub.textContent = item.sub;
      text.appendChild(sub);
    }

    var arrow = document.createElement("span");
    arrow.className = "link__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>';

    a.appendChild(icon);
    a.appendChild(text);
    a.appendChild(arrow);
    linksEl.appendChild(a);
  });

  /* ---- sticky note ------------------------------------------------------- */
  var note = $("#note");
  if (P.note) {
    note.textContent = P.note;
    note.hidden = false;
  }

  /* ---- themes ------------------------------------------------------------ */
  var THEMES = [
    { id: "aqua", label: "aqua", a: "#6dd3f7", b: "#7ab4f9" },
    { id: "starlight", label: "starlight", a: "#a99bf0", b: "#f2b8d2" },
    { id: "sakura", label: "sakura", a: "#f3a6bd", b: "#f7cfa8" },
    { id: "matcha", label: "matcha", a: "#9cc9a4", b: "#e6d3a0" },
    { id: "sunset", label: "sunset", a: "#f2a583", b: "#d9a0e0" }
  ];
  var themesEl = $("#themes");

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  function syncThemeColor() {
    if (!themeColorMeta) return;
    var bg = window.getComputedStyle(root).getPropertyValue("--bg").trim();
    if (bg) themeColorMeta.content = bg;
  }

  function applyTheme(id, save) {
    root.dataset.theme = id;
    if (save) store("lli-theme", id);
    syncThemeColor();
    Array.prototype.forEach.call(themesEl.children, function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.theme === id));
    });
  }

  THEMES.forEach(function (theme) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "swatch";
    btn.dataset.theme = theme.id;
    btn.style.setProperty("--sw-a", theme.a);
    btn.style.setProperty("--sw-b", theme.b);
    btn.title = theme.label + " theme";
    btn.setAttribute("aria-label", theme.label + " theme");
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () { applyTheme(theme.id, true); });
    themesEl.appendChild(btn);
  });

  var currentTheme = root.dataset.theme;
  if (!THEMES.some(function (t) { return t.id === currentTheme; })) currentTheme = "aqua";
  applyTheme(currentTheme, false);

  /* ---- light / dark ------------------------------------------------------ */
  var modeBtn = $("#mode");

  function applyMode(mode, save) {
    root.dataset.mode = mode;
    if (save) store("lli-mode", mode);
    syncThemeColor();
    var dark = mode === "dark";
    var label = dark ? "switch to light mode" : "switch to dark mode";
    modeBtn.setAttribute("aria-label", label);
    modeBtn.title = label;
  }

  applyMode(root.dataset.mode === "dark" ? "dark" : "light", false);

  modeBtn.addEventListener("click", function () {
    applyMode(root.dataset.mode === "dark" ? "light" : "dark", true);
  });

  // follow the system only while the visitor hasn't picked a mode
  try {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onScheme = function (event) {
      try {
        if (!localStorage.getItem("lli-mode")) {
          applyMode(event.matches ? "dark" : "light", false);
        }
      } catch (e) { /* ignore */ }
    };
    if (mq.addEventListener) mq.addEventListener("change", onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  } catch (e) { /* ignore */ }

  /* ---- music ------------------------------------------------------------- */
  var music = P.music;
  var musicBtn = $("#music");
  var musicAudio = $("#music-audio");

  if (music && music.src && musicBtn && musicAudio) {
    var musicArmed = true;
    var musicStarted = false;

    try {
      musicArmed = localStorage.getItem("lli-music") !== "off";
    } catch (e) { /* ignore */ }

    musicAudio.src = music.src;
    musicAudio.loop = music.loop !== false;
    musicAudio.volume = typeof music.volume === "number"
      ? Math.max(0, Math.min(1, music.volume))
      : 0.35;

    function setMusicButton(playing) {
      musicBtn.classList.toggle("is-playing", playing);
      musicBtn.setAttribute("aria-pressed", String(playing));
      var label = playing ? "pause music" : "play music";
      musicBtn.setAttribute("aria-label", label);
      musicBtn.title = label;
    }

    function stopAutoStart() {
      document.removeEventListener("pointerdown", startMusicOnGesture);
      document.removeEventListener("keydown", startMusicOnGesture);
    }

    function startMusic() {
      musicArmed = true;
      store("lli-music", "on");
      musicAudio.play().then(function () {
        musicStarted = true;
        setMusicButton(true);
        stopAutoStart();
      }).catch(function () {
        setMusicButton(false);
      });
    }

    function pauseMusic() {
      musicArmed = false;
      store("lli-music", "off");
      musicAudio.pause();
      setMusicButton(false);
    }

    function startMusicOnGesture(event) {
      if (!musicArmed || musicStarted) return;
      if (event && event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
      if (event && event.target && event.target.closest && event.target.closest("#music")) return;

      musicAudio.play().then(function () {
        musicStarted = true;
        setMusicButton(true);
        stopAutoStart();
      }).catch(function () {
        // keep waiting for a gesture that the browser accepts
      });
    }

    musicBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (musicAudio.paused) startMusic();
      else pauseMusic();
    });

    musicAudio.addEventListener("play", function () {
      musicStarted = true;
      setMusicButton(true);
      stopAutoStart();
    });

    musicAudio.addEventListener("pause", function () {
      setMusicButton(false);
    });

    musicAudio.addEventListener("error", function () {
      musicArmed = false;
      setMusicButton(false);
      stopAutoStart();
    });

    setMusicButton(false);

    if (music.startOnFirstTap !== false && musicArmed) {
      document.addEventListener("pointerdown", startMusicOnGesture, { passive: true });
      document.addEventListener("keydown", startMusicOnGesture);
    }
  } else if (musicBtn) {
    musicBtn.hidden = true;
  }

  /* ---- share ------------------------------------------------------------- */
  $("#share").addEventListener("click", function () {
    var url = window.location.href;
    var shareData = {
      title: document.title,
      text: P.shareText || (P.name ? P.name + " ✧ links" : "my links"),
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function (err) {
        if (err && err.name === "AbortError") return;
        copyText(url).then(function (ok) {
          toast(ok ? "link copied ♡" : "couldn't copy the link");
        });
      });
      return;
    }

    copyText(url).then(function (ok) {
      toast(ok ? "link copied ♡" : "couldn't copy the link");
    });
  });

  /* ---- click sparkles ---------------------------------------------------- */
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var sparkleChars = ["✧", "✦", "♡", "✿"];

  document.addEventListener("pointerdown", function (event) {
    if (reducedMotion.matches || event.button !== 0) return;

    for (var i = 0; i < 6; i++) {
      var spark = document.createElement("span");
      var angle = Math.random() * Math.PI * 2;
      var distance = 24 + Math.random() * 34;

      spark.className = "pop";
      spark.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
      spark.style.left = event.clientX + "px";
      spark.style.top = event.clientY + "px";
      spark.style.fontSize = 10 + Math.random() * 8 + "px";
      spark.style.color = i % 2 ? "var(--accent)" : "var(--accent2)";
      spark.style.setProperty("--dx", Math.cos(angle) * distance + "px");
      spark.style.setProperty("--dy", (Math.sin(angle) * distance - 18) + "px");
      document.body.appendChild(spark);
      spark.addEventListener("animationend", function () {
        this.remove();
      });
    }
  });

})();
