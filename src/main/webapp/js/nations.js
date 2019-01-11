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

function allNations(countryCode) {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/nazioni/find-all";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var allNations = JSON.parse(this.responseText);
			var html="";
			html+= '<select id="countryCodeInserito" name="countryCode">';
			for(var i = 0; i < allNations.length; i++){
				if(allNations[i].code==countryCode)
					html+='<option value='+allNations[i].code+' selected>'+allNations[i].name+'</option>';
				else
					html+='<option value='+allNations[i].code+' >'+allNations[i].name+'</option>';
			}
			html+='</select>';
			document.getElementById("allNationsFormSelect").innerHTML = html;
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
		html += '<button onclick="citiesByCountryCode('+"'"+ countryCode+"'"   +  ')" class="nazione-list-element">'+nationName+'</button>';
	}
	document.getElementById("main-content").innerHTML = html;
}