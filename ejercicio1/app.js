// Función para mostrar los datos del coche
function mostrarDatos(){

    // Crear objeto coche
    let coche = {

        // Obtener valores ingresados
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        anio: document.getElementById("anio").value,
        color: document.getElementById("color").value,
        estado: document.getElementById("estado").value,
        precio: document.getElementById("precio").value
    };

    // Mostrar datos usando innerHTML
    document.getElementById("resultado").innerHTML = `
        <h3>Información del Coche</h3>

        <p><b>Marca:</b> ${coche.marca}</p>
        <p><b>Modelo:</b> ${coche.modelo}</p>
        <p><b>Año:</b> ${coche.anio}</p>
        <p><b>Color:</b> ${coche.color}</p>
        <p><b>Estado:</b> ${coche.estado}</p>
        <p><b>Precio:</b> $${coche.precio}</p>
    `;
}