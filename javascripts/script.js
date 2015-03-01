(function($) {
$(document).ready(function(){



  })
})(jQuery)

  var excuses = [
	"Are you bulking? Can you teach me your tricks?",
	"I'm sorry, do you have the time? Oh shit - I'm late - ",
	"k.",
	"I can't relate."
  ];

function getExcuse() {
	var excuse = excuses[Math.floor(Math.random() * excuses.length)];
	var div = document.getElementById("excuseId");
	div.textContent = excuse;
	var text = div.textContent;
  }
