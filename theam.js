// const menuToggle = document.getElementById("menu-toggle");
// const navMenu = document.getElementById("nav-menu");

// menuToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("theme-toggle");

//   if(!toggleBtn) return;

//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark");

//     if(document.body.classList.contains("dark")){
//       toggleBtn.textContent = "🌞";
//     }else{
//       toggleBtn.textContent = "🌙";
//     }
//   });
// });



// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   if(window.scrollY > 30){
//     navbar.classList.add("scrolled");
//   }else{
//     navbar.classList.remove("scrolled");
//   }
// });


// 


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* Load saved theme */
if(localStorage.getItem("theme") === "dark"){
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }else{
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
