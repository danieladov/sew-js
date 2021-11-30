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

    sin(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = Math.sin(a);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    cos(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();     
        var result = Math.cos(a);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    tan(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = Math.tan(a);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }


    arcSin(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = Math.asin(a);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base

        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
    }

    arcCos(){
        if(!this.checkStack(1)){
            return;
        }
        var a = Number(this.stack.pop());
        document.getElementById("display").getElementsByTagName("p")[document.getElementById("display").getElementsByTagName("p").length-1].remove();
        var result = Math.acos(a);
        this.stack.push(result);
        var line = document.createElement("p");
        var text = document.createTextNode(result);
        line.appendChild(text);
        var display = document.getElementById("display");
        //insert line before base
        display.insertBefore(line, document.getElementById("base"));
        this.scrollDown();
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