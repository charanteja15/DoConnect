package com.hcl.chatbot.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.chatbot.entity.Message;
import com.hcl.chatbot.services.MessageServiceImp;



@RestController
@RequestMapping("/chatbot")
@CrossOrigin("http://localhost:3000")
public class MessageRestController
{
	@Autowired
	MessageServiceImp messageService;
	
	@PostMapping("/sendMessage")
	public Message sendMessage(@RequestBody Message message)
	{
		return messageService.sendMessage(message);
	}
	
	@GetMapping("/getMessageByEmail/{email}")
	public List<Message> getMessageByEmail(@PathVariable String email)
	{
		return messageService.getMessageByEmail(email);
	}

}
