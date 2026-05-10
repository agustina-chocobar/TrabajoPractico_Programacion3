// Array vacío
let empleados = [];

// Función agregar empleado
function agregarEmpleado(){

    // Crear objeto
    let empleado = {

        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        direccion: document.getElementById("direccion").value,
        sueldoxHs: parseFloat(document.getElementById("horas").value),
        precioxHs: parseFloat(document.getElementById("precioHora").value),

        // Método salario mensual
        salarioxMes: function(){

            return this.sueldoxHs * this.precioxHs;
        }
    };

    // Guardar en array
    empleados.push(empleado);

    // Mostrar en consola
    console.log(empleados);

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `
    
        <h3>Empleado agregado correctamente</h3>

        <p><b>Nombre:</b> ${empleado.nombre}</p>

        <p><b>Salario diario:</b> $${empleado.salarioxMes()}</p>
    `;
}
