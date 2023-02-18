import { MOVIES_API_KEY } from "../secrets";

const moviesAPI = "https://api.themoviedb.org";
const headers = {
  "content-type": "application/json;charset=utf-8",
  authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjczYWI4MWViMWQ4YWI4ZWE0NTA3M2RmZDdiZmI1YiIsInN1YiI6IjYzZWE1MmFlZDM4OGFlMDBkMmIzYzAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mpRcxR5C6w9HtczwMEYr5gSndTaBKXUCAzcYeoaDkeM",
};

export const fetchMoviesGenreList = async () => {
  try {
    const response = await fetch(
      `${moviesAPI}/3/genre/movie/list?api_key=${MOVIES_API_KEY}`
    );
    if (response.status !== 200) throw Error("Internal error ocurred.");
    const genreList = await response.json();
    return { genreList: genreList.genres, success: true };
  } catch (err) {
    return { errorMsg: err, success: false };
  }
};

export const fetchMoviesList = async (genreId: string, page: number) => {
  try {
    const response = await fetch(
      `${moviesAPI}/4/list/${genreId}?page=${page}&api_key=${MOVIES_API_KEY}`,
      { headers }
    );
    if (response.status !== 200) throw Error("Internal error ocurred.");
    const movieList = await response.json();
    return { movieList: movieList.results, success: true };
  } catch (err) {
    return { errorMsg: err, success: false };
  }
};
