package com.tom.algoliamoviesbackend.controller;

import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import com.tom.algoliamoviesbackend.model.Movie;
import com.tom.algoliamoviesbackend.service.MoviesService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/movies")
@FieldDefaults(level = PRIVATE, makeFinal = true)
@RequiredArgsConstructor(access = PACKAGE)
public class MoviesController {

    private final MoviesService moviesService;


    @PostMapping("/")
    void addMovie(@RequestBody Movie newMovie) {
        moviesService.addMovie(newMovie);    
    }

    @PutMapping("/{id}")
    void updateMovie(@PathVariable String id, @RequestBody Movie updatedMovie) {
        moviesService.updateMovie(updatedMovie);
    }

    @DeleteMapping("/{id}")
    void deleteMovie(@PathVariable String id) {
        moviesService.deleteMovie(id);
    }

    @GetMapping("/{id}")
    Movie getMovie(@PathVariable String id) {
        return moviesService.getMovie(id);
    }

    @GetMapping("/")
    List<Movie> getMovies() {
        return moviesService.getAllMovies();
    }

    
}
