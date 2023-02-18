import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { MoviesContext } from "../../App";
import CategoryCard from "../../components/Cards/CategoryCard";
import Layout from "../../components/Layout";
import { fetchMoviesGenreList } from "../../services";
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

export default function HomePage() {
  const classes = useStyles();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { setMovieCategory } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchMovieCategories() {
      const response = await fetchMoviesGenreList();
      if (response.success) {
        setMovieCategory(response.genreList);
      } else {
        setError(response.errorMsg as string);
      }
    }
    fetchMovieCategories();
    setTimeout(() => setLoading(false), 1200);
  }, [setMovieCategory]);

  if (loading) {
    return (
      <Grid container className={classes.container}>
        <Typography variant="h3">Fetching data...Please wait</Typography>
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container className={classes.container}>
        <Typography variant="h3">{`${error}. Please try again later!`}</Typography>
      </Grid>
    );
  }

  return (
    <Layout page={Pages.HOME}>
      <CategoryCard />
    </Layout>
  );
}
