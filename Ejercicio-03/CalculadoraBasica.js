class Calculadora{
	constructor(){
		this.storedValue = 0;

	}
	digito(digito){
		document.getElementById("display").innerHTML += Number(digito);
	}

	punto(){
		document.getElementById("display").innerHTML += ".";
	}

	suma(){
		document.getElementById("display").innerHTML += "+";
	}

	resta(){
		document.getElementById("display").innerHTML += "-";
	}
	multiplicacion(){
		document.getElementById("display").innerHTML += "*";
	}
	division(){
		document.getElementById("display").innerHTML += "/";
	}
	
	//clear the calculator
	borrar(){
		document.getElementById("display").innerHTML = "";
	}
	
	mrc(){
		this.storedValue = Number(document.getElementById("display").innerHTML);
	}

	mMenos(){
		this.storedValue = this.storedValue - Number(eval(document.getElementById("display").innerHTML));
	}
	mMas(){
		this.storedValue = this.storedValue + Number(eval(document.getElementById("display").innerHTML));
	}

	igual(){
		try{
			document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
		}catch(e){
			document.getElementById("display").innerHTML = "Error";
		}
	}

	removeLast(){
		var display = document.getElementById("display").innerHTML;
		document.getElementById("display").innerHTML = display.substring(0, display.length - 1);
	}	
	


	
	
}



document.addEventListener('keydown', (event) => {
	const keyName = event.key;
	console.log(keyName);
	if(keyName == '='){
		calculadora.igual();
	}
	if(keyName == 'Enter'){
		calculadora.igual();
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
		calculadora.suma();
	}else if(keyName == '-'){
		calculadora.resta();
	}else if(keyName == '.'){
		calculadora.punto();
	}else if(keyName == "Backspace"){
		calculadora.removeLast()
	}
});
var calculadora = new Calculadora()


