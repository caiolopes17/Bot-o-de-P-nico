const botao = document.getElementById('button')
let som = new Audio("som/alerta.mp3")

botao.addEventListener('mousedown', (event) => {
    event.preventDefault()
    som.play()
})

botao.addEventListener('mouseup' , (event) => {
    event.preventDefault()
    som.pause()
})

botao.addEventListener('touchstart', (event) => {
    event.preventDefault()
    som.play()
})

botao.addEventListener('touchend' , (event) => {
    event.preventDefault()
    som.pause()
})

