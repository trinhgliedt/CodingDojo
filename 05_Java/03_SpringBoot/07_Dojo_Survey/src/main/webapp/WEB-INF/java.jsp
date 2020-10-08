<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "d" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="col-5 border mt-5 ml-5 pl-5 py-3">
	
		<h4 class="row mt-2 mb-3"><u>Submitted Info</u></h4>
		<div class="row mt-2">
			<p class="col-5">Name: </p>
			<p class="col-6"><d:out value="${name}"/></p>
		</div>
		<div class="row mt-2">
			<p class="col-5">Dojo Location: </p>
			<p class="col-6"><d:out value="${location}"/></p>
		</div>
		<div class="row mt-2">
			<p class="text-danger">Awesome you like Java! I will know how much I love Java in 3 weeks!</p>
			<p class="col-5" >Favorite Language: </p>
			<p class="col-6"><d:out value="${language}"/></p>
		</div>
		<div class="row mt-2">
			<p class="col-5 ">Comment: </p>
			<p class="col-6"><d:out value="${comment}"/></p>
		</div>
		<a href="/" class="col-3 offset-9 btn borber btn-info btn-shadow mt-3">Go Back</a>
	</div>
</body>
</html>