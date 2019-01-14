//function citiesByCountryCode(countryCode) {
//var xmlhttp = new XMLHttpRequest();
//var url = "/api/citta/"+countryCode+"/find-by-countrycode";
//xmlhttp.onreadystatechange = function() {
//if (this.readyState == 4 && this.status == 200) {
//console.log("ARRIVATA RISPOSTA!");
//var cities = JSON.parse(this.responseText);
//displayCities(cities);
//}
//}
//xmlhttp.open("GET", url, true);
//xmlhttp.send();
//console.log("CHIAMATA INVIATA");
//}
function citiesByCountryCode(countryCode) {
	$.ajax({
		type: "GET",
		url: "/api/citta/"+countryCode+"/find-by-countrycode",
		cache: false,
		dataType: "json",
		success: function (data) { 
			var cities = data;
			displayCities(cities);
		}

	});
}

//function cercaCitta() {
//var cittaCercata = document.getElementById("ricercaCittaText").value;
//var xmlhttp = new XMLHttpRequest();
//var url = "/api/citta/find-by-partofname?cittaCercata="+cittaCercata;
//xmlhttp.onreadystatechange = function() {
//if (this.readyState == 4 && this.status == 200) {
//console.log("ARRIVATA RISPOSTA!");
//var cities = JSON.parse(this.responseText);
//displayCities(cities);
//}
//}
//xmlhttp.open("GET", url, true);
//xmlhttp.send();
//console.log("CHIAMATA INVIATA");
//}

function cercaCitta() {
	$(document).ready(function(){
		var cittaCercata = $("#ricercaCittaText").val();
		$.ajax({
			type: "GET",
			url: "/api/citta/find-by-partofname?cittaCercata="+cittaCercata,
			cache: false,
			dataType: "json",
			success: function (data) { 
				var cities = data;
				displayCities(cities);
			}

		});
	})
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

//		if(coutryCode!=null) document.getElementById("countryCodeCittaForm").value= id;
//		else document.getElementById("countryCodeCittaForm").value= "";

	}

	function preInsertUpdateCity(){
		var trovatoErrore=false;
		var idCittaForm = document.getElementById("idCittaForm").value;
		var countryCodeInserito = document.getElementById("countryCodeInserito").value;
		var nomeCittaInserito = document.getElementById("nomeCittaInserito").value;

		if(nomeCittaInserito=="") {
			trovatoErrore=true;
			document.getElementById("messaggioForm").innerHTML= "Inserire il nome dela citta";
		} 
		if(nomeCittaInserito.length>20) {
			trovatoErrore=true;
			document.getElementById("messaggioForm").innerHTML= "Il nome dela citta e' troppo lungo (max 20 caratteri)";
		} 

		var popolazioneInserita = document.getElementById("popolazioneInserita").value;
		if(!(popolazioneInserita>=0 && popolazioneInserita <1000000000)) {
			trovatoErrore=true;
			document.getElementById("messaggioForm").innerHTML= "Popolazione non inserita correttamente";
		} 

		var nomeDistrettoInserito = document.getElementById("nomeDistrettoInserito").value;
		if(nomeDistrettoInserito=="") {
			trovatoErrore=true;
			document.getElementById("messaggioForm").innerHTML= "Inserire il nome del distretto";
		} 
		if(nomeDistrettoInserito.length>20) {
			trovatoErrore=true;
			document.getElementById("messaggioForm").innerHTML= "Il nome del distretto e' troppo lungo (max 20 caratteri)";
		} 
//		<!-- ('+"'"+ document.getElementById("idCittaForm").value+"'"   +  ','+"'"+ document.getElementById("countryCodeInserito").value+"'"  +  ','+"'"+ document.getElementById("nomeCittaInserito").value+"'"    +  ','+"'"+ document.getElementById("popolazioneInserita").value+"'"   +   ','+"'"+ document.getElementById("nomeDistrettoInserito").value+"'" + ')' -->
//		insertUpdateCity('+"'"+ idCittaForm+"'"   +  ','+"'"+ countryCodeInserito+"'"  +  ','+"'"+ nomeCittaInserito+"'"    +  ','+"'"+ popolazioneInserita+"'"   +   ','+"'"+ nomeDistrettoInserito+"'" + ')' 
		if(trovatoErrore==false){
			insertUpdateCity( idCittaForm, countryCodeInserito, nomeCittaInserito, popolazioneInserita, nomeDistrettoInserito ); 
		}


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
				document.getElementById("messaggioForm").innerHTML= "Salvataggio riuscito della citta "+name;
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
				document.getElementById("messaggioForm").innerHTML= "Eliminazione riuscita";
				citiesByCountryCode(countryCode);
			}
		}
		xmlhttp.open("DELETE", url, true);
		xmlhttp.send();
		console.log("CHIAMATA INVIATA");
	}

	function displayCities(cities){
		var html = '<table class="table"> <thead> <tr> <th scope="col"> Nome Citta </th>'
			+'<th scope="col"> Distretto </th>'
			+'<th scope="col"> Popolazione </th>'
			+'<th scope="col"> Modifica </th>'
			+'<th scope="col"> Elimina </th>  </tr> </thead> <tbody>';

		for(var i = 0; i < cities.length; i++){
			html += '<tr> <td >'+cities[i].name+'</td>'
			+'<td >'+cities[i].district+'</td>'
			+'<td >'+cities[i].population+'</td> '
			+ '<td > <button class="btn btn-primary" onclick=" insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"  +  ','+"'"+ cities[i].name+"'"    +  ','+"'"+ cities[i].population+"'"   +   ','+"'"+ cities[i].district+"'" + ')" class="nazione-list-element"> modifica citta </button> </td>'

//			+ "<td width='18%' style='text-align:center;'> <button onclick= 'insertUpdateCityForm("+"'"+ jsonString+"'"   + ")'  > modifica citta </button> </td>"

//			+ '<td width="18%" style="text-align:center;"> <button onclick="document.getElementById("formInsertUpdate").style.dysplay="block" '
//			+ 'insertUpdateCityForm('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> modifica citta </button> </td>'

			+ '<td > <button class="btn btn-secondary" onclick="deleteCityById('+"'"+ cities[i].id+"'"   +  ','+"'"+ cities[i].countryCode+"'"   +  ')" class="nazione-list-element"> elimina citta </button> </td><tr>';
			document.getElementById("main-content").innerHTML = html; 
		}
		html+= '</tbody> </table>'
			document.getElementById("main-content").innerHTML = html;
	}
