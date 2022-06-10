package com.tom.algoliamoviesbackend.service;

import com.algolia.search.DefaultSearchClient;
import com.algolia.search.SearchClient;
import com.algolia.search.SearchIndex;
import com.tom.algoliamoviesbackend.configuration.properties.AlgoliaProperties;
import com.tom.algoliamoviesbackend.model.Movie;
import org.springframework.stereotype.Service;

@Service
public class AlgoliaService {

    private final SearchClient client;
    private final SearchIndex<Movie> index ;

    public AlgoliaService(AlgoliaProperties properties) {
        client = DefaultSearchClient.create(properties.getApplicationID(), properties.getApiKey());
        index = client.initIndex(properties.getIndexName(), Movie.class);
    }

    public void saveMovie(Movie movie) {
        index.saveObject(movie);
    }

    public void updateMovie(Movie movie) {
        index.partialUpdateObject(movie);
    }

    public void deleteMovie(String id) {
        index.deleteObject(id);        
    }

    
}
