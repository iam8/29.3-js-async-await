// Ioana A Mititean
// 29.3 - JS Async/Await


let baseUrl = "http://numbersapi.com";


async function getNumTrivia(number) {
    const data = await axios.get(`${baseUrl}/${number}?json`);
    return data;
};


async function getManyNumsTrivia(min, max) {
    const data = await axios.get(`${baseUrl}/${min}..${max}`);
    return data;
};


$(async function () {

    // Part 1-1
    const favNumTrivia = await getNumTrivia(7);
    $("#fav-num-fact").text(favNumTrivia.data.text);

    // Part 1-2
    const manyNumsTrivia = await getManyNumsTrivia(5, 20);

    for (let num in manyNumsTrivia.data) {
        let $factLi = $(`<li>${manyNumsTrivia.data[num]}</li>`);
        $("#multiple-req-list").append($factLi);
    };

    // Part 1-3
    for (let i = 0; i < 4; i++) {
        let numTrivia = await getNumTrivia(7);
        let $factLi = $(`<li>${numTrivia.data.text}</li>`);
        $("#fav-num-facts-list").append($factLi);
    };
});
