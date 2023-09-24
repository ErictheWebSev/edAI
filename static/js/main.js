const menu = document.querySelector("#menu-btn");
const menuCon = document.querySelector("#menu");
const line = document.querySelector("#line");

menu.onclick = () =>{
  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("#line").classList.toggle("hidden");
  document.querySelector("#menu-btn").classList.toggle("open");
}

menuCon.onclick = () => {
  document.querySelector("#menu").classList.toggle("hidden");
  document.querySelector("#menu-btn").classList.toggle("open");
  document.querySelector("#line").classList.toggle("hidden");
}
