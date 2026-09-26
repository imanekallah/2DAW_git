// 1. Ver oferta destacada
function verOferta() {

    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");

    titulo.textContent = "Oferta destacada de HotelBook";

    descripcion.textContent =
        "Disfruta de una estancia especial en Tánger con un 20% de descuento.";
}


// 2. Cambiar entre los dos hoteles
function cambiarHotel() {

    const imagen = document.getElementById("imagenHotel");
    const nombre = document.getElementById("nombreHotel");
    const descripcion = document.getElementById("descripcionHotel");
    const precio = document.getElementById("precioHotel");

    if (nombre.textContent === "Fairmont Tazi Palace Tánger") {

        imagen.setAttribute("src", "https://images.trvl-media.com/lodging/10000000/9600000/9597300/9597233/4449380a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill");
        imagen.setAttribute("alt", "Royal Tulip City Center Tanger");

        nombre.textContent = "Royal Tulip City Center Tanger";

        descripcion.textContent =
            "Hotel moderno de 5 estrellas situado en Tánger, " +
            "con piscina, restaurante, spa y cómodas habitaciones.";

        precio.textContent = "Desde 119 € / noche";

    } else {

        imagen.setAttribute("src", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d2/90/d3/fairmont-tazi-palace.jpg?w=900&h=-1&s=1");
        imagen.setAttribute("alt", "Fairmont Tazi Palace Tánger");

        nombre.textContent = "Fairmont Tazi Palace Tánger";

        descripcion.textContent =
            "Hotel de lujo de 5 estrellas situado en Tánger, " +
            "con piscina, spa, restaurante y habitaciones elegantes.";

        precio.textContent = "Desde 189 € / noche";
    }
}


// 3. Destacar condiciones
function destacarCondiciones() {

    const condiciones = document.getElementById("condiciones");

    if (condiciones.classList.contains("destacado")) {

        condiciones.classList.remove("destacado");

        condiciones.textContent =
            "Cancelación gratuita hasta 48 horas antes de la llegada. " +
            "Presentación normal activa.";

    } else {

        condiciones.classList.add("destacado");

        condiciones.textContent =
            "IMPORTANTE: Cancelación gratuita hasta 48 horas antes de la llegada. " +
            "Presentación destacada activa.";
    }
}


// 4. Registrar consulta
function registrarConsulta() {

    console.log("Consulta registrada correctamente.");
}


// Mostrar estado de la consulta
function mostrarEstado() {

    const estado = document.getElementById("estadoConsulta");

    estado.textContent =
        "La consulta está en revisión.";
}


// 5. Preparar reserva
function prepararReserva() {

    const alojamiento = document.getElementById("alojamientoReserva");
    const estado = document.getElementById("estadoReserva");
    const nombre = document.getElementById("nombreHotel");

    alojamiento.textContent =
        "Alojamiento elegido: " + nombre.textContent;

    estado.textContent =
        "Estado de la reserva: pendiente de confirmación.";
}


// Confirmar reserva
function confirmarReserva() {

    alert("La solicitud de reserva se ha enviado correctamente.");
}

