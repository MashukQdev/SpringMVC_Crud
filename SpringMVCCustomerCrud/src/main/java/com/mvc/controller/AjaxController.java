package com.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mvc.service.CustomerService;

/**
 * Controller class for handling AJAX requests related to customer data validation.
 */
@Controller
public class AjaxController {
	
	@Autowired
	private CustomerService service;
	
	/**
	 * Checks if a mobile number already exists in the database.
	 * @param mobileNo The mobile number to check.
	 * @return A response string indicating whether the mobile number is already registered or not.
	 */
	@PostMapping("/checkMobileno")
	@ResponseBody
	public String checkMobileno(@RequestParam("mobileNo") String mobileNo) {
		String response = "";
		boolean isMobileNoPresent = service.isMobileNoExists(mobileNo);       // check in database whether mobile number exists or not
		
		if(isMobileNoPresent) {
			response = "Mobile no already register.";      // if mobile number present then send response as error to show
		}
		
		return response;
	}
	
	/**
	 * Checks if an email address already exists in the database.
	 * @param email The email address to check.
	 * @return A response string indicating whether the email address is already registered or not.
	 */
	@PostMapping("/checkEmail")
	@ResponseBody
	public String checkEmail(@RequestParam("email") String email) {
		String response = "";
		boolean isEmailPresent = service.isEmailExists(email);    // check in database whether email exists or not
		
		if(isEmailPresent) {
			response = "Email already register! Please use another email.";  // if email present then send response as error to show
		}
		
		return response;
	}
	
}
