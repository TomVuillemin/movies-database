package com.tom.algoliamoviesbackend.controller;

import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;

import com.tom.algoliamoviesbackend.model.Movie;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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

    @PostMapping("/")
    void addMovie(@RequestBody Movie newMovie) {
        // return userService.createUser(newUser);
    }

    @PutMapping("/{id}")
    void updateMovie(@RequestBody Movie updatedMovie) {
        // return userService.createUser(newUser);
    }

    @DeleteMapping("/{id}")
    void deleteMovie() {
        // return userService.createUser(newUser);
    }

    @GetMapping("/{id}")
    Movie getMovie() {
        return null;
    }

    @GetMapping("/")
    Iterable<Movie> getMovies() {
        return null;
    }

    
}
