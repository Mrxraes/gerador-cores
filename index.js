function cor () {
    //Variável onde a cor deve aparecer
    let box = document.getElementById("box")
    let analogo = document.getElementById("analogo")
//Propriedades das cores rgb
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let cor = `rgb(${r}, ${g}, ${b})`
    box.style.backgroundColor = cor
    let anal = `rgb(${r - 20}, ${g - 30}, ${b - 40})`
    analogo.style.color = anal
}


