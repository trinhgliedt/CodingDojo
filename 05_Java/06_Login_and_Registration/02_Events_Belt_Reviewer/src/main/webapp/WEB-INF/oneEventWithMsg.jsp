<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>     
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Show event</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="Description" content="Page that shows this particular event"> <!-- Explanation that shows up in search engines goes here.-->
</head>
<body>
	<p><a href="/logout">Log out</a></p>
	<p><a href="/events">View all events</a>
	<h1><c:out value="${event.eventName}"/></h1>
	<p>Host: <c:out value="${event.eventHost.firstName}"/> <c:out value="${event.eventHost.lastName}"/></p>
	<p>Date: <c:out value="${event.eventDate}"/>
	<p>Location: <c:out value="${event.city}"/>, <c:out value="${event.state}"/></p>
	<p>Number of folks enrolled: <c:out value="${event.users.size()}"/></p>
	
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Location</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${event.users}" var="user">
		        <tr>
		            <td><c:out value="${user.firstName}"/> <c:out value="${user.lastName}"/></td>
		            <td><c:out value="${user.city}"/></td>
		        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<h3>Message wall:</h3>
	<c:forEach items="${event.messages}" var="message">
        <p><c:out value="${message.user.firstName}"/> <c:out value="${message.user.lastName}"/>: <c:out value="${message.messageText}"/></p>
        <p>-------------------------------------------------------------------------------------------------------------------------------------</p>
    </c:forEach>
    <p><c:out value="${errorMessage}"/></p>
	<form:form method="POST" action="/events/${event.id}" modelAttribute="message">
        <p>
            <form:label path="messageText">Add comment:</form:label>
            <form:errors path="messageText"/>
            <form:textarea path="messageText"/>
        </p>
        <input type="submit" value="Submit"/>
    </form:form>
</body>
</html>