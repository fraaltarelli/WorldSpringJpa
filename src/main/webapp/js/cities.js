function citiesByCountryCode(countryCode) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/citta/"+countryCode+"/find-by-countrycode";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var cities = JSON.parse(this.responseText);
			displayCities(cities);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function insertUpdateCityForm(id, countryCode) {
	document.getElementById("formInsertUpdate").style.visibility="visible";
//	var xmlhttp = new XMLHttpRequest();
//	var url = "/api/citta/"+countryCode+"/find-by-countrycode";
//	xmlhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			console.log("ARRIVATA RISPOSTA!");
//			var cities = JSON.parse(this.responseText);
//			displayCities(cities);
//		}
//	}
//	xmlhttp.open("GET", url, true);
//	xmlhttp.send();
//	console.log("CHIAMATA INVIATA");
}

function deleteCityById(id, countryCode) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/citta/"+id+"/elimina";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
//			var cities = JSON.parse(this.responseText);
			citiesByCountryCode(countryCode);
		}
	}
	xmlhttp.open("DELETE", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayCities(cities){
	var html = '<table width="75%" border="1" align="center"> <tr> <th width="26%" style="text-align:center;"> Nome Citta </th>'
		       +'<th width="20%" style="text-align:center;"> Distretto </th>'
		       +'<th width="20%" style="text-align:center;"> Popolazione </th>'
		       +'<th width="18%" style="text-align:center;"> Modifica </th>'
		       +'<th width="18%" style="text-align:center;"> Elimina </th>  </tr>';
	for(var i = 0; i < cities.length; i++){
		html += '<tr> <td width="26%">'+cities[i].name+'</td>'
		+'<td width="20%">'+cities[i].district+'</td>'
		+'<td width="20%">'+cities[i].population+'</td> '
		+ '<td width="18%" style="text-align:center;"> <button onclick="insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> modifica citta </button> </td>'
//		+ '<td width="18%" style="text-align:center;"> <button onclick="document.getElementById("formInsertUpdate").style.dysplay="block" '
//		+ 'insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> modifica citta </button> </td>'
		+ '<td width="18%" style="text-align:center;"> <button onclick="deleteCityById('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> elimina citta </button> </td><tr>';
	}
	html+= '</table>'
	document.getElementById("cities").innerHTML = html;
}