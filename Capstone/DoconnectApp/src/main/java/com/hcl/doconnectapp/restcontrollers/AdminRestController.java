package com.hcl.doconnectapp.restcontrollers;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.doconnectapp.dto.ResponseDTO;
import com.hcl.doconnectapp.entity.Admin;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;
import com.hcl.doconnectapp.services.IAdminService;

/**
Author:Nanditha
Date:18-01-2023
Description: Admin Controller
**/

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000")
public class AdminRestController {

	@Autowired
	private IAdminService adminService;

	@GetMapping("/login/{email}/{password}")
	public Admin adminLogin(@PathVariable String email, @PathVariable String password) {
		return adminService.adminLogin(email, password);
	}
	// change the resonse to admin or user

	@GetMapping("/logout/{adminId}")
	public String adminLogout(@PathVariable Long adminId) {
		return adminService.adminLogout(adminId);
	}

	@PostMapping("/register")
	public Admin adminRegister(@Valid @RequestBody Admin admin) {
		return adminService.adminRegister(admin);
	}

	@GetMapping("/getUnApprovedQuestions")
	public List<Question> getUnApprovedQuestions() {
		return adminService.getUnApprovedQuestions();
	}

	@GetMapping("/getUnApprovedAnswers")
	public List<Answer> getUnApprovedAnswers() {
		return adminService.getUnApprovedAnswers();
	}

	@PutMapping("/approveQuestion/{questionId}")
	public Question approveQuestion(@PathVariable int questionId) {
		return adminService.approveQuestion(questionId);
	}
	
	//to Unapprove a question posted by user
	@PutMapping("/unApproveQuestion/{questionId}")
	public Question unApproveQuestion(@PathVariable int questionId)
	{
		return adminService.unApproveQuestion(questionId);
		
	}
	
	@PutMapping("/approveAnswer/{answerId}")
	public Answer approveAnswer(@PathVariable Long answerId) {
		return adminService.approveAnswer(answerId);
	}
	
	//to Unapprove an answer posted by User
	@PutMapping("/unApproveAnswer/{answerId}")
	public Answer UnApproveAnswer(@PathVariable Long answerId)
	{
		return adminService.UnApproveAnswer(answerId);
		
	}
	@DeleteMapping("/deleteQuestion/{questionId}")
	public ResponseDTO deleteQuestion(@PathVariable int questionId) {
		return adminService.deleteQuestion(questionId);
	}

	@DeleteMapping("/deleteAnswer/{answerId}")
	public ResponseDTO deleteAnswer(@PathVariable Long answerId) {
		return adminService.deleteAnswer(answerId);
	}

	@GetMapping("/getUser/{email}")
	public User getUser(@PathVariable String email) {
		return adminService.getUser(email);
	}

	@GetMapping("/getAllUsers")
	public List<User> getAllUser() {
		return adminService.getAllUser();
	}
	
	@GetMapping("/getApprovedQuestions")
	public List<Question> getApprovedQuestions()
	{
		return adminService.getApprovedQuestions();
	}
	
	@GetMapping("/getApprovedAnswers")
	public List<Answer> getApprovedAnswers()
	{
		return adminService.getApprovedAnswers();
	}
}
