import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MoviesContext } from "../App";
import DetailsPage from "../pages/DetailsPage";
import { Genre } from "../utils";

const mockMovie = {
  adult: false,
  backdrop_path: "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
  genre_ids: [878, 28, 12],
  id: "24428",
  media_type: "movie",
  original_language: "en",
  original_title: "The Avengers",
  overview:
    "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
  popularity: 129.295,
  poster_path: "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  release_date: "2012-04-25",
  title: "The Avengers",
  video: false,
  vote_average: 7.7,
  vote_count: 28189,
};

describe("Selected Movie Details Page Tests", () => {
  it("Renders selected movie on screen", async () => {
    const movieCategory = [] as Genre[];
    const selectedCategory = {} as Genre;
    const setMovieCategory = () => {};
    const setSelectedCategory = () => {};
    const selectedMovie = mockMovie;
    const setSelectedMovie = () => {};
    render(
      <Router location={"/category"} navigator={undefined}>
        <MoviesContext.Provider
          value={{
            movieCategory,
            setMovieCategory,
            selectedCategory,
            setSelectedCategory,
            selectedMovie,
            setSelectedMovie,
          }}
        >
          <DetailsPage />
        </MoviesContext.Provider>
      </Router>
    );
    const img = screen.queryByRole("img");
    const title = screen.queryByText(/The Avengers/i);
    const overview = screen.queryByText(/Overview/i);
    const rating = screen.queryByText(/Rating/i);
    const reviews = screen.queryByText(/Reviews/i);
    const release_date = screen.queryByText(/Release Date/i);
    expect(title).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(reviews).toBeInTheDocument();
    expect(release_date).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
