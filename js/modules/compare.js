/* ============ RENDER / REALITY COMPARE SLIDER ============ */
  var compareItems = [
    {
      type:"pair",
      title:"Master Bedroom Suite",
      subtitle:"Residential Interior",
      rendered:"images/bedroom-rendered.jpg",
      after:"images/bedroom-actual.jpg"
    },
    {
      type:"triplet",
      title:"Window Seat Bedroom",
      subtitle:"Residential Interior",
      original:"images/bedroom2-original.jpg",
      rendered:"images/bedroom2-rendered.jpg",
      after:"images/bedroom2-actual.jpg"
    }
  ];
  var compareIndex = 0;
  var compareStage = document.getElementById('compareStage');
  var compareCaptionText = document.getElementById('compareCaptionText');
  var compareCount = document.getElementById('compareCount');
  var comparePrev = document.getElementById('comparePrev');
  var compareNext = document.getElementById('compareNext');

  var compareShowcase = document.getElementById('compareShowcase');
  var guidePairCard = document.getElementById('guidePairCard');
  var guideTripletCard = document.getElementById('guideTripletCard');
  var btnGoToTriplet = document.getElementById('btnGoToTriplet');
  var btnGoToPair = document.getElementById('btnGoToPair');

  var updateGuideCards = function(idx){
    var isTriplet = compareItems[idx] && compareItems[idx].type === 'triplet';
    if(compareShowcase){
      compareShowcase.setAttribute('data-mode', isTriplet ? 'triplet' : 'pair');
    }
    if(guidePairCard && guideTripletCard){
      if(!isTriplet){
        guidePairCard.classList.add('is-active-guide');
        guideTripletCard.classList.remove('is-active-guide');
      } else {
        guideTripletCard.classList.add('is-active-guide');
        guidePairCard.classList.remove('is-active-guide');
      }
    }
  };

  var sliderBlockHTML = function(uid, item, isTriplet){
    if(isTriplet){
      return ''
        + '<div class="compare-slider is-triplet-slider" id="' + uid + '" style="--pos1:33%; --pos2:66%; touch-action:none;">'
        +   '<div class="compare-media compare-layer-completed" style="background-image:url(\'' + item.after + '\');"></div>'
        +   '<div class="compare-media compare-layer-render" style="background-image:url(\'' + item.rendered + '\');"></div>'
        +   '<div class="compare-media compare-layer-original" style="background-image:url(\'' + item.original + '\');"></div>'
        +   '<span class="compare-tag triplet-tag-orig" id="' + uid + '-tagOrig" title="Tap to expand Raw Site">🏚️ 1. Raw Site</span>'
        +   '<span class="compare-tag triplet-tag-render" id="' + uid + '-tagRender" title="Tap to center 3D Design Plan">🎨 2. 3D Design Plan</span>'
        +   '<span class="compare-tag triplet-tag-comp" id="' + uid + '-tagComp" title="Tap to expand Real Home">📸 3. Real Home</span>'
        +   '<div class="compare-mode-badge" id="' + uid + '-modeBadge">🪄 3-Step Evolution • Drag Handles 1 &amp; 2</div>'
        +   '<div class="compare-handle compare-handle-1" id="' + uid + '-handle1" aria-hidden="true">'
        +     '<span class="compare-handle-knob handle-knob-1" title="Handle 1: Raw Site vs 3D Plan">'
        +       '<span class="knob-num-badge">1</span>'
        +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>'
        +       '<span class="compare-knob-grip"></span>'
        +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
        +     '</span>'
        +   '</div>'
        +   '<div class="compare-handle compare-handle-2" id="' + uid + '-handle2" aria-hidden="true">'
        +     '<span class="compare-handle-knob handle-knob-2" title="Handle 2: 3D Plan vs Real Home">'
        +       '<span class="knob-num-badge">2</span>'
        +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>'
        +       '<span class="compare-knob-grip"></span>'
        +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
        +     '</span>'
        +   '</div>'
        + '</div>';
    }

    return ''
      + '<div class="compare-slider" id="' + uid + '" style="--pos:50%;">'
      +   '<div class="compare-media compare-after" style="background-image:url(\'' + item.after + '\');"></div>'
      +   '<div class="compare-media compare-before" style="background-image:url(\'' + item.rendered + '\');"></div>'
      +   '<span class="compare-tag compare-tag-before" id="' + uid + '-tagBefore" title="Tap to reveal 3D Concept Plan">🎨 3D Concept Plan</span>'
      +   '<span class="compare-tag compare-tag-after" id="' + uid + '-tagAfter" title="Tap to reveal Real Built Home">📸 Real Built Home</span>'
      +   '<div class="compare-mode-badge" id="' + uid + '-modeBadge">⚡ 2-Stage Comparison • Drag Slider or Tap Tags</div>'
      +   '<div class="compare-handle" aria-hidden="true">'
      +     '<span class="compare-handle-knob">'
      +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>'
      +       '<span class="compare-knob-grip"></span>'
      +       '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'
      +     '</span>'
      +   '</div>'
      +   '<input type="range" class="compare-range" id="' + uid + '-range" min="0" max="100" value="50" step="0.1" aria-label="Drag to compare the 3D concept and completed room">'
      + '</div>';
  };

  var activeSliderApi = null;

  var bindSlider = function(uid, item){
    var slider = document.getElementById(uid);
    if(!slider) return;

    var isTriplet = item.type === 'triplet';
    var sweepRaf = null;
    var sweepTimeout = null;
    var isDragging = false;

    var stopSweep = function(){
      if(sweepRaf){
        cancelAnimationFrame(sweepRaf);
        sweepRaf = null;
      }
      if(sweepTimeout){
        clearTimeout(sweepTimeout);
        sweepTimeout = null;
      }
    };

    if(isTriplet){
      var tagOrig = document.getElementById(uid + '-tagOrig');
      var tagRender = document.getElementById(uid + '-tagRender');
      var tagComp = document.getElementById(uid + '-tagComp');

      var pos1 = 33;
      var pos2 = 66;
      var activeHandle = null;

      var setTripletPos = function(p1, p2){
        pos1 = Math.max(4, Math.min(88, p1));
        pos2 = Math.max(pos1 + 5, Math.min(96, p2));
        slider.style.setProperty('--pos1', pos1 + '%');
        slider.style.setProperty('--pos2', pos2 + '%');
      };

      setTripletPos(33, 66);

      // Smooth slider transition helper for triplet
      var animateTripletTo = function(t1, t2, onComplete){
        stopSweep();
        var s1 = pos1;
        var s2 = pos2;
        var startTime = null;
        var duration = 420;

        function step(now){
          if(!startTime) startTime = now;
          var p = Math.min((now - startTime) / duration, 1);
          var ease = 1 - Math.pow(1 - p, 3);
          var cur1 = s1 + (t1 - s1) * ease;
          var cur2 = s2 + (t2 - s2) * ease;
          setTripletPos(cur1, cur2);
          if(p < 1){
            sweepRaf = requestAnimationFrame(step);
          } else {
            sweepRaf = null;
            if(typeof onComplete === 'function') onComplete();
          }
        }
        sweepRaf = requestAnimationFrame(step);
      };

      // Tag clicks
      if(tagOrig) tagOrig.addEventListener('click', function(e){ e.stopPropagation(); animateTripletTo(75, 88); });
      if(tagRender) tagRender.addEventListener('click', function(e){ e.stopPropagation(); animateTripletTo(15, 85); });
      if(tagComp) tagComp.addEventListener('click', function(e){ e.stopPropagation(); animateTripletTo(8, 20); });

      // Calculate percentage from pointer event
      var getPctFromEvent = function(e){
        var rect = slider.getBoundingClientRect();
        var clientX = e.clientX;
        if(e.touches && e.touches.length > 0){
          clientX = e.touches[0].clientX;
        }
        return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      };

      var onPointerDown = function(e){
        if(e.target.closest('.compare-tag') || e.target.closest('.compare-mode-badge')) return;

        var pct = getPctFromEvent(e);
        var dist1 = Math.abs(pct - pos1);
        var dist2 = Math.abs(pct - pos2);

        activeHandle = dist1 <= dist2 ? 1 : 2;
        isDragging = true;
        stopSweep();

        if(activeHandle === 1){
          if(pct > pos2 - 5){
            setTripletPos(pct, Math.min(96, pct + 5));
          } else {
            setTripletPos(pct, pos2);
          }
        } else {
          if(pct < pos1 + 5){
            setTripletPos(Math.max(4, pct - 5), pct);
          } else {
            setTripletPos(pos1, pct);
          }
        }

        if(e.pointerId && slider.setPointerCapture){
          try { slider.setPointerCapture(e.pointerId); } catch(err){}
        }
        e.preventDefault();
      };

      var onPointerMove = function(e){
        if(!isDragging || !activeHandle) return;
        var pct = getPctFromEvent(e);

        if(activeHandle === 1){
          if(pct > pos2 - 5){
            setTripletPos(pct, Math.min(96, pct + 5));
          } else {
            setTripletPos(pct, pos2);
          }
        } else {
          if(pct < pos1 + 5){
            setTripletPos(Math.max(4, pct - 5), pct);
          } else {
            setTripletPos(pos1, pct);
          }
        }
      };

      var onPointerUp = function(e){
        if(isDragging){
          isDragging = false;
          activeHandle = null;
          if(e.pointerId && slider.releasePointerCapture){
            try { slider.releasePointerCapture(e.pointerId); } catch(err){}
          }
        }
      };

      slider.addEventListener('pointerdown', onPointerDown);
      slider.addEventListener('pointermove', onPointerMove);
      slider.addEventListener('pointerup', onPointerUp);
      slider.addEventListener('pointercancel', onPointerUp);

      // Triplet auto-sweep demonstration (synchronous 3-way split expansion)
      var triggerAutoSweep = function(){
        var isReduced = typeof reduceMotion !== 'undefined' ? reduceMotion : (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        if(isReduced || isDragging) return;

        stopSweep();

        sweepTimeout = setTimeout(function(){
          if(isDragging) return;
          var start1 = 33;
          var start2 = 66;
          var startT = null;
          var duration = 2200; // 2.2s synchronized sweep

          function sweepStep(t){
            if(isDragging){ stopSweep(); return; }
            if(!startT) startT = t;
            var p = (t - startT) / duration;
            if(p < 1){
              // Handle 1 sweeps left to 16%, right to 44%, back to 33%
              var offset1 = 17 * Math.sin(p * Math.PI * 2);
              var cur1 = start1 - offset1;
              // Handle 2 sweeps right to 84%, left to 56%, back to 66%
              var offset2 = 18 * Math.sin(p * Math.PI * 2);
              var cur2 = start2 + offset2;
              setTripletPos(cur1, cur2);
              sweepRaf = requestAnimationFrame(sweepStep);
            } else {
              setTripletPos(start1, start2);
              sweepRaf = null;
            }
          }
          sweepRaf = requestAnimationFrame(sweepStep);
        }, 300);
      };

      activeSliderApi = {
        goTo: function(targetStage, targetPos){
          if(targetStage === 0 && targetPos === 100){
            animateTripletTo(75, 88); // Show Original space
          } else if(targetStage === 0 && targetPos === 0){
            animateTripletTo(15, 85); // Show Concept render
          } else if(targetStage === 1 && targetPos === 0){
            animateTripletTo(8, 20); // Show Completed space
          } else {
            animateTripletTo(33, 66);
          }
        },
        animateTo: function(t){ animateTripletTo(t, Math.min(95, t + 33)); },
        triggerSweep: triggerAutoSweep,
        stopSweep: stopSweep
      };

    } else {
      // PAIR MODE (2-IMAGE)
      var range = document.getElementById(uid + '-range');
      var tagBeforeEl = document.getElementById(uid + '-tagBefore');
      var tagAfterEl = document.getElementById(uid + '-tagAfter');

      var setPos = function(v){ slider.style.setProperty('--pos', v + '%'); };
      setPos(50);

      var animateSliderTo = function(targetVal, onComplete){
        stopSweep();
        var startVal = parseFloat(range.value) || 50;
        var startTime = null;
        var duration = 400;
        function animStep(now){
          if(!startTime) startTime = now;
          var p = Math.min((now - startTime) / duration, 1);
          var ease = 1 - Math.pow(1 - p, 3);
          var current = startVal + (targetVal - startVal) * ease;
          range.value = current;
          setPos(current);
          if(p < 1){
            sweepRaf = requestAnimationFrame(animStep);
          } else {
            sweepRaf = null;
            if(typeof onComplete === 'function') onComplete();
          }
        }
        sweepRaf = requestAnimationFrame(animStep);
      };

      if(tagBeforeEl) tagBeforeEl.addEventListener('click', function(e){ e.stopPropagation(); animateSliderTo(100); });
      if(tagAfterEl) tagAfterEl.addEventListener('click', function(e){ e.stopPropagation(); animateSliderTo(0); });

      var onUserPointerDown = function(){
        isDragging = true;
        stopSweep();
      };
      var onUserPointerUp = function(){
        isDragging = false;
      };

      range.addEventListener('pointerdown', onUserPointerDown);
      range.addEventListener('touchstart', onUserPointerDown, { passive: true });
      range.addEventListener('mousedown', onUserPointerDown);
      slider.addEventListener('pointerdown', onUserPointerDown);

      window.addEventListener('pointerup', onUserPointerUp);
      window.addEventListener('touchend', onUserPointerUp);
      window.addEventListener('mouseup', onUserPointerUp);

      range.addEventListener('input', function(){
        setPos(parseFloat(range.value));
      });

      var triggerAutoSweep = function(){
        var isReduced = typeof reduceMotion !== 'undefined' ? reduceMotion : (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        if(isReduced || isDragging) return;

        stopSweep();

        sweepTimeout = setTimeout(function(){
          if(isDragging) return;
          var startVal = 50;
          var amplitude = 28;
          var startT = null;
          var duration = 2100;

          function sweepStep(t){
            if(isDragging){ stopSweep(); return; }
            if(!startT) startT = t;
            var p = (t - startT) / duration;
            if(p < 1){
              var offset = amplitude * Math.sin(p * Math.PI * 2);
              var current = startVal - offset;
              current = Math.max(12, Math.min(88, current));
              range.value = current;
              setPos(current);
              sweepRaf = requestAnimationFrame(sweepStep);
            } else {
              range.value = startVal;
              setPos(startVal);
              sweepRaf = null;
            }
          }
          sweepRaf = requestAnimationFrame(sweepStep);
        }, 300);
      };

      activeSliderApi = {
        goTo: function(stage, targetVal){
          animateSliderTo(targetVal);
        },
        animateTo: animateSliderTo,
        triggerSweep: triggerAutoSweep,
        stopSweep: stopSweep
      };
    }
  };

  if(compareStage){
    var pad2 = function(n){ return n < 10 ? '0' + n : '' + n; };

    var renderCompare = function(i, animate){
      var item = compareItems[i];
      var isTriplet = item.type === 'triplet';
      var apply = function(){
        compareStage.innerHTML = sliderBlockHTML('sliderA', item, isTriplet);
        bindSlider('sliderA', item);
        compareCaptionText.innerHTML = '<b>' + item.title + '</b><span>' + item.subtitle + '</span>';
        compareCount.textContent = pad2(i + 1) + ' / ' + pad2(compareItems.length);
        updateGuideCards(i);
        if(typeof refreshParallaxElements === 'function') refreshParallaxElements();
      };
      if(animate){
        compareStage.style.opacity = 0;
        setTimeout(function(){
          apply();
          compareStage.style.opacity = 1;
          // Play sweep when switching between slides
          if(activeSliderApi && typeof activeSliderApi.triggerSweep === 'function'){
            activeSliderApi.triggerSweep();
          }
        }, 260);
      } else {
        apply();
      }
    };

    renderCompare(compareIndex, false);

    if(comparePrev){
      comparePrev.addEventListener('click', function(){
        compareIndex = (compareIndex - 1 + compareItems.length) % compareItems.length;
        renderCompare(compareIndex, true);
      });
    }
    if(compareNext){
      compareNext.addEventListener('click', function(){
        compareIndex = (compareIndex + 1) % compareItems.length;
        renderCompare(compareIndex, true);
      });
    }

    if(btnGoToTriplet){
      btnGoToTriplet.addEventListener('click', function(e){
        e.stopPropagation();
        if(compareIndex !== 1){
          compareIndex = 1;
          renderCompare(compareIndex, true);
        }
      });
    }

    if(btnGoToPair){
      btnGoToPair.addEventListener('click', function(e){
        e.stopPropagation();
        if(compareIndex !== 0){
          compareIndex = 0;
          renderCompare(compareIndex, true);
        }
      });
    }

    // Direct Image Navigation from Companion Text
    var jumpToImage = function(mode, targetStage, targetSliderPos){
      var targetIndex = mode === 'pair' ? 0 : 1;
      if(compareIndex !== targetIndex){
        compareIndex = targetIndex;
        renderCompare(compareIndex, true);
        setTimeout(function(){
          if(activeSliderApi){
            activeSliderApi.goTo(targetStage, targetSliderPos);
          }
        }, 340);
      } else {
        if(activeSliderApi){
          activeSliderApi.goTo(targetStage, targetSliderPos);
        }
      }
    };

    var btnPairRender = document.getElementById('btnPairRender');
    var btnPairReality = document.getElementById('btnPairReality');
    var btnTripletOriginal = document.getElementById('btnTripletOriginal');
    var btnTripletRender = document.getElementById('btnTripletRender');
    var btnTripletCompleted = document.getElementById('btnTripletCompleted');

    if(btnPairRender){
      btnPairRender.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToImage('pair', 0, 100);
      });
    }
    if(btnPairReality){
      btnPairReality.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToImage('pair', 0, 0);
      });
    }
    if(btnTripletOriginal){
      btnTripletOriginal.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToImage('triplet', 0, 100);
      });
    }
    if(btnTripletRender){
      btnTripletRender.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToImage('triplet', 0, 0);
      });
    }
    if(btnTripletCompleted){
      btnTripletCompleted.addEventListener('click', function(e){
        e.stopPropagation();
        jumpToImage('triplet', 1, 0);
      });
    }

    /* ============ SLIDER STAGE VIEWPORT OBSERVER (PRECISE ARRIVAL DETECTION) ============ */
    var isStageInView = false;
    var lastSweepTimestamp = 0;

    var runSweepOnArrival = function(){
      var now = Date.now();
      if(now - lastSweepTimestamp < 1800) return;
      lastSweepTimestamp = now;
      if(activeSliderApi && typeof activeSliderApi.triggerSweep === 'function'){
        activeSliderApi.triggerSweep();
      }
    };

    // 1. Intersection Observer targeting the SLIDER STAGE directly
    if(compareStage && 'IntersectionObserver' in window){
      var stageObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting && entry.intersectionRatio >= 0.35){
            if(!isStageInView){
              isStageInView = true;
              runSweepOnArrival();
            }
          } else if(!entry.isIntersecting || entry.intersectionRatio < 0.1){
            // Slider stage left the viewport
            isStageInView = false;
          }
        });
      }, {
        threshold: [0, 0.1, 0.35, 0.6]
      });
      stageObserver.observe(compareStage);
    }

    // 2. High-precision Realtime Scroll Monitor on compareStage
    var checkStageViewport = function(){
      if(!compareStage) return;
      var rect = compareStage.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;

      // Slider stage is in the active eye-level viewport band
      var stageCenter = rect.top + rect.height / 2;
      var inView = (stageCenter > vh * 0.20 && stageCenter < vh * 0.82 && rect.top < vh * 0.75 && rect.bottom > vh * 0.25);

      if(inView){
        if(!isStageInView){
          isStageInView = true;
          runSweepOnArrival();
        }
      } else {
        if(rect.bottom < -40 || rect.top > vh + 40){
          isStageInView = false;
        }
      }
    };

    window.addEventListener('scroll', checkStageViewport, { passive: true });
    window.addEventListener('resize', checkStageViewport, { passive: true });

    // Expose global controller for smart navigation / header links
    window.CompareSectionController = {
      triggerSweep: function(){
        isStageInView = true;
        runSweepOnArrival();
      },
      onSectionEnter: function(){
        isStageInView = true;
        runSweepOnArrival();
      },
      onSectionLeave: function(){
        isStageInView = false;
      },
      switchTo: function(index){
        if(index >= 0 && index < compareItems.length && index !== compareIndex){
          compareIndex = index;
          renderCompare(compareIndex, true);
        } else {
          runSweepOnArrival();
        }
      }
    };
  }
