class Calculadora{

    constructor(){
        this.stack  = [];
        this.first = true;
    }

    enter(){
        this.stack.push(document.getElementById("base").innerHTML);
        var line = document.createElement("p");
        var text = document.createTextNode(document.getElementById("base").innerHTML);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        document.getElementById("base").innerHTML = "";
        console.log(document.getElementById("base").innerHTML);
        this.scrollDown();
    }

    sum(){
        if(!this.checkStack()){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = a + b;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    resta(){
        if(!this.checkStack()){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = b - a;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    multiplicacion(){
        if(!this.checkStack()){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = a * b;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    division(){
        if(!this.checkStack()){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = a / b;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    punto(){
        document.getElementById("base").innerHTML += ".";
    }   

    //adds the calories of an apple to the stack
    manzana(){
        if(this.first){
            this.first = false;
            document.getElementById("base").innerHTML = "";
        }
        var b ;
        if(!this.checkStack(1)){
            b = 105;
        }else{
            var a = Number(this.stack.pop());
            document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
            var b = a + 105;     
        }   
        this.stack.push(b);
        var line = document.createElement("p");
        var text = document.createTextNode(b);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    //adds the calories of a banana to the stack
    banana(){
        if(this.first){
            this.first = false;
            document.getElementById("base").innerHTML = "";
        }
        var b ;
        if(!this.checkStack(1)){
            b = 105;
        }else{
            var a = Number(this.stack.pop());
            document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
            var b = a + 105;     
        }
        this.stack.push(b);
        var line = document.createElement("p");
        var text = document.createTextNode(b);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    //adds the calories of 250 grames of paella to the stack
    paella(){
        if(this.first){
            this.first = false;
            document.getElementById("base").innerHTML = "";
        }
        var b ;
        if(!this.checkStack(1)){
            b = 105;
        }else{
            var a = Number(this.stack.pop());
            document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
            var b = a + 105;     
        }
        this.stack.push(b);
        var line = document.createElement("p");
        var text = document.createTextNode(b);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    //adds the calories of a croissant to the stack
    croissant(){
        if(this.first){
            this.first = false;
            document.getElementById("base").innerHTML = "";
        }
        var b ;
        if(!this.checkStack(1)){
            b = 105;
        }else{
            var a = Number(this.stack.pop());
            document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
            var b = a + 105;     
        }
        this.stack.push(b);
        var line = document.createElement("p");
        var text = document.createTextNode(b);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }


    //stores in the stack the substraction from the first element and the burned calories by playing tenis
    tennis(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = 584 
        var result = a - b;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }   


    //stores in the stack the substraction from the first element and the burned calories by running
    correr(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var b = 510;; 
        var result = a - b;
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    } 

    //Computes the body mass index using the first item in the stack as the weight and the second as the height
    bmi(){
        if(!this.checkStack()){
            return;
        }
        var weight = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var height = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = weight / (height * height);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    removeLast(){
        var base = document.getElementById("base");
        base.innerHTML = base.innerHTML.substring(0, base.innerHTML.length - 1);
    }

    
            

    //check if there are at least 2 items in the stack
    checkStack(length){
        if(length == undefined)
            return this.stack.length >= 2;
        return this.stack.length >= length;
    }

    //scrolls the display to the bottom
    scrollDown(){
        var display = document.getElementById("display");
        display.scrollTop = display.scrollHeight;
    }


    digito(num){
        if(this.first){
            this.first = false;
            document.getElementById("base").innerHTML = "";
        }
        document.getElementById("base").innerHTML += Number(num);
        console.log("digit" + num);
        this.scrollDown();
    }

    borrar(){
        document.getElementById("base").innerHTML = "";
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        this.first = true;
        this.scrollDown();
        //clear the stack
        this.stack = [];
    }



}

var calculadora = new Calculadora();

document.addEventListener("keydown",(event)=>{
    const keyName = event.key;
	console.log(keyName);
	
	if(keyName == 'Enter'){
		calculadora.enter();
	}

	else if(keyName == 'c'){
		calculadora.borrar();
	}
	else if(!isNaN(keyName)){
		calculadora.digito(keyName)
	}
	else if(keyName == '*'){
		calculadora.multiplicacion();
	}
	else if(keyName == '/'){
		calculadora.division();
	}else if(keyName == '+'){
		calculadora.sum();
	}else if(keyName == '-'){
		calculadora.resta();
	}else if(keyName == '.'){
		calculadora.punto();
	}else if(keyName == "Backspace"){
		calculadora.removeLast()
	}
})