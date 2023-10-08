const cardImages = document.querySelectorAll(".card-item img");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".card-name");
const modalType = document.querySelector(".card-type");
const modalImage = document.querySelector(".modal .card-image img");

cardImages.forEach((item, idx) => {
    item.addEventListener("click", () => {
        modal.classList.add("show");

        const title = cardImages[idx].getAttribute("title");        
        modalTitle.innerText = title;

        const type = cardImages[idx].getAttribute("alt");
        modalType.innerText = type;

        const image = cardImages[idx].getAttribute("src");
        modalImage.src = image;
    });
});

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});