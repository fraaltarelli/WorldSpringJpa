function nationsByContinent(continente) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/nazioni/"+continente+"/by-continent";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var nations = JSON.parse(this.responseText);
			displayNations(nations);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function allNations() {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/nazioni/find-all";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var allNations = JSON.parse(this.responseText);
			displayCities(cities);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}


function displayNations(nations){
	var html = '';
	for(var i = 0; i < nations.length; i++){
		var nationName= nations[i].name;
		var countryCode = nations[i].code;
//		var button = document.createElement("BUTTON");
//		var t = document.createTextNode(nationName);
//		button.setAttribute("onclick",   'citiesByCountryCode('+"'"+countryCode+"'"+')';
//		button.setAttribute("class",  "nazione-list-element");
//		button.appendChild(t);
		html += '<button onclick="citiesByCountryCode('+"'"+ countryCode+"'"   +  ')" class="nazione-list-element">'+nationName+'</button>';
		}
	document.getElementById("main-content").innerHTML = html;
}