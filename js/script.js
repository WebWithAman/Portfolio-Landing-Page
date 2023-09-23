const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");


toggleBtn.onclick = function () {
    navLinks.classList.toggle("show");
    toggleBtn.classList.toggle("fa-sharp")
    toggleBtn.classList.toggle("fa-circle-xmark")
}