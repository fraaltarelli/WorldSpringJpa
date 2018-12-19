<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Continenti</title>
</head>
<body>
	<div style="text-align: center;">

		<form action="listaCittaCercate">
			Cerca Città: <input type="text" name="cittaCercata" size="10px"
				autocomplete="off">
		</form>
		<br> <input type="button"
			onclick="document.location.href='/runAggiornamentoForm/0';"
			value="Nuova Citta"> <br> <br>

		<c:forEach items="${allContinents}" var="continente">
			<a href="/runNazioni/${continente}"> ${continente} </a>
			<br>
		</c:forEach>
	</div>
</body>

</html>