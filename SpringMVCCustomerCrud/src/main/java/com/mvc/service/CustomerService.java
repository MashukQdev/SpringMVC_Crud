package com.mvc.service;

import java.util.List;
import com.mvc.entity.Customer;

/**
 * Service interface for managing Customer entities.
 */
public interface CustomerService {

	/**
	 * Checks if a customer with the given mobile number exists in the database.
	 * @param mobileNo The mobile number to check.
	 * @return True if a customer with the mobile number exists, false otherwise.
	 */
	public boolean isMobileNoExists(String mobileNo);
	
	/**
	 * Checks if a customer with the given email address exists in the database.
	 * @param email The email address to check.
	 * @return True if a customer with the email address exists, false otherwise.
	 */
	public boolean isEmailExists(String email);
	
	/**
	 * Saves customer details to the database.
	 * @param customer The Customer object to save.
	 */
	public void saveDetails(Customer customer);
	
	/**
	 * Retrieves all customer details from the database.
	 * @return A list of Customer objects representing all customers in the database.
	 */
	public List<Customer> getAllCustomerDetails();
	
	/**
	 * Retrieves a specific customer by their ID from the database.
	 * @param customerId The ID of the customer to retrieve.
	 * @return The Customer object with the specified ID.
	 */
	public Customer getCustomerById(int customerId);
	
	/**
	 * Updates the details of a specific customer in the database.
	 * @param cutomerId The ID of the customer to update.
	 * @param customer The updated Customer object with new details.
	 */
	public void updateCustomerDetails(int cutomerId, Customer customer);
	
	/**
	 * Deletes the data of a specific customer from the database.
	 * @param customerId The ID of the customer whose data will be deleted.
	 */
	public void deleteCustomerData(int customerId);
	
}

