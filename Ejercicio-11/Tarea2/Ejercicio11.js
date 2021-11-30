class Locator{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this),this.error.bind(this));
    }

    getPosition(position){
        this.longitud         = position.coords.longitude; 
        this.latitud          = position.coords.latitude;  
        this.precision        = position.coords.accuracy;
    }
    error(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
            }
        var texto = document.getElementById("texto");
        var datos = "<p>" +this.mensaje+"</p>"
        texto.innerHTML = datos;
    }

    geolocate(){
        var texto = document.getElementById("texto");
        var datos = "<p>Tu longitud es "+ this.longitud + "</p>"
        datos += "<p>Tu latitud es "+ this.latitud + "</p>"
        datos += "<p>Los datos tienen una precision de " + this.precision + " metros</p>"
        texto.innerHTML = datos
    }
}

var locator = new Locator()