package com.tom.algoliamoviesbackend.repository;

import java.util.Optional;

import com.tom.algoliamoviesbackend.model.IndexingRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IndexingRequestRepository extends MongoRepository<IndexingRequest, String>{
    
    public Optional<IndexingRequest> findByMovieId(String movieId);
}
