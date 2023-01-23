package com.hcl.doconnectapp.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.doconnectapp.entity.Admin;

@Repository
public interface IAdminRepo extends JpaRepository<Admin, Long> {

	public Admin findByEmail(String email);

}
