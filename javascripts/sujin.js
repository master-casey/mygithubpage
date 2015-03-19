(function($) {
$(document).ready(function(){
	
	
	var excuse = excuses[Math.floor(Math.random() * excuses.length)];
	var div = document.getElementById("counter");
	div.textContent = excuse;
	var text = div.textContent;

  })
})(jQuery)

  var excuses = [
	"Are you bulking? Can you teach me your tricks?",
	"I'm sorry, do you have the time? Oh shit - I'm late - ",
	"k.",
	"I can't relate.",
	"Good for you - I'm still single.",
	"Sorry, I thought you were someone else.",
	"Do you know how irregular periods can be until they're unhealthy?",
	"I will use my broken arm bone to stab your still beating heart from your ribcage.",
	"You do you.",
	"Fuck, marry, kill - a dog, cat, or me?",
	"Does it look like my fly is unzipped? Because I decided to stop buttoning my jeans.",
	"...Sorry, I'm on my phone right now.",
	"/smile and lick teeth repeatedly/",
	"Do you always talk this much?",
	"That pilot dude from Firefly had it coming.",
	"So, what are some lines you use when you get rid of guests who overstay their welcome?"
  ];

function incr() {
	var excuse = excuses[Math.floor(Math.random() * excuses.length)];
	var div = document.getElementById("counter");
	div.textContent = excuse;
	var text = div.textContent;
  }
