package com.hcl.doconnectapp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.doconnectapp.entity.User;

@Repository
public interface IUserRepo extends JpaRepository<User, Long> {

	public User findByEmail(String email);
	
}
