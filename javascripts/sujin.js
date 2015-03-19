(function($) {
$(document).ready(function(){
	
	
	var excuse = counter;
	var div = document.getElementById("name_b");
	div.textContent = excuse;
	var text = div.textContent;

  })
})(jQuery)

  var xml = new XmlHttpRequest();
  xml.open("GET", "sujin.xml", false);
  xml.send();
  var xmlDoc = xml.responseXml;

  var counter = xmlDoc.getElementsByTagName("count")[0].childNodes[0].nodeValue();

function incr() {
	var excuse = counter;
	var div = document.getElementById("name_b");
	div.textContent = excuse;
	var text = div.textContent;
  }
