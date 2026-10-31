/**
 * Immersive portfolio: rendering, language/theme, and interactive effects
 * (particle field, 3D skill sphere, skill orbit, tilt, magnetic buttons, journey line).
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var config = window.SITE_CONFIG || {};
  var data = window.SITE_DATA || {};
  var dict = window.I18N || {};
  var LANGS = ['en', 'ar', 'tr'];
  var LANG_LABELS = { en: 'EN', ar: 'ع', tr: 'TR' };
  var lang = LANGS.indexOf(root.getAttribute('lang')) > -1 ? root.getAttribute('lang') : 'en';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  root.classList.add('js');

  /* ---------- Helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function t(key) {
    var value = dict[lang] && dict[lang][key];
    return value !== undefined ? value : (dict.en[key] !== undefined ? dict.en[key] : key);
  }

  // Pick the current language from a {en, ar} object (plain values pass through)
  function L(value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] || value.en || '';
    return value || '';
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function icon(name, extra) {
    return '<svg class="icon ' + (extra || '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }

  function tagsHtml(tags) {
    return (tags || []).map(function (tag) { return '<span class="tag">' + escapeHtml(L(tag)) + '</span>'; }).join('');
  }

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  }

  var toastTimer;
  function toast(message) {
    var el = $('#toast');
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 3200);
  }

  /* =====================================================================
     Rendering
     ===================================================================== */
  function renderMarquee() {
    var words = L(data.marquee) || [];
    var row = words.map(function (w) { return '<span class="marquee__item">' + escapeHtml(w) + '</span>'; }).join('');
    $('#marquee').innerHTML = row + row; // duplicated for a seamless loop
  }

  function renderServices() {
    $('#servicesGrid').innerHTML = (data.services || []).map(function (s, i) {
      var points = (L(s.points) || []).map(function (p) { return '<li>' + icon('check') + escapeHtml(p) + '</li>'; }).join('');
      return '<article class="glass service spotlight tilt reveal" style="--delay:' + i * 0.12 + 's">' +
        '<span class="service__num">0' + (i + 1) + '</span>' +
        '<span class="service__icon">' + icon(s.icon) + '</span>' +
        '<h3>' + escapeHtml(L(s.title)) + '</h3>' +
        '<p>' + escapeHtml(L(s.desc)) + '</p>' +
        '<ul>' + points + '</ul></article>';
    }).join('');
  }

  function renderProjects() {
    var cards = (data.projects || []).map(function (p) {
      var media = p.image
        ? '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(L(p.title)) + '" loading="lazy" />'
        : '<div class="project__mock" aria-hidden="true"><div class="project__mock-bar"><i></i><i></i><i></i></div>' +
          '<div class="project__mock-body"><span></span><span></span><span></span></div></div>';
      var links = '';
      if (p.live) links += '<a class="link-btn" href="' + escapeHtml(p.live) + '" target="_blank" rel="noopener">' + icon('external') + t('projects.live') + '</a>';
      if (p.code) links += '<a class="link-btn" href="' + escapeHtml(p.code) + '" target="_blank" rel="noopener">' + icon('github') + t('projects.code') + '</a>';
      return '<article class="glass project spotlight tilt reveal">' +
        '<div class="project__media">' + media +
          (p.status ? '<span class="project__badge">' + escapeHtml(L(p.status)) + '</span>' : '') + '</div>' +
        '<div class="project__body"><h3>' + escapeHtml(L(p.title)) + '</h3>' +
          '<p>' + escapeHtml(L(p.desc)) + '</p>' +
          '<div class="tags">' + tagsHtml(p.tags) + '</div>' +
          (links ? '<div class="project__links">' + links + '</div>' : '') +
        '</div></article>';
    });

    cards.push(
      '<article class="glass project project--soon reveal" style="--delay:.15s">' +
        '<div class="loader" aria-hidden="true"><span></span><span></span><span></span></div>' +
        '<h3>' + t('projects.soonTitle') + '</h3>' +
        '<p>' + t('projects.soonText') + '</p>' +
        '<a class="link-btn" href="#contact">' + t('projects.soonCta') + icon('arrow', 'flip-rtl') + '</a>' +
      '</article>'
    );
    $('#projectsGrid').innerHTML = cards.join('');
  }

  function renderJourney() {
    var stops = (data.education || []).map(function (e) { return { item: e, type: t('journey.education') }; })
      .concat((data.experience || []).map(function (e) { return { item: e, type: t('journey.experience') }; }));

    var html = stops.map(function (s, i) {
      var item = s.item;
      var points = (L(item.points) || []).map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('');
      var period = L(item.period);
      return '<div class="stop">' +
        '<span class="stop__dot">' + icon(item.icon || 'briefcase') + '</span>' +
        '<article class="glass stop__card spotlight reveal" style="--delay:' + (i % 2) * 0.1 + 's">' +
          '<span class="stop__type">' + escapeHtml(s.type) + (period ? ' · ' + escapeHtml(period) : '') + '</span>' +
          '<h3>' + escapeHtml(L(item.title)) + '</h3>' +
          (item.org ? '<div class="stop__org">' + escapeHtml(L(item.org)) + '</div>' : '') +
          (item.desc ? '<p>' + escapeHtml(L(item.desc)) + '</p>' : '') +
          (points ? '<ul>' + points + '</ul>' : '') +
        '</article></div>';
    }).join('');

    var list = $('#journeyList');
    $$('.stop', list).forEach(function (el) { el.remove(); });
    list.insertAdjacentHTML('beforeend', html);
  }

  function renderContactInfo() {
    var pill = $('#copyEmail');
    if (config.email) $('#emailText').textContent = config.email; else pill.hidden = true;

    var waCard = $('#whatsappCard');
    var waFloat = $('#waFloat');
    if (config.whatsapp) {
      var waLink = 'https://wa.me/' + config.whatsapp + '?text=' + encodeURIComponent(t('contact.whatsappMessage'));
      waCard.href = waLink;
      waFloat.href = waLink;
      waFloat.hidden = false;
      $('#whatsappText').textContent = config.whatsappDisplay || '+' + config.whatsapp;
    } else {
      waCard.hidden = true;
      waFloat.hidden = true;
    }

    var socials = config.socials || {};
    $('#socials').innerHTML = Object.keys(socials).filter(function (k) { return socials[k]; }).map(function (k) {
      return '<a class="dock__btn" href="' + escapeHtml(socials[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + icon(k) + '</a>';
    }).join('');
  }

  /* =====================================================================
     Skill orbit + detail panel
     ===================================================================== */
  var activeSkill = 0;
  var skillTimer;
  var userPickedSkill = false;

  function renderOrbit() {
    var skills = data.skills || [];
    var inner = skills.slice(0, 3);
    var outer = skills.slice(3);

    function planets(list, offset) {
      return list.map(function (s, i) {
        var angle = (360 / list.length) * i + (offset ? 30 : -90);
        var index = skills.indexOf(s);
        return '<div class="planet" style="--a:' + angle + 'deg">' +
          '<button type="button" class="planet__btn" data-skill="' + index + '" aria-label="' + escapeHtml(L(s.name)) + '">' + icon(s.icon) + '</button></div>';
      }).join('');
    }

    $('#orbitInner').innerHTML = planets(inner, false);
    $('#orbitOuter').innerHTML = planets(outer, true);
    $('#skillDots').innerHTML = skills.map(function (s, i) {
      return '<button type="button" data-skill="' + i + '" aria-label="' + escapeHtml(L(s.name)) + '"></button>';
    }).join('');

    sizeOrbit();
    showSkill(activeSkill, false);
  }

  function sizeOrbit() {
    $$('.orbit__track').forEach(function (track) {
      track.style.setProperty('--r', track.offsetWidth / 2 + 'px');
      $$('.planet', track).forEach(function (p) { p.style.setProperty('--r', track.offsetWidth / 2 + 'px'); });
    });
  }

  function showSkill(index, animate) {
    var skills = data.skills || [];
    if (!skills.length) return;
    activeSkill = (index + skills.length) % skills.length;
    var s = skills[activeSkill];
    var panel = $('#skillPanel');

    $('#skillIcon').innerHTML = icon(s.icon);
    $('#skillName').textContent = L(s.name);
    $('#skillDesc').textContent = L(s.desc);
    $('#skillTags').innerHTML = tagsHtml(s.tags);

    $$('[data-skill]').forEach(function (b) {
      b.classList.toggle('is-active', Number(b.getAttribute('data-skill')) === activeSkill);
    });

    if (animate) {
      panel.classList.remove('is-switching');
      void panel.offsetWidth; // restart animation
      panel.classList.add('is-switching');
    }
  }

  function autoCycleSkills() {
    clearInterval(skillTimer);
    if (reduceMotion) return;
    skillTimer = setInterval(function () {
      if (!userPickedSkill) showSkill(activeSkill + 1, true);
    }, 4500);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-skill]');
    if (!btn) return;
    userPickedSkill = true;
    $('#orbit').classList.add('is-paused');
    showSkill(Number(btn.getAttribute('data-skill')), true);
  });

  /* =====================================================================
     Language & theme
     ===================================================================== */
  function applyLanguage(next) {
    lang = next;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = t('meta.title');

    $$('[data-i18n]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    $('#langLabel').textContent = LANG_LABELS[lang];
    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-checked', String(b.getAttribute('data-lang') === lang));
    });

    renderMarquee();
    renderServices();
    renderProjects();
    renderJourney();
    renderContactInfo();
    renderOrbit();
    buildSphere();
    restartTyping();
    bindCardEffects();
    observeReveal();
    updateScroll();
  }

  var langToggle = $('#langToggle');
  var langMenu = $('#langMenu');

  function setLangMenu(open) {
    langMenu.hidden = !open;
    langToggle.setAttribute('aria-expanded', String(open));
  }

  langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setLangMenu(langMenu.hidden);
  });

  langMenu.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang]');
    if (!btn) return;
    var next = btn.getAttribute('data-lang');
    setLangMenu(false);
    if (next === lang) return;
    store('lang', next);
    applyLanguage(next);
  });

  document.addEventListener('click', function (e) {
    if (!langMenu.hidden && !e.target.closest('.lang')) setLangMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setLangMenu(false);
  });

  function setThemeColor() {
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', root.getAttribute('data-theme') === 'light' ? '#f4f6fd' : '#05060f');
  }

  $('#themeToggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    store('theme', next);
    setThemeColor();
    readParticleColor();
  });

  /* =====================================================================
     Particle field (background canvas)
     ===================================================================== */
  var canvas = $('#field');
  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouse = { x: -9999, y: -9999 };
  var particleRGB = '180, 200, 255';
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  function readParticleColor() {
    particleRGB = getComputedStyle(root).getPropertyValue('--particle').trim() || particleRGB;
  }

  function resizeField() {
    var w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.min(90, Math.floor((w * h) / 16000));
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6
      });
    }
  }

  function drawField() {
    var w = window.innerWidth, h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    var link = 130, mouseLink = 190;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      if (!reduceMotion) {
        // gentle push away from the cursor
        var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        var md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120 && md > 0) { p.x += (mdx / md) * 1.2; p.y += (mdy / md) * 1.2; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + particleRGB + ', .7)';
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx = p.x - q.x, dy = p.y - q.y;
        var d = dx * dx + dy * dy;
        if (d < link * link) {
          ctx.strokeStyle = 'rgba(' + particleRGB + ',' + (0.16 * (1 - Math.sqrt(d) / link)) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }

      var ex = p.x - mouse.x, ey = p.y - mouse.y;
      var ed = Math.sqrt(ex * ex + ey * ey);
      if (ed < mouseLink) {
        ctx.strokeStyle = 'rgba(139, 92, 246,' + (0.45 * (1 - ed / mouseLink)) + ')';
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  }

  /* =====================================================================
     3D skill sphere (drag to spin)
     ===================================================================== */
  var sphere = { el: $('#sphere'), wrap: $('.sphere-wrap'), items: [], ax: 0, ay: 0, vx: 0.002, vy: 0.004, radius: 200, dragging: false };

  function buildSphere() {
    var words = L(data.sphere) || [];
    var n = words.length;
    sphere.el.innerHTML = '';
    sphere.items = words.map(function (word, i) {
      // Fibonacci lattice: evenly spread points on a sphere
      var y = 1 - (i / (n - 1)) * 2;
      var r = Math.sqrt(1 - y * y);
      var theta = Math.PI * (3 - Math.sqrt(5)) * i;
      var el = document.createElement('span');
      el.className = 'sphere__item';
      el.textContent = word;
      sphere.el.appendChild(el);
      return { el: el, x: Math.cos(theta) * r, y: y, z: Math.sin(theta) * r };
    });
    sizeSphere();
  }

  function sizeSphere() {
    sphere.radius = sphere.wrap.offsetWidth * 0.38;
  }

  function drawSphere() {
    if (!sphere.dragging) {
      sphere.vx += (0.0015 - sphere.vx) * 0.02; // ease back to idle spin
      sphere.vy += (0.003 - sphere.vy) * 0.02;
    }
    var sx = Math.sin(sphere.vx), cx = Math.cos(sphere.vx);
    var sy = Math.sin(sphere.vy), cy = Math.cos(sphere.vy);

    sphere.items.forEach(function (it) {
      // rotate around the Y axis, then the X axis
      var x1 = it.x * cy + it.z * sy;
      var z1 = -it.x * sy + it.z * cy;
      var y2 = it.y * cx - z1 * sx;
      var z2 = it.y * sx + z1 * cx;
      it.x = x1; it.y = y2; it.z = z2;

      var scale = (z2 + 2) / 3;
      var alpha = 0.25 + ((z2 + 1) / 2) * 0.75;
      it.el.style.transform = 'translate(-50%, -50%) translate3d(' + (x1 * sphere.radius).toFixed(1) + 'px,' + (y2 * sphere.radius).toFixed(1) + 'px,0) scale(' + scale.toFixed(3) + ')';
      it.el.style.opacity = alpha.toFixed(2);
      it.el.style.zIndex = String(Math.round(z2 * 100) + 100);
      it.el.style.filter = z2 < -0.3 ? 'blur(' + ((-z2 - 0.3) * 3).toFixed(1) + 'px)' : 'none';
    });
  }

  (function bindSphereDrag() {
    var last = null;
    sphere.wrap.addEventListener('pointerdown', function (e) {
      sphere.dragging = true;
      last = { x: e.clientX, y: e.clientY };
      sphere.wrap.classList.add('is-dragging');
      sphere.wrap.setPointerCapture(e.pointerId);
    });
    sphere.wrap.addEventListener('pointermove', function (e) {
      if (!sphere.dragging || !last) return;
      sphere.vy = (e.clientX - last.x) * 0.006;
      sphere.vx = -(e.clientY - last.y) * 0.006;
      last = { x: e.clientX, y: e.clientY };
    });
    function end() { sphere.dragging = false; last = null; sphere.wrap.classList.remove('is-dragging'); }
    sphere.wrap.addEventListener('pointerup', end);
    sphere.wrap.addEventListener('pointercancel', end);
  })();

  /* =====================================================================
     Cursor glow, spotlight, tilt, magnetic buttons
     ===================================================================== */
  var glow = $('#cursorGlow');
  var glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var glowTarget = { x: glowPos.x, y: glowPos.y };

  window.addEventListener('pointermove', function (e) {
    mouse.x = e.clientX; mouse.y = e.clientY;
    glowTarget.x = e.clientX; glowTarget.y = e.clientY;
    if (e.pointerType === 'mouse') root.classList.add('has-pointer');
  }, { passive: true });
  document.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });

  function bindCardEffects() {
    $$('.spotlight').forEach(function (card) {
      if (card._spot) return;
      card._spot = true;
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    if (!finePointer || reduceMotion) return;

    $$('.tilt').forEach(function (card) {
      if (card._tilt) return;
      card._tilt = true;
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'rotateY(' + (px * 10).toFixed(2) + 'deg) rotateX(' + (-py * 10).toFixed(2) + 'deg) translateZ(0)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });

    $$('.magnetic').forEach(function (btn) {
      if (btn._mag) return;
      btn._mag = true;
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + (x * 0.25).toFixed(1) + 'px,' + (y * 0.35).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', function () {
        btn.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1)';
        btn.style.transform = '';
        setTimeout(function () { btn.style.transition = ''; }, 500);
      });
    });
  }

  /* =====================================================================
     Scroll: progress bar, dock state, journey line
     ===================================================================== */
  var progressEl = $('#progress');
  var dock = $('#dock');

  function updateScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    progressEl.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
    dock.classList.toggle('is-scrolled', window.scrollY > 30);

    var journey = $('#journeyList');
    var fill = $('#journeyFill');
    var rect = journey.getBoundingClientRect();
    var center = window.innerHeight * 0.6;
    var filled = Math.max(0, Math.min(rect.height, center - rect.top));
    fill.style.height = filled + 'px';
    $$('.stop', journey).forEach(function (stop) {
      var dot = $('.stop__dot', stop).getBoundingClientRect();
      stop.classList.toggle('is-lit', dot.top + dot.height / 2 < center);
    });
  }
  window.addEventListener('scroll', updateScroll, { passive: true });

  /* =====================================================================
     Reveal on scroll
     ===================================================================== */
  var revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

  function observeReveal() {
    $$('.reveal:not(.is-visible)').forEach(function (el) {
      if (revealObserver) revealObserver.observe(el); else el.classList.add('is-visible');
    });
  }

  /* =====================================================================
     Typing effects
     ===================================================================== */
  var typedEl = $('#typed');
  var typingTimer;

  function restartTyping() {
    clearTimeout(typingTimer);
    var words = t('hero.typed');
    if (!Array.isArray(words) || !words.length) return;
    if (reduceMotion) { typedEl.textContent = words[0]; return; }

    var wordIndex = 0, charIndex = 0, deleting = false;
    (function tick() {
      var word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, charIndex);
      var delay = deleting ? 35 : 80;
      if (!deleting && charIndex === word.length) { deleting = true; delay = 1800; }
      else if (deleting && charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 300; }
      typingTimer = setTimeout(tick, delay);
    })();
  }

  // Live-typed code card in the bento grid
  var codeTokens = [
    ['k', 'const'], ['', ' '], ['p', 'haitham'], ['', ' = {\n  '],
    ['p', 'role'], ['', ': '], ['s', "'Software Developer'"], ['', ',\n  '],
    ['p', 'city'], ['', ': '], ['s', "'Istanbul'"], ['', ',\n  '],
    ['p', 'loves'], ['', ': ['], ['s', "'clean code'"], ['', ', '], ['s', "'data'"], ['', ', '], ['s', "'design'"], ['', '],\n  '],
    ['f', 'solve'], ['', '(problem) {\n    '], ['k', 'return'], ['', ' '], ['f', 'build'], ['', '(problem);\n  }\n};']
  ];
  var codeEl = $('#liveCode');

  function runCode() {
    var total = codeTokens.reduce(function (n, tk) { return n + tk[1].length; }, 0);
    var shown = reduceMotion ? total : 0;

    function render() {
      var left = shown, html = '';
      for (var i = 0; i < codeTokens.length && left > 0; i++) {
        var part = codeTokens[i][1].slice(0, left);
        left -= part.length;
        html += codeTokens[i][0] ? '<span class="' + codeTokens[i][0] + '">' + escapeHtml(part) + '</span>' : escapeHtml(part);
      }
      codeEl.innerHTML = html + '<span class="cur"></span>';
    }

    render();
    if (reduceMotion) return;
    (function step() {
      shown++;
      render();
      if (shown < total) setTimeout(step, 38);
      else setTimeout(function () { shown = 0; step(); }, 4000);
    })();
  }

  /* =====================================================================
     Clock, CV, copy email, contact form
     ===================================================================== */
  function tickClock() {
    try {
      var time = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit' });
      $('#clock').textContent = time + ' · GMT+3';
    } catch (e) { /* timezone unsupported */ }
  }

  $$('.js-cv').forEach(function (btn) {
    btn.setAttribute('href', config.cvPath || '#');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (!config.cvPath) { toast(t('cv.missing')); return; }
      fetch(config.cvPath, { method: 'HEAD' })
        .then(function (res) {
          if (!res.ok) throw new Error('missing');
          var a = document.createElement('a');
          a.href = config.cvPath;
          a.download = config.cvPath.split('/').pop();
          document.body.appendChild(a);
          a.click();
          a.remove();
        })
        .catch(function () { toast(t('cv.missing')); });
    });
  });

  $('#copyEmail').addEventListener('click', function () {
    if (!config.email) return;
    var done = function () { toast(t('contact.copied')); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(config.email).then(done, function () { window.location.href = 'mailto:' + config.email; });
    } else {
      window.location.href = 'mailto:' + config.email;
    }
  });

  var form = $('#contactForm');
  var statusEl = $('#formStatus');
  var submitBtn = $('#submitBtn');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validateField(input) {
    var value = input.value.trim();
    var valid = value.length > 0 && (input.type !== 'email' || emailPattern.test(value));
    input.closest('.field').classList.toggle('is-invalid', !valid);
    return valid;
  }

  $$('input[required], textarea[required]', form).forEach(function (input) {
    input.addEventListener('blur', function () { validateField(input); });
    input.addEventListener('input', function () {
      if (input.closest('.field').classList.contains('is-invalid')) validateField(input);
    });
  });

  function setStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = 'form__status' + (type ? ' is-' + type : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = $$('input[required], textarea[required]', form);
    if (!fields.map(validateField).every(Boolean)) {
      var firstInvalid = $('.field.is-invalid input, .field.is-invalid textarea', form);
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    var els = form.elements;
    if (els._gotcha.value) return; // bot

    var payload = {
      name: els.name.value.trim(),
      email: els.email.value.trim(),
      subject: els.subject.value.trim(),
      message: els.message.value.trim()
    };

    if (config.formEndpoint) {
      submitBtn.disabled = true;
      setStatus(t('form.sending'));
      fetch(config.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          setStatus(t('form.success'), 'success');
        })
        .catch(function () { setStatus(t('form.error'), 'error'); })
        .then(function () { submitBtn.disabled = false; });
      return;
    }

    // No form service configured: open the visitor's email app with the message ready.
    if (!config.email) { setStatus(t('form.error'), 'error'); return; }
    var body = payload.message + '\n\n— ' + payload.name + ' (' + payload.email + ')';
    window.location.href = 'mailto:' + config.email +
      '?subject=' + encodeURIComponent(payload.subject) +
      '&body=' + encodeURIComponent(body);
    setStatus(t('form.mailto'), 'success');
  });

  /* =====================================================================
     Main loop & init
     ===================================================================== */
  function frame() {
    if (!document.hidden) {
      drawField();
      drawSphere();
      glowPos.x += (glowTarget.x - glowPos.x) * 0.12;
      glowPos.y += (glowTarget.y - glowPos.y) * 0.12;
      glow.style.transform = 'translate3d(' + glowPos.x.toFixed(1) + 'px,' + glowPos.y.toFixed(1) + 'px,0)';
    }
    requestAnimationFrame(frame);
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { resizeField(); sizeSphere(); sizeOrbit(); updateScroll(); }, 150);
  });

  $('#year').textContent = new Date().getFullYear();
  setThemeColor();
  readParticleColor();
  resizeField();
  applyLanguage(lang);
  autoCycleSkills();
  runCode();
  tickClock();
  setInterval(tickClock, 30000);

  if (reduceMotion) { drawField(); drawSphere(); } else requestAnimationFrame(frame);
})();
