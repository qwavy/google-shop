const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContent = document.querySelector(".burger-menu__content");
const burgerMenuLines = document.querySelector(".burger-menu-lines");
const burgerMenuLine = document.querySelectorAll(".line");
const burgerMenuLine1 = document.querySelector(".line1");
const burgerMenuLine2 = document.querySelector(".line2");
const burgerMenuLine3 = document.querySelector(".line3");

burgerMenu.addEventListener("click", (event) => {
  burgerMenuContent.classList.toggle("burger-menu-hidden");
  burgerMenuLine1.classList.toggle("burger-menu-lines__animated1");
  burgerMenuLine2.classList.toggle("burger-menu-lines__animated2");
  burgerMenuLine3.classList.toggle("burger-menu-lines__animated3");
});

const swiper = new Swiper(".products__swiper", {
    slidesPerView: 3,
});



