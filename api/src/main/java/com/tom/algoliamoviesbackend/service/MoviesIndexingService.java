package com.tom.algoliamoviesbackend.service;

import com.tom.algoliamoviesbackend.model.IndexingRequest;
import com.tom.algoliamoviesbackend.model.IndexingType;
import com.tom.algoliamoviesbackend.model.Movie;
import com.tom.algoliamoviesbackend.repository.IndexingRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service in charge of indexing movies.
 * Save the request in db and delete it once the indexing is successful.
 */
@Service
public class MoviesIndexingService {

    IndexingRequestRepository indexingRequestRepository;
    AlgoliaService algoliaService;

    @Autowired
    public MoviesIndexingService(IndexingRequestRepository indexingRequestRepository, AlgoliaService algoliaService) {
        this.indexingRequestRepository = indexingRequestRepository;
        this.algoliaService = algoliaService;
    }

    public void saveMovie(Movie movie) {       
        var indexingRequest = indexingRequestRepository.save(new IndexingRequest(movie.getObjectID(), IndexingType.CREATE, movie));
        algoliaService.saveMovie(movie);
        indexingRequestRepository.delete(indexingRequest);
    }
    
    public void updateMovie(Movie movie) {
        var indexingRequest = indexingRequestRepository.save(new IndexingRequest(movie.getObjectID(), IndexingType.UPDATE, movie));
        algoliaService.updateMovie(movie);
        indexingRequestRepository.delete(indexingRequest);
    }

    public void deleteMovie(String movieId) {
        var indexingRequest = indexingRequestRepository.save(new IndexingRequest(movieId, IndexingType.DELETE, null));
        algoliaService.deleteMovie(movieId);
        indexingRequestRepository.delete(indexingRequest);
    }

    public void performAllIndexingAwaiting() {
        indexingRequestRepository.findAll().forEach(indexingRequest -> performIndexingRequestThenDelete(indexingRequest));
    }

    private void performIndexingRequestThenDelete(IndexingRequest indexingRequest) {
         if (indexingRequest.getIndexingType() == IndexingType.CREATE) {
            algoliaService.saveMovie(indexingRequest.getMovie());
        } else if (indexingRequest.getIndexingType() == IndexingType.UPDATE) {
            algoliaService.updateMovie(indexingRequest.getMovie());
        } else if (indexingRequest.getIndexingType() == IndexingType.DELETE) {
            algoliaService.deleteMovie(indexingRequest.getMovieId());
        }
        indexingRequestRepository.delete(indexingRequest);
    }
}
