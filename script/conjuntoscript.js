const ApiUrl = "https://api.magicthegathering.io/v1/"

async function getCards(_countCards, _Path) {
    const countCards = 10;
    const pageSize = "?pagesize=";
    const path = "cards";
    const endpoint = ApiUrl + path + pageSize + countCards;

    //https://api.magicthegathering.io/v1/cards?pageSize=10

    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return await response.json();
    } catch (error) {
        console.error("error:", error);
    }
}

funcion listCardsInView() {
    const cardList = getCards(5, "cards")
        .then(function (response) {
            console.log(response)
        }).catch(function (err) {
            console.log(err)
        })
}