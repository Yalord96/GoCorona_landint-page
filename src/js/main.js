"use strict";
import * as flsFunctions from "./libs/webp.js";

flsFunctions.isWebP();

const burgerBtn = document.querySelector(".header__burger-btn");
const headerMenu = document.querySelector(".menu__body");

// Header burger menu
burgerBtn.onclick = () => {
  burgerBtn.classList.toggle("active");
  headerMenu.classList.toggle("active");
  if (burgerBtn.classList.contains("active")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
