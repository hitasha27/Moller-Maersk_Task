document.addEventListener("DOMContentLoaded", function () {
    generateCards();
    setFooterName();
});

function generateCards() {
    const cardsContainer = document.getElementById("cardsContainer");

    for (let i = 1; i <= 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card", `card-${i}`);
        card.innerText = i;
        cardsContainer.appendChild(card);
    }
}

function shuffleCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    const cards = Array.from(cardsContainer.children);

    cards.sort(() => Math.random() - 0.5);

    cards.forEach((card, index) => {
        cardsContainer.appendChild(card);
    });
}

function sortCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    const cards = Array.from(cardsContainer.children);

    cards.sort((a, b) => parseInt(a.innerText) - parseInt(b.innerText));

    cards.forEach((card, index) => {
        cardsContainer.appendChild(card);
    });
}

function setFooterName() {
    const nameFooter = document.querySelector(".name_footer");

    // Replace this JSON object with your actual data
    const authorInfo = {
        firstName: "Hitasha",
        lastName: "Khanna",
    };

    // Display the name dynamically from the JSON object
    nameFooter.innerText = `Shuffle and Sort by ${authorInfo.firstName} ${authorInfo.lastName}`;
}
