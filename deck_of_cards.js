// Ioana A Mititean
// 29.3 - JS Async/Await


const baseUrl = "https://deckofcardsapi.com/api/deck";

$(async function () {

    // Part 2-1
    const cardData = await axios.get(`${baseUrl}/new/draw/?count=1`);
    const card = cardData.data.cards[0];

    console.log(`${card.value} of ${card.suit}`);
    $("#card-1").text(`${card.value} of ${card.suit}`);

    // Part 2-2
    const firstCardData = await axios.get(`${baseUrl}/new/draw/?count=1`);
    const secondCardData = await axios.get(
        `${baseUrl}/${firstCardData.data.deck_id}/draw/?count=1`);

    const card1 = firstCardData.data.cards[0];
    const card2 = secondCardData.data.cards[0];

    console.log(`${card1.value} of ${card1.suit}`);
    console.log(`${card2.value} of ${card2.suit}`);

    $("#card-2").text(`${card1.value} of ${card1.suit}`);
    $("#card-3").text(`${card2.value} of ${card2.suit}`);

    // Part 2-3: See file 'deck_of_cards_full.js'
});
