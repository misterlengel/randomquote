const quote1 = "A stitch in time saves nine.";
const quote2 = "The early bird gets the worm.";
const quote3 = "A penny saved is a penny earned.";

function randomNumber(){
	var randomSelector = Math.random();
		document.getElementById("quote").innerHTML = randomSelector;	
	if (randomSelector > 0.67) {
		document.getElementById("quote").innerHTML = quote3;	
	} else if (randomSelector < 0.33) {
		document.getElementById("quote").innerHTML = quote2;	
	} else {
		document.getElementById("quote").innerHTML = quote1;	
	}
	
}

