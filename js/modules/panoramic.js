/* ============ 360° CONNECTED VIRTUAL TOUR SYSTEM ============ */
  var panoTourData = {
    scene1: {
      id: 'scene1',
      title: 'Living & Grand Lounge',
      dim: '480 SQ.FT · CEILING 3.2M',
      image: 'images/360 Images/1.png',
      pitch: 0,
      yaw: 15,
      hfov: 105,
      mapX: 44,
      mapY: 52,
      hotSpots: [
        {
          pitch: -3,
          yaw: 115,
          type: 'scene',
          sceneId: 'scene2',
          targetYaw: -20,
          targetPitch: 0,
          cssClass: 'pano-portal-hotspot',
          createTooltipFunc: createPortalTooltip,
          createTooltipArgs: {
            title: 'Master Suite & Lounge',
            subtitle: 'Walk through ➔'
          }
        },
        {
          pitch: 2,
          yaw: -35,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Bespoke Millwork',
            tag: 'Detail 01',
            title: 'Fluted American White Oak & Acoustic Baffles',
            desc: 'Solid American white oak fluted slats backed by recycled acoustic felt, integrating indirect 2700K warm linear illumination.',
            spec: 'FSC-Certified Oak · 2700K CRI 98+'
          }
        },
        {
          pitch: -12,
          yaw: 15,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Spatial Architecture',
            tag: 'Detail 02',
            title: 'Seamless Micro-Cement Plinth & Lounge',
            desc: 'Monolithic continuous plinth creating low-profile spatial zoning with Belgian textured linen upholstery.',
            spec: 'Seamless Polyurethane Microcement Plinth'
          }
        },
        {
          pitch: 16,
          yaw: -80,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Fenestration',
            tag: 'Detail 03',
            title: 'Full-Height Acoustic Thermal Glazing',
            desc: 'Floor-to-ceiling ultra-slim frame glazing designed to maximize natural morning daylight while minimizing solar thermal heat gain.',
            spec: 'Double Low-E Acoustic Insulated Glass'
          }
        }
      ]
    },
    scene2: {
      id: 'scene2',
      title: 'Master Suite & Lounge',
      dim: '340 SQ.FT · CEILING 3.0M',
      image: 'images/360 Images/2.png',
      pitch: 0,
      yaw: -20,
      hfov: 105,
      mapX: 128,
      mapY: 52,
      hotSpots: [
        {
          pitch: -4,
          yaw: -158,
          type: 'scene',
          sceneId: 'scene1',
          targetYaw: 15,
          targetPitch: 0,
          cssClass: 'pano-portal-hotspot',
          createTooltipFunc: createPortalTooltip,
          createTooltipArgs: {
            title: 'Living & Grand Lounge',
            subtitle: '⬅ Return to Living'
          }
        },
        {
          pitch: 4,
          yaw: 26,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Custom Joinery',
            tag: 'Detail 01',
            title: 'Artisan Smoked Oak Wall & Nightstands',
            desc: 'Continuous smoked oak headboard with concealed magnetic wireless charging docks and brushed bronze reading fixtures.',
            spec: 'Hand-Finished Smoked Oak & Aged Brass'
          }
        },
        {
          pitch: -15,
          yaw: 68,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Soft Furnishings',
            tag: 'Detail 02',
            title: 'Hand-Tufted Organic Wool Rug',
            desc: 'Undyed New Zealand virgin wool rug woven with high pile density to create optimal acoustic dampening in private suites.',
            spec: '100% Organic Virgin Wool · High Density Pile'
          }
        },
        {
          pitch: 14,
          yaw: -70,
          type: 'info',
          cssClass: 'pano-beacon-hotspot',
          createTooltipFunc: createBeaconTooltip,
          createTooltipArgs: {
            category: 'Passive Wellness',
            tag: 'Detail 03',
            title: 'Circadian Sunlight Integration',
            desc: 'Oriented to harness soft eastward dawn light, regulating circadian rhythm while preventing glare in sleep zones.',
            spec: 'Biophilic Lighting Orientation'
          }
        }
      ]
    }
  };

  /* Custom Hotspot Builders */
  function createPortalTooltip(hotSpotDiv, args) {
    hotSpotDiv.classList.add('pano-portal-hotspot');
    var pin = document.createElement('div');
    pin.className = 'pano-portal-pin';
    pin.setAttribute('role', 'button');
    pin.setAttribute('tabindex', '0');
    pin.setAttribute('title', args.title || 'Walk through');
    pin.innerHTML = 
      '<div class="pano-portal-beacon-ring"></div>' +
      '<div class="pano-portal-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>' +
      '<div class="pano-portal-text">' +
        '<small>' + (args.subtitle || 'WALK THROUGH') + '</small>' +
        '<strong>' + (args.title || 'Next Space') + '</strong>' +
      '</div>';
    hotSpotDiv.appendChild(pin);
  }

  function createBeaconTooltip(hotSpotDiv, args) {
    hotSpotDiv.classList.add('pano-beacon-hotspot');
    var btn = document.createElement('div');
    btn.className = 'pano-beacon-btn';
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', args.title || 'Architectural Detail');
    btn.innerHTML = '<span class="pano-beacon-wave"></span><span class="pano-beacon-core"></span>';
    hotSpotDiv.appendChild(btn);

    var card = document.createElement('div');
    card.className = 'pano-beacon-card';
    card.innerHTML = 
      '<div class="pano-card-head">' +
        '<span class="pano-card-cat">' + (args.category || 'Architecture') + '</span>' +
        '<span class="pano-card-tag">' + (args.tag || '') + '</span>' +
      '</div>' +
      '<h4 class="pano-card-title">' + (args.title || '') + '</h4>' +
      '<p class="pano-card-desc">' + (args.desc || '') + '</p>' +
      (args.spec ? '<div class="pano-card-spec"><strong>Spec:</strong> ' + args.spec + '</div>' : '');
    hotSpotDiv.appendChild(card);
  }

  var panoViewerEl = document.getElementById('panoViewer');
  var panoInstance = null;
  var currentTourScene = 'scene1';
  var isAutoRotating = true;
  var fovPresets = [
    { label: 'Wide (105°)', val: 105 },
    { label: 'Natural (85°)', val: 85 },
    { label: 'Detail (60°)', val: 60 }
  ];
  var currentFovIndex = 0;

  var panoHudRoomName = document.getElementById('panoHudRoomName');
  var panoHudDim = document.getElementById('panoHudDim');
  var panoAutoRotateBtn = document.getElementById('panoAutoRotateBtn');
  var panoAutoRotateLabel = document.getElementById('panoAutoRotateLabel');
  var panoFovToggle = document.getElementById('panoFovToggle');
  var panoFovLabel = document.getElementById('panoFovLabel');
  var panoFullscreenBtn = document.getElementById('panoFullscreenBtn');
  var panoMinimapBox = document.getElementById('panoMinimapBox');
  var panoMinimapToggleBtn = document.getElementById('panoMinimapToggleBtn');
  var minimapRadarGroup = document.getElementById('minimapRadarGroup');
  var minimapRoom1 = document.getElementById('minimapRoom1');
  var minimapRoom2 = document.getElementById('minimapRoom2');
  var panoRoomTabs = document.querySelectorAll('.pano-room-tab[data-scene]');

  function syncTourUI(sceneKey) {
    currentTourScene = sceneKey;
    var data = panoTourData[sceneKey];
    if (!data) return;

    if (panoHudRoomName) panoHudRoomName.textContent = data.title;
    if (panoHudDim) panoHudDim.textContent = data.dim;

    panoRoomTabs.forEach(function(tab) {
      if (tab.getAttribute('data-scene') === sceneKey) {
        tab.classList.add('is-active');
      } else {
        tab.classList.remove('is-active');
      }
    });

    if (minimapRoom1 && minimapRoom2) {
      if (sceneKey === 'scene1') {
        minimapRoom1.classList.add('is-active');
        minimapRoom2.classList.remove('is-active');
      } else {
        minimapRoom2.classList.add('is-active');
        minimapRoom1.classList.remove('is-active');
      }
    }
  }

  function initConnectedTour() {
    if (!panoViewerEl || typeof pannellum === 'undefined') return;

    // Build pannellum configuration with native multi-scene cross-fading
    var config = {
      default: {
        firstScene: 'scene1',
        author: 'Sthhapatya Architects & Associates',
        sceneFadeDuration: 1200,
        autoLoad: true,
        autoRotate: -1.5,
        autoRotateInactivityDelay: 3500,
        compass: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: true,
        keyboardZoom: true,
        minHfov: 45,
        maxHfov: 135
      },
      scenes: {
        scene1: {
          title: panoTourData.scene1.title,
          panorama: panoTourData.scene1.image,
          pitch: panoTourData.scene1.pitch,
          yaw: panoTourData.scene1.yaw,
          hfov: panoTourData.scene1.hfov,
          hotSpots: panoTourData.scene1.hotSpots
        },
        scene2: {
          title: panoTourData.scene2.title,
          panorama: panoTourData.scene2.image,
          pitch: panoTourData.scene2.pitch,
          yaw: panoTourData.scene2.yaw,
          hfov: panoTourData.scene2.hfov,
          hotSpots: panoTourData.scene2.hotSpots
        }
      }
    };

    try {
      panoInstance = pannellum.viewer('panoViewer', config);

      panoInstance.on('scenechange', function(sceneId) {
        syncTourUI(sceneId);
      });

      panoInstance.on('load', function() {
        syncTourUI(panoInstance.getScene() || currentTourScene);
      });

      // Start continuous mini-map radar angle synchronization
      startRadarSyncLoop();
    } catch(err) {
      console.warn('Pannellum initialization:', err);
    }
  }

  /* Real-time Floor Plan Radar synchronization loop */
  function startRadarSyncLoop() {
    function updateRadar() {
      if (panoInstance && minimapRadarGroup) {
        try {
          var yaw = panoInstance.getYaw() || 0;
          var curScene = panoInstance.getScene() || currentTourScene;
          var sceneData = panoTourData[curScene] || panoTourData.scene1;
          var posX = sceneData.mapX;
          var posY = sceneData.mapY;
          // Compensate yaw angle for compass rotation
          var rotAngle = (yaw) % 360;
          minimapRadarGroup.setAttribute('transform', 'translate(' + posX + ', ' + posY + ') rotate(' + rotAngle.toFixed(1) + ')');
        } catch(e) {}
      }
      requestAnimationFrame(updateRadar);
    }
    requestAnimationFrame(updateRadar);
  }

  function switchTourScene(sceneKey) {
    if (!panoInstance) return;
    try {
      panoInstance.loadScene(sceneKey);
      syncTourUI(sceneKey);
    } catch(e) {
      console.warn('Failed to switch scene:', e);
    }
  }

  /* HUD Event Handlers */
  if (panoAutoRotateBtn) {
    panoAutoRotateBtn.addEventListener('click', function() {
      if (!panoInstance) return;
      if (isAutoRotating) {
        panoInstance.stopAutoRotate();
        isAutoRotating = false;
        panoAutoRotateBtn.classList.remove('is-active');
        if (panoAutoRotateLabel) panoAutoRotateLabel.textContent = 'Paused';
        showToast('info', 'Auto-Rotate Paused', 'You can freely explore the space with drag or touch.');
      } else {
        panoInstance.startAutoRotate(-1.5);
        isAutoRotating = true;
        panoAutoRotateBtn.classList.add('is-active');
        if (panoAutoRotateLabel) panoAutoRotateLabel.textContent = 'Auto-Spin';
      }
    });
  }

  if (panoFovToggle) {
    panoFovToggle.addEventListener('click', function() {
      if (!panoInstance) return;
      currentFovIndex = (currentFovIndex + 1) % fovPresets.length;
      var preset = fovPresets[currentFovIndex];
      panoInstance.setHfov(preset.val);
      if (panoFovLabel) panoFovLabel.textContent = preset.label;
    });
  }

  if (panoFullscreenBtn) {
    panoFullscreenBtn.addEventListener('click', function() {
      if (!panoInstance) return;
      panoInstance.toggleFullscreen();
    });
  }

  if (panoMinimapToggleBtn && panoMinimapBox) {
    panoMinimapToggleBtn.addEventListener('click', function() {
      panoMinimapBox.classList.toggle('is-collapsed');
    });
  }

  /* Room Tab Clicks */
  panoRoomTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var sceneKey = tab.getAttribute('data-scene');
      switchTourScene(sceneKey);
    });
  });

  /* Mini-map Room Polygon Clicks */
  if (minimapRoom1) {
    minimapRoom1.addEventListener('click', function() { switchTourScene('scene1'); });
    minimapRoom1.addEventListener('keydown', function(e) { if(e.key==='Enter'||e.key===' ') switchTourScene('scene1'); });
  }
  if (minimapRoom2) {
    minimapRoom2.addEventListener('click', function() { switchTourScene('scene2'); });
    minimapRoom2.addEventListener('keydown', function(e) { if(e.key==='Enter'||e.key===' ') switchTourScene('scene2'); });
  }

  // Lazy initialize when section appears
  var panoSection = document.getElementById('360-view');
  if (panoSection && 'IntersectionObserver' in window) {
    var panoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          initConnectedTour();
          panoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    panoObserver.observe(panoSection);
  } else {
    initConnectedTour();
  }
