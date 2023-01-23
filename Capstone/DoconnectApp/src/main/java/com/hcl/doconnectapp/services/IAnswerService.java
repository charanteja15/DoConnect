package com.hcl.doconnectapp.services;

import java.util.List;

import com.hcl.doconnectapp.entity.Answer;

public interface IAnswerService 
{
	public List<Answer> findByTopic(String topic);


}
