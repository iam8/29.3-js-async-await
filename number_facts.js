// Ioana A Mititean
// 29.2 - JS Promises


let baseUrl = "http://numbersapi.com";
let favNum = 7;

// Part 1-1
let favNumPromise = axios.get(`${baseUrl}/${favNum}?json`);

favNumPromise
    .then((data) => {
        $("#fav-num-fact").text(data.data.text);
    })
    .catch((error) => console.log(error));


// Part 1-2
let manyNumsPromise = axios.get(`${baseUrl}/0..10`);

manyNumsPromise
    .then((data) => {
        for (let num in data.data) {
            let $factLi = $(`<li>${data.data[num]}</li>`);
            $("#multiple-req-list").append($factLi);
        }
    })
    .catch((error) => console.log(error));


// Part 1-3
let favNumManyPromise = axios.get(`${baseUrl}/${favNum}?json`);

let appendFact = (data) => {
    let $factLi = $(`<li>${data.data.text}</li>`);
    $("#fav-num-facts-list").append($factLi);

    return axios.get(`${baseUrl}/${favNum}?json`);
}

favNumManyPromise
    .then(appendFact)
    .then(appendFact)
    .then(appendFact)
    .then(appendFact)
    .catch((error) => console.log(error));
