// Array de contactos precargados
let contactos = [

    {
        nomyApe: "Agustina Chocobar",
        telefono: "3816970888",
        direccion: "San Miguel de Tucumán",
        email: "agus@gmail.com"
    },

    {
        nomyApe: "Marianela Araoz",
        telefono: "3818887069",
        direccion: "Tafí Viejo",
        email: "mar@gmail.com"
    },

    {
        nomyApe: "Joaco Avila",
        telefono: "3811234567",
        direccion: "Yerba Buena",
        email: "carlos@gmail.com"
    }
];

// Función mostrar contactos
function mostrarContactos(){

    // Variable
    let filas = "";

    // Recorrer array
    contactos.forEach(function(contacto){

        filas += `
            <tr>

                <td>${contacto.nomyApe}</td>

                <td>${contacto.telefono}</td>

                <td>${contacto.direccion}</td>

                <td>${contacto.email}</td>

            </tr>
        `;
    });

    // Mostrar tabla
    document.getElementById("tablaContactos").innerHTML = filas;
}

// Mostrar contactos al iniciar
mostrarContactos();

// Función agregar contacto
function agregarContacto(){

    // Crear objeto contacto
    let nuevoContacto = {

        nomyApe: document.getElementById("nomyApe").value,

        telefono: document.getElementById("telefono").value,

        direccion: document.getElementById("direccion").value,

        email: document.getElementById("email").value
    };

    // Agregar al array
    contactos.push(nuevoContacto);

    // Actualizar tabla
    mostrarContactos();

    // Limpiar inputs
    document.getElementById("nomyApe").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("email").value = "";
}
