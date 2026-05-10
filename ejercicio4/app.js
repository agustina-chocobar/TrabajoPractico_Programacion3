// Función para mostrar empleado
function mostrarEmpleado(){

    // Crear objeto empleado
    let empleado = {

        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        direccion: document.getElementById("direccion").value,
        salarioxMes: document.getElementById("salario").value
    };

    // Mostrar datos
    document.getElementById("resultado").innerHTML = `

        <h3>Información del Empleado</h3>

        <p><b>Nombre:</b> ${empleado.nombre}</p>

        <p><b>Apellido:</b> ${empleado.apellido}</p>

        <p><b>DNI:</b> ${empleado.dni}</p>

        <p><b>Dirección:</b> ${empleado.direccion}</p>

        <p><b>Salario por Mes:</b> $${empleado.salarioxMes}</p>
    `;
}
