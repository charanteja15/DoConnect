package com.hcl.doconnectapp.vo;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class Message {

//	@NotBlank(message = "provide the user Details")
//	private String fromUser;
//	@NotBlank(message = "provide message")
//	private String message;
//	
//	
//	public Message() {
//		super();
//	}
//	public Message(@NotBlank(message = "provide the user Details") String fromUser,
//			@NotBlank(message = "provide message") String message) {
//		super();
//		this.fromUser = fromUser;
//		this.message = message;
//	}
//	public String getFromUser() {
//		return fromUser;
//	}
//	public void setFromUser(String fromUser) {
//		this.fromUser = fromUser;
//	}
//	public String getMessage() {
//		return message;
//	}
//	public void setMessage(String message) {
//		this.message = message;
//	}
	
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
