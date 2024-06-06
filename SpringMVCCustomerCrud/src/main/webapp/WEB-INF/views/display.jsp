<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 
<%@ page isELIgnored="false" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Data</title>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/style.css' />">
<script type="text/javascript" src='<c:url value="/resources/js/delete.js" />'></script> 

</head>
<body>

<div class="container">
    <h2>Registered Customer Details</h2>
    <div class="row mb-3">
        <div class="col text-right">
            <a href="registration" class="btn btn-primary" id="addEmployeeBtn"><i class="fas fa-plus"></i> Add Customer</a>
        </div>
    </div>
    <div class="table-container">
        <table class="table table-striped custom-table-width">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            	<c:forEach var="customer" items="${customers}">
                	<tr>
                    	<td>${customer.id}</td>
                    	<td>${customer.firstName}</td>
                    	<td>${customer.lastName}</td>
                    	<td>${customer.dateOfBirth}</td>
                    	<td>${customer.mobileNo}</td>
                    	<td>${customer.addressLineOne}, ${customer.addressLineTwo}</td>
                    	<td>${customer.age}</td>
                    	<td>
                            <c:choose>
                                <c:when test="${customer.gender == 0}">
                                    Male
                                </c:when>
                                <c:otherwise>
                                    Female
                                </c:otherwise>
                            </c:choose>
                        </td>
                    	<td>${customer.email}</td>
                    	<td>
                        	<a href="update?id=${customer.id}" class="action-icons mr-2" title="Edit"><i class="fas fa-edit"></i></a>
                        	<a href="deleteData?id=${customer.id}" class="delete-link action-icons mr-2" title="Delete"><i class="fas fa-trash-alt"></i></a>
                    	</td>
                	</tr>
                </c:forEach>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>
</div>

<!-- Modal HTML For Customized Alert-->
<div class="modal fade" id="customAlertModal" tabindex="-1" role="dialog" aria-labelledby="customAlertModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content custom-modal-content">
            <div class="modal-body custom-modal-body" id="customAlertMessage">
                <!-- Alert message will be dynamically inserted here -->
            </div>
        </div>
    </div>
</div>

<!-- Modal HTML For Delete Confirmation -->
<div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteConfirmationModalLabel">Confirm Deletion</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this record?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" id="confirmDeleteBtn">Delete</button>
            </div>
        </div>
    </div>
</div>

</body>
</html>
