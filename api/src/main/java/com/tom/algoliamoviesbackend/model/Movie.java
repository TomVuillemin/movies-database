package com.tom.algoliamoviesbackend.model;

import javax.validation.constraints.NotBlank;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;
import lombok.extern.jackson.Jacksonized;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "movies")
public class Movie {

    @Setter(AccessLevel.NONE)
    @Id
    @NotBlank
    private String id;

    @Indexed
    @NotBlank
    private String name;

    @Builder
    @PersistenceCreator
    @Jacksonized
    public Movie(String id, String name) {
        this.id = id;
        this.name = name;
    }

}
