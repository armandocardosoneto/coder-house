const showCardBtn = document.querySelector(".show-card");
const removeCardBtn = document.querySelector(".remove-card");
const card = document.querySelector(".card");
const cardName = document.querySelector(".card-name");
const cardType = document.querySelector(".card-type");
const cardImage = document.querySelector(".card-image");
const apiUrl = "https://api.magicthegathering.io/v1/";

showCardBtn.addEventListener("click", getCards);

async function getCards() {
    const path = "cards";
    const endPoint = apiUrl + path;

    try {
        const response = await fetch(endPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();
        console.log(result);

        const thirdCard = result.cards[7];
        console.log(thirdCard);

        const thirdCardName = thirdCard.name;
        console.log(thirdCardName);

        const thirdCardType = thirdCard.type;
        console.log(thirdCardType);

        const thirdCardImage = thirdCard.imageUrl;
        console.log(thirdCardImage);

        cardName.innerText = thirdCardName;
        cardType.innerText = thirdCardType;
        cardImage.src = thirdCardImage;
    }
    catch(error) {
        console.error("Error", error);
    }

    card.style.display = "block";
}

//remove card
removeCardBtn.addEventListener("click", function() {
    card.style.display = "none";
});