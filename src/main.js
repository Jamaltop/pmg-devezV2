import "./style.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav-list");
const buttonInNav = document.querySelector(".header__nav-item--button");
const tablets = document.querySelectorAll(".selecter__item");
if (!burger || !menu) {
  console.error("Burger or menu not found in DOM", { burger, menu });
} else {
  burger.addEventListener("click", () => {
    console.log("burger clicked");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      buttonInNav.style.display = "flex";
    } else {
      buttonInNav.style.display = "none";
    }

    if (menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const links = document.querySelectorAll(".header__nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("nav link clicked");
      burger.classList.remove("active");
      menu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
}

function removeActiveClass() {
  tablets.forEach((tablet) =>
    tablet.classList.remove("selecter__item-withborder")
  );
}

tablets.forEach((tablet) => {
  tablet.addEventListener("click", () => {
    removeActiveClass();
    tablet.classList.add("selecter__item-withborder");
  });
});

