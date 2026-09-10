/* ============ RENDER PROJECT GRID ============ */
  var grid = document.getElementById('projectGrid');
  projects.forEach(function(p, i){
    var card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-category', p.category);
    card.setAttribute('data-index', i);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View project: ' + p.title);
    card.setAttribute('data-reveal','');
    card.style.setProperty('--reveal-delay', (i % 3) * 90 + 'ms');
    card.innerHTML =
      '<div class="card-media" style="background-image:url(\'' + p.images[0] + '\')"></div>' +
      '<span class="card-view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
      '<div class="card-body">' +
        '<span class="card-tag">' + categoryLabel[p.category] + '</span>' +
        '<h3>' + p.title + '</h3>' +
        '<div class="card-meta">' + p.location + ' · ' + p.year + '</div>' +
      '</div>';
    grid.appendChild(card);
  });

  var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));

  /* ============ FILTERING ============ */
  var filterBar = document.getElementById('filterBar');
  function applyFilter(filter){
    cards.forEach(function(card){
      var match = filter === 'all' || card.getAttribute('data-category') === filter;
      if(match){
        card.style.display = '';
        requestAnimationFrame(function(){ card.classList.remove('card-hidden'); });
      } else {
        card.classList.add('card-hidden');
        setTimeout(function(){ if(card.classList.contains('card-hidden')) card.style.display = 'none'; }, 400);
      }
    });
    setTimeout(function(){ if(typeof requestParallaxUpdate === 'function') requestParallaxUpdate(); }, 50);
  }
  filterBar.addEventListener('click', function(e){
    var btn = e.target.closest('.filter-chip');
    if(!btn) return;
    var filterVal = btn.getAttribute('data-filter');
    filterBar.querySelectorAll('.filter-chip').forEach(function(b){
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
    applyFilter(filterVal);
  });
  document.querySelectorAll('[data-footer-filter]').forEach(function(link){
    link.addEventListener('click', function(){
      var val = link.getAttribute('data-footer-filter');
      var target = filterBar.querySelector('[data-filter="' + val + '"]');
      if(target) target.click();
    });
  });

  /* ============ LIGHTBOX ============ */
  var lightbox = document.getElementById('lightbox');
  var lbDots = document.getElementById('lbDots');
  var lbTag = document.getElementById('lbTag');
  var lbTitle = document.getElementById('lbTitle');
  var lbDesc = document.getElementById('lbDesc');
  var lbLoc = document.getElementById('lbLoc');
  var lbYear = document.getElementById('lbYear');
  var lbArea = document.getElementById('lbArea');
  var lbDiscipline = document.getElementById('lbDiscipline');
  var lastFocused = null;
  var currentProject = null;
  var currentSlide = 0;

  function openLightbox(index){
    currentProject = projects[index];
    currentSlide = 0;
    lbTag.textContent = categoryLabel[currentProject.category];
    lbTag.style.background = currentProject.tagColor;
    lbTitle.textContent = currentProject.title;
    lbDesc.textContent = currentProject.desc;
    lbLoc.textContent = currentProject.location;
    lbYear.textContent = currentProject.year;
    lbArea.textContent = currentProject.area;
    lbDiscipline.textContent = categoryLabel[currentProject.category];

    var lbSlides = document.getElementById('lbSlides');
    var lbBackdrop = document.getElementById('lbBackdrop');
    lbSlides.innerHTML = '';
    lbDots.innerHTML = '';
    if(lbBackdrop && currentProject.images[0]){
      lbBackdrop.style.backgroundImage = "url('" + currentProject.images[0] + "')";
    }
    currentProject.images.forEach(function(src, i){
      var slide = document.createElement('div');
      slide.className = 'lb-slide' + (i === 0 ? ' is-active' : '');
      slide.innerHTML = '<img src="' + src + '" alt="' + currentProject.title + ' Image ' + (i+1) + '" loading="eager">';
      lbSlides.appendChild(slide);
      var dot = document.createElement('button');
      dot.className = 'lb-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Image ' + (i+1));
      dot.addEventListener('click', function(){ goToLbSlide(i); });
      lbDots.appendChild(dot);
    });

    lastFocused = document.activeElement;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose').focus();
  }
  function closeLightbox(){
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }
  function goToLbSlide(i){
    var slides = document.getElementById('lbSlides').querySelectorAll('.lb-slide');
    var dots = lbDots.querySelectorAll('button');
    var lbBackdrop = document.getElementById('lbBackdrop');
    if(!slides.length) return;
    currentSlide = (i + slides.length) % slides.length;
    slides.forEach(function(s, idx){ s.classList.toggle('is-active', idx === currentSlide); });
    dots.forEach(function(d, idx){ d.classList.toggle('is-active', idx === currentSlide); });
    if(lbBackdrop && currentProject && currentProject.images[currentSlide]){
      lbBackdrop.style.backgroundImage = "url('" + currentProject.images[currentSlide] + "')";
    }
  }

  cards.forEach(function(card){
    card.addEventListener('click', function(){ openLightbox(Number(card.getAttribute('data-index'))); });
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLightbox(Number(card.getAttribute('data-index'))); }
    });
  });
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', function(){ goToLbSlide(currentSlide - 1); });
  document.getElementById('lbNext').addEventListener('click', function(){ goToLbSlide(currentSlide + 1); });
  lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('is-open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') goToLbSlide(currentSlide - 1);
    if(e.key === 'ArrowRight') goToLbSlide(currentSlide + 1);
  });
