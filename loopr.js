;(function(global) {
	var Loopr = function(arr, callback) {
		return new LooprInit(arr, callback);
	};

	class LooprInit {
		constructor(arr, callback){
			this.arr = arr;
			this.len = arr.length;
			
		}
		mapped(callback) {
			this.arr.map(x => callback(x));		
		}
		begin(text){
			var modArr = [];
			this.mapped(function(x){
				var mod = `${text}${x}`;
				modArr.push(mod);
			})
			this.arr = modArr;
			return this;
		}
		end(text){
			var modArr = [];
			this.mapped(function(x){
				var mod = `${x}${text}`;
				modArr.push(mod);
			})
			this.arr = modArr;
			return this;
		}
		log(logType = "log"){
			if (logType === "log") {
				console.log(this.arr);				
			}			
			if (logType === "table") {
				var modArr = [];
				this.mapped(x => modArr.push(x));
				console.table(modArr);				
			}
			if (logType === "list") {
			this.mapped(x => console.log(x));			
			}
		}
		random(){

			var j, x, i;
    		for (i = this.len; i; i -= 1) {
        	j = Math.floor(Math.random() * i);
       		x = this.arr[i - 1];
        	this.arr[i - 1] = this.arr[j];
        	this.arr[j] = x;
    	}
  			return this;
		}
		object() {
			var modArr = {};
  			for (var i = 0; i < this.len; ++i)
   			if (this.arr[i] !== undefined) {
   				modArr[i] = this.arr;
   			}
			//this.arr = modArr;
			return this;		
		}
		math(operator, operand) {
			var modArr = [];
			var operand = Number(operand);
			var validOperators = ['+', '-', '*','/', '%'];
			var valid = false;
			var notValid = false;
			validOperators.map(function(n){
				if (n=== operator) {
					valid = true;
				}
			});
			if (!valid){
				throw "Invalid operator type (first parameter)"
			}  
			if (!operand) {
				throw "Invalid second parameter (operand)"
			}
			if (operator === "+" || operator === "add") {
			this.mapped(function(x){
				var mod = Number(x);
				if (!mod) {
					console.error("Warning: At least one array item is not a number");
				}
				mod = mod + operand
				modArr.push(mod);
			})
			}
			if (operator === "-" || operator === "subtract") {
			this.mapped(function(x){
				var mod = Number(x) - operand;
				modArr.push(mod);
			})
			}
			if (operator === "*" || operator === "multiply") {
			this.mapped(function(x){
				var mod = Number(x) * operand;
				modArr.push(mod);
			})
			}
			if (operator === "/" || operator === "divide") {
			this.mapped(function(x){
				var mod = Number(x) / operand;
				modArr.push(mod);
			})
			}
			if (operator === "%" || operator === "modulus") {
			this.mapped(function(x){
				var mod = Number(x) % operand;
				modArr.push(mod);
			})
			}
			this.arr = modArr;
			return this;			

		}
		yell(){
			var modArr = [];
			this.mapped(function(x){
				var mod = x.toString().toUpperCase();
				modArr.push(mod);
			})
			this.arr = modArr;
			return this;
		}
		whisper(){
			var modArr = [];
			this.mapped(function(x){
				var mod = x.toString().toLowerCase();
				modArr.push(mod);
			})
			this.arr = modArr;
			return this;
		}
		ul(id){
			var renderDOM = document.getElementById(id);
			var list = document.createElement("ul"); 
			renderDOM.appendChild(list);
			this.arr.map(function(x) {
				var listItem = document.createElement("li");
				var liNode = document.createTextNode(x);
				listItem.appendChild(liNode);
				list.appendChild(listItem);
			});
			return this;
		}
		ol(id){
			var renderDOM = document.getElementById(id);
			var list = document.createElement("ol"); 
			renderDOM.appendChild(list);
			this.arr.map(function(x) {
				var listItem = document.createElement("li");
				var liNode = document.createTextNode(x);
				listItem.appendChild(liNode);
				list.appendChild(listItem);
			});
			return this;
		}
		p(id){
			var renderDOM = document.getElementById(id);
			this.arr.map(function(x) {
				var listItem = document.createElement("p");
				var liNode = document.createTextNode(x);
				listItem.appendChild(liNode);
				renderDOM.appendChild(listItem);
			});
			return this;
		}
		div(id){
			var renderDOM = document.getElementById(id);
			this.arr.map(function(x) {
				var listItem = document.createElement("div");
				var liNode = document.createTextNode(x);
				listItem.appendChild(liNode);
				renderDOM.appendChild(listItem);
			});
			return this;
		}
	}
	global.Loopr = global.l$ = Loopr;

}(window));







