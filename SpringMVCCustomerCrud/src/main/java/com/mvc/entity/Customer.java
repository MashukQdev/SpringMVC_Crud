package com.mvc.entity;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Entity class representing a Customer in the system.
 */
@Setter
@Getter
@ToString
@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "first_name", nullable = false, length = 30)
	private String firstName;
	
	@Column(name = "last_name", nullable = false, length = 30)
	private String lastName;
	
	@Column(name = "date_of_birth", nullable = false)
	private Date dateOfBirth;
	
	@Column(name = "mobile_no", nullable = false, length = 17)
	private String mobileNo;
	
	@Column(name = "address_line_one", nullable = false, length = 50)
	private String addressLineOne;
	
	@Column(name = "address_line_two", nullable = false, length = 50)
	private String addressLineTwo;
	
	@Column(name = "age", nullable = false, length = 3)
	private int age;
	
	@Column(name = "gender", nullable = false, length = 1)
	private int gender;
	
	@Column(name = "email", nullable = false, length = 50)
	private String email;
	
}
