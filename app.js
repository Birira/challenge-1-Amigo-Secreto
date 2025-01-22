// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = []

function agregarAmigo() {
    nombre = document.getElementById("amigo").value
    if (nombre == "") {
        alert("Debe ingresar un nombre")
    }
    else {
        listaDeAmigos.push(nombre)
        document.getElementById("amigo").value = ""
        mostrarLista()
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaDeAmigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    };
}

function sortearAmigo() {
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.getElementById("resultado").textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}