import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MoviesContext } from "../App";
import CategoryCard from "../components/Cards/CategoryCard";
import HomePage from "../pages/HomePage";
import { Genre, Movie } from "../utils";

const mockCategories = [
  { id: "1", name: "War" },
  { id: "2", name: "Action" },
  { id: "3", name: "Romance" },
];

describe("Home page tests", () => {
  it("Renders all cards on successfully fetching categories", async () => {
    const movieCategory = mockCategories;
    const selectedCategory = {} as Genre;
    const setMovieCategory = () => {};
    const setSelectedCategory = () => {};
    const selectedMovie = {} as Movie;
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
          <CategoryCard />
        </MoviesContext.Provider>
      </Router>
    );
    const cards = screen.queryAllByRole("category-cards");
    expect(cards).toHaveLength(3);

    const warCard = screen.queryByText(/War/i);
    const actionCard = screen.queryByText(/Action/i);
    const romanceCard = screen.queryByText(/Romance/i);

    expect(warCard).toBeInTheDocument();
    expect(actionCard).toBeInTheDocument();
    expect(romanceCard).toBeInTheDocument();
  });

  it("Shows loading when categories are being fetched", async () => {
    const movieCategory = [] as Genre[];
    const selectedCategory = {} as Genre;
    const setMovieCategory = () => {};
    const setSelectedCategory = () => {};
    const selectedMovie = {} as Movie;
    const setSelectedMovie = () => {};
    render(
      <Router location={""} navigator={undefined}>
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
          <HomePage />
        </MoviesContext.Provider>
      </Router>
    );
    const loadingText = screen.queryByText(/Fetching data...Please wait/i);
    expect(loadingText).toBeInTheDocument();
  });
});
