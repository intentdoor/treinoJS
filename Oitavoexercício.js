prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("olá, quantas horas por semana você trabalha? "))
let n2 = parseInt(prompt("Nossa, e quanto vale a sua hora de trabalho "))
let n3 = n1 * n2
let n4 = n3 * 4

console.log("|-------------------------------------|")
console.log("| Sálario semanal:    " + n3)
console.log("| Sálario mensal:     " + n4)
console.log("|-------------------------------------|")
