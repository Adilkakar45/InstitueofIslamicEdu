// Dynamic Header Component
const headerHTML = `
<header class="glass-header text-white sticky top-0 z-40 shadow-lg transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="index.html" class="flex items-center gap-3 group">
      <!-- Round Image Logo -->
      <img 
        src="assets/logo.png" 
        alt="IIE Logo" 
        class="w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform border border-white/20"
      />
      <div>
        <h1 class="font-extrabold text-lg leading-tight tracking-tight">Institute of Islamic Education</h1>
        <p class="text-xs text-[#5CACC4] font-medium tracking-wide">FOR GIRLS • 20 YEARS OF EXCELLENCE</p>
      </div>
    </a>
    
    <nav class="hidden md:flex items-center gap-8 font-semibold text-sm">
      <a href="index.html" id="nav-home" class="hover:text-[#5CACC4] transition-colors py-1">Home</a>
      <a href="courses.html" id="nav-courses" class="hover:text-[#5CACC4] transition-colors py-1">Courses</a>
      <a href="tools.html" id="nav-tools" class="hover:text-[#5CACC4] transition-colors py-1">Islamic Tools</a>
      <a href="about-contact.html" id="nav-about" class="hover:text-[#5CACC4] transition-colors py-1">About & Contact</a>
    </nav>

    <div class="flex items-center gap-4">
      <button onclick="openApplyModal()" class="bg-[#5CACC4] hover:bg-cyan-600 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-cyan-500/20 active:scale-95">
        Apply Now
      </button>
      <button onclick="toggleMobileMenu()" class="md:hidden text-2xl text-white focus:outline-none">
        ☰
      </button>
    </div>
  </div>

  <!-- Mobile Drawer -->
  <div id="mobileMenu" class="hidden md:hidden bg-[#2C5D6C] border-t border-white/10 px-6 py-4 space-y-3">
    <a href="index.html" class="block text-sm font-semibold hover:text-[#5CACC4]">Home</a>
    <a href="courses.html" class="block text-sm font-semibold hover:text-[#5CACC4]">Courses</a>
    <a href="tools.html" class="block text-sm font-semibold hover:text-[#5CACC4]">Islamic Tools</a>
    <a href="about-contact.html" class="block text-sm font-semibold hover:text-[#5CACC4]">About & Contact</a>
  </div>
</header>
`;

// Dynamic Footer Component
const footerHTML = `
<footer class="bg-[#1C2A33] text-gray-300 pt-16 pb-8 border-t-4 border-[#2C5D6C]">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
    <div class="md:col-span-5 space-y-4">
      <div class="flex items-center gap-3">
        <img 
          src="assets/logo.png" 
          alt="Institute of Islamic Education logo" 
          class="w-11 h-11 rounded-full object-cover shadow-md border border-white/20"
        />
        <span class="text-white font-bold text-lg">Institute of Islamic Education</span>
      </div>
      <p class="text-sm text-gray-400 leading-relaxed pr-4">
        Empowering young women through rigorous Islamic scholarship, modern leadership values, and an inspiring academic sanctuary for over two decades.
      </p>
      <div class="flex gap-3 text-xs text-[#5CACC4] font-semibold">
        <span class="bg-[#2C5D6C]/30 px-3 py-1.5 rounded-lg border border-[#2C5D6C]/40">Female-Only Faculty</span>
        <span class="bg-[#2C5D6C]/30 px-3 py-1.5 rounded-lg border border-[#2C5D6C]/40">Safe Campus</span>
      </div>
    </div>

    <div class="md:col-span-3 space-y-3">
      <h3 class="text-white font-bold text-sm tracking-wider uppercase">Navigation</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><a href="index.html" class="hover:text-[#5CACC4] transition">Home Page</a></li>
        <li><a href="courses.html" class="hover:text-[#5CACC4] transition">All Courses & Diplomas</a></li>
        <li><a href="tools.html" class="hover:text-[#5CACC4] transition">Daily Islamic Tools</a></li>
        <li><a href="about-contact.html" class="hover:text-[#5CACC4] transition">About Institute & Campus</a></li>
        <li><a href="assets/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer" class="hover:text-[#5CACC4] transition">Terms & Privacy</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 space-y-3">
      <h3 class="text-white font-bold text-sm tracking-wider uppercase">Direct Contact</h3>
      <div class="space-y-2 text-sm text-gray-400">
        <p class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#5CACC4] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21s-6.716-5.33-9.5-9.02C1.4 10.08 3.18 6 7.1 6c2.18 0 3.45 1.05 4.9 2.82C13.45 7.05 14.72 6 16.9 6c3.92 0 5.7 4.08 4.6 5.98C18.716 15.67 12 21 12 21Zm0-9.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"/>
          </svg>
          <span>Main Campus: Educational Complex, Sector 4-B</span>
        </p>
        <p class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#5CACC4] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L9 9.91a16 16 0 0 0 6.09 6.09l1.45-1.24a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z"/>
          </svg>
          <span>Admissions: +92 336 8148741</span>
        </p>
        <p class="flex items-center gap-2">
          <svg class="w-4 h-4 text-[#5CACC4] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/>
            <path d="m22 8-10 7L2 8"/>
          </svg>
          <span>Email: admissions@islamicedu-girls.edu.pk</span>
        </p>
        <a href="https://g.page/r/CV2sEj5gtoEZECE/review" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-3 bg-[#5CACC4] hover:bg-cyan-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-sm">
          <span aria-hidden="true">⭐</span>
          <span>Leave Us a Google Review</span>
        </a>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
    <p>© 2026 Institute of Islamic Education (For Girls). All Rights Reserved.</p>
    <p>Click for Contact: <a href="https://saeed-adil.vercel.app/" target="_blank" rel="noopener noreferrer" class="font-bold hover:text-white transition-colors">Design and developed by Saeed Adil</a></p>
  </div>
</footer>
`;

// Dynamic Admission Form Modal (10 Fields)
const modalHTML = `
<div id="applyModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 hidden flex items-center justify-center p-4 transition-opacity">
  <div class="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-100">
    <button onclick="closeApplyModal()" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center font-bold text-lg transition">
      ✕
    </button>
    
    <div class="mb-6">
      <span class="text-xs font-bold text-[#5CACC4] uppercase tracking-wider">Online Admissions 2026</span>
      <h2 class="text-2xl font-extrabold text-[#2C5D6C]">Student Application Form</h2>
      <p class="text-xs text-gray-500 mt-1">Please provide accurate information for verification.</p>
    </div>

    <!-- Global Error Banner -->
    <div id="formGlobalError" class="hidden mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold"></div>

    <form id="admissionForm" onsubmit="handleFormSubmit(event)" novalidate class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">1. Student Full Name *</label>
        <input type="text" id="field-name" name="name" placeholder="e.g. Ayesha Fatima" minlength="3" required autocomplete="name" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-name" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">2. Father / Guardian Name *</label>
        <input type="text" id="field-guardian" name="guardian" placeholder="Guardian's Name" minlength="3" required autocomplete="name" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-guardian" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">3. Email Address *</label>
        <input type="email" id="field-email" name="email" placeholder="student@example.com" required autocomplete="email" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-email" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">4. Phone / WhatsApp *</label>
        <input type="tel" id="field-phone" name="phone" placeholder="e.g. 03001234567" minlength="10" maxlength="15" pattern="[0-9+\s-]{10,15}" required autocomplete="tel" inputmode="tel" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-phone" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">5. Date of Birth *</label>
        <input type="date" id="field-dob" name="dob" required autocomplete="bday" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-dob" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">6. Highest Qualification *</label>
        <select id="field-qualification" name="qualification" required class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
          <option value="">-- Select Qualification --</option>
          <option value="Matriculation / O-Level">Matriculation / O-Level</option>
          <option value="Intermediate / A-Level">Intermediate / A-Level</option>
          <option value="Bachelors Degree">Bachelors Degree</option>
          <option value="Masters Degree">Masters Degree</option>
          <option value="Other / Madrassa Background">Other / Madrassa Background</option>
        </select>
        <span id="err-qualification" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">7. City / Region *</label>
        <input type="text" id="field-city" name="city" placeholder="e.g. Lahore, Quetta, Islamabad" required autocomplete="address-level2" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-city" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">8. Residential Address *</label>
        <input type="text" id="field-address" name="address" placeholder="Full street address" minlength="5" required autocomplete="street-address" class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
        <span id="err-address" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div class="md:col-span-2">
        <label class="block text-xs font-bold text-gray-700 mb-1">9. Selected Course *</label>
        <select id="modalCourseSelect" name="course" required class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition">
          <!-- Populated dynamically -->
        </select>
        <span id="err-course" class="text-[11px] text-red-500 font-medium hidden mt-1 block"></span>
      </div>

      <div class="md:col-span-2">
        <label class="block text-xs font-bold text-gray-700 mb-1">10. Additional Background & Objectives</label>
        <textarea id="field-notes" name="notes" rows="3" maxlength="1000" placeholder="Briefly state why you wish to join this course..." class="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2C5D6C] focus:bg-white outline-none transition"></textarea>
      </div>

      <button type="submit" id="admissionSubmitButton" class="md:col-span-2 bg-[#2C5D6C] hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl mt-2">
        Submit Application
      </button>
    </form>
  </div>
</div>
`;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header-mount").innerHTML = headerHTML;
  document.getElementById("footer-mount").innerHTML = footerHTML;
  document.getElementById("modal-mount").innerHTML = modalHTML;

  populateModalCourses();
  setDateOfBirthLimit();
  highlightActiveNav();
});

function setDateOfBirthLimit() {
  const dateOfBirth = document.getElementById("field-dob");
  if (dateOfBirth) dateOfBirth.max = new Date().toISOString().split("T")[0];
}

function populateModalCourses() {
  const select = document.getElementById("modalCourseSelect");
  if (select && typeof coursesData !== "undefined") {
    select.innerHTML = `<option value="">-- Select Target Course --</option>` + coursesData.map(c => `
      <option value="${c.courseID}">${c.name} (${c.mode} - ${c.duration})</option>
    `).join('');
  }
}

function highlightActiveNav() {
  const page = window.location.pathname.split("/").pop();
  if (page === "courses.html") {
    document.getElementById("nav-courses")?.classList.add("text-[#5CACC4]", "border-b-2", "border-[#5CACC4]");
  } else if (page === "tools.html") {
    document.getElementById("nav-tools")?.classList.add("text-[#5CACC4]", "border-b-2", "border-[#5CACC4]");
  } else if (page === "about-contact.html") {
    document.getElementById("nav-about")?.classList.add("text-[#5CACC4]", "border-b-2", "border-[#5CACC4]");
  } else {
    document.getElementById("nav-home")?.classList.add("text-[#5CACC4]", "border-b-2", "border-[#5CACC4]");
  }
}

function openApplyModal(courseID = null) {
  const modal = document.getElementById("applyModal");
  if (modal) {
    resetAllErrors();
    modal.classList.remove("hidden");
    if (courseID) {
      const select = document.getElementById("modalCourseSelect");
      if (select) select.value = courseID;
    }
  }
}

function closeApplyModal() {
  document.getElementById("applyModal")?.classList.add("hidden");
  resetAllErrors();
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
}

// Validation Helper Functions
function showError(fieldId, errId, message) {
  const input = document.getElementById(fieldId);
  const errSpan = document.getElementById(errId);
  if (input) {
    input.classList.add("border-red-500", "bg-red-50/30");
    input.classList.remove("border-gray-200");
  }
  if (errSpan) {
    errSpan.innerText = message;
    errSpan.classList.remove("hidden");
  }
}

function clearError(fieldId, errId) {
  const input = document.getElementById(fieldId);
  const errSpan = document.getElementById(errId);
  if (input) {
    input.classList.remove("border-red-500", "bg-red-50/30");
    input.classList.add("border-gray-200");
  }
  if (errSpan) {
    errSpan.innerText = "";
    errSpan.classList.add("hidden");
  }
}

function resetAllErrors() {
  const fields = ['name', 'guardian', 'email', 'phone', 'dob', 'qualification', 'city', 'address'];
  fields.forEach(f => clearError(`field-${f}`, `err-${f}`));
  
  // Explicitly clear course dropdown styling & error message
  clearError("modalCourseSelect", "err-course");

  const globalErr = document.getElementById("formGlobalError");
  if (globalErr) globalErr.classList.add("hidden");
}

// Entry Validation Handler
async function handleFormSubmit(e) {
  e.preventDefault();
  resetAllErrors();

  let isValid = true;

  // 1. Full Name
  const name = document.getElementById("field-name")?.value.trim();
  if (!name || name.length < 3) {
    showError("field-name", "err-name", "Please enter a valid full name (at least 3 characters).");
    isValid = false;
  }

  // 2. Father/Guardian Name
  const guardian = document.getElementById("field-guardian")?.value.trim();
  if (!guardian || guardian.length < 3) {
    showError("field-guardian", "err-guardian", "Please enter guardian's full name.");
    isValid = false;
  }

  // 3. Email Validation (Regex pattern)
  const email = document.getElementById("field-email")?.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError("field-email", "err-email", "Please enter a valid email address.");
    isValid = false;
  }

  // 4. Phone Number (Digits only, 10–15 length)
  const phone = document.getElementById("field-phone")?.value.trim();
  const phoneRegex = /^[0-9+\s-]{10,15}$/;
  if (!phone || !phoneRegex.test(phone) || phone.replace(/\D/g, "").length < 10) {
    showError("field-phone", "err-phone", "Please enter a valid phone number (min 10 digits).");
    isValid = false;
  }

  // 5. Date of Birth
  const dob = document.getElementById("field-dob")?.value;
  const selectedDate = dob ? new Date(`${dob}T00:00:00`) : null;
  if (!dob || Number.isNaN(selectedDate?.getTime()) || selectedDate > new Date()) {
    showError("field-dob", "err-dob", "Please select a valid date of birth.");
    isValid = false;
  }

  // 6. Educational Qualification
  const qualification = document.getElementById("field-qualification")?.value;
  if (!qualification) {
    showError("field-qualification", "err-qualification", "Please select your educational qualification.");
    isValid = false;
  }

  // 7. City
  const city = document.getElementById("field-city")?.value.trim();
  if (!city) {
    showError("field-city", "err-city", "Please state your current city.");
    isValid = false;
  }

  // 8. Residential Address
  const address = document.getElementById("field-address")?.value.trim();
  if (!address || address.length < 5) {
    showError("field-address", "err-address", "Please provide a complete physical address.");
    isValid = false;
  }

  // 9. Selected Course
  const course = document.getElementById("modalCourseSelect")?.value;
  if (!course) {
    showError("modalCourseSelect", "err-course", "Please select a target course.");
    isValid = false;
  }

  // If validation fails, display overall banner
  if (!isValid) {
    const globalErr = document.getElementById("formGlobalError");
    if (globalErr) {
      globalErr.innerText = "Please correct the highlighted errors before submitting.";
      globalErr.classList.remove("hidden");
    }
    return;
  }

  const notes = document.getElementById("field-notes")?.value.trim() || "None";
  const form = document.getElementById("admissionForm");
  const submitButton = e.submitter || document.getElementById("admissionSubmitButton");
  const globalErr = document.getElementById("formGlobalError");
  const whatsappMessage = [
    "*New Admission Application - 2026*",
    "----------------------------------",
    `*1. Name:* ${name}`,
    `*2. Guardian:* ${guardian}`,
    `*3. Email:* ${email}`,
    `*4. Phone:* ${phone}`,
    `*5. DOB:* ${dob}`,
    `*6. Qualification:* ${qualification}`,
    `*7. City:* ${city}`,
    `*8. Address:* ${address}`,
    `*9. Selected Course:* ${course}`,
    `*10. Notes:* ${notes}`
  ].join("\n");
  const whatsappUrl = `https://wa.me/923368148741?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp while still inside the user click, avoiding popup blockers.
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener");
  if (!whatsappWindow && globalErr) {
    globalErr.innerText = "WhatsApp was blocked by your browser. Please allow pop-ups and try again.";
    globalErr.classList.remove("hidden");
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.innerText = "Sending Application...";
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/muhammadsaeedadil@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New Admission Application: ${name}`,
        "Student Name": name,
        "Guardian Name": guardian,
        "Email": email,
        "Phone Number": phone,
        "Date of Birth": dob,
        "Qualification": qualification,
        "City": city,
        "Address": address,
        "Target Course": course,
        "Notes": notes
      })
    });

    if (!response.ok) {
      throw new Error(`Email request failed with status ${response.status}`);
    }

    alert("Your application was emailed successfully and opened in WhatsApp.");
    form?.reset();
    closeApplyModal();
  } catch (error) {
    console.error("Application email error:", error);
    if (globalErr) {
      globalErr.innerText = "WhatsApp was opened, but the email could not be sent. Please try submitting again.";
      globalErr.classList.remove("hidden");
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerText = "Submit Application";
    }
  }
}