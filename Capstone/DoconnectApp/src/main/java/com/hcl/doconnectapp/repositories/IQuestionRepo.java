package com.hcl.doconnectapp.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.doconnectapp.entity.Question;

@Repository
public interface IQuestionRepo extends JpaRepository<Question, Integer> {

	@Query("from Question where isApproved = false")
	public List<Question> findByIsApproved();

	@Query("from Question where isApproved = true")		//is approved true or getting approved question
	public List<Question> findByIsApprovedTrue();

	@Query("from Question where topic =?1 and isApproved = true")
	public List<Question> findByTopicAndApproved(String topic);
	

	public List<Question> findQuestionByTopic(String question);

}
