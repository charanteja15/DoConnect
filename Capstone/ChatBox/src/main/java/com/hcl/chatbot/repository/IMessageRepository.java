package com.hcl.chatbot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.chatbot.entity.Message;

@Repository
public interface IMessageRepository extends JpaRepository<Message, Integer>
{
	
	List<Message> findMessageByEmail(String email);
}