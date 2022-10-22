const navButton = document.querySelector("#nav-button");
const navButtonSpan = document.querySelector("#nav-button > span");
const nav = document.querySelector("#nav");
const brandSm = document.querySelector("#brand-sm");
const content = document.querySelector("#content");
const rightNav = document.querySelector("#right-nav");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav-active");
  nav.classList.toggle("-translate-x-full");
  brandSm.classList.toggle("-translate-x-full");
  rightNav.classList.toggle("-translate-y-[400%]");
});

rightNav.addEventListener("click", () => {
  navButton.classList.toggle("nav-active");
  nav.classList.toggle("-translate-x-full");
  brandSm.classList.toggle("-translate-x-full");
  rightNav.classList.toggle("-translate-y-[400%]");
});

// SUBMENU
const submenuBtn = document.querySelector("#submenu-button");
const submenuItems = document.querySelector("#submenu-items");
const expand = document.querySelector("#expand");

submenuBtn.addEventListener("click", () => {
  // submenuBtn.classList.toggle('submenu-active');
  submenuItems.classList.toggle("-translate-y-full");
  expand.classList.toggle("rotate-180");
});

// window.addEventListener('click', (e) => {
//   if (e.target != nav && e.target != navButton && e.target != navButtonSpan) {
//     navButton.classList.remove('nav-active');
//     nav.classList.add('-translate-x-full');
//   }
// });
