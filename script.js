function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



function showMaintenance() {
  document.getElementById("maintenance-popup").style.display = "flex";
}

function closeMaintenance() {
  document.getElementById("maintenance-popup").style.display = "none";
}

window.onclick = function(event) {
  const popup = document.getElementById("maintenance-popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

