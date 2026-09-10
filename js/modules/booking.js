/* ============ TOAST NOTIFICATIONS ============ */
  function showToast(type, title, message, duration){
    var container = document.getElementById('toastContainer');
    if(!container){
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + (type || 'info');
    var iconSvg = type === 'success' 
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg>'
      : (type === 'error' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M18 6L6 18M6 6l12 12"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>');

    toast.innerHTML = ''
      + '<div class="toast-icon">' + iconSvg + '</div>'
      + '<div class="toast-body"><h5>' + title + '</h5><p>' + message + '</p></div>'
      + '<div class="toast-progress" style="transition: transform ' + (duration || 4000) + 'ms linear; transform: scaleX(0);"></div>';

    container.appendChild(toast);
    void toast.offsetWidth;
    toast.classList.add('is-visible');
    var progressEl = toast.querySelector('.toast-progress');
    if(progressEl) progressEl.style.transform = 'scaleX(1)';

    setTimeout(function(){
      toast.classList.remove('is-visible');
      setTimeout(function(){ toast.remove(); }, 400);
    }, duration || 4000);
  }

  /* ============ CONTACT / BOOKING TABS & SCHEDULER ============ */
  var tabMessage = document.getElementById('tabMessage');
  var tabBooking = document.getElementById('tabBooking');
  var contactForm = document.getElementById('contactForm');
  var bookingForm = document.getElementById('bookingForm');
  var contactConfirm = document.getElementById('contactConfirm');
  var bookingConfirm = document.getElementById('bookingConfirm');
  var dateSlots = document.getElementById('dateSlots');
  var bDateInput = document.getElementById('bDate');
  var btnNewMessage = document.getElementById('btnNewMessage');
  var btnReschedule = document.getElementById('btnReschedule');
  var btnCancelReschedule = document.getElementById('btnCancelReschedule');
  var bookingSubmitLabel = document.getElementById('bookingSubmitLabel');

  var currentContactTab = 'message'; // 'message' or 'booking'
  var messageSent = false;
  var consultationBooked = false;
  var bookedData = null;

  function updateContactView(){
    if(currentContactTab === 'message'){
      tabMessage.classList.add('is-active');
      tabBooking.classList.remove('is-active');

      // Hide booking elements
      if(bookingForm) bookingForm.classList.remove('is-active');
      if(bookingConfirm) bookingConfirm.classList.remove('is-visible');

      // Show either message form or message confirmation
      if(messageSent){
        if(contactForm) contactForm.classList.add('is-hidden');
        if(contactConfirm) contactConfirm.classList.add('is-visible');
      } else {
        if(contactForm) contactForm.classList.remove('is-hidden');
        if(contactConfirm) contactConfirm.classList.remove('is-visible');
      }
    } else { // 'booking'
      tabBooking.classList.add('is-active');
      tabMessage.classList.remove('is-active');

      // Hide message elements
      if(contactForm) contactForm.classList.add('is-hidden');
      if(contactConfirm) contactConfirm.classList.remove('is-visible');

      // Show either booking form or booking confirmation
      if(consultationBooked){
        if(bookingForm) bookingForm.classList.remove('is-active');
        if(bookingConfirm){
          bookingConfirm.classList.add('is-visible');
          var bTitle = document.getElementById('bookingConfirmTitle');
          var bDesc = document.getElementById('bookingConfirmDesc');
          var bDetails = document.getElementById('bookingConfirmDetails');
          if(bTitle) bTitle.textContent = 'Consultation Booked!';
          if(bDesc && bookedData) bDesc.textContent = 'Thank you, ' + bookedData.name + '. Your consultation appointment has been scheduled and confirmed.';
          if(bDetails && bookedData){
            bDetails.innerHTML = '<div><span>Date</span><b>' + bookedData.date + '</b></div>'
              + '<div><span>Time</span><b>' + bookedData.time + '</b></div>'
              + '<div><span>Type</span><b>' + bookedData.mode + '</b></div>'
              + '<div><span>Email</span><b>' + bookedData.email + '</b></div>';
          }
        }
      } else {
        if(bookingForm) bookingForm.classList.add('is-active');
        if(bookingConfirm) bookingConfirm.classList.remove('is-visible');
      }
    }
  }

  if(tabMessage && tabBooking){
    tabMessage.addEventListener('click', function(){
      currentContactTab = 'message';
      updateContactView();
    });
    tabBooking.addEventListener('click', function(){
      currentContactTab = 'booking';
      updateContactView();
    });
  }

  if(btnNewMessage){
    btnNewMessage.addEventListener('click', function(){
      messageSent = false;
      updateContactView();
    });
  }

  // Reschedule: Prefills existing booking details & shows Cancel button
  if(btnReschedule){
    btnReschedule.addEventListener('click', function(){
      if(bookedData){
        var bName = document.getElementById('bName');
        var bEmail = document.getElementById('bEmail');
        var bNotes = document.getElementById('bNotes');
        var bTimeInput = document.getElementById('bTime');
        var bModeInput = document.getElementById('bMode');

        if(bName) bName.value = bookedData.name;
        if(bEmail) bEmail.value = bookedData.email;
        if(bNotes) bNotes.value = bookedData.notes || '';
        if(bDateInput) bDateInput.value = bookedData.date;
        if(bTimeInput) bTimeInput.value = bookedData.time;
        if(bModeInput) bModeInput.value = bookedData.mode;

        // Select the matching date button if present
        if(dateSlots){
          dateSlots.querySelectorAll('.slot-btn').forEach(function(b){
            var match = b.getAttribute('data-val') === bookedData.date;
            b.classList.toggle('is-selected', match);
          });
        }
        // Select matching time slot
        document.querySelectorAll('#timeSlots .slot-btn').forEach(function(b){
          var match = b.getAttribute('data-time') === bookedData.time;
          b.classList.toggle('is-selected', match);
        });
        // Select matching mode slot
        document.querySelectorAll('#modeSlots .slot-btn').forEach(function(b){
          var match = b.getAttribute('data-mode') === bookedData.mode;
          b.classList.toggle('is-selected', match);
        });

        // Show the Cancel option & adjust label
        if(btnCancelReschedule) btnCancelReschedule.style.display = 'inline-block';
        if(bookingSubmitLabel) bookingSubmitLabel.textContent = 'Update & Confirm Booking';
      }

      consultationBooked = false;
      updateContactView();
    });
  }

  // Cancel Reschedule: Keeps existing booking without losing any information
  if(btnCancelReschedule){
    btnCancelReschedule.addEventListener('click', function(){
      if(bookedData){
        consultationBooked = true;
        if(btnCancelReschedule) btnCancelReschedule.style.display = 'none';
        if(bookingSubmitLabel) bookingSubmitLabel.textContent = 'Confirm & Book Consultation';
        updateContactView();
        showToast('info', 'Booking Kept', 'Your existing consultation schedule remains confirmed.');
      }
    });
  }

  // Populate next 5 available business dates
  if(dateSlots){
    var dates = [];
    var curr = new Date();
    while(dates.length < 5){
      curr.setDate(curr.getDate() + 1);
      var day = curr.getDay();
      if(day !== 0 && day !== 6){ // Skip weekends
        var label = curr.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
        var val = curr.toISOString().split('T')[0];
        dates.push({ label: label, val: val });
      }
    }
    dateSlots.innerHTML = '';
    dates.forEach(function(d, idx){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-btn' + (idx === 0 ? ' is-selected' : '');
      btn.textContent = d.label;
      btn.setAttribute('data-val', d.val);
      btn.addEventListener('click', function(){
        dateSlots.querySelectorAll('.slot-btn').forEach(function(b){ b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        bDateInput.value = d.val;
        validateField(bDateInput.parentElement);
      });
      dateSlots.appendChild(btn);
    });
    if(dates.length > 0) bDateInput.value = dates[0].val;
  }

  // Time & Mode slot selection
  document.querySelectorAll('#timeSlots .slot-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('#timeSlots .slot-btn').forEach(function(b){ b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      document.getElementById('bTime').value = btn.getAttribute('data-time');
    });
  });
  document.querySelectorAll('#modeSlots .slot-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('#modeSlots .slot-btn').forEach(function(b){ b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      document.getElementById('bMode').value = btn.getAttribute('data-mode');
    });
  });

  // Real-time Field Validation Helper
  function validateField(fieldContainer){
    var input = fieldContainer.querySelector('input, textarea');
    if(!input) return true;
    var isValid = input.checkValidity();
    if(input.id === 'fMessage' || input.id === 'bNotes'){
      if(input.required && input.value.trim().length < 10) isValid = false;
    }
    if(input.type === 'email' && input.value){
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(input.value)) isValid = false;
    }
    if(isValid){
      fieldContainer.classList.remove('is-invalid');
      if(input.value.length > 0) fieldContainer.classList.add('is-valid');
    } else {
      fieldContainer.classList.remove('is-valid');
      if(input.value.length > 0) fieldContainer.classList.add('is-invalid');
    }
    return isValid;
  }

  document.querySelectorAll('.field input, .field textarea').forEach(function(input){
    input.addEventListener('blur', function(){ validateField(input.parentElement); });
    input.addEventListener('input', function(){
      if(input.parentElement.classList.contains('is-invalid')){
        validateField(input.parentElement);
      }
    });
  });

  /* ============ CONTACT FORM SUBMIT ============ */
  if(contactForm){
    var formSubmit = contactForm.querySelector('button[type="submit"]');
    var formSubmitLabel = formSubmit ? formSubmit.querySelector('.btn-label') : null;
    var formEndpoint = contactForm.getAttribute('data-endpoint');

    contactForm.addEventListener('submit', async function(e){
      e.preventDefault();
      var fieldsValid = true;
      contactForm.querySelectorAll('.field').forEach(function(f){
        if(!validateField(f)) fieldsValid = false;
      });
      if(!fieldsValid || !contactForm.checkValidity()){
        showToast('error', 'Form Incomplete', 'Please check highlighted fields and try again.');
        return;
      }
      var fields = new FormData(contactForm);
      var enquiry = {
        name: fields.get('name'),
        email: fields.get('email'),
        projectType: fields.get('projectType'),
        message: fields.get('message'),
        website: fields.get('website')
      };
      if(formSubmit) {
        formSubmit.disabled = true;
        formSubmit.setAttribute('aria-busy', 'true');
      }
      if(formSubmitLabel) formSubmitLabel.textContent = 'Sending…';
      showToast('info', 'Sending Message', 'Connecting with Sthhapatya Studio...');
      try {
        await fetch(formEndpoint, {
          method:'POST',
          mode:'no-cors',
          headers:{'Content-Type':'text/plain;charset=utf-8'},
          body:JSON.stringify(enquiry)
        });
        contactForm.reset();
        messageSent = true;
        updateContactView();
        showToast('success', 'Message Sent!', 'We reply to every inquiry within two business days.');
      } catch(err) {
        showToast('error', 'Submission Failed', 'Could not send message. Please email hello@sthhapatya.com directly.');
      } finally {
        if(formSubmit) {
          formSubmit.disabled = false;
          formSubmit.removeAttribute('aria-busy');
        }
        if(formSubmitLabel) formSubmitLabel.textContent = 'Send Message';
      }
    });
  }

  // Booking Form Submit (Supports initial booking & reschedule updates)
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      var bName = document.getElementById('bName');
      var bEmail = document.getElementById('bEmail');
      var bDate = document.getElementById('bDate');
      var bTime = document.getElementById('bTime');
      var bMode = document.getElementById('bMode');
      var bNotes = document.getElementById('bNotes');

      var fieldsValid = true;
      bookingForm.querySelectorAll('.field').forEach(function(f){
        if(!validateField(f)) fieldsValid = false;
      });

      if(!fieldsValid || !bName.value || !bEmail.value || !bDate.value){
        showToast('error', 'Booking Incomplete', 'Please fill in required booking details.');
        return;
      }

      var isUpdate = !!bookedData;
      bookedData = {
        name: bName.value.trim(),
        email: bEmail.value.trim(),
        date: bDate.value,
        time: bTime ? bTime.value : '10:00 AM',
        mode: bMode ? bMode.value : 'Virtual Video Call',
        notes: bNotes ? bNotes.value.trim() : ''
      };
      consultationBooked = true;
      if(btnCancelReschedule) btnCancelReschedule.style.display = 'none';
      if(bookingSubmitLabel) bookingSubmitLabel.textContent = 'Confirm & Book Consultation';
      bookingForm.reset();
      updateContactView();
      showToast('success', isUpdate ? 'Booking Updated' : 'Consultation Confirmed', 'A confirmation has been scheduled for ' + bookedData.date + ' at ' + bookedData.time + '.');
    });
  }
