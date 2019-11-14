$(document).ready(function() {
	function factorial(n) {
	  return (n != 1) ? n * factorial(n - 1) : 1;
	}

	let number = -1;
	while(number < 0) {
	  number = prompt("Hey ! Enter a positive number, we'll calculate the factorial?");
	}
	let output =  "Factorial " + number + " is : " + factorial(number);
	console.log(output);
	document.getElementById("result").textContent += output;
});