// const apiUrl = "https://api.petfinder.com/v2/animals"

// const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWTmRXNTF5U2pEWVpDOU9qWGNaczJwNzgxbWxNZGZUaXBNYXBram4zU2E5UnZDUzlzSiIsImp0aSI6ImMzMzI1NjE2NWJlMDQ3MjNiM2E5NWU2Y2Y1MDUwNTQ2NjQ5M2Q3N2ExYjM3YzliYzQ3YTBkZjBjMTUzMTIxZWM1NWI3YzE4ZDBmYzdmY2UyIiwiaWF0IjoxNjU0MDQ0MDkxLCJuYmYiOjE2NTQwNDQwOTEsImV4cCI6MTY1NDA0NzY5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OYkc9UBg9pNJ9RZoWXIoQPdUqOvuef-_NP-bcApqu5M4rAjxUQ3KuVct6iaU8HlATJaFAmsWTAHWAX8R4fO9n8tEoS69fOA2plpSPbdWC5PRod1Hz5-FO--B5RDwtdVi6j20viUZdxLyaFcD7czH0iBufDDWZP4r7bybVT8pWxJRKQNKVTTv4UPkndorol-6pHAUEY3afYOGHGLrCKX9CWqeqUJJuz9jl82PQfPnCzi_W71ZvLWvDQrrwAdtkM4iskUzlw4YRIWmBMz52GrKJ4cisK3ncNDHFY_68hxkBglA4nUhPJW0aUqSW1Vk2CVQuIvzPvJwpqIYAKv6cbH3Ew"
// console.log("hi")

//Home page functionality (menu)
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







