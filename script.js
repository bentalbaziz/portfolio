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


function showNetworkProject() {
  document.getElementById("project-popup").style.display = "flex";
}

function closeNetworkProject() {
  document.getElementById("project-popup").style.display = "none";
}


function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}