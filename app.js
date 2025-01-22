let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Adivina el número secreto que está entre 1 y 10';

function intentoDeUsuario() {
  let numero = parseInt(prompt('Adivina el número secreto'));
  return numero;
}