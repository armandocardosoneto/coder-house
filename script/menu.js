const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(nav, hamburgerMenu);

window.addEventListener("scroll", function() {
    const heightScroll = window.scrollY;

    if(heightScroll > 100) {
        nav.classList.add("change-bg");
    }
    else {
        nav.classList.remove("change-bg");
    }
});

hamburgerMenu.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("change-menu");

    nav.classList.toggle("change-nav");
});