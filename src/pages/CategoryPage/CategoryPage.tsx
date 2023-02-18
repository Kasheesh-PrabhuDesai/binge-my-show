import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../App";
import MoviesCard from "../../components/Cards/MoviesCard";
import Layout from "../../components/Layout";
import useIsPageAtBottom from "../../hooks/useIsPageAtBottom";
import { fetchMoviesList } from "../../services";
import { Pages } from "../../utils";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      background: "#F6F9FB",
      padding: theme.spacing(5),
    },
  })
);

export default function CategoryPage() {
  const classes = useStyles();
  const { selectedCategory } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);
  const { page } = useIsPageAtBottom();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetchMoviesList(selectedCategory.id, page);
      if (response.success) {
        setMovies(prevState => [...prevState, ...response.movieList]);
      } else {
        setError(response.errorMsg as string);
      }
    }
    if (selectedCategory.id) {
      fetchMovies();
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [page, selectedCategory]);

  if (loading) {
    return (
      <Grid container className={classes.container}>
        <Typography variant="h4">Fetching data...Please wait</Typography>
      </Grid>
    );
  }

  return (
    <Layout page={Pages.CATEGORY}>
      {error ? (
        <Typography variant="h4">{`${error}. Please try again later`}</Typography>
      ) : (
        <>
          <MoviesCard movies={movies} />
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Go to top
            </Button>
          </Grid>
        </>
      )}
    </Layout>
  );
}
