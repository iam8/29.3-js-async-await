// Ioana A Mititean
// 29.3 - JS Async/Await


// Part 2-3

const baseUrl = "https://deckofcardsapi.com/api/deck";
let deckId;

const $drawCardBtn = $("#draw-card-btn");


async function initializeDeck() {

    // Create new deck and get a deck ID
    const newDeckData = await axios.get(`${baseUrl}/new/shuffle`);
    deckId = newDeckData.data.deck_id;

    // Attach event handler to draw-card button
    $drawCardBtn.on("click", drawCard);
}


async function drawCard() {

    const cardData = await axios.get(`${baseUrl}/${deckId}/draw/?count=1`);

    // Hide draw card button when no cards remain
    if (cardData.data.remaining === 0) {
        $drawCardBtn.hide();
    }

    // Display card on page
    card = cardData.data.cards[0];
    $("#card-display").append(`<image class="card-img" src=${card.image}>`);
}


$(async function () {
    console.log("DOM is loaded.");

    await initializeDeck();
})
