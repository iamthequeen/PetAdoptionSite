
// //// HAMBURGER MENU ////
const hamburger = document.querySelector(".hamburger")
const separateMenu = document.querySelector(".separate-menu")
const links = document.getElementsByClassName("nav-link")

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("is-active");  
  separateMenu.classList.toggle("active");  
  document.body.classList.toggle("hidden-overflow");

})

for (let link of links) {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");  
    separateMenu.classList.remove("active");  
    document.body.classList.remove("hidden-overflow");
  })
}







