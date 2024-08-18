let toggle = document.getElementById("toggle");
let drobdown = document.querySelector(".drobdown");
let scrollBtn = document.getElementById("scroll-to-top");

toggle.onclick = function() {
  drobdown.classList.toggle("active")
}
document.addEventListener("click",(e) => {
  if(!e.target.classList.contains("drobdown") && e.target.className !== "toggle") {
    drobdown.classList.remove("active")
  }
})

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);
const scrollWindow = function () {  
  window.scrollTo({
    top: 0,
  })
};
scrollBtn.addEventListener("click", scrollWindow);