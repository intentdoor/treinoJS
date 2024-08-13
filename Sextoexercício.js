prompt = require("prompt-sync")();

let n1 = (prompt("Qual o nome do produto? "))
let n2 = parseFloat(prompt("Qual o preço de um/a " + n1 + "? "))
let n3 = parseFloat(prompt("Quanto de desconto em porcento a loja está dando nesse produto? "))
let desconto = n2*n3/100
let valor = n2 - desconto
console.log("|-------------------------------------|")
console.log("| Produto:     " + n1)
console.log("| Preço:       " + n2)
console.log("| Desconto:    " + desconto)
console.log("| Valor total: " + valor)
console.log("|-------------------------------------|")