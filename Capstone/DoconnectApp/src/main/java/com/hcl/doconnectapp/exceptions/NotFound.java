package com.hcl.doconnectapp.exceptions;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class NotFound extends RuntimeException {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	private String errorMsg;
	public NotFound(String errorMsg) {
		super();
		this.errorMsg = errorMsg;
	}
	public NotFound() {
		
	}
	

}
