class Meteo {
    constructor(apikey){
        this.apikey = apikey;
    }
    baseUrl = "http://api.openweathermap.org/data/2.5/";
    baseIconUrl = "https://openweathermap.org/img/w/"

    writeToHtml(data){
        $("#nombre").text("Ciudad: " + data.name + "  -  " + data.weather[0].description)

        document.getElementById("icon").style.visibility="visible";
        document.getElementById("icon").style.display="block";

        $("#icon").attr("src",this.baseIconUrl + data.weather[0].icon + ".png");

        $("#temp").text("Temperatura: " + data.main.temp + "°C (min: " + data.main.temp_min + "°C, max: " + data.main.temp_max + "°C)")
        $("#humedad").text("Humedad: " + data.main.humidity + "%")
        $("#presion").text("Presión: " + data.main.pressure +" milímetors")
        $("#visibilidad").text("Visibilidad: " + data.visibility + " metros")

        $("#actualizacion").text("Última actualización: " +  new Date(data.dt *1000).toLocaleTimeString())
    }
    
    getTiempoCiudad(ciudad){
        var url = this.baseUrl + "weather?&units=metric&lang=es&q=" + ciudad + "&appid="+ this.apikey;
        $.ajax({
            dataType: "json",
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