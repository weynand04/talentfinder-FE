function addWorkExperience() {
  const workExperienceCard = document.getElementById("workExperienceCard");
  const newWorkExperienceCard = workExperienceCard.cloneNode(true);
  const form = newWorkExperienceCard.querySelector("form");
  // Clear input values
  form.reset();
  // Disable checkbox and input for "Saat ini"
  const saatIniCheckbox = form.querySelector("#saatIni");
  const tanggalSelesaiInput = form.querySelector("#tanggalSelesai");
  saatIniCheckbox.checked = false;
  tanggalSelesaiInput.disabled = true;
  workExperienceCard.parentNode.replaceChild(newWorkExperienceCard, workExperienceCard);
  // Hide the old work experience card
  workExperienceCard.style.display = "none";
}

// Fungsi button next di personal card
function showEducationCard() {
  document.getElementById("lastEdu-part").classList.remove("d-none");
  document.getElementById("personInfo-part").classList.add("d-none");
}

// Fungsi button next di education
function showWorkExperience() {
  document.getElementById("workEx-part").classList.remove("d-none");
  document.getElementById("lastEdu-part").classList.add("d-none");
}

// Fungsi button next di work experience
function showFinish() {
  document.getElementById("finish-part").classList.remove("d-none");
  document.getElementById("workEx-part").classList.add("d-none");
}
