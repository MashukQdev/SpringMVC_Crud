package com.mvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mvc.entity.Customer;

/**
 * Repository interface for Customer entity, extending JpaRepository.
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	/**
	 * Checks if a customer with the given mobile number exists in the database.
	 * @param mobileNo The mobile number to check.
	 * @return True if a customer with the mobile number exists, false otherwise.
	 */
	public boolean existsByMobileNo(String mobileNo);    
	
	/**
	 * Checks if a customer with the given email address exists in the database.
	 * @param email The email address to check.
	 * @return True if a customer with the email address exists, false otherwise.
	 */
	public boolean existsByEmail(String email);         
	
}
