package com.hcl.chatbot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.chatbot.entity.Message;
import com.hcl.chatbot.repository.IMessageRepository;

@Service
public class MessageServiceImp implements IMessageService {

	@Autowired
	IMessageRepository messageRepo;
	
	@Override
	public Message sendMessage(Message message) 
	{
		System.out.println(message.getMessageId());
		System.out.println(message.getMessage());
		
		return messageRepo.save(message);
		
	}

	@Override
	public List<Message> getMessageByEmail(String email) {
		
		return messageRepo.findMessageByEmail(email);
	}

}
