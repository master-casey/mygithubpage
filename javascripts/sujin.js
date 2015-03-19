(function($) {
$(document).ready(function(){
	
	var div = document.getElementById("name_b");
	div.textContent = counter;
	var text = div.textContent;

  })
})(jQuery)

  var xml = new XMLHttpRequest();
  xml.open("GET", "xml/sujin.xml", false);
  xml.send();
  var xmlDoc = xml.responseXML;

  var counter = parseInt(xmlDoc.getElementsByTagName("count")[0].childNodes[0].nodeValue);

function incr() {
	counter = counter + 1;
	var div = document.getElementById("name_b");
	div.textContent = counter;
	var text = div.textContent;
  }
