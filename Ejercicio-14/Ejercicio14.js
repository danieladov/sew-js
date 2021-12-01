class Validator{


    validateFiles(files){
        document.getElementsByTagName("html")[0].requestFullscreen();
        //clear resultados
        document.getElementById('resultados').innerHTML = '';
        for(let i = 0; i < files.length; i++){
            this.validate(files[i]);
        }
    }

    //creates a petitio to w3c html validation api
    validate(file){
        if(file.type != "text/html"){
            return;
        }
        var lector = new FileReader();
            lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                fetch('https://validator.w3.org/nu/?out=json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    },
                    body: lector.result
            
                }).then(function (response) {
                    console.log(response);
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    validator.showErrors(json,file.name);
                });
                }      
            lector.readAsText(file);
      
    }

    showErrors(json,name){

        let errors = json.messages;
        let ul = document.createElement("ul");
        let p = document.createElement("h1");
        if(errors.length == 0){
            p.innerHTML = "El archivo "+name+" es válido";
            p.style.color = "green";
        }else{
            p.innerHTML = "Errores en el archivo: " + name;
        }
        let resultados = document.getElementById("resultados");
        resultados.appendChild(p);
        resultados.appendChild(ul);

        for(let i = 0; i < errors.length; i++){
            let li = document.createElement("li");
            li.innerHTML = "Linea: " + errors[i].lastLine + "  Columna: " + errors[i].lastColumn + "   ";
            li.innerHTML += errors[i].message;
            ul.appendChild(li);
        }
    }

    dragOverHandler(ev) {
        console.log('File(s) in drop zone');
      
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
      }

    dropHandler(ev) {
            console.log('Fichero(s) arrastrados');
          
            // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
            ev.preventDefault();
          
            if (ev.dataTransfer.items) {
              // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
              for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // Si los elementos arrastrados no son ficheros, rechazarlos
                if (ev.dataTransfer.items[i].kind === 'file') {
                    //clear resultados
                    var file = ev.dataTransfer.items[i].getAsFile();
                    document.getElementById('resultados').innerHTML = '';
                    this.validate(file);
                }
              }
            } else {
                
              // Usar la interfaz DataTransfer para acceder a el/los archivos
              for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
              }
            }
          
            // Pasar el evento a removeDragData para limpiar
            this.removeDragData(ev)
    
    }
    removeDragData(ev) {
        console.log('Removing drag data')
      
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to remove the drag data
          ev.dataTransfer.items.clear();
        } else {
          // Use DataTransfer interface to remove the drag data
          ev.dataTransfer.clearData();
        }
      }

          
    
}

var validator = new Validator();