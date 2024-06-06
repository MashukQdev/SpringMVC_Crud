<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page isELIgnored="false" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Registration</title>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/style.css' />">
<script type="text/javascript" src='<c:url value="/resources/js/script.js" />'></script> 

</head>
<body>

<div class="form-container">
    <h2 class="form-title">Customer Registration Form</h2>
    <form id="customerForm" action="saveData" method="post">
    
        <div class="formbold-form-input">
            <label for="firstName">First Name <span class="hestrick">*</span> </label>
            <input type="text" id="firstName" name="firstName" class="formbold-form-input-two" value="${customer.firstName}">
            <span id="firstName-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="lastName">Last Name <span class="hestrick">*</span> </label>
            <input type="text" id="lastName" name="lastName" class="formbold-form-input-two" value="${customer.lastName}">
            <span id="lastName-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="dateOfBirth">Date of Birth <span class="hestrick">*</span> </label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" class="formbold-form-input-two" value="${customer.dateOfBirth}">
            <span id="dateOfBirth-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="mobileNo">Mobile No <span class="hestrick">*</span> </label>
            <input type="text" id="mobileNo" name="mobileNo" class="formbold-form-input-two" value="${customer.mobileNo}">
            <span id="mobileNo-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="addressLineOne">Address Line 1 <span class="hestrick">*</span> </label>
            <input type="text" id="addressLineOne" name="addressLineOne" class="formbold-form-input-two" value="${customer.addressLineOne}">
            <span id="addressLineOne-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="addressLineTwo">Address Line 2 <span class="hestrick">*</span> </label>
            <input type="text" id="addressLineTwo" name="addressLineTwo" class="formbold-form-input-two" value="${customer.addressLineTwo}">
            <span id="addressLineTwo-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="age">Age <span class="hestrick">*</span> </label>
            <input type="number" id="age" name="age" class="formbold-form-input-two" value="${customer.age}">
            <span id="age-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="gender">Gender <span class="hestrick">*</span> </label>
            <div class="radio-container" >
        		<input type="radio" id="male" name="gender" value="0" class="radio-property" ${customer.gender == 0 ? 'checked' : ''}>
        		<span class="male-property" >Male</span>
        		<input type="radio" id="female" name="gender" value="1" class="radio-property" ${customer.gender == 1 ? 'checked' : ''}>
        		<span class="male-property" >Female</span>
            </div>
            <span id="gender-error" class="error-message"></span>
        </div>
        
        <div class="formbold-form-input">
            <label for="email">Email <span class="hestrick">*</span> </label>
            <input type="text" id="email" name="email" class="formbold-form-input-two" value="${customer.email}">
            <span id="email-error" class="error-message"></span>
        </div>
        
        <input type="hidden" name="formName" id="formName" value="check">
        <button type="submit" class="formbold-btn disabled">Register Now</button>
        
    </form>
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

</body>
</html>
