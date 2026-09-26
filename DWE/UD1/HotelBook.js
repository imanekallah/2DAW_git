
function verOfertaDestacada(){
    document.getElementById("titulo").textContent = 
        "Oferta destacada de HotelBook"
    document.getElementById("descripcion").textContent =
    "Disfruta de una estancia especial en Tánger con un 20% de descuento."

}

function verOtroAlojamiento(){
    const imagen = document.getElementById("imagenHotel");
    const imageninicial = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d2/90/d3/fairmont-tazi-palace.jpg?w=900&h=-1&s=1";
    const imagenAlternativa = "https://images.trvl-media.com/lodging/10000000/9600000/9597300/9597233/4449380a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill";
    const nombre = document.getElementById("nombreHotel");
    const descripcion = document.getElementById("descripcionHotel");
    const precio = document.getElementById("preciHotel");
    const asteriscos = document.getElementById("asteriscos");
    const monsatrandoImagenInicial = imagen.getAttribute("src") === imageninicial;
    if(monsatrandoImagenInicial){
        imagen.setAttribute("src", imagenAlternativa);
        imagen.setAttribute("alt", "Royal Tulip City Center Tanger")

    }
}