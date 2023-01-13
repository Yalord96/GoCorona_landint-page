const accordionTabs = Array.from(
  document.querySelectorAll(".accordion__label")
);

accordionTabs.forEach((tab) => {
  tab.addEventListener("click", function onTabHandler(e) {
    e.preventDefault();

    let courentTab = e.target.closest(".accordion__label");
    let courentContent = e.target.nextElementSibling;

    // if u need to close other tabs - uncomment this
    // accordionTabs.forEach((tab) => {
    //   tab.classList.remove("active");
    //   tab.nextElementSibling.style.maxHeight = 0;
    // })

    courentTab.classList.toggle("active");

    if (courentTab.classList.contains("active")) {
      courentContent.style.maxHeight = courentContent.scrollHeight + "px";
    } else {
      courentContent.style.maxHeight = 0;
    }
  });
});