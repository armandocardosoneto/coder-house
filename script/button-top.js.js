const linkTop = document.querySelector(".link-top");
console.log(linkTop);

window.addEventListener("scroll", function() {
   const heightScroll = window.scrollY;

   if(heightScroll > 550) {
       linkTop.classList.add("show-link");
   }
   else {
       linkTop.classList.remove("show-link");
   }
});