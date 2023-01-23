package com.hcl.chatbot.services;

import java.util.List;

import com.hcl.chatbot.entity.Message;



public interface IMessageService
{
	public Message sendMessage(Message message);
	public List<Message> getMessageByEmail(String email);

}
