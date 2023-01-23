package com.hcl.doconnectapp;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.web.client.RestTemplate;

import com.hcl.doconnectapp.util.EmailSenderService;

@SpringBootApplication
public class DoConnectServiceApplication {
	
//	@Autowired
//	private EmailSenderService senderService;

	public static void main(String[] args) {
		SpringApplication.run(DoConnectServiceApplication.class, args);
	}

	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
//	@EventListener(ApplicationReadyEvent.class)
//	public void sendMail()
//	{
//		senderService.sendEmail(toEmail:"charantejakothuri15@gmail.com",)
//		
//	}
}
