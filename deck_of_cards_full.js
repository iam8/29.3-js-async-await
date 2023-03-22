// Ioana A Mititean
// 29.2 - JS Promises


// Part 2-3

const baseUrl = "https://deckofcardsapi.com/api/deck";
let deckId;

const $drawCardBtn = $("#draw-card-btn");


function initializeDeck() {

    // Create new deck and get a deck ID
    shuffledDeckPromise = axios.get(`${baseUrl}/new/shuffle`);

    shuffledDeckPromise
        .then((data) => {
            deckId = data.data.deck_id;

            // Attach event handler to draw-card button
            $drawCardBtn.on("click", drawCard);
        })
        .catch((error) => {
            console.log(error);
        });
}


function drawCard() {

    const drawCardPromise = axios.get(`${baseUrl}/${deckId}/draw/?count=1`);
    drawCardPromise
        .then((data) => {
            if (data.data.remaining === 0) {
                $drawCardBtn.hide();
            }

            card = data.data.cards[0];
            $("#card-display").append(`<image class="card-img" src=${card.image}>`)

        })
        .catch((error) => {
            console.log(error);
        })
}


$(function () {
    console.log("DOM is loaded.");

    initializeDeck();
});
