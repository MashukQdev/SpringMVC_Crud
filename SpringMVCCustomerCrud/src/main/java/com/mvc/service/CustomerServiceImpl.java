package com.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mvc.entity.Customer;
import com.mvc.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository repository;

	@Override
	public boolean isMobileNoExists(String mobileNo) {
		return repository.existsByMobileNo(mobileNo);
	}

	@Override
	public boolean isEmailExists(String email) {
		return repository.existsByEmail(email);
	}

	@Override
	public void saveDetails(Customer customer) {
		repository.save(customer);
	}

	@Override
	public List<Customer> getAllCustomerDetails() {
		return repository.findAll();
	}

	@Override
	public Customer getCustomerById(int customerId) {
		return repository.findById(customerId).orElse(null);
	}

	@Override
	public void updateCustomerDetails(int cutomerId, Customer customer) {
		Customer existingCustomer = repository.findById(cutomerId).orElse(null);     // get detail of existing customer through id
		
		if(existingCustomer != null) {
			//update existed customer value with new customer values
			existingCustomer.setFirstName(customer.getFirstName());
			existingCustomer.setLastName(customer.getLastName());
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setMobileNo(customer.getMobileNo());
            existingCustomer.setAddressLineOne(customer.getAddressLineOne());
            existingCustomer.setAddressLineTwo(customer.getAddressLineTwo());
            existingCustomer.setAge(customer.getAge());
            existingCustomer.setGender(customer.getGender());
            
            repository.save(existingCustomer);    // save updated details in the database
		}
	}

	@Override
	public void deleteCustomerData(int customerId) {
		repository.deleteById(customerId);
	}
	
}
