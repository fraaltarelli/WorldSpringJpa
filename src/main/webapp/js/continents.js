function getContinents() {
	var xmlhttp = new XMLHttpRequest();
	var url = "/api/continenti/lista";
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("ARRIVATA RISPOSTA!");
			var continents = JSON.parse(this.responseText);
			displayContinents(continents);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("CHIAMATA INVIATA");
}

function displayContinents(continents){
	var html = '';
	for(var i = 0; i < continents.length; i++){
		html +='<p class="custom-list-element">'+continents[i]+'</p>';
	}
	document.getElementById("main-content").innerHTML = html;
}