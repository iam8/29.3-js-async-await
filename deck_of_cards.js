// Ioana A Mititean
// 29.2 - JS Promises


const baseUrl = "https://deckofcardsapi.com/api/deck";

// Part 2-1
const singleCardPromise = axios.get(`${baseUrl}/new/draw/?count=1`);

singleCardPromise
    .then((data) => {
        card = data.data.cards[0];
        console.log(`${card.value} of ${card.suit}`);

        $("#card-1").text(`${card.value} of ${card.suit}`);
    })
    .catch((error) => {
        console.log(error);
    });


// Part 2-2
const firstCardPromise = axios.get(`${baseUrl}/new/draw/?count=1`);

let card1;
let card2;

firstCardPromise
    .then((data) => {
        card1 = data.data.cards[0];
        return axios.get(`${baseUrl}/${data.data.deck_id}/draw/?count=1`);
    })
    .then((data) => {
        card2 = data.data.cards[0];
        console.log(`${card1.value} of ${card1.suit}`);
        console.log(`${card2.value} of ${card2.suit}`);

        $("#card-2").text(`${card1.value} of ${card1.suit}`);
        $("#card-3").text(`${card2.value} of ${card2.suit}`);
    })
    .catch((error) => {
        console.log(error);
    });


// Part 2-3: See file 'deck_of_cards_full.js'
