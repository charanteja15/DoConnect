package com.hcl.doconnectapp.services;

/**
*
*@author kunal
*/

import java.util.List;

import javax.validation.Valid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hcl.doconnectapp.dto.AskQuestionDTO;
import com.hcl.doconnectapp.dto.PostAnswerDTO;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;
import com.hcl.doconnectapp.vo.Message;

public interface IUserService {

	public User userLogin(String email, String password);

	public String userLogout(Long userId);

	public User userRegister(@Valid User user);

	public Question askQuestion(@Valid AskQuestionDTO askQuestionDTO);

	public Answer giveAnswer(@Valid PostAnswerDTO postAnswerDTO);


	public List<Answer> getAnswers(int questionId);

	public List<Question> getQuestions(String topic);
	

	public List<Answer> findByTopic(String topic);


	public Message sendMessage(@Valid Message message) throws JsonProcessingException;

	Boolean sendMail(String emailId, String type);  //email

	
	List<Question> findQuestionByTopic(String question);







}
