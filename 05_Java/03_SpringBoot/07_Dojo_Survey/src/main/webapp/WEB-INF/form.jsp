<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="col-5 border mt-5 ml-5">
		<form class="p-4" method="POST" action="/result">
			<div class="row mt-2">
				<label class="col-5">Your Name: </label>
				<input class="col-6" type="text" name="name"/>
			</div>
			<div class="row mt-2">
				<label class="col-5" >Dojo Location: </label>
				<select class="col-6" name="location">
					<option value="San Jose">San Jose</option>
					<option value="Chicago">Chicago</option>
					<option value="Dallas">Dallas</option>
					<option value="Oakland">Oakland</option>
				</select>
			</div>
			<div class="row mt-2">
				<label class="col-5" >Favorite Language: </label>
				<select class="col-6" name="language">
					<option value="Python">Python</option>
					<option value="Javascript">Javascript</option>
					<option value="Java">Java</option>
					<option value="C#">C#</option>
				</select>
			</div>
			<div class="row mt-2">
				<label class="col-12 mt-33">Comment (optional): </label><br>
				<textarea class="mt-3 ml-2" name="comment" rows="4" cols="55"></textarea>
			</div>
		<button class="col-2 offset-9 btn borber btn-info btn-shadow mt-3">Submit</button>
		</form>
	</div>
</body>
</html>