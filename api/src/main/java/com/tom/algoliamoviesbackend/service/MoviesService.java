package com.tom.algoliamoviesbackend.service;

import java.util.List;

import com.tom.algoliamoviesbackend.model.Movie;
import com.tom.algoliamoviesbackend.repository.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoviesService {
 
    MoviesRepository moviesRepository;

    @Autowired
    public MoviesService(MoviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    public Movie addMovie(Movie newMovie) {
        return moviesRepository.save(newMovie);
    }

    public Movie updateMovie(Movie updatedMovie) {
        return moviesRepository.save(updatedMovie);
    }

    public void deleteMovie(String id) {
        moviesRepository.deleteById(id);
    }

    public Movie getMovie(String id) {
        return moviesRepository.findById(id).orElse(null);
    }

    public List<Movie> getAllMovies() {
        return moviesRepository.findAll();
    }
}
