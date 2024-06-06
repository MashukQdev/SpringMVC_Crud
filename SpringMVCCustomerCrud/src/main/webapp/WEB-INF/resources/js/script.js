$(document).ready(function() {
	
	$('#firstName').on('input', function() {
		validateName('firstName');
		checkFormValidity();
	});
	
	$('#lastName').on('input', function() {
		validateName('lastName');
		checkFormValidity();
	});
	
	$('#dateOfBirth').on('input', function() {
		validateDateOfBirth();
		checkFormValidity();
	});
	
	$('#mobileNo').on('input', function() {
		validateMobileNo();
		checkFormValidity();
	});
	
	$('#addressLineOne').on('input', function() {
		validateAddress('addressLineOne');
		checkFormValidity();
	});
	
	$('#addressLineTwo').on('input', function() {
		validateAddress('addressLineTwo');
		checkFormValidity();
	});
	
	$('#age').on('input', function() {
		validateAge();
		checkFormValidity();
	});
	
	$('input[name="gender"]').on('change', function() {
        validateGender();
        checkFormValidity();
    });
    
	$('#email').on('input', function() {
		validateEmail();
		checkFormValidity();
	});
	
	// function to validate first name and last name
	function validateName(fieldId) {
		var fieldValue = $('#' + fieldId).val();
		var isNameValid = /^[a-zA-Z]+$/.test(fieldValue);

		if (fieldValue === '') {
			$('#' + fieldId + '-error').text(fieldId === 'firstName' ? 'First name cannot be empty.' : 'Last name cannot be empty.');
			$('#' + fieldId).addClass('error');
		} else if (!isNameValid) {
			$('#' + fieldId + '-error').text(fieldId === 'firstName' ? 'First name can only contain alphabets.' : 'Last name can only contain alphabets.');
			$('#' + fieldId).addClass('error');
		} else if (fieldValue.length < 2) {
			$('#' + fieldId + '-error').text(fieldId === 'firstName' ? 'First name must be at least 2 characters long.' : 'Last name must be at least 2 characters long.');
			$('#' + fieldId).addClass('error');
		} else if (fieldValue.length > 30) {
			$('#' + fieldId + '-error').text(fieldId === 'firstName' ? 'First name must not be longer than 30 characters.' : 'Last name must not be longer than 30 characters.');
			$('#' + fieldId).addClass('error');
		} else {
			$('#' + fieldId + '-error').text('');
			$('#' + fieldId).removeClass('error');
		}
	}
	
	// function to validate date of birth
	function validateDateOfBirth() {
        var dateOfBirth = $('#dateOfBirth').val();
        if (dateOfBirth === '') {
            $('#dateOfBirth-error').text('Date of birth cannot be empty.');
            $('#dateOfBirth').addClass('error');
        } else {
            $('#dateOfBirth-error').text('');
            $('#dateOfBirth').removeClass('error');
        }
    }
    
    // function to validate date of birth
    function validateMobileNo() {
		var mobileNo = $('#mobileNo').val();
		var isValid = /^\d+$/.test(mobileNo);      // validate whether input contain only numbers or not
		
		if (mobileNo === '') {
            $('#mobileNo-error').text('Mobile number cannot be empty.');
            $('#mobileNo').addClass('error');
        } else if (!isValid) {
            $('#mobileNo-error').text('Mobile number must contain only numbers.');
            $('#mobileNo').addClass('error');
        } else if(mobileNo.length < 10) {
			$('#mobileNo-error').text('Mobile number must be at least 10 characters long.');
            $('#mobileNo').addClass('error');
		} else if(mobileNo.length > 17) {
			 $('#mobileNo-error').text('Mobile number must not be longer than 17 characters.');
            $('#mobileNo').addClass('error');
		} else{
			$('#mobileNo-error').text('');
            $('#mobileNo').removeClass('error');
            
            var checkCondition = $('#formName').val();
            if(checkCondition === 'check') {
				checkMobileNoAvailability(mobileNo);   // Call AJAX function to check availability
			}
        }
	}
	
	//ajax function to check whether mobile number already register in database or not
	function checkMobileNoAvailability(mobileNo) {
		$.ajax({
			type: "POST",
			url: "checkMobileno",
			data: {mobileNo, mobileNo},
			success: function(response) {
				if (response.trim() !== "") {
					// if response is not empty, it means there's an error
					$('#mobileNo-error').text(response);
					$('#mobileNo').addClass('error');
				} else {
					// if response is empty, means no error so remove error class
					$('#mobileNo-error').text('');
					$('#mobileNo').removeClass('error');
				}
				checkFormValidity();
			},
			error: function(xhr, status, error) {
				// Handle error if AJAX request fails
				console.error(xhr.responseText);
			}
		});
	}
	
	// function to validate both address line
	function validateAddress(fieldId) {
		var fieldValue = $('#' + fieldId).val();
		var isAddressContainAlphabets = /[a-zA-Z]{4,}/.test(fieldValue);     // expression for address to must contain at least 4 alphabets characters
		
		if (fieldValue === '') {
			$('#' + fieldId + '-error').text(fieldId === 'addressLineOne' ? 'Address line one cannot be empty.' : 'Address line two cannot be empty.');
			$('#' + fieldId).addClass('error');
		} else if(fieldValue.length < 4) {
			$('#' + fieldId + '-error').text(fieldId === 'addressLineOne' ? 'Address line one must be at least 4 characters long.' : 'Address line two must be at least 4 characters long.');
			$('#' + fieldId).addClass('error');
		} else if(!isAddressContainAlphabets) {
			$('#' + fieldId + '-error').text(fieldId === 'addressLineOne' ? 'Address line one must contain at least 4 alphabetic characters.' : 'Address line two must contain at least 4 alphabetic characters.');
			$('#' + fieldId).addClass('error');
		} else if(fieldValue.length > 50) {
			$('#' + fieldId + '-error').text(fieldId === 'addressLineOne' ? 'Address line one must not be longer than 50 characters.' : 'Address line two must not be longer than 50 characters.');
			$('#' + fieldId).addClass('error');
		} else {
			$('#' + fieldId + '-error').text('');
			$('#' + fieldId).removeClass('error');
		}
	}
	
	// function to validate age
	function validateAge() {
		var age = $('#age').val();
		var isValidAge = /^\d+$/.test(age);        // validate whether input contain only numbers or not
		
		if(age === '') {
			$('#age-error').text('Age cannot be empty.');
			$('#age').addClass('error');
		} else if(!isValidAge) {
			$('#age-error').text('Age must contain only numbers.');
			$('#age').addClass('error');
		} else if(age.length > 3) {
			$('#age-error').text('Age must not be longer than 3 characters.');
			$('#age').addClass('error');
		} else {
			$('#age-error').text('');
			$('#age').removeClass('error');
		}
	}
	
	// function to validate gender
	function validateGender() {
        var gender = $('input[name="gender"]:checked').val();
        
        if (!gender) {
            $('#gender-error').text('Gender must be selected.');
            $('.radio-container').addClass('error');
        } else {
            $('#gender-error').text('');
            $('.radio-container').removeClass('error');
        }
    }
    
	// function to validate email
	function validateEmail() {
		var email = $('#email').val();
		 var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
		 
		if(email === '') {
			$('#email-error').text('Email cannot be empty.');
			$('#email').addClass('error');
		} else if(email.length < 5) {
			$('#email-error').text('Email must be at least 5 characters long.');
            $('#email').addClass('error');
		} else if(!emailPattern) {
			$('#email-error').text('Invalid email.');
            $('#email').addClass('error');
		} else if(email.length > 40) {
			$('#email-error').text('Email must not be longer than 40 characters.');
            $('#email').addClass('error');
		}
		else {
			$('#email-error').text('');
			$('#email').removeClass('error');
			
			var checkCondition = $('#formName').val();
            if(checkCondition === 'check') {
				checkEmailAvailability(email);       // Call AJAX function to check availability
			}
		}
	}
	
	//ajax function to check whether email already register in database or not
	function checkEmailAvailability(email) {
		$.ajax ({
			type: "POST",
			url: "checkEmail",
			data: {email, email},
			success: function(response) {
				if (response.trim() !== "") {
					// if response is not empty, it means there's an error
					$('#email-error').text(response);
					$('#email').addClass('error');
				} else {
					// if response is empty, means no error so remove error class
					$('#email-error').text('');
					$('#email').removeClass('error');
				}
				checkFormValidity();
			},
			error: function(xhr, status, error) {
				// Handle error if AJAX request fails
				console.error(xhr.responseText);
			}
		});
	}
	
	// Function to check if all fields are valid and enable form submission
	function checkFormValidity() {
    	var allFieldsValid = true; // Change isValid to allFieldsValid

    	// Check each required field for errors or empty value
    	$('.formbold-form-input input').each(function() {
        	if ($(this).hasClass('error') || ($(this).is(':radio') && !$('input[name="' + $(this).attr('name') + '"]:checked').length)) {
            	allFieldsValid = false; // Update variable name
            	return false; // break out of the loop
        	} else if ($(this).val() === '') {
            	allFieldsValid = false; // Update variable name
            	return false; // break out of the loop
        	}
    	});

    	$('button[type="submit"]').prop('disabled', !allFieldsValid).toggleClass('disabled', !allFieldsValid);
	}

	checkFormValidity();

    // Function to show alert and hide it automatically
    $('#customerForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Debug statement
        console.log("Form submit event triggered");

        // Show the alert modal
        var checkCondition = $('#formName').val();
        if(checkCondition === 'check') {
			$('#customAlertMessage').text('Data inserted successfully!');
		} else {
			$('#customAlertMessage').text('Data updated successfully!');
		}
        $('#customAlertModal').modal('show');

        // Debug statement
        console.log("Modal show function called");

        // Automatically hide the alert modal after 1 second
        setTimeout(function() {
            $('#customAlertModal').modal('hide');
            submitForm(); // Submit the form after hiding the modal
        }, 1000); // 1000 milliseconds (1 second) delay
    });

    // Function to submit the form
    function submitForm() {
        $('#customerForm').off('submit').submit(); // Submit the form
    }
	
	// Function to reload the page
    function reloadPage() {
        window.location.reload(true);
    }

    // Check if the page is being loaded for the first time
    if (!sessionStorage.getItem('loadedBefore')) {
        // Set the sessionStorage to indicate that the page has been loaded
        sessionStorage.setItem('loadedBefore', 'true');
        // Reload the page
        reloadPage();
    }

    // Listen for the pageshow event (triggered when navigating back or forward)
    window.addEventListener('pageshow', function(event) {
        // Check if the page is being shown after a navigation back
        if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
            // Reload the page
            reloadPage();
        }
    });
    
});