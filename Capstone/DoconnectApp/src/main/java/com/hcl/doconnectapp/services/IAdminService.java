package com.hcl.doconnectapp.services;


import java.util.List;

import com.hcl.doconnectapp.dto.ResponseDTO;
import com.hcl.doconnectapp.entity.Admin;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;

/**
Author:Johnson
Date:18-01-2023
Description: Admin Service
**/

public interface IAdminService {

	public Admin adminLogin(String email, String password);

	public String adminLogout(Long adminId);

	public Admin adminRegister(Admin admin);

	public List<Question> getUnApprovedQuestions();

	public List<Answer> getUnApprovedAnswers();

	public Question approveQuestion(int questionId);

	public Answer approveAnswer(Long answerId);
	
	public List<Question> getApprovedQuestions();

	public List<Answer> getApprovedAnswers();

	public ResponseDTO deleteQuestion(int questionId);

	public ResponseDTO deleteAnswer(Long answerId);

	public User getUser(String email);

	public List<User> getAllUser();

	//unapprove a question posted by user
	Question unApproveQuestion(int questionId);
	//unapprove an answer posted by user
	Answer UnApproveAnswer(Long answerId);



}
