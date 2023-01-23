package com.hcl.doconnectapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.doconnectapp.entity.Answer;
import com.hcl.doconnectapp.repositories.IAnswerRepo;

@Service
public class AnswerServiceImp implements IAnswerService 
{
	@Autowired
	IAnswerRepo answerRepo;

	@Override
	public List<Answer> findByTopic(String topic)
	{
		
		return  answerRepo.findByTopic(topic);
	}



}
