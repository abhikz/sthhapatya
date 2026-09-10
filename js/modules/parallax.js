/* ============ SCROLL REVEAL ============ */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ============ STAT COUNTERS ============ */
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');
  function animateStat(el){
    if(el.getAttribute('data-counted') === 'true') return;
    el.setAttribute('data-counted', 'true');
    var target = Number(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if(reduceMotion){ el.textContent = target + suffix; return; }
    var startedAt = null;
    var duration = 1150;
    function tick(now){
      if(!startedAt) startedAt = now;
      var progress = Math.min((now - startedAt) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.round(target * eased) + suffix;
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if('IntersectionObserver' in window){
    var statObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ animateStat(entry.target); statObserver.unobserve(entry.target); }
      });
    }, { threshold:.65 });
    statNumbers.forEach(function(el){ statObserver.observe(el); });
  } else {
    statNumbers.forEach(animateStat);
  }
