const menu = document.querySelector(".navbar__menu");
const burgerBtn = document.querySelector(".navbar__burger-btn");
const cancelBtn = document.querySelector(".header__cancel-btn");

burgerBtn.onclick = () => {
  menu.classList.add("active");
  burgerBtn.classList.add("hide");
  document.body.classList.add("disabledScroll");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  burgerBtn.classList.remove("hide");
  document.body.classList.remove("disabledScroll");
};
