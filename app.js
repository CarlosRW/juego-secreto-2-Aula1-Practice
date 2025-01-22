// Código de la aplicación
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector('h1');
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', '¡Felicidades! Adivinaste el número secreto');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    }
    return;
}
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina el número secreto que está entre 1 y 10');