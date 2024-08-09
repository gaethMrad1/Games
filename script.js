let toggle = document.getElementById("toggle");
let drobdown = document.querySelector(".drobdown");

toggle.onclick = function() {
  drobdown.classList.toggle("active")
}
document.addEventListener("click",(e) => {
  if(!e.target.classList.contains("drobdown") && e.target.className !== "toggle") {
    drobdown.classList.remove("active")
  }
})