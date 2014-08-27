// Encoding for the standard input
process.stdin.setEncoding('utf8');

// require readline module.
var rl = require('readline');

// #####################################################################################################################
// ################################################ C L A S S E S ######################################################
// #####################################################################################################################

function Calculator() {
	// constructor //
	this.result = 0;
	this.operator = '';
	this.value = 0;
}

Calculator.prototype.requestToInputValues = function(){
	console.log('<< Please input some numbers... >>');
	console.log(this.result + ' ' + this.operator + ' ?');
	console.log('');	
};

Calculator.prototype.requestToInputFirstValues = function(){
	console.log('<< Please input some numbers... >>');
	console.log('?');
	console.log('');
};

Calculator.prototype.requestToSelectOperators = function(){
	console.log('<< Please select operators... >>');
	console.log('+  or  -  or  /  or  *');
	console.log('');
	console.log(this.result + ' ?');
	console.log('');
};

Calculator.prototype.outputResult = function(){
	console.log('= ' + this.result);
	console.log('');
};

// #####################################################################################################################
// ############################################## F U N C T I O N S ####################################################
// #####################################################################################################################

function change(value, operaton, result){
	switch(operaton){
	case '+':
		return add(value, result);
	case '-':
		return sub(value, result);
	case '*':
		return times(value, result);
	case '/':
		return divide(value, result);
	default:
		break;
	}
}

/**
 * Main proccess functions
 * 
 */

function inputValue(cb) {
	var i = rl.createInterface(process.stdin,process.stdout, null);
	i.question('? \n', function(answer){
		i.close();
		process.stdin.destroy();
		return cb(null,answer);
	});
}

// #####################################################################################################################
// ################################################### M A I N #########################################################
// #####################################################################################################################

console.log('Starting Javascript Calculator...');

// init Calculator
var calculator = new Calculator();
var result,operator,value;
console.log(calculator);

// input test
inputValue(function(err,answer){
	console.log('value is ' + answer);
});

// END