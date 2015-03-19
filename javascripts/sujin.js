(function($) {
$(document).ready(function(){
	
	
	var excuse = counter;
	var div = document.getElementById("name_b");
	div.textContent = excuse;
	var text = div.textContent;

  })
})(jQuery)

  var xml = new XMLHttpRequest();
  xml.open("GET", "xml/sujin.xml", false);
  xml.send();
  var xmlDoc = xml.responseXML;

  var counter = xmlDoc.getElementsByTagName("count")[0].childNodes[0].nodeValue;

function incr() {
	var excuse = counter;
	var div = document.getElementById("name_b");
	div.textContent = excuse;
	var text = div.textContent;
  }
