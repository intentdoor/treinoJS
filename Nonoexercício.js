prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Qual o valor total da compra? "))
let n2 = parseInt(prompt("Ok, gostaria de parcelar em quantas vezes? "))
let n3 = parseFloat(prompt("Qual a taxa de juros em porcento? "))

let parcela = n1 / n2 
let juros = 

console.log("|-------------------------------------|")
console.log("|Número de parcelas:   " + n2)

 let total = 0
 let i = 0
 
 for  (i = 1 ; i <= n2; i++)
    {
    let parcelatx = parcela * n3 / 100
    parcela = parcela + parcelatx
    formatado = parcela.toFixed(2)
 
    console.log("|  " + i + "ºParcela :" + formatado)
 }

console.log("|-------------------------------------|")
