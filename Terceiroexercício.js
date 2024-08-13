prompt = require("prompt-sync")();


let n1 = parseInt(prompt("fala um numero :"))
let n2 = parseInt(prompt("fala outro numero :"))
let resultado = Math.abs( n1 - n2 )


console.log("a diferença entre os numeros é de : " + resultado)