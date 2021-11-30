class Meteo {
    constructor(apikey){
        this.apikey = apikey;
    }
    baseUrl = "http://api.openweathermap.org/data/2.5/";
    baseIconUrl = "https://openweathermap.org/img/w/"

    writeToHtml(data){
        $("#nombre").text("Ciudad: " + $("city",data).attr("name") + "  -  " + $("weather",data).attr("value"))
        $("#icon").attr("src",this.baseIconUrl + $("weather",data).attr("icon")+ ".png");
        document.getElementById("icon").style.visibility="visible";
        document.getElementById("icon").style.display="block";

        $("#temp").text("Temperatura: " +$('temperature',data).attr("value") + "°C (min: " + $('temperature',data).attr("min") + "°C, max: " + $('temperature',data).attr("max") + "°C)")
        $("#humedad").text("Humedad: " + $('humidity',data).attr("value") + $('humidity',data).attr("unit"))
        $("#presion").text("Presión: " +  $('pressure',data).attr("value") + $('pressure',data).attr("unit"))
        $("#visibilidad").text("Visibilidad: " + $('visibility',data).attr("value") + " metros")

        var horaMedida = $('lastupdate',datos).attr("value");
        var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
        horaMedidaMiliSeg1970 -= new Date().getTimezoneOffset() * 60 * 1000;
        var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
        $("#actualizacion").text("Última actualización: " +  horaMedidaLocal)
    }
    
    getTiempoCiudad(ciudad){
        var url = this.baseUrl + "weather?units=metric&lang=es&mode=xml&q=" + ciudad + "&appid="+ this.apikey;
        $.ajax({
            dataType: "xml",
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data)
                meteo.writeToHtml(data)           
            },
            error:function(){
                $("#nombre").text("Hubo un error!")

            }
        })
    }


}

var meteo = new Meteo("863d2fde37dc89053ffc07f0bc10aec4");