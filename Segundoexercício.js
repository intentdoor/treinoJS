prompt = require("prompt-sync")();

let x = prompt("Olá, em que ano você nasceu?? :")
parseInt(x)

let y = new Date().getFullYear()
let z = y - x
console.log("Então sua idade só pode ser: " + z)