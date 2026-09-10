/* ============ COMPREHENSIVE IMAGE & MEDIA ASSET PROTECTION ============ */
  // 1. Right-Click / Context Menu Interception
  document.addEventListener('contextmenu', function(e){
    var target = e.target;
    var isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
    if (isInput) return; // Allow context menu in form text inputs

    var isMedia = target.tagName === 'IMG' || 
                  target.tagName === 'VIDEO' || 
                  target.tagName === 'CANVAS' ||
                  Boolean(target.closest('img, video, canvas, .card-media, .logo-card, .lb-media, .compare-slider, .hero, .hero-slide, .project-card, [style*="background-image"], .logo, .as-blueprint-frame, .as-stage-viewport, .as-modal-canvas, .lightbox'));
    
    if (isMedia) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { passive: false });

  // 2. Drag-and-Drop to Desktop Prevention
  document.addEventListener('dragstart', function(e){
    var target = e.target;
    var isMedia = target.tagName === 'IMG' || 
                  target.tagName === 'VIDEO' || 
                  target.tagName === 'CANVAS' ||
                  Boolean(target.closest('img, video, canvas, .card-media, .logo-card, .lb-media, .compare-slider, .hero, .hero-slide, .project-card, .as-stage-viewport, .as-modal-canvas'));
    if (isMedia) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });

  // 3. Save / Print Keyboard Shortcuts Prevention (Ctrl+S, Cmd+S, Ctrl+P, Cmd+P)
  document.addEventListener('keydown', function(e){
    var isSave = (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S');
    var isPrint = (e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P');

    if (isSave || isPrint) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // 4. Image Copy Clipboard Prevention
  document.addEventListener('copy', function(e){
    var target = e.target;
    if (target.tagName === 'IMG' || target.closest('.as-stage-viewport, .as-modal-canvas, .card-media, .lb-media')) {
      e.preventDefault();
      return false;
    }
  });

  /* ============================================================
     ARCHITECTURAL PRECISION CURSOR & AMBIENT GLOW ENGINE
  ============================================================ */
  var cursorFollower = document.getElementById('archCursorFollower');
  var cursorGlow = document.getElementById('cursorGlow');
  var cursorBadge = document.getElementById('archCursorBadge');

  if (cursorFollower) {
    var targetX = -200, targetY = -200;
    var curFollowerX = -200, curFollowerY = -200;
    var curGlowX = -200, curGlowY = -200;
    var isCursorVisible = false;

    window.addEventListener('mousemove', function(e) {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isCursorVisible) {
        cursorFollower.style.opacity = '1';
        if (cursorGlow) cursorGlow.style.opacity = '1';
        isCursorVisible = true;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function() {
      if (cursorFollower) cursorFollower.style.opacity = '0';
      if (cursorGlow) cursorGlow.style.opacity = '0';
      isCursorVisible = false;
    });

    function renderCursorLoop() {
      curFollowerX += (targetX - curFollowerX) * 0.35;
      curFollowerY += (targetY - curFollowerY) * 0.35;
      cursorFollower.style.transform = 'translate3d(' + curFollowerX.toFixed(1) + 'px,' + curFollowerY.toFixed(1) + 'px,0)';

      if (cursorGlow) {
        curGlowX += (targetX - curGlowX) * 0.14;
        curGlowY += (targetY - curGlowY) * 0.14;
        cursorGlow.style.transform = 'translate3d(' + curGlowX.toFixed(1) + 'px,' + curGlowY.toFixed(1) + 'px,0)';
      }

      requestAnimationFrame(renderCursorLoop);
    }
    requestAnimationFrame(renderCursorLoop);

    var interactiveQuery = 'a, button, .project-card, .logo-card, .filter-chip, .compare-range, .compare-handle, .theme-toggle, .slot-btn, input, textarea, select';
    document.addEventListener('mouseover', function(e) {
      var target = e.target.closest(interactiveQuery);
      if (target) {
        cursorFollower.classList.add('is-hovering');
        if (cursorBadge) {
          if (target.classList.contains('project-card')) {
            cursorBadge.textContent = 'INSPECT';
          } else if (target.classList.contains('logo-card')) {
            cursorBadge.textContent = 'BRAND';
          } else if (target.classList.contains('compare-range') || target.closest('.compare-slider')) {
            cursorBadge.textContent = 'SLIDE';
          } else if (target.closest('#panoViewer')) {
            cursorBadge.textContent = 'ORBIT 360°';
          } else if (target.id === 'themeToggle') {
            cursorBadge.textContent = 'THEME';
          } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
            cursorBadge.textContent = 'TYPE';
          } else {
            cursorBadge.textContent = 'SELECT';
          }
        }
      }
    });

    document.addEventListener('mouseout', function(e) {
      var target = e.target.closest(interactiveQuery);
      if (target) {
        cursorFollower.classList.remove('is-hovering');
      }
    });
  }
