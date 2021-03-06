package com.tom.algoliamoviesbackend.model;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "movies")
@Builder
public class Movie {

    @Setter(AccessLevel.NONE)
    @Id
    @NotBlank
    private String objectID;

    @Indexed
    @NotBlank
    private String title;

    @JsonProperty("alternative_titles")
    private List<String> alternativeTitles;

    private int year;

    private String image;

    private String color;

    private int rating;

    //This should probably be using an enum
    private List<String> genre;

}
