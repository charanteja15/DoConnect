package com.hcl.chatbot.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Message 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int messageId;
	
	
	private String message; 
	
	
	private String email;
	
	
	public Message() {
		super();
	}

	

	
	public Message(int messageId, String message, String email) {
		super();
		this.messageId = messageId;
		this.message = message;
		this.email = email;
	}


	public int getMessageId() {
		return messageId;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Message [messageId=" + messageId + ", message=" + message + ", email=" + email + "]";
	}
	
	
	
}
