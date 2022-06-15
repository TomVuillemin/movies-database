import { render, screen } from "@testing-library/react";
import MoviePreview from "./MoviePreview";
import Movie from "../model/Movie";
import userEvent from "@testing-library/user-event";

const movie: Movie = {
  title: "Movie",
  image: "",
  color: "red",
  score: 8.0,
  genre: ["genre"],
  objectID: "objectID",
  alternative_titles: [],
  year: 2000,
  rating: 5,
};

const setup = () => {
  const user = userEvent.setup();
  render(<MoviePreview movie={movie} />);
  return user;
};

describe("MoviePreview", () => {
  it("should display the title of the movie", () => {
    render(<MoviePreview movie={movie} />);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  it("should display the movie edition form when the title is clicked", async () => {
    const user = setup();
    const titleElement = screen.getByText(movie.title);
    await user.click(titleElement);

    const titleInput = screen.getByLabelText(/title/i);
    expect(titleInput).toBeInTheDocument();
  });

  it("should hide the movie edition form when the title is clicked twice", async () => {
    const user = setup();
    const titleElement = screen.getByText(movie.title);
    await user.click(titleElement);
    await user.click(titleElement);

    expect(screen.queryByLabelText(movie.title)).not.toBeInTheDocument();
  });

  it("should discard changes made in form when form is closed", async () => {
    const user = setup();
    const titleElement = screen.getByText(movie.title);
    // Open form
    await user.click(titleElement);
    // Change title
    const titleInput = screen.getByLabelText(/title/i);
    await user.clear(titleInput);
    await user.type(titleInput, "New Movie title");
    //Close form
    await user.click(titleElement);
    // Reopen form
    await user.click(titleElement);

    // Check that title is not changed
    expect(screen.getByLabelText(/title/i)).toHaveValue(movie.title);
  });
});
