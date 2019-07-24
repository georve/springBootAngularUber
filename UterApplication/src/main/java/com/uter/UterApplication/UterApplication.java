package com.uter.UterApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.uter.UterApplication.repository")
@SpringBootApplication
public class UterApplication {

	public static void main(String[] args) {
		SpringApplication.run(UterApplication.class, args);
	}

}
