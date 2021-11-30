class Map{
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

        var ubicacion=document.getElementById("map");
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño= "&size=800x600";
        //marcadores (opcional)
        var marcador = "&markers=color:yellow%7Clabel:"+ this.randomCharacter()+"%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' alt='mapa estático google' />";
        
    }

    randomCharacter(){
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var character = characters.charAt(Math.floor(Math.random() * characters.length));
        return character;
    }
}

var map = new Map()