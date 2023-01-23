package com.hcl.doconnectapp.services;


import java.util.List;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.doconnectapp.dto.ResponseDTO;
import com.hcl.doconnectapp.entity.Admin;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;
import com.hcl.doconnectapp.exceptions.AlreadyThere;
import com.hcl.doconnectapp.exceptions.NotFound;
import com.hcl.doconnectapp.repositories.IAdminRepo;
import com.hcl.doconnectapp.repositories.IAnswerRepo;
import com.hcl.doconnectapp.repositories.IQuestionRepo;
import com.hcl.doconnectapp.repositories.IUserRepo;
import com.hcl.doconnectapp.util.EmailSenderService;

/**
Author:Nanditha
Date:18-01-2023
Description: Admin Service
**/

@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private IAdminRepo adminRepo;

	@Autowired
	private IQuestionRepo questionRepo;

	@Autowired
	private IAnswerRepo answerRepo;

	@Autowired
	private IUserRepo userRepo;

	@Autowired
	private EmailSenderService emailSenderService;

	@Override
	public Admin adminLogin(String email, String password) {

		Admin admin = adminRepo.findByEmail(email);
		if (Objects.isNull(admin))
			throw new NotFound();

		if (admin.getPassword().equals(password)) {
			admin.setIsActive(true);
			adminRepo.save(admin);
		} else
			throw new NotFound();
		return admin;
	}

	@Override
	public String adminLogout(Long adminId) {

		Admin admin = adminRepo.findById(adminId).orElseThrow(() -> new NotFound("Admin not found"));
		admin.setIsActive(false);
		adminRepo.save(admin);
		return "Logged Out";
	}

	@Override
	public Admin adminRegister(Admin admin) {

		Admin admin1 = adminRepo.findByEmail(admin.getEmail());
		if (Objects.isNull(admin1))
			return adminRepo.save(admin);

		throw new AlreadyThere();
	}

	@Override
	public List<Question> getUnApprovedQuestions() {
		return questionRepo.findByIsApproved();
	}

	@Override
	public List<Answer> getUnApprovedAnswers() {
		return answerRepo.findByIsApproved();
	}
	
	@Override
	public List<Question> getApprovedQuestions() {
		
		return questionRepo.findByIsApprovedTrue();
	}

	@Override
	public List<Answer> getApprovedAnswers() {
		
		return answerRepo.findByIsApprovedTrue();
	}
	
	@Override
	public Question approveQuestion(int questionId) {
		Question question = questionRepo.findById(questionId).orElseThrow(() -> new NotFound("Question not found"));
		question.setIsApproved(true);
		question = questionRepo.save(question);
		return question;
	}

	@Override
	public Answer approveAnswer(Long answerId) {
		Answer answer = answerRepo.findById(answerId).orElseThrow(() -> new NotFound("Answer not found"));
		answer.setIsApproved(true);
		answer = answerRepo.save(answer);
		return answer;
	}

	@Override
	public ResponseDTO deleteQuestion(int questionId) {
		ResponseDTO responseDTO = new ResponseDTO();
		Question question = questionRepo.findById(questionId).orElseThrow(() -> new NotFound("Question not found"));
		questionRepo.delete(question);
		responseDTO.setMsg("Question removed");
		return responseDTO;
	}

	@Override
	public ResponseDTO deleteAnswer(Long answerId) {
		ResponseDTO responseDTO = new ResponseDTO();

		Answer answer = answerRepo.findById(answerId).orElseThrow(() -> new NotFound("Answer not found"));

		answerRepo.delete(answer);
		responseDTO.setMsg("Answer Removed");
		return responseDTO;
	}

	public Boolean sendMail(String emailId, String type) {
		try {
			emailSenderService.sendEmail(emailId, type, type);
			return true;
		} catch (Exception e) {
			System.out.println("error in sending mail " + e);
			return false;
		}
	}

	
	@Override
	public User getUser(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public List<User> getAllUser() {
		return userRepo.findAll();
	}

	
	//logic to Unapprove a question posted  by user
	@Override
	public Question unApproveQuestion(int questionId) {
		Question question = questionRepo.findById(questionId).orElseThrow(() -> new NotFound("Question not found"));
		question.setIsApproved(false);
		question = questionRepo.save(question);
		return question;
	}
	
	//logic to Unapprove an answer posted  by user
		@Override
		public Answer UnApproveAnswer(Long answerId) {
			Answer answer = answerRepo.findById(answerId).orElseThrow(() -> new NotFound("Answer not found"));
			answer.setIsApproved(false);
			answer = answerRepo.save(answer);
			return answer;
		}
}
