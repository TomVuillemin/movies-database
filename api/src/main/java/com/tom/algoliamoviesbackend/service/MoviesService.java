package com.tom.algoliamoviesbackend.service;

import java.util.List;

import com.tom.algoliamoviesbackend.model.Movie;
import com.tom.algoliamoviesbackend.repository.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoviesService {
 
    MoviesRepository moviesRepository;
    AlgoliaService algoliaService;

    @Autowired
    public MoviesService(MoviesRepository moviesRepository, AlgoliaService algoliaService) {
        this.moviesRepository = moviesRepository;
        this.algoliaService = algoliaService;
    }

    public Movie addMovie(Movie newMovie) {
        Movie savedMovie = moviesRepository.save(newMovie);
        algoliaService.saveMovie(savedMovie);
        return savedMovie;
    }

    public Movie updateMovie(Movie updatedMovie) {
        Movie savedMovie = moviesRepository.save(updatedMovie);
        algoliaService.updateMovie(savedMovie);
        return savedMovie;
    }

    public void deleteMovie(String id) {
        moviesRepository.deleteById(id);
        algoliaService.deleteMovie(id);
    }

    public Movie getMovie(String id) {
        return moviesRepository.findById(id).orElse(null);
    }

    public List<Movie> getAllMovies() {
        return moviesRepository.findAll();
    }
}
