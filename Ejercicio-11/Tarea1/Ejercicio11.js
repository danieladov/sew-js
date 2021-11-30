class Locator{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }

    getPosition(position){
        this.longitud         = position.coords.longitude; 
        this.latitud          = position.coords.latitude;  
        this.precision        = position.coords.accuracy;
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