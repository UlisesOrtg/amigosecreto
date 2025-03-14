// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// script.js

// Definimos el array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtenemos el valor del campo de entrada para el nombre
    const nombreAmigo = document.getElementById('amigo').value.trim();

    // Validamos que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregamos el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiamos el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizamos la lista visual del amigo
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = '';

    // Agregar cada nombre de amigo a la lista en la página
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificamos si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Añade algunos nombres primero.");
        return;
    }

    // Seleccionamos un índice aleatorio dentro de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la sección de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>¡El amigo secreto sorteado es:</strong> ${amigoSorteado}!</li>`;
}
