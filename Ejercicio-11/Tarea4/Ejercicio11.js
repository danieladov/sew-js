var mapaDinamicoGoogle = new Object();
function initMap(){
    var langreo = {lat: 43.2964, lng: -5.68254};
    var mapaLangreo = new google.maps.Map(document.getElementById('map'),{zoom: 8,center:langreo});
    var marcador = new google.maps.Marker({position:langreo,map:mapaLangreo});
}
mapaDinamicoGoogle.initMap = initMap;