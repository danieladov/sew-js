class Modificador{
    constructor(){

    }
    ocultarEncabezados(){
        $("h1,h2,h3").hide();
    }
    mostrarEncabezados(){
        $("h1,h2,h3").show();
    }
    modificarParrafo(){
        $("#parrafo1").text($("#campoParrafo").val());
    }

    añadirFila(){
        var result = "<tr>"
        $("#formTabla *").filter(":input[type=text]").each(function() {
            result += "<td>" + $(this).val() + "</td>";
            console.log($(this).val())
        })
        result += "</tr>"
        $('#tabla tr:last').after(result)

    }

    añadirColumna(){
        $('#tabla tr').append('<td>'+$("#nombreColumna").val()+'</td>')
       
    }


    añadirPadre(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).append(document.createTextNode( " - Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }
}
var modificador = new Modificador()