import { createContext, useState } from "react";
import PagesRouter from "./components/PagesRouter";
import { Genre, Movie, MoviesContextValue } from "./utils";

export const MoviesContext = createContext({} as MoviesContextValue);

function App() {
  const selectedCategoryFromStorage = JSON.parse(
    localStorage.getItem("category")
  );
  const selectedMovieFromStorage = JSON.parse(localStorage.getItem("movie"));
  const [movieCategory, setMovieCategory] = useState<Genre[]>([] as Genre[]);
  const [selectedCategory, setSelectedCategory] = useState<Genre>(
    selectedCategoryFromStorage ?? ({} as Genre)
  );
  const [selectedMovie, setSelectedMovie] = useState<Movie>(
    selectedMovieFromStorage ?? ({} as Movie)
  );

  return (
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
      <PagesRouter />
    </MoviesContext.Provider>
  );
}

export default App;
