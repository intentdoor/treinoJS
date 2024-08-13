prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Qual o valor total da compra? "))
let n2 = parseInt(prompt("Ok, gostaria de parcelar em quantas vezes? "))
let vp = n1 / n2

console.log("|-------------------------------------|")
console.log("| Valor total:             " + n1)
console.log("| Parcelas:                " + n2)
console.log("| Valor de cada parcela:   " + vp)
console.log("|-------------------------------------|")
