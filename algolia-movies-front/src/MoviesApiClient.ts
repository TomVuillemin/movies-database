import axios from "axios";
import Movie from "./model/Movie";

const BASE_URL = "http://localhost:3333/api/v1/movies";

export default class MoviesApiClient {
  static createMovie = (movie: Movie): Promise<Movie> => {
    return axios.post(BASE_URL, movie);
  };

  static updateMovie = (movie: Movie): Promise<Movie> => {
    return axios.put(`${BASE_URL}/${movie.objectID}`, movie);
  };

  static deleteMovie = (movie: Movie): Promise<void> => {
    return axios.delete(`${BASE_URL}/${movie.objectID}`);
  };
}
