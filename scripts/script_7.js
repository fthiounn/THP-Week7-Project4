$(document).ready(function() {
	function computeAwnser(question){
		console.log(question);
		if (question[question.length-1] == "?"){
			return "Yeah sure, lets do that .. ";
		}else if (question == question.toUpperCase() && question.length > 0){
			return "Wow wow wow, don't take that tone with me mister !!";
		}else if(question.includes("fortnite")){
			return "Sure my dude, let's play. I'll send you an invite !";
		}else if(question == ""){
			return "nothing to say, what a surprise";
		}else{
			return "whatever man"
		}
	}
	for (;;) {
		question = prompt("You again ! what do you want from me ? - enter q to quit -");
		if (question === null) { return; }
		console.log(computeAwnser(question));
	}
});