// const card1 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card";
const card1 = "../images/card-1.jpeg";
// const card2 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129711&type=card";
const card2 = "../images/card-2.jpeg";
// const card3 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129710&type=card";
const card3 = "../images/card-3.jpeg";
// const card4 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129671&type=card";
const card4 = "../images/card-4.jpeg";

const image = document.querySelector(".mainclass-image img");
const cards = [card1, card2, card3, card4];
const buttons = document.querySelectorAll(".mainclass-buttons button");

buttons.forEach(function(btn, idx) {
   btn.addEventListener("click", function() {
       console.log(btn);

       image.src = cards[idx];
   });
});