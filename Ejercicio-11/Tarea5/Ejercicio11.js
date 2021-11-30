class Map{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this),this.error.bind(this));
    }


    getPosition(position){
        this.longitud         = position.coords.longitude; 
        this.latitud          = position.coords.latitude;  
        this.precision        = position.coords.accuracy;
        this.geolocate();
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
        var centro = {lat: 43.3672702, lng: -5.8502461};

        var mapaGeoposicionado = new google.maps.Map(document.getElementById('map'),{
            zoom: 8,
            center:centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        var infoWindow = new google.maps.InfoWindow;
        var pos = {
            lat: this.latitud,
            lng: this.longitud
          };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Localización encontrada');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);

        
        
    }

    randomCharacter(){
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var character = characters.charAt(Math.floor(Math.random() * characters.length));
        return character;
    }
}

var map = new Map()
