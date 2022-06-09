package com.tom.algoliamoviesbackend.repository;


import com.tom.algoliamoviesbackend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoviesRepository extends MongoRepository<Movie, String> {

}
