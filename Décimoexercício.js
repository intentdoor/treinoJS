prompt = require("prompt-sync")();

let n1 = parseInt(prompt("fala um numero :"))

if( n1 % 2 === 0) {
    console.log("o número " + n1 + "é par")} 
else {
    console.log("o número " + n1 + "é ímpar")
}
