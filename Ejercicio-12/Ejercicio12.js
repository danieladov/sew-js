class FicheroManager{

    constructor(){
    }


    cargarArchivos(files){
        var nombre = document.getElementById("nombreArchivo");
        var tamaño = document.getElementById("tamañoArchivo");
        var tipo = document.getElementById("tipoArchivo");
        var ultima = document.getElementById("ultimaModificacion");
        var contenido = document.getElementById("contenidoArchivo");
        var areaVisualizacion = document.getElementById("areaTexto");
        var errorArchivo = document.getElementById("errorLectura");
        nombre.innerText = "Nombre del archivo: " ;
        tamaño.innerText = "Tamaño del archivo: " ; 
        tipo.innerText = "Tipo del archivo: " ;
        ultima.innerText = "Fecha de la última modificación: ";

        for (var i = 0; i < files.length; i++) {
            var archivo = files[i];
            this.cargarArchivo(archivo);
        }
    }

    cargarArchivo(archivo){
        var nombre = document.getElementById("nombreArchivo");
        var tamaño = document.getElementById("tamañoArchivo");
        var tipo = document.getElementById("tipoArchivo");
        var ultima = document.getElementById("ultimaModificacion");
        var contenido = document.getElementById("contenidoArchivo");
        var areaVisualizacion = document.getElementById("areaTexto");
        var errorArchivo = document.getElementById("errorLectura");
        nombre.innerText += ", " + archivo.name;
        tamaño.innerText += ", " + archivo.size + " bytes"; 
        tipo.innerText += ", " + archivo.type;
        ultima.innerText += ", " + archivo.lastModifiedDate;

        //Solamente admite archivos de tipo texto
        var tipoTexto = /.*\/(json|plain|xml)/;
        if (archivo.type.match(tipoTexto)) 
            {
            var lector = new FileReader();
            lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                areaVisualizacion.innerText += lector.result;
                }      
            lector.readAsText(archivo);
            }
        else {
            errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
            }       
    
    }

    
    
}
var  file = new FicheroManager();