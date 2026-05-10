// Función para mostrar producto
function mostrarProducto(){

    // Crear objeto producto
    let producto = {

        nombre: document.getElementById("nombre").value,
        precio: parseFloat(document.getElementById("precio").value),
        descripcion: document.getElementById("descripcion").value,
        marca: document.getElementById("marca").value,
        porcDescuento: parseFloat(document.getElementById("descuento").value),

        // Método para calcular descuento
        calcularDescuento: function(){

            let descuento = this.precio * (this.porcDescuento / 100);

            let precioFinal = this.precio - descuento;

            return precioFinal;
        }
    };

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `
        <h3>Información del Producto</h3>

        <p><b>Nombre:</b> ${producto.nombre}</p>

        <p><b>Precio:</b> $${producto.precio}</p>

        <p><b>Descripción:</b> ${producto.descripcion}</p>

        <p><b>Marca:</b> ${producto.marca}</p>

        <p><b>Descuento:</b> ${producto.porcDescuento}%</p>

        <h3>Precio final con descuento: $${producto.calcularDescuento()}</h3>
    `;
}