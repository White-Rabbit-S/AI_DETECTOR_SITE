// TraceGuard - Application JavaScript
// Handles form submissions, navigation, and interactive features

// ==========================================
// REPORT FORM HANDLING
// ==========================================

// Handle contact method selection
const contactMethodSelect = document.getElementById('contactMethod');
if (contactMethodSelect) {
  contactMethodSelect.addEventListener('change', function() {
    const emailGroup = document.getElementById('emailGroup');
    const phoneGroup = document.getElementById('phoneGroup');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Reset visibility and required attributes
    emailGroup.style.display = 'none';
    phoneGroup.style.display = 'none';
    emailInput.removeAttribute('required');
    phoneInput.removeAttribute('required');

    // Show appropriate fields based on selection
    if (this.value === 'email' || this.value === 'both') {
      emailGroup.style.display = 'block';
      emailInput.setAttribute('required', 'required');
    }
    if (this.value === 'phone' || this.value === 'both') {
      phoneGroup.style.display = 'block';
      phoneInput.setAttribute('required', 'required');
    }
  });
}

// Handle file upload display
const fileInput = document.getElementById('fileInput');
if (fileInput) {
  fileInput.addEventListener('change', function() {
    const fileList = document.getElementById('fileList');
    if (this.files.length > 0) {
      let fileNames = '<strong>Selected files:</strong><br>';
      for (let i = 0; i < this.files.length; i++) {
        const fileSizeMB = (this.files[i].size / (1024 * 1024)).toFixed(2);
        fileNames += `• ${this.files[i].name} (${fileSizeMB} MB)<br>`;
      }
      fileList.innerHTML = fileNames;
    } else {
      fileList.innerHTML = '';
    }
  });
}

// Handle report form submission
const reportForm = document.getElementById('reportForm');
if (reportForm) {
  reportForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    
    // Hide the form
    reportForm.style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // In production, this would submit to a secure backend
    console.log('Report submitted securely');
    
    // Optional: Redirect after a delay
    setTimeout(() => {
      // window.location.href = 'index.html';
    }, 5000);
  });
}

// ==========================================
// LOGIN FORM HANDLING
// ==========================================

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // TEST MODE: No validation needed - direct login
    // Store session (in production, use secure tokens)
    sessionStorage.setItem('authenticated', 'true');
    sessionStorage.setItem('username', 'investigator');
    
    // Redirect to dashboard immediately
    window.location.href = 'dashboard.html';
  });
}

// ==========================================
// AUTHENTICATION CHECK
// ==========================================

// TEST MODE: Authentication checks disabled
// All pages are accessible without login
function checkAuthentication() {
  // No authentication required for testing
  return true;
}

// Run authentication check on page load (currently disabled)
// document.addEventListener('DOMContentLoaded', checkAuthentication);

// ==========================================
// CASE STATUS UPDATE
// ==========================================

const caseStatusSelect = document.getElementById('caseStatus');
if (caseStatusSelect) {
  caseStatusSelect.addEventListener('change', function() {
    // Show a brief confirmation
    const originalBg = this.style.background;
    this.style.background = '#10B981';
    this.style.color = 'white';
    
    setTimeout(() => {
      this.style.background = originalBg;
      this.style.color = '';
    }, 1000);
    
    // In production, this would update the backend
    console.log('Case status updated to:', this.value);
  });
}

// ==========================================
// INVESTIGATOR NOTES
// ==========================================

const notesForm = document.getElementById('notesForm');
if (notesForm) {
  notesForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const noteTitle = document.getElementById('noteTitle').value;
    const noteContent = document.getElementById('noteContent').value;
    
    if (noteTitle && noteContent) {
      // Create new note element
      const noteDiv = document.createElement('div');
      noteDiv.style.cssText = 'background: var(--soft-white); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;';
      
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      noteDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
          <h4 style="margin: 0; font-size: 1rem; color: var(--navy);">${noteTitle}</h4>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${dateStr} - ${timeStr}</span>
        </div>
        <p style="margin: 0; color: var(--text-dark);">${noteContent}</p>
      `;
      
      // Insert before the form
      notesForm.parentNode.insertBefore(noteDiv, notesForm);
      
      // Clear form
      document.getElementById('noteTitle').value = '';
      document.getElementById('noteContent').value = '';
      
      // Show brief success feedback
      const submitBtn = notesForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '✓ Note Saved';
      submitBtn.style.background = '#10B981';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
      }, 2000);
    }
  });
}

// ==========================================
// CALENDAR FUNCTIONS
// ==========================================

function previousWeek() {
  console.log('Previous week');
  // In production, this would update the calendar display
}

function nextWeek() {
  console.log('Next week');
  // In production, this would update the calendar display
}

function today() {
  console.log('Jump to today');
  // In production, this would navigate to current week
}

function changeView(view) {
  console.log('Change calendar view to:', view);
  
  // Update button states
  const buttons = document.querySelectorAll('.calendar-header ~ div button');
  buttons.forEach(btn => {
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
  });
  
  // Highlight active view button
  event.target.classList.remove('btn-secondary');
  event.target.classList.add('btn-primary');
  
  // In production, this would change the calendar layout
}

function openAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) {
    modal.style.display = 'flex';
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').value = today;
  }
}

function closeAddEventModal() {
  const modal = document.getElementById('addEventModal');
  if (modal) {
    modal.style.display = 'none';
    document.getElementById('addEventForm').reset();
  }
}

// Handle add event form submission
const addEventForm = document.getElementById('addEventForm');
if (addEventForm) {
  addEventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    
    console.log('New event added:', { eventTitle, eventDate, eventTime });
    
    // Show success feedback
    alert('Event added successfully!');
    
    // Close modal
    closeAddEventModal();
    
    // In production, this would add the event to the backend and update the calendar
  });
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  const modal = document.getElementById('addEventModal');
  if (modal && e.target === modal) {
    closeAddEventModal();
  }
});

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Add keyboard navigation for interactive elements
document.addEventListener('keydown', function(e) {
  // Escape key closes modals
  if (e.key === 'Escape') {
    closeAddEventModal();
  }
});

// Trap focus in modals when open
const modal = document.getElementById('addEventModal');
if (modal) {
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll(
        'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format date for display
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format time for display
function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

// Generate case ID
function generateCaseID() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `TR-${year}-${random}`;
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%cTraceGuard System', 'font-size: 20px; font-weight: bold; color: #4A90E2;');
console.log('%cConfidential Reporting Platform', 'font-size: 14px; color: #0A1A2F;');
console.log('%cVersion 1.0 - Secure & Professional', 'font-size: 12px; color: #6B7280;');
