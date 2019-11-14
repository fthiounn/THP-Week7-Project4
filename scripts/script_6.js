$(document).ready(function() {
	const seq1 = "CCGUCGUUGCGCUACAGC";
	const seq2 = "CCUCGCCGGUACUUCUCG";


	//steps
	// 		1. separate the sequence in group of 3 letters
	//		2. translate thie letters with a switch case


	//1.
	function translateDna(sequence){
		let tmp = sequence.match(/.{1,3}/g);
		console.log(tmp.length);
		for(let i = 0; i < tmp.length ; i ++ ){
			console.log(i);
			tmp[i] = translateCodon(tmp[i]);
		}
		return tmp.join("-");
	}
	function translateCodon(codon){
		switch (codon){
		case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
			return "Sérine";
		case "CCU": case "CCC": case "CCA": case "CCG" :
			return "Proline";
		case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
			return "Leucine";
		case "UUU": case "UUC" :
			return "Phénylalanine";
		case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
			return "Arginine";
		case "UAU": case "UAC" :
			return "Tyrosine";
		case "AUU": case "AUC": case "AUA":
			return "Isoleucine";
		case "AUG":
			return "Methionine";
		case "GUU": case "GUC": case "GUA": case "GUG":
			return "Valine";
		case "ACU": case "ACC": case "ACA": case "ACG" :
			return "Threonine";
		case "GCU": case "GCC": case "GCA": case "GCG" :
			return "Alanine";
		case "UAA": case "UAC": case "UGA":
			return "Stop";
		case "CAU": case "CAC":
			return "Histidine";
		case "CAA": case "CAG":
			return "Glutamine";
		case "AAU": case "AAC":
			return "Asparagine";
		case "AAA": case "AAG":
			return "Lysine";
		case "GAU": case "GAC":
			return "Aspartic acid";
		case "GAA": case "GAG":
			return "Glutamic acid";
		case "UGU": case "UGC":
			return "Cysteine acid";
		case "UGG":
			return "Tryptophan";;
		case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
			return "Arginine";
		case "GGU": case "GGC": case "GGA": case "GGG" :
			return "Glycine";
		default:
		    console.log("Unknown Codon");
		    break;
		}
	}

	//translating sequence 1 :
	let result = translateDna(seq1);
	console.log(`The traduction of ${seq1} is :`)
	console.log(result);
	$('#title1').text(`The traduction of ${seq1} is :`);
	$('#result1').text(result);

	//translating sequence 2 :
	result = translateDna(seq2);
	console.log(`The traduction of ${seq2} is :`)
	console.log(result);
	$('#title2').text(`The traduction of ${seq2} is :`);
	$('#result2').text(result);



});
