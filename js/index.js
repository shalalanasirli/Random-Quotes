const div = document.querySelector("div");
const btn = document.querySelector("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
let quotes = [];

getData();

async function  getData(){
    await fetch('quotes.json')
        .then(res => res.json())
        .then(obj => obj.quote.forEach(q => quotes.push(q)));
    appendQuotes();
}
function appendQuotes(){
    let index = getRandomInt(0, quotes.length);
    quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${quotes[index].q} <i class="fa-solid fa-quote-right"></i>`;
    author.innerHTML = `- ${quotes[index].author}`;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}