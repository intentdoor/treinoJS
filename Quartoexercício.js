prompt = require("prompt-sync")();

let c = parseFloat(prompt("Quantos graus celcius ta fazendo ai?:"))

let f = c*9/5+32

console.log("essa temperatura tambem é: " + f + "º " + "Fahrenheit")
