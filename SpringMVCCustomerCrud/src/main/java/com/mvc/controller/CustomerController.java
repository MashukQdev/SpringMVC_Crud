package com.mvc.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mvc.entity.Customer;
import com.mvc.service.CustomerService;

/**
 * Controller class for managing customer-related operations.
 */
@Controller
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	/**
	 * Retrieves all customer details from the database and adds them to the model for display.
	 * @param model The Spring MVC model object to pass data to the view.
	 * @return The name of the view to render the customer data in the UI.
	 */
	@RequestMapping(value = {"","/","display"})
	public String displayAllData(Model model) {
		List<Customer> customers = service.getAllCustomerDetails();       // create list to store all customer data
		
		model.addAttribute("customers", customers);                 // add list to model
		
		return "display";
	}
	
	/**
	 * Displays the registration page.
	 * @return The name of the view to render the registration form in the UI.
	 */
	@RequestMapping("/registration")
	public String displayRegistrationPage() {
		return "registration";
	}
	
	/**
	 * Saves customer data submitted from the registration form.
	 * @param customer The Customer object containing the data submitted from the form.
	 * @return String redirect to the "display" endpoint to show all customer details after saving the data.
	 */
	@PostMapping("/saveData")
	public String saveData(@ModelAttribute Customer customer) {
	    service.saveDetails(customer);      // save customer details in database
	    
	    return "redirect:/display";
	}
	
	/**
	 * Displays the update page with the details of a specific customer for editing.
	 * @param customerId The ID of the customer to be edited.
	 * @param model The Model object to add attributes for the view.
	 * @return The "update" view with the details of the specified customer for editing.
	 */
	@RequestMapping("/update")
	public String displayUpdatePage(@RequestParam("id") int customerId, Model model) {
		Customer customer = service.getCustomerById(customerId);
		
		model.addAttribute("customer", customer);
		
		return "update";
	}
	
	/**
	 * Updates the details of a specific customer based on the provided ID.
	 * @param customerId The ID of the customer to be updated.
	 * @param customer The Customer object containing the updated details.
	 * @return String redirect to the "display" page after updating the customer details.
	 */
	@PostMapping("/updateData")
	public String updateCustomerDetails(@RequestParam("id") int customerId,
										@ModelAttribute Customer customer) {
		service.updateCustomerDetails(customerId, customer);
		
		return "redirect:/display";
	}
	
	/**
	 * Deletes the data of a specific customer based on the provided ID.
	 * @param customerId The ID of the customer whose data will be deleted.
	 * @return String redirect to the "display" page after deleting the customer data.
	 */
	@RequestMapping("/deleteData")
	public String deleteCustomerData(@RequestParam("id") int customerId) {
		service.deleteCustomerData(customerId);
		
		return "redirect:/display";
	}
	
}

