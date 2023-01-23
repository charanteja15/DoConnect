package com.hcl.doconnectapp.restcontrollers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hcl.doconnectapp.dto.AskQuestionDTO;
import com.hcl.doconnectapp.dto.PostAnswerDTO;
import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.entity.Question;
import com.hcl.doconnectapp.entity.User;
import com.hcl.doconnectapp.services.AnswerServiceImp;
import com.hcl.doconnectapp.services.IUserService;
import com.hcl.doconnectapp.vo.Message;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserRestController {

	@Autowired
	private IUserService userService;
	
	@Autowired
	AnswerServiceImp answerService;
 
	@GetMapping("/login/{email}/{password}")
	public User userLogin(@PathVariable String email, @PathVariable String password) {
		return userService.userLogin(email, password);
	}

	@GetMapping("/logout/{userId}")
	public String userLogout(@PathVariable Long userId) {
		return userService.userLogout(userId);
	}

	@PostMapping("/register")
	public User userRegister(@Valid @RequestBody User user) {
		return userService.userRegister(user);
	}

	@PostMapping("/askQuestion")
	public Question askQuestion(@Valid @RequestBody AskQuestionDTO askQuestionDTO) {
		return userService.askQuestion(askQuestionDTO);
	}

	@PostMapping("/giveAnswer")
	public Answer giveAnswer(@Valid @RequestBody PostAnswerDTO postAnswerDTO) {
		return userService.giveAnswer(postAnswerDTO);
	}

	@GetMapping("/searchQuestion/{topic}")
	public List<Answer> findByTopic(@PathVariable String topic) {
		return answerService.findByTopic(topic);
	}

	@GetMapping("/getAnswers/{questionId}")
	public List<Answer> getAnswers(@PathVariable int questionId) {
		return userService.getAnswers(questionId);
	}

	@GetMapping("/getQuestions/{topic}")
	public List<Question> getQuestions(@PathVariable String topic) {
		return userService.getQuestions(topic);
	}

	
	@PostMapping("/sendMessage")
	public Message sendMessage(@Valid @RequestBody Message message) throws JsonProcessingException{
		return userService.sendMessage(message);
	}
	
	
	@GetMapping("/searchQuestion")
	public List<Question> findQuestionByTopic(String question)
	{
		return userService.findQuestionByTopic(question);
		
	}
	
	@GetMapping("/answers/{topic}")
	public List<Answer> getAnswers(@PathVariable String topic) {
		return answerService.findByTopic(topic);
	}
}
