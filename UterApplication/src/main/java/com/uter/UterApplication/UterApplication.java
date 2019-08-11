package com.uter.UterApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.TimeZone;

@EnableJpaRepositories(basePackages = "com.uter.UterApplication.repository")
@SpringBootApplication
public class UterApplication {

	public static void main(String[] args) {
		SpringApplication.run(UterApplication.class, args);
	}

        @PostConstruct
        public void init(){
      // Setting Spring Boot SetTimeZone
      TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
      }

}
