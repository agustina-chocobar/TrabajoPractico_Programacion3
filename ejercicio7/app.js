// Array de ciudades
let JapanCitys = [

    {
        nombre: "Tokio",
        poblacion: "14 millones",
        area: "2194 km²",
        imagen: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        altitud: "40 metros",
        clima: "Templado"
    },

    {
        nombre: "Osaka",
        poblacion: "2.7 millones",
        area: "225 km²",
        imagen: "https://images.unsplash.com/photo-1590559899731-a382839e5549",
        altitud: "50 metros",
        clima: "Húmedo"
    },

    {
        nombre: "Kioto",
        poblacion: "1.4 millones",
        area: "827 km²",
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        altitud: "55 metros",
        clima: "Templado"
    },

    {
        nombre: "Hiroshima",
        poblacion: "1.1 millones",
        area: "906 km²",
        imagen: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
        altitud: "12 metros",
        clima: "Subtropical"
    },

    {
        nombre: "Sapporo",
        poblacion: "1.9 millones",
        area: "1121 km²",
        imagen: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8",
        altitud: "29 metros",
        clima: "Frío"
    },

    {
    nombre: "Nagasaki",
    poblacion: "400 mil",
    area: "406 km²",
    imagen: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    altitud: "35 metros",
    clima: "Templado"
    }
];

// Variable
let cards = "";

// Recorrer array
JapanCitys.forEach(function(ciudad){

    cards += `

    <div class="col-md-4 mb-4">

        <div class="card h-100">

            <img src="${ciudad.imagen}" class="card-img-top">

            <div class="card-body">

                <h3>${ciudad.nombre}</h3>

                <p><b>Población:</b> ${ciudad.poblacion}</p>

                <p><b>Área:</b> ${ciudad.area}</p>

                <p><b>Altitud:</b> ${ciudad.altitud}</p>

                <p><b>Clima:</b> ${ciudad.clima}</p>

            </div>

        </div>

    </div>
    `;
});

// Mostrar cards
document.getElementById("contenedorCards").innerHTML = cards;

