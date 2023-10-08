const image = document.querySelector(".mainclass-image img");
const buttons = document.querySelectorAll(".mainclass-buttons button");
const apiUrl = "https://api.magicthegathering.io/v1/";

buttons.forEach(function(btn, idx) {
    btn.addEventListener("click", function() {
        getCards(idx);
    });
});

async function getCards(index) {
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
        // console.log(result);

        const firstCard = result.cards[2];
        const firstCardImage = firstCard.imageUrl;        

        const secondCard = result.cards[6];
        const secondCardImage = secondCard.imageUrl;        

        const thirdCard = result.cards[7];
        const thirdCardImage = thirdCard.imageUrl;        

        const fourthCard = result.cards[12];
        const fourthCardImage = fourthCard.imageUrl;
        
        const fifthCard = result.cards[15];
        const fifthCardImage = fifthCard.imageUrl;
        
        const sixthCard = result.cards[18];
        const sixthCardImage = sixthCard.imageUrl;  

        const seventhCard = result.cards[19];
        const seventhCardImage = seventhCard.imageUrl;  

        const eighthCard = result.cards[20];
        const eighthCardImage = eighthCard.imageUrl;  

        const arrayImages = [firstCardImage, secondCardImage, thirdCardImage, fourthCardImage, fifthCardImage, sixthCardImage, seventhCardImage, eighthCardImage];

        image.src = arrayImages[index];
    }
    catch(error) {
        console.error("Error", error);
    }
}