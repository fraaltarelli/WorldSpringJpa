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


function insertUpdateCityForm(id, countryCode, name, population, district) {
	allNations(countryCode);
	document.getElementById("formInsertUpdate").style.visibility="visible";

	if(name!=null)
		document.getElementById("nomeCittaInserito").value= name;
	else
		document.getElementById("nomeCittaInserito").value= "";

	if(district!=null)
		document.getElementById("nomeDistrettoInserito").value= district;
	else
		document.getElementById("nomeDistrettoInserito").value= "";

	if(population!=null)
		document.getElementById("popolazioneInserita").value= population;
	else
		document.getElementById("popolazioneInserita").value= "0";

	if(id!=null) document.getElementById("idCittaForm").value= id;
	else document.getElementById("idCittaForm").value= "0";

//	if(coutryCode!=null) document.getElementById("countryCodeCittaForm").value= id;
//	else document.getElementById("countryCodeCittaForm").value= "";

}

function preInsertUpdateCity(){
	var idCittaForm = document.getElementById("idCittaForm").value;
	var countryCodeInserito = document.getElementById("countryCodeInserito").value;
	var nomeCittaInserito = document.getElementById("nomeCittaInserito").value;
	var popolazioneInserita = document.getElementById("popolazioneInserita").value;
	var nomeDistrettoInserito = document.getElementById("nomeDistrettoInserito").value;
//	<!-- ('+"'"+ document.getElementById("idCittaForm").value+"'"   +  ','+"'"+ document.getElementById("countryCodeInserito").value+"'"  +  ','+"'"+ document.getElementById("nomeCittaInserito").value+"'"    +  ','+"'"+ document.getElementById("popolazioneInserita").value+"'"   +   ','+"'"+ document.getElementById("nomeDistrettoInserito").value+"'" + ')' -->
//	insertUpdateCity('+"'"+ idCittaForm+"'"   +  ','+"'"+ countryCodeInserito+"'"  +  ','+"'"+ nomeCittaInserito+"'"    +  ','+"'"+ popolazioneInserita+"'"   +   ','+"'"+ nomeDistrettoInserito+"'" + ')' 
	insertUpdateCity( idCittaForm, countryCodeInserito, nomeCittaInserito, popolazioneInserita, nomeDistrettoInserito ); 


}


function insertUpdateCity(id, countryCode, name, population, district) {

	var xmlhttp = new XMLHttpRequest();
	var url = "/api/citta/inserisci-modifica";
	var json = {
			'id' : id,
			'name' : name,
			'district' : district,
			'population' : population,
			'countryCode' : countryCode
	}
	var jsonString = JSON.stringify(json);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");

			citiesByCountryCode(countryCode);
			document.getElementById("salvataggioRiuscito").innerHTML= "Salvataggio riuscito della citta "+name;
		}
	}
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(jsonString);
	console.log("CHIAMATA INVIATA");
}





function deleteCityById(id, countryCode) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/citta/"+id+"/elimina";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
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
		+ '<td width="18%" style="text-align:center;"> <button onclick=" insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"  +  ','+"'"+ cities[i].name+"'"    +  ','+"'"+ cities[i].population+"'"   +   ','+"'"+ cities[i].district+"'" + ')" class="nazione-list-element"> modifica citta </button> </td>'

//		+ "<td width='18%' style='text-align:center;'> <button onclick= 'insertUpdateCityForm("+"'"+ jsonString+"'"   + ")'  > modifica citta </button> </td>"

//		+ '<td width="18%" style="text-align:center;"> <button onclick="document.getElementById("formInsertUpdate").style.dysplay="block" '
//		+ 'insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> modifica citta </button> </td>'

		+ '<td width="18%" style="text-align:center;"> <button onclick="deleteCityById('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> elimina citta </button> </td><tr>';
		document.getElementById("main-content").innerHTML = html; 
	}
	html+= '</table>'
		document.getElementById("main-content").innerHTML = html;
}