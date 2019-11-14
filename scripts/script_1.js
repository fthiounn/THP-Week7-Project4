



$(document).ready(function() {
	let name = "";
	while(name == "") {
	  name = prompt("Hey you ! whats your name ?");
	}
	let output = `Hello ${name} !!`
	console.log(output);
	document.getElementById("demo").textContent += output;
});