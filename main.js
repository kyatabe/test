// Encoding for the standard input
process.stdin.setEncoding('utf8');


// #####################################################################################################################
// ################################################ C L A S S E S ######################################################
// #####################################################################################################################

function Calculator() {
	// constractor //
	this.result = 0;
	this.operator = '';
	this.value = 0;
}

Calculator.prototype = {
	constructor: Calculator,
	requestToInputValues: function(){
		requestToInputValues(this.result,this.operator);
	},
	requestToSelectOperators: function(){
		requestToSelectOperators(this.result);
	},
	requestToInputFirstValues: function(){
		requestToInputFirstValues();
	},
	outputResult: function(){
		outputResult(this.result);
	}
};

// #####################################################################################################################
// ############################################## F U N C T I O N S ####################################################
// #####################################################################################################################


/**
 * @desc Read the standard input.
 *
 * @param  {Function} cb - `cb(err, readData)`
 */
function readUserInput(cb) {
	var chunk = '';
	process.stdin.on('readable', function () {
		var tmp = process.stdin.read();
		if (tmp !== null) {
			chunk += tmp;
		}
	});
	process.stdin.on('end', function () {
		return cb(null, chunk);
	});
}

/**
 * UI functions
 *
 */

function outputResult(result){
	console.log('= ' + result);
	console.log('');
}

function requestToInputFirstValues() {
	console.log('<< Please input some numbers... >>');
	console.log('?');
	console.log('');
}

function requestToSelectOperators(result){
	console.log('<< Please select operators... >>');
	console.log('+  or  -  or  /  or  *');
	console.log('');
	console.log(result + ' ?');
	console.log('');
}

function requestToInputValues(result,operator){
	console.log('<< Please input some numbers... >>');
	console.log(result + ' ' + operator + ' ?');
	console.log('');
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

/**
 * Test function
 *
 */

function inputByLineTest() {
	var i = rl.createInterface(process.stdin,process.stdout, null);
	i.question('This is input test. Please input some words and hit enter key.', function(answer){
		console.log('You just typed that "' + answer + '"');
		i.close();
		process.stdin.destroy();
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

// require readline module.
var rl = require('readline');

// output test

//calculator.requestToInputFirstValues();
//calculator.outputResult();
//calculator.requestToSelectOperators();
//calculator.requestToInputValues();

/*
readUserInput(function (err, name) {
	console.log('Your name is ' + name);
});
*/

// input test
inputValue(function(err,answer){
	console.log('value is ' + answer);
});

// END