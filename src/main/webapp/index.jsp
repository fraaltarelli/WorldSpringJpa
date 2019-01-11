<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1">
<title>World Rest</title>

<link rel="stylesheet" type="text/css" href="/css/style.css">
<!-- Import dei CSS -->

<script type="text/javascript" src="/js/continents.js"></script>
<!-- Import Javascript -->
<script type="text/javascript" src="/js/nations.js"></script>
<script type="text/javascript" src="/js/cities.js"></script>

</head>

<body>

	<div style="margin: auto; width: 30%;">
		<button class="bottoneTipoUno"
			onclick='document.getElementById("messaggioForm").innerHTML= ""; getContinents(); document.getElementById("formInsertUpdate").style.visibility="hidden"'>
			Ritorna ai continenti</button>
		&nbsp;
		<button class="bottoneTipoUno"
			onclick='document.getElementById("messaggioForm").innerHTML= ""; insertUpdateCityForm(); document.getElementById("formInsertUpdate").style.visibility="visible"'>
			Nuova Citta</button>
			<br>
			<input id="ricercaCittaText" type="text" value="">
			<button id="cercaCitta" onclick="cercaCitta()"> Cerca Citta </button>
		<br>
	</div>
	<div>
		<div id="formInsertUpdate">
			<table width="75%" border="1" align="center">
				<tr>
					<th width="34%">Seleziona la Nazione:</th>
					<th with="22%">Digita il nome della citta</th>
					<th with="22%">Digita il nome del distretto</th>
					<th with="22%">Digita il numero di abitanti</th>
				</tr>
			</table>

			<table width="75%" border="1" align="center">
				<tr>
					<td id="allNationsFormSelect" width="34%">
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

					<td width="22%"><input id="nomeCittaInserito"
						name="nomeCittaInserito" type="text"
						value=""></td>

					<td width="22%"><input id="nomeDistrettoInserito"
						name="nomeDistrettoInserito" type="text"
						value=""></td>
					<td width="22%"><input id="popolazioneInserita"
						name="popolazioneInserita" type="number" min="-5"
						value=""></td>
				</tr>

			</table>

			<input id="idCittaForm" name="id" type="hidden"
				value=""> <br>

			<div style="margin: auto; width: 30%;">
				<button onclick="preInsertUpdateCity()">Salva Citta</button>
			</div>

		</div>
	</div>

	<div id="messaggioForm" style="margin: auto; width: 30%;">
	</div>
	<div id="main-content"></div>



	<script type="text/javascript">
		getContinents()
	</script>

</body>



</html>