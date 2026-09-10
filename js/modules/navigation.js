(function() {
  "use strict";

/* ============ MOBILE MENU ============ */
  var menuToggle = document.getElementById('menuToggle');
  var primaryNav = document.getElementById('primaryNav');
  menuToggle.addEventListener('click', function(){
    var open = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  primaryNav.querySelectorAll('.nav-links a').forEach(function(link){
    link.addEventListener('click', function(){ primaryNav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); });
  });

  /* ============ HEADER SCROLL STATE + PROGRESS BAR + PARALLAX ENGINE ============ */
  var header = document.getElementById('siteHeader');
  var progressBar = document.getElementById('progressBar');
  var heroSection = document.querySelector('.hero');
  var heroBlueprint = document.querySelector('.hero-blueprint');
  var heroContent = document.querySelector('.hero-content');
  var scrollCue = document.querySelector('.scroll-cue');

  var parallaxEls = [];
  var isParallaxTicking = false;

  function refreshParallaxElements() {
    parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax-speed]'));
  }

  function updateParallaxFrame() {
    var sy = window.scrollY;
    var vh = window.innerHeight;

    // Header scrolled state & Progress bar
    if (header) header.classList.toggle('is-scrolled', sy > 40);
    if (progressBar) {
      var docHeight = document.documentElement.scrollHeight - vh;
      var pct = docHeight > 0 ? (sy / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }

    if (reduceMotion) {
      isParallaxTicking = false;
      return;
    }

    // 1. Hero Depth Layers (Subtle background blueprint drift only)
    if (heroSection && sy < heroSection.offsetHeight * 1.2) {
      if (heroBlueprint) {
        heroBlueprint.style.transform = 'translate3d(0,' + (sy * 0.15).toFixed(1) + 'px,0)';
      }
      if (scrollCue) {
        scrollCue.style.transform = 'translate3d(0,' + (sy * 0.4).toFixed(1) + 'px,0)';
        scrollCue.style.opacity = Math.max(0, 1 - (sy / 280));
      }
    }

    // 2. Viewport-Aware Parallax Watermarks ([data-parallax-speed])
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      if (el.classList.contains('card-hidden') || el.style.display === 'none') continue;

      var rect = el.getBoundingClientRect();
      if (rect.bottom >= -100 && rect.top <= vh + 100) {
        var speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0;
        var centerOffset = (rect.top + rect.height / 2) - (vh / 2);
        var translateY = centerOffset * speed;

        el.style.transform = 'translate3d(0,' + translateY.toFixed(1) + 'px,0)';
      }
    }

    isParallaxTicking = false;
  }

  function requestParallaxUpdate() {
    if (!isParallaxTicking) {
      requestAnimationFrame(updateParallaxFrame);
      isParallaxTicking = true;
    }
  }

  function initParallaxEngine() {
    document.body.classList.add('has-parallax');
    refreshParallaxElements();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    window.addEventListener('resize', function() {
      refreshParallaxElements();
      requestParallaxUpdate();
    }, { passive: true });
    requestParallaxUpdate();
  }

  initParallaxEngine();

/* ============ SMOOTH VIEW TRANSITIONS (NAV LINKS) ============ */
  if ('startViewTransition' in document && !reduceMotion) {
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-actions a[href^="#"]');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = link.getAttribute('href');
        var target = document.querySelector(href);
        if (!target) return;
        
        e.preventDefault();
        // Close mobile menu if open
        if (primaryNav) primaryNav.classList.remove('is-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        
        document.startViewTransition(function() {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL hash
          history.pushState(null, '', href);
        });
      });
    });
  }

/* ============================================================
     SMART NAVIGATION SYSTEM (STICKY INDICATOR + KEYBOARD NAV)
  ============================================================ */
  var smartNavRail = document.getElementById('smartNavRail');
  var smartNavItems = document.querySelectorAll('.smart-nav-item');
  var headerNavLinks = document.querySelectorAll('.nav-links a');
  var kbdHint = document.getElementById('kbdNavHint');

  var sectionIds = ['top', 'studio', 'work', 'anatomy-studio', 'logos', 'compare', '360-view', 'process', 'contact'];
  var sectionElements = sectionIds.map(function(id) {
    return document.getElementById(id);
  }).filter(Boolean);

  var currentActiveSectionIndex = 0;

  function setActiveSection(index) {
    if (index < 0 || index >= sectionIds.length) return;
    currentActiveSectionIndex = index;
    var activeId = sectionIds[index];

    // 1. Update Mini-Map Sticky Rail
    smartNavItems.forEach(function(item) {
      var isTarget = item.getAttribute('data-section') === activeId;
      item.classList.toggle('is-active', isTarget);
      item.setAttribute('aria-current', isTarget ? 'true' : 'false');
    });

    // 2. Update Header Navigation Links ("You are here" underline)
    headerNavLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      var isTarget = href === '#' + activeId;
      link.classList.toggle('is-active', isTarget);
    });

    // 3. Notify Compare Section Controller on entering / leaving
    if (window.CompareSectionController) {
      if (activeId === 'compare') {
        window.CompareSectionController.onSectionEnter();
      } else {
        window.CompareSectionController.onSectionLeave();
      }
    }
  }

  function updateActiveSectionOnScroll() {
    var sy = window.scrollY;
    var vh = window.innerHeight;

    // Show rail when scrolled past initial hero glance
    if (smartNavRail) {
      smartNavRail.classList.toggle('is-visible', sy > 120);
    }

    var bestIndex = 0;
    var minDiff = Infinity;

    for (var i = 0; i < sectionElements.length; i++) {
      var el = sectionElements[i];
      var rect = el.getBoundingClientRect();
      var diff = Math.abs(rect.top - 140);
      if (rect.top <= vh * 0.55 && diff < minDiff) {
        minDiff = diff;
        bestIndex = i;
      }
    }

    setActiveSection(bestIndex);
  }

  window.addEventListener('scroll', updateActiveSectionOnScroll, { passive: true });
  updateActiveSectionOnScroll();

  // Smooth scroll click handler for Mini-Map items
  smartNavItems.forEach(function(item, idx) {
    item.addEventListener('click', function(e) {
      var targetId = item.getAttribute('data-section');
      var targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(idx);
        if (typeof SoundEngine !== 'undefined') SoundEngine.playTransitionWhoosh();
      }
    });
  });

  // Keyboard Navigation (← / → / ↑ / ↓ / J / K)
  var hasShownKbdHint = false;
  document.addEventListener('keydown', function(e) {
    var activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
    if (document.querySelector('.lightbox.is-open')) return;

    var nextIndex = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'j' || e.key === 'J' || e.key === 'PageDown') {
      nextIndex = Math.min(sectionElements.length - 1, currentActiveSectionIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'k' || e.key === 'K' || e.key === 'PageUp') {
      nextIndex = Math.max(0, currentActiveSectionIndex - 1);
    }

    if (nextIndex !== -1 && nextIndex !== currentActiveSectionIndex) {
      e.preventDefault();
      var targetEl = sectionElements[nextIndex];
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(nextIndex);
        if (typeof SoundEngine !== 'undefined') SoundEngine.playTransitionWhoosh();

        if (!hasShownKbdHint && kbdHint) {
          kbdHint.classList.add('is-visible');
          setTimeout(function() { kbdHint.classList.remove('is-visible'); }, 3500);
          hasShownKbdHint = true;
        }
      }
    }
  });

})();
