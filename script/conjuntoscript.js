//Array de objetos (cards)
const cards = [
    {
        img: "../images/card-1.jpeg",
        title: "Anjo de Misericórdia",
        alt: "Criatura — Anjo"
    },
    {
        img: "../images/card-2.jpeg",
        title: "Bênção Angelical",
        alt: "Feitiço"
    },
    {
        img: "../images/card-3.jpeg",
        title: "Coro Angelical",
        alt: "Encantamento"
    },
    {
        img: "../images/card-4.jpeg",
        title: "Barreira Angelical",
        alt: "Criatura - Barreira"
    },
    {
        img: "../images/card-5.jpeg",
        title: "Caça-Nuvens Aviano",
        alt: "Criatura - Ave Soldado"
    },
    {
        img: "../images/card-6.jpeg",
        title: "Esquadrão de Balista",
        alt: "Criatura — Humano Rebelde"
    },
    {
        img: "../images/card-7.jpeg",
        title: "Guia da Imortalidade",
        alt: "Mágica Instantânea"
    },
    {
        img: "../images/card-8.jpeg",
        title: "Eleito da Ancestral",
        alt: "Criatura — Humano Clérigo"
    }
]

const gameCards = document.querySelector(".game-cards");

//Cria os cards dinamicamente dentro da div "game-cards"
cards.forEach((item) => {
    gameCards.innerHTML += `
        <figure class="card-item">
            <img src="${item.img}" title="${item.title}" alt="${item.alt}" flavor="${item.flavor}" text="${item.text}">
        </figure>
    `;
});

const modal = document.querySelector(".modal");

//Cria o modal dinamicamente dentro da div modal
modal.innerHTML = `
    <div class="modal-card">
        <span class="modal-close">X</span>
        <h3 class="card-name">Angelic Wall</h3>
        <h3 class="card-type">Creature - Wall</h3>
        <figure class="card-image">
            <img src="../images/card-1.jpeg" alt="Carta do jogo">
        </figure>

        <div class="buttons">
            <span id="btn-left">
                  <i class="fa-solid fa-arrow-left"></i>
            </span>
            <span id="btn-right">
                  <i class="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    </div>
`;

const cardImages = document.querySelectorAll(".card-item img");
const modalCloseBtn = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".card-name");
const modalType = document.querySelector(".card-type");
const modalImage = document.querySelector(".modal .card-image img");
const buttonLeft = document.getElementById("btn-left");
const buttonRight = document.getElementById("btn-right");
let counter = 0;

//Função que exibi o modal
const shoModal = (idx) => {
    modal.classList.add("show");

    const title = cardImages[idx].getAttribute("title");
    modalTitle.innerText = title;

    const type = cardImages[idx].getAttribute("alt");
    modalType.innerText = type;

    const image = cardImages[idx].getAttribute("src");
    modalImage.src = image;

    //Atualiza o valor de counter ao clicar em algum card;
    counter = idx;
}

//Abre o modal e mostra o card, com seu respectivo nome e tipo
cardImages.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        shoModal(index);
    });
});

//Botões para retroceder ou avançar as imagens
buttonLeft.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = cardImages.length - 1;
    }

    shoModal(counter);
});

buttonRight.addEventListener("click", () => {
    counter++;
    if (counter > cardImages.length - 1) {
        counter = 0;
    }

    shoModal(counter);
});

//Fecha o modal clicando no X
modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

//Fecha o modal ao clicar em qualquer ponto da tela, que não esteja dentro do modal
document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("show")) {
        modal.classList.remove("show");
    }
});