package com.tom.algoliamoviesbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a request to index a movie.
 * The request is saved in the db and deleted once the indexing is successful.
 * We save only the most recent request for a specific movie.
 */
@Data
@Document(collection = "indexingRequests")
@AllArgsConstructor
public class IndexingRequest {
    @Id
    private String movieId;
    private IndexingType indexingType;
    private Movie movie;
}
