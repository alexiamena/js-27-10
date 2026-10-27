let n1 = 6
let n2 = 12


let resultado = somar(n1, n2)
let resultado2 = diminuir(n1, n2)
let resultado3 = dividir(n1, n2)
let resultado4 = multiplicar(n1, n2)
let resultado5 = potenciacao(n2, n1)

function somar(n1, n2) {
    return n1 + n2
}
console.log(resultado)

function diminuir(n1, n2) {
    return n2 - n1
}
console.log(resultado2)

function dividir(n1, n2) {
    return n2 / n1
}
console.log(resultado3)

function multiplicar(n1, n2) {
    return n2 * n1
}
console.log(resultado4)

function potenciacao(n2, n1) {
    return n2 ** n1
}
console.log(resultado5)