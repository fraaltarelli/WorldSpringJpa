//function getContinents() {
//	var xmlhttp = new XMLHttpRequest();
//	var url = "/api/continenti/lista";
//	xmlhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			console.log("ARRIVATA RISPOSTA!");
//			var continents = JSON.parse(this.responseText);
//			displayContinents(continents);
//		}
//	}
//	xmlhttp.open("GET", url, true);
//	xmlhttp.send();
//	console.log("CHIAMATA INVIATA");
//}

$(document).ready(function(){
  getContinents();
});

function getContinents() {
	$.ajax({
		type: "GET",
		url: "/api/continenti/lista",
		cache: false,
		dataType: "json",
		success: function (result) { 
			var continents = result;
			displayContinents(continents);
		}

	});
}

function displayContinents(continents){
	var html = '';
	for(var i = 0; i < continents.length; i++){
		var continent= continents[i];
		html += '<div> <button onclick="nationsByContinent('+"'"+ continent+"'"   +  ')" class="btn btn-primary btn-lg btn-custom-center">'+continents[i]+'</button></div>';

	}
	$("#main-content").html(html);
}

function goToHomePage(){
	$("#messaggioForm").text(""); 
	getContinents(); 
//	document.getElementById("formInsertUpdate").style.visibility="hidden"
	$("#formInsertUpdate").hide();
}