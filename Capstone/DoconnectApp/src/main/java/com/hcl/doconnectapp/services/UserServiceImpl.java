package com.hcl.doconnectapp.services;
/*
 * Authors:Satya sai and Charan Teja Kothuri
 * Date:17/01/2023
 * Description:User operations like Login,logout,register,ask a question,give an answer,
 * uploading an image,get an image(Satyasai)
 * 
 * 
 * chatting with other users,sending a email when an user post a question or post an answer(Charan Teja),input validations
 * 
 */
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.persistence.EntityManager;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.hcl.doconnectapp.dto.AskQuestionDTO;
import com.hcl.doconnectapp.dto.PostAnswerDTO;
import com.hcl.doconnectapp.entity.Admin;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.ImageModel;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;
import com.hcl.doconnectapp.exceptions.AlreadyThere;
import com.hcl.doconnectapp.exceptions.NotFound;
import com.hcl.doconnectapp.repositories.IAdminRepo;
import com.hcl.doconnectapp.repositories.IAnswerRepo;
import com.hcl.doconnectapp.repositories.IImageModelRepo;
import com.hcl.doconnectapp.repositories.IQuestionRepo;
import com.hcl.doconnectapp.repositories.IUserRepo;
import com.hcl.doconnectapp.util.EmailSenderService;
import com.hcl.doconnectapp.vo.Message;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserRepo userRepo;

	@Autowired
	private IQuestionRepo questionRepo;

	@Autowired
	private IAnswerRepo answerRepo;

	
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private ObjectMapper mapper;
	
	@Autowired
	private JavaMailSender mailSender;			//to send a mail
	
	@Autowired
	private EmailSenderService emailSenderService;

	@Autowired
	private IAdminRepo adminRepo;

	
	@Override
	public User userLogin(String email, String password) {

		User user = userRepo.findByEmail(email);
		if (Objects.isNull(user))
			throw new NotFound();

		if (user.getPassword().equals(password)) {
			user.setIsActive(true);
			userRepo.save(user);
		} else
			throw new NotFound();
		return user;
	}

	@Override
	public String userLogout(Long userId) {

		User user = userRepo.findById(userId).orElseThrow(() -> new NotFound("User Not Found" + userId));
		user.setIsActive(false);
		userRepo.save(user);

		return "Logged Out";
	}

	@Override
	public User userRegister(User user) {

		User user1 = userRepo.findByEmail(user.getEmail());
		if (Objects.isNull(user1))
			return userRepo.save(user);

		throw new AlreadyThere();
	}

	@Override
	public Answer giveAnswer(@Valid PostAnswerDTO postAnswerDTO) {
		Answer answer = new Answer();
		User answerUser = userRepo.findById(postAnswerDTO.getUserId())
				.orElseThrow(() -> new NotFound("User Not Found"));
		Question question = questionRepo.findById(postAnswerDTO.getQuestionId())
				.orElseThrow(() -> new NotFound("Question Not Found"));
		answer.setQuestion(question);
		answer.setAnswer(postAnswerDTO.getAnswer());
		answer.setAnswerUser(answerUser);
		answer.setTopic(postAnswerDTO.getTopic());
		answerRepo.save(answer);
		List<Admin> admin = adminRepo.findAll();
		for (Admin admin1 : admin) {
			sendMail(admin1.getEmail(), "A new Answer is posted by a user in the platform");
		}
		return answer;
	}



	@Override
	public List<Answer> getAnswers(int questionId) {
		return answerRepo.findByQuestionId(questionId);
	}

	@Override
	public List<Question> getQuestions(String topic) {
		if (topic.equalsIgnoreCase("All")) {
			return questionRepo.findByIsApprovedTrue();
		}
		return questionRepo.findByTopicAndApproved(topic);
	}

	

	@Override
	public Message sendMessage(@Valid Message message) throws JsonProcessingException {
		
		String url = "http://localhost:9094/chatbot/sendMessage";
		var headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
		var entity = new HttpEntity<>(mapper.writeValueAsString(message), headers);
		ResponseEntity<Message> responseEntity = restTemplate.postForEntity(url, entity, Message.class);
		Message response = responseEntity.getBody();
		return response;


	}
	
	@Override
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
	public Question askQuestion(@Valid AskQuestionDTO askQuestionDTO) {
		
		Question question = new Question();

		User user = userRepo.findById(askQuestionDTO.getUserId()).orElseThrow(() -> new NotFound("User Not Found"));
		question.setQuestion(askQuestionDTO.getQuestion());
		question.setTopic(askQuestionDTO.getTopic());
		question.setUser(user);
		questionRepo.save(question);
		
		List<Admin> admin = adminRepo.findAll();
		for (Admin admin1 : admin) {
			sendMail(admin1.getEmail(), "A new Question is posted by a user in the platform");
		}
		return question;
	}

	@Override
	public List<Answer> findByTopic(String topic) {
		
		return answerRepo.findByTopic(topic);
	}
	
	@Override
	public List<Question> findQuestionByTopic(String question)
	{	
		
		return questionRepo.findQuestionByTopic(question);
	}

}
