<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> --%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>World Rest</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
	integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
	crossorigin="anonymous">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
	
</script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<!-- Import dei CSS -->

<script type="text/javascript" src="/js/continents.js"></script>
<!-- Import Javascript -->
<script type="text/javascript" src="/js/nations.js"></script>
<script type="text/javascript" src="/js/cities.js"></script>

</head>


<body>

	<div class="container">
		<div class="row justify-content-center">
			<button type="button"
				onclick='goToHomePage()'
				class="btn btn-danger">Ritorna ai continenti</button>
			<!-- button class="bottoneTipoUno"
			onclick='document.getElementById("messaggioForm").innerHTML= ""; getContinents(); document.getElementById("formInsertUpdate").style.visibility="hidden"'>
			Ritorna ai continenti</button> -->
			&nbsp;
			<button type="button" class="btn btn-warning"
				onclick='showFormCreateCity()'>
				Nuova Citta</button>
			&nbsp;&nbsp;<input id="ricercaCittaText" type="text" value="">
			<button id="cercaCitta" onclick="cercaCitta()">Cerca Citta</button>
		</div>
		<div id="formInsertUpdate">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Seleziona la Nazione:</th>
						<th scope="col">Digita il nome della citta</th>
						<th scope="col">Digita il nome del distretto</th>
						<th scope="col">Digita il numero di abitanti</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td id="allNationsFormSelect">
							<!-- <select name="countryCode">

							<c:forEach items="${allNations}" var="nazione">
								<c:choose>
									<c:when test="${nazione.code == cittaDaModificare.countryCode}">
										<option value="${nazione.code}" selected>${nazione.name}</option>
									</c:when>
									<c:otherwise>
										<option value="${nazione.code}">${nazione.name}</option>
									</c:otherwise>
								</c:choose>
							</c:forEach>
					</select>-->

						</td>

						<td><input id="nomeCittaInserito" name="nomeCittaInserito"
							type="text" value=""></td>

						<td><input id="nomeDistrettoInserito"
							name="nomeDistrettoInserito" type="text" value=""></td>
						<td><input id="popolazioneInserita"
							name="popolazioneInserita" type="number" min="0" value=""></td>
					</tr>


					<tr>
						<td><input id="idCittaForm" name="id" type="hidden" value="">
							<button onclick="preInsertUpdateCity()">Salva Citta</button></td>
					</tr>
					<tr>
						<td>
							<div id="messaggioForm"></div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="main-content"></div>
	</div>
	




	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
		integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
		integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
		crossorigin="anonymous"></script>
</body>



</html>