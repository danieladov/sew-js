class api{
    constructor(apikey){
        this.apikey = apikey;
    }

    getGoldPrice(){
        document.getElementById("loader").style.visibility="visible"
        document.getElementById("loader").style.display="block"
        $("#precio").text("")

        var currency = $("#currency").val()
        var settings = {
            "url": "https://www.goldapi.io/api/XAU/"  +currency,
            "method": "GET",
            "timeout": 0,
            "headers": {
              "x-access-token": this.apikey,
              "Content-Type": "application/json"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $("#precio").text(response.price + " " + response.currency)
            document.getElementById("loader").style.visibility="hidden"
            document.getElementById("loader").style.display="none"

          });
    }
}

var apiObject = new api("goldapi-14iwfytkvuqospe-io")