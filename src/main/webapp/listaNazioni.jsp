<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Nazioni</title>
</head>
<body>
	<div style="text-align: center;">

		<br> <a href="/runContinenti">
			<button>ritorna ai continenti</button> <br>
		</a> <br>
		<table width="50%" border="1" align="center">
			<tr>
				<th width="50%">NomeNazione</th>
			</tr>
		</table>


		<c:forEach items="${nationsByContinent}" var="nazione">
			<a href="/runCitta/${nazione.code}">
				<table width="50%" border="1" align="center">
					<tr>
						<td width="50%">${nazione.name}</td>
					</tr>
				</table>
			</a>
		</c:forEach>

	</div>

</body>

</html>