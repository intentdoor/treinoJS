prompt = require("prompt-sync")();

let n1 = (prompt("Qual o nome do produto? "))
let n2 = parseFloat(prompt("Qual o preço de um/a " + n1 + "? "))
let n3 = parseFloat(prompt("Quantas unidades de " + n1 + " Você comprou? "))
let imposto = n2*n3*18/100
let valor = n2*n3 + imposto
console.log("|----------------------------------|")
console.log("| Produto:     " + n1)
console.log("| Quantia:     " + n3)
console.log("| Imposto:     " + imposto)
console.log("| Valor total: " + valor)
console.log("|----------------------------------|")
