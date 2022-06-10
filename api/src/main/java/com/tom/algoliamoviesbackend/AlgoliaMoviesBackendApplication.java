package com.tom.algoliamoviesbackend;

import com.tom.algoliamoviesbackend.configuration.properties.AlgoliaProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
	AlgoliaProperties.class
})
public class AlgoliaMoviesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlgoliaMoviesBackendApplication.class, args);
	}

}
