// Array de libros
let librosTotales = [];

// Función agregar libro
function agregarLibro(){

    // Crear objeto libro
    let libro = {

        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        genero: document.getElementById("genero").value,
        anioPublicacion: document.getElementById("anio").value
    };

    // Guardar libro
    librosTotales.push(libro);

    // Variable para mostrar
    let datos = "";

    // Recorrer array
    librosTotales.forEach(function(libro){

        datos += `
            <li>
                <b>${libro.titulo}</b> -
                ${libro.autor} -
                ${libro.genero} -
                ${libro.anioPublicacion}
            </li>
        `;
    });

    // Mostrar lista
    document.getElementById("listaLibros").innerHTML = datos;
}
