const valor = document.getElementById("valor")
const maisButton = document.getElementById("mais")
const menosButton = document.getElementById("menos")
const resetarButton = document.getElementById("resetar")

let contador = 0
let intervaloId = 0

const atualizacaoValor = () => {
    valor.innerHTML = contador
}

maisButton.addEventListener('mousedown', () => {
    intervaloId = setInterval(() => {
        contador++
        atualizacaoValor()
    }, 100)
})

menosButton.addEventListener('mousedown', () => {
    intervaloId = setInterval(() => {
        contador--
        atualizacaoValor()
    }, 100)
})

resetarButton.addEventListener('click', () => {
    contador = 0
    atualizacaoValor()
})

document.addEventListener('mouseup', () => {
    clearInterval(intervaloId)
})
