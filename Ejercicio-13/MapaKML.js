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

    map(ubication){
        var centro = ubication;

        var mapaGeoposicionado = new google.maps.Map(document.getElementById('map'),{
            zoom: 6,
            center:centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.mapaGeoposicionado = mapaGeoposicionado;
        
        var infoWindow = new google.maps.InfoWindow;
        var pos = ubication;
        infoWindow.setPosition(pos);
        infoWindow.setContent('Aquí');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
        
    }

    geolocate(){
        var centro = {lat: 43.3672702, lng: -5.8502461};
        this.map(centro);
    }

        

    randomCharacter(){
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var character = characters.charAt(Math.floor(Math.random() * characters.length));
        return character;
    }
    
    nuevaUbicacion(){
        var ubication = this.randomUbication();
        this.map(ubication);
    }
    //generates a random ubication of the earth
    randomUbication(){
        var latitud = Math.random() * (90 - -90) + -90;
        var longitud = Math.random() * (180 - -180) + -180;
        var ubication = {lat: latitud, lng: longitud};
        return ubication;
    }
    
    cargarKML(src){
        src = "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml"
        this.geolocate();
        var kmlLayer = new google.maps.KmlLayer(src, {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: this.mapaGeoposicionado
          });
    }
}

var map = new Map()
