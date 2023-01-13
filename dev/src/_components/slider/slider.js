// Slider
const slider = document.querySelector(".slides");
const firstImg = slider.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".slider i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideArrows = () => {
  let scrollWidth = slider.scrollWidth - slider.clientWidth;
  arrows[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
  arrows[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 20;
    slider.scrollLeft += arrow.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideArrows(), 60);
  });
});

const autoSlide = () => {
  if (slider.scrollLeft == slider.scrollLeft - slider.clientWidth) return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 20;
  let valDifference = firstImgWidth - positionDiff;

  if (slider.scrollLeft > prevScrollLeft) {
    return (slider.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  slider.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (event) => {
  isDragStart = true;
  prevPageX = event.pageX || event.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
};

const dragging = (event) => {
  if (!isDragStart) return;
  event.preventDefault();
  isDragging = true;
  slider.classList.add("dragging");
  positionDiff = (event.pageX || event.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
  showHideArrows();
};

const dragStop = () => {
  isDragStart = false;
  slider.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

slider.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);

slider.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);