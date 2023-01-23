package com.hcl.doconnectapp.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.doconnectapp.entity.Answer;

@Repository
public interface IAnswerRepo extends JpaRepository<Answer, Long> {

	@Query("from Answer where question.id = ?1 and isApproved = true")
	public List<Answer> findByQuestionId(int questionId);

	@Query("from Answer where isApproved = false")
	public List<Answer> findByIsApproved();
	
	@Query("from Answer where isApproved = true")		//is approved true or getting approved answer
	public List<Answer> findByIsApprovedTrue();
	
	
	public List<Answer> findByTopic(String topic);


}
