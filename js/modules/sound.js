/* ============ ARCHITECTURAL SOUND DESIGN ENGINE (WEB AUDIO API) ============ */
  var SoundEngine = (function(){
    var ctx = null;
    var isAmbientPlaying = false;
    var ambientGain = null;
    var ambientNodes = [];

    function getAudioContext() {
      if (!ctx) {
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          ctx = new AudioCtx();
        }
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(function(){});
      }
      return ctx;
    }

    // Micro-sound: Hover -> Soft Drafting Mechanical Tick
    function playHoverTick() {
      if (reduceMotion) return;
      try {
        var audio = getAudioContext();
        if (!audio || typeof audio.createOscillator !== 'function') return;

        var now = audio.currentTime;
        var osc = audio.createOscillator();
        var gain = audio.createGain();
        var filter = audio.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(2600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.012);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2200, now);
        filter.Q.setValueAtTime(3.5, now);

        gain.gain.setValueAtTime(0.028, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audio.destination);

        osc.start(now);
        osc.stop(now + 0.015);
      } catch(e) {}
    }

    // Micro-sound: Transition -> Subtle Sweeping Spatial Whoosh
    function playTransitionWhoosh() {
      if (reduceMotion) return;
      try {
        var audio = getAudioContext();
        if (!audio || typeof audio.createBuffer !== 'function') return;

        var now = audio.currentTime;
        var bufferSize = Math.floor(audio.sampleRate * 0.22);
        var buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
        var data = buffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        var noise = audio.createBufferSource();
        noise.buffer = buffer;

        var filter = audio.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(320, now);
        filter.frequency.exponentialRampToValueAtTime(980, now + 0.1);
        filter.frequency.exponentialRampToValueAtTime(240, now + 0.22);
        filter.Q.setValueAtTime(2.2, now);

        var gain = audio.createGain();
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.045, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audio.destination);

        noise.start(now);
        noise.stop(now + 0.23);
      } catch(e) {}
    }

    // Soft Ambient Architectural Drone (Warm Harmonic Chords)
    function startAmbientDrone() {
      try {
        var audio = getAudioContext();
        if (!audio || typeof audio.createOscillator !== 'function') return;

        stopAmbientDrone();

        var now = audio.currentTime;
        ambientGain = audio.createGain();
        ambientGain.gain.setValueAtTime(0.0001, now);
        ambientGain.gain.linearRampToValueAtTime(0.038, now + 1.8);
        ambientGain.connect(audio.destination);

        var freqs = [110, 164.81, 220, 329.63];
        freqs.forEach(function(freq, idx) {
          var osc = audio.createOscillator();
          var oscGain = audio.createGain();
          var filter = audio.createBiquadFilter();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), now);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(380 + idx * 80, now);
          filter.Q.setValueAtTime(1.2, now);

          oscGain.gain.setValueAtTime(0.25 / (idx + 1), now);

          osc.connect(filter);
          filter.connect(oscGain);
          oscGain.connect(ambientGain);

          osc.start(now);
          ambientNodes.push(osc);
        });

        isAmbientPlaying = true;
        updateSoundUI(true);
      } catch(e) {}
    }

    function stopAmbientDrone() {
      try {
        if (ambientGain && ctx) {
          var now = ctx.currentTime;
          ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
          setTimeout(function() {
            ambientNodes.forEach(function(n) { try { n.stop(); } catch(e){} });
            ambientNodes = [];
            ambientGain = null;
          }, 850);
        }
        isAmbientPlaying = false;
        updateSoundUI(false);
      } catch(e) {}
    }

    function toggleAmbientSound() {
      if (isAmbientPlaying) {
        stopAmbientDrone();
        try { localStorage.setItem('sthhapatya-ambient-sound', 'muted'); } catch(e){}
      } else {
        startAmbientDrone();
        playTransitionWhoosh();
        try { localStorage.setItem('sthhapatya-ambient-sound', 'playing'); } catch(e){}
      }
    }

    function updateSoundUI(active) {
      var btn = document.getElementById('soundToggle');
      var label = document.getElementById('soundToggleLabel');
      if (btn) {
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      }
      if (label) {
        label.textContent = active ? 'Ambient Sound: ON' : 'Ambient Sound: OFF';
      }
    }

    // Micro-sound: Click Pop -> Tactile Crisp Acoustic Pop
    function playClickPop() {
      if (reduceMotion) return;
      try {
        var audio = getAudioContext();
        if (!audio || typeof audio.createOscillator !== 'function') return;

        var now = audio.currentTime;
        var osc = audio.createOscillator();
        var gain = audio.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.035);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

        osc.connect(gain);
        gain.connect(audio.destination);

        osc.start(now);
        osc.stop(now + 0.04);
      } catch(e) {}
    }

    // Micro-sound: Soft Click -> Subtle Mechanical Snap
    function playClickSoft() {
      if (reduceMotion) return;
      try {
        var audio = getAudioContext();
        if (!audio || typeof audio.createOscillator !== 'function') return;

        var now = audio.currentTime;
        var osc = audio.createOscillator();
        var gain = audio.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.02);

        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

        osc.connect(gain);
        gain.connect(audio.destination);

        osc.start(now);
        osc.stop(now + 0.025);
      } catch(e) {}
    }

    return {
      playHoverTick: playHoverTick,
      playClickPop: playClickPop,
      playClickSoft: playClickSoft,
      playTransitionWhoosh: playTransitionWhoosh,
      toggleAmbientSound: toggleAmbientSound,
      isAmbientPlaying: function() { return isAmbientPlaying; }
    };
  })();

  // Sound Toggle Listener
  var soundToggleBtn = document.getElementById('soundToggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      SoundEngine.toggleAmbientSound();
    });
  }

  // Global Micro-Sound Hover Listener (Buttons, Cards, Links, Filters)
  var interactiveAudioSelector = 'a, button, .project-card, .logo-card, .filter-chip, .slot-btn, .smart-nav-item, .hero-arrow, .compare-arrow, .compare-range';
  document.addEventListener('mouseover', function(e) {
    var target = e.target.closest(interactiveAudioSelector);
    if (target && !target.dataset.audioHovered) {
      SoundEngine.playHoverTick();
      target.dataset.audioHovered = 'true';
      setTimeout(function() { delete target.dataset.audioHovered; }, 120);
    }
  });

window.SoundEngine = SoundEngine;
