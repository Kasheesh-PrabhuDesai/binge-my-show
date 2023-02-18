import { SetStateAction } from "react";

export type Genre = {
  id: string;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesContextValue = {
  movieCategory: Genre[];
  setMovieCategory: React.Dispatch<SetStateAction<Genre[]>>;
  selectedCategory: Genre;
  setSelectedCategory: React.Dispatch<SetStateAction<Genre>>;
  selectedMovie: Movie;
  setSelectedMovie: React.Dispatch<SetStateAction<Movie>>;
};

export enum NavigationButtons {
  BACK = "back",
  CHANGE_CATEGORY = "change_category",
}

export enum Pages {
  HOME = "home",
  CATEGORY = "category",
  MOVIE = "movie",
}
