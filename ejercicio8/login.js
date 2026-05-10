// Array de usuarios
let usuarios = [

    {
        nombreUsuario: "agus",
        contraseña: "2312",
        fechaCreacion: "07/05/2026"
    },

    {
        nombreUsuario: "admin",
        contraseña: "2026",
        fechaCreacion: "07/05/2026"
    }
];

// Función login
function login(){

    // Obtener datos ingresados
    let usuarioIngresado = document.getElementById("usuario").value;

    let passwordIngresada = document.getElementById("password").value;

    // Buscar usuario correcto
    let usuarioCorrecto = usuarios.find(function(usuario){

        return usuario.nombreUsuario === usuarioIngresado &&
               usuario.contraseña === passwordIngresada;
    });

    // Validar
    if(usuarioCorrecto){

        // Navegar a agenda
        window.location.href = "agenda.html";

    }else{

        document.getElementById("resultado").innerHTML = `
            <div class="alert alert-danger mt-3">
                Usuario o contraseña incorrectos
            </div>
        `;
    }
}