/* ============ HERO CAROUSEL SLIDER ============ */
  var heroSlides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var heroDotsWrap = document.getElementById('heroDots');
  var heroCaption = document.getElementById('heroCaption');
  var heroIndex = 0, heroTimer;

  if (heroDotsWrap) {
    heroDotsWrap.innerHTML = '';
    heroSlides.forEach(function(s, i){
      var dot = document.createElement('button');
      dot.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i+1));
      dot.addEventListener('click', function(){ 
        goToHero(i); 
        resetHeroTimer(); 
        SoundEngine.playTransitionWhoosh();
      });
      heroDotsWrap.appendChild(dot);
    });
  }

  function goToHero(i){
    heroIndex = (i + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function(s, idx){ 
      var isActive = idx === heroIndex;
      s.classList.toggle('is-active', isActive); 
      var v = s.querySelector('video');
      if(v){
        if(isActive){
          try {
            var playPromise = v.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(function(){});
            }
          } catch(e) {}
        } else {
          setTimeout(function(){ if(!s.classList.contains('is-active')){ try{ v.pause(); }catch(e){} } }, 1200);
        }
      }
      var iframe = s.querySelector('iframe');
      if(iframe && iframe.contentWindow){
        try {
          if(isActive){
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
          } else {
            setTimeout(function(){
              if(!s.classList.contains('is-active') && iframe.contentWindow){
                try { iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*'); } catch(e){}
              }
            }, 1200);
          }
        } catch(e){}
      }
    });

    if (heroDotsWrap) {
      heroDotsWrap.querySelectorAll('button').forEach(function(d, idx){ d.classList.toggle('is-active', idx === heroIndex); });
    }

    var active = heroSlides[heroIndex];
    if (heroCaption && active) {
      heroCaption.classList.remove('is-updating');
      if(!reduceMotion){ void heroCaption.offsetWidth; heroCaption.classList.add('is-updating'); }
      heroCaption.innerHTML = '<b>' + active.getAttribute('data-title') + '</b>' + active.getAttribute('data-eyebrow') + ' · ' + active.getAttribute('data-loc');
    }
  }

  function resetHeroTimer(){
    clearInterval(heroTimer);
    if(!reduceMotion && heroSlides.length > 1){ 
      heroTimer = setInterval(function(){ 
        goToHero(heroIndex + 1); 
      }, 6500); 
    }
  }

  var heroPrevBtn = document.getElementById('heroPrev');
  var heroNextBtn = document.getElementById('heroNext');
  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', function(){ 
      goToHero(heroIndex - 1); 
      resetHeroTimer(); 
      SoundEngine.playTransitionWhoosh();
    });
  }
  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', function(){ 
      goToHero(heroIndex + 1); 
      resetHeroTimer(); 
      SoundEngine.playTransitionWhoosh();
    });
  }

  var heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', function(){ clearInterval(heroTimer); });
    heroEl.addEventListener('mouseleave', resetHeroTimer);
  }
  resetHeroTimer();

  // Ensure active hero video starts playing immediately on load
  document.querySelectorAll('.hero-slide video').forEach(function(v){
    v.muted = true;
    try {
      var p = v.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function(e){});
      }
    } catch(e) {}
  });

  // Handle YouTube iframe looping seamlessly without playlist controls
  window.addEventListener('message', function(e){
    try {
      var data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      if (data && data.event === 'onStateChange' && data.info === 0) {
        document.querySelectorAll('.hero-slide iframe').forEach(function(f){
          if(f.contentWindow){
            f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }), '*');
            f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
          }
        });
      }
    } catch(err){}
  });
