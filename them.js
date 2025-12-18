const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if(!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
      toggleBtn.textContent = "🌞";
    }else{
      toggleBtn.textContent = "🌙";
    }
  });
});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 30){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }
});


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});



window.addEventListener("scroll", function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-bar").style.width = scrollPercent + "%";
});
