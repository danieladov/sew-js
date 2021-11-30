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
		this.storedValue = this.storedValue - Number(document.getElementById("display").innerHTML);
	}
	mMas(){
		this.storedValue = this.storedValue + Number(document.getElementById("display").innerHTML);
	}

	igual(){
		try{
			document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
		}catch(e){
			document.getElementById("display").innerHTML = "Syntax error";
		}
	}

	removeLast(){
		var display = document.getElementById("display").innerHTML;
		document.getElementById("display").innerHTML = display.substring(0, display.length - 1);
	}

	

	


	
	
}

class CalculadoraCientifica extends Calculadora {
	constructor(){
		super();	
		this.format = "deg"	
	}

	DegToRad(degrees){
		return degrees * (Math.PI / 180);
	}

	//convert gradians to radians
	gradToRad(gradians){
		return gradians * (Math.PI / 200);
	}

	hyp(){
		if(!this.isHyperbolic){
			document.getElementById("sin").innerHTML = "sinh";
			document.getElementById("cos").innerHTML = "cosh";
			document.getElementById("tan").innerHTML = "tanh";
			this.isHyperbolic = true;
			this.isArco = false;
		}else{
			document.getElementById("sin").innerHTML = "sin";
			document.getElementById("cos").innerHTML = "cos";
			document.getElementById("tan").innerHTML = "tan";
			this.isHyperbolic = false;
		}
	}

	//changes sin cos and tan buttons to arcsin arccos and arctan
	up(){
		if(!this.isArco){
			document.getElementById("sin").innerHTML = "asin";
			document.getElementById("cos").innerHTML = "acos";
			document.getElementById("tan").innerHTML = "atan";
			this.isArco = true;
			this.isHyperbolic = false;
		}else{
			document.getElementById("sin").innerHTML = "sin";
			document.getElementById("cos").innerHTML = "cos";
			document.getElementById("tan").innerHTML = "tan";
			this.isArco = false;
		}
	}


	sin(){
		if(this.format == "deg"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.sinh(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.asin(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
			else{
			document.getElementById("display").innerHTML = Math.sin(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
		}else if(this.format == "rad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.sinh(Number(document.getElementById("display").innerHTML));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.asin(Number(document.getElementById("display").innerHTML));
			}
			else{
			document.getElementById("display").innerHTML = Math.sin(Number(document.getElementById("display").innerHTML));
			}
		}else if(this.format == "grad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.sinh(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.asin(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
			else{
			document.getElementById("display").innerHTML = Math.sin(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
		}
	}

	cos(){
		if(this.format == "deg"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.cosh(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.acos(Nthis.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
			else{
			document.getElementById("display").innerHTML = Math.cos(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
		}else if(this.format == "rad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.cosh(Number(document.getElementById("display").innerHTML));
			} else if(this.isArco){
				document.getElementById("display").innerHTML = Math.acos(Number(document.getElementById("display").innerHTML));
			}

			else{
			document.getElementById("display").innerHTML = Math.cos(Number(document.getElementById("display").innerHTML));
			}
		}else if(this.format == "grad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.cosh(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.acos(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
			else{
			document.getElementById("display").innerHTML = Math.cos(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
		}
	}



	tan(){
		if(this.format == "deg"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.tanh(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
			else if(this.isArco){
				document.getElementById("display").innerHTML = Math.atan(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
			else{
			document.getElementById("display").innerHTML = Math.tan(this.DegToRad(Number(document.getElementById("display").innerHTML)));
			}
			
		}else if(this.format == "rad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.tanh(Number(document.getElementById("display").innerHTML));
			}else 	if(this.isArco){
				document.getElementById("display").innerHTML = Math.atan(Number(document.getElementById("display").innerHTML));
			}

			else{
			document.getElementById("display").innerHTML = Math.tan(Number(document.getElementById("display").innerHTML));
			}
		}else if(this.format == "grad"){
			if(this.isHyperbolic){
				document.getElementById("display").innerHTML = Math.tanh(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}else if(this.isArco){
				document.getElementById("display").innerHTML = Math.atan(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
	
			else{
			document.getElementById("display").innerHTML = Math.tan(this.gradToRad(Number(document.getElementById("display").innerHTML)));
			}
		}
	}

	log(){
		document.getElementById("display").innerHTML = Math.log(document.getElementById("display").innerHTML);
	}

	exp(){
		document.getElementById("display").innerHTML += "*10**";
	}

	raiz(){
		document.getElementById("display").innerHTML = Math.sqrt(document.getElementById("display").innerHTML);
	}

	mod(){
		document.getElementById("display").innerHTML += "%";
	}

	pi(){
		document.getElementById("display").innerHTML += Math.PI;
	}

	factorial(){
		var num = document.getElementById("display").innerHTML;
		var fact = 1;
		for(var i = 1; i <= num; i++){
			fact = fact * i;
		}
		document.getElementById("display").innerHTML = fact;
	}

	opuesto(){
		document.getElementById("display").innerHTML = -document.getElementById("display").innerHTML;
	}

	parentesisAbre(){
		document.getElementById("display").innerHTML += "(";
	}

	parentesisCierra(){
		document.getElementById("display").innerHTML += ")";
	}

	cuadrado(){
		document.getElementById("display").innerHTML = Math.pow(document.getElementById("display").innerHTML, 2);
	}

	pow(){
		document.getElementById("display").innerHTML += "**";
	}

	pow10(){
		document.getElementById("display").innerHTML = Math.pow(10,document.getElementById("display").innerHTML);
	}
	
	//clear everything
	clearAll(){
		document.getElementById("display").innerHTML = "";
		this.storedValue = 0;
	}

	//change number format, can be deg, rad or grad
	changeFormat(){
		if(this.format == "deg"){
			this.format = "rad";
			document.getElementById("format").innerHTML = "Rad";
		}else if(this.format == "rad"){
			this.format = "grad";
			document.getElementById("format").innerHTML = "Grad";
		}else if(this.format == "grad"){
			this.format = "deg";
			document.getElementById("format").innerHTML = "Deg";
		}
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
var calculadora = new CalculadoraCientifica()


