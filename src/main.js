import "./style.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav-list");
const buttonInNav = document.querySelector(".header__nav-item--button");
if (!burger || !menu) {
  console.error("Burger or menu not found in DOM", { burger, menu });
} else {
  burger.addEventListener("click", () => {
    console.log("burger clicked");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  if (menu.classList.contains('active')) {
  buttonInNav.style.display = 'flex'; // показываем кнопку внутри меню
} else {
  buttonInNav.style.display = 'none'; // прячем, когда меню закрыто
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
