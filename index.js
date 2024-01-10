// nome do usuario
let nome = prompt("insira seu nome")

// idade
let idade = parseInt(prompt("insira sua idade"))

//altura
let altura =  Number(prompt("insira sua altura"))

// peso
let peso = Number(prompt("insira seu peso"))
// nascimento
let nascimento = 2023 - idade
// imc
let imc = peso / (altura*altura)



console.log("olá, seu nome é" +  nome)
console.log("sua idade é" +  idade)
console.log("sua altura é" +  altura)
console.log("seu peso é" +  peso)
console.log("seu ano de nascimento é" +  nascimento)
console.log("seu indice de massa corporal é"+  imc)