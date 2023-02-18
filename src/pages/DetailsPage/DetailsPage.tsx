import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { useContext } from "react";
import { MoviesContext } from "../../App";
import Layout from "../../components/Layout";
import MovieDetailsList from "../../components/Lists/MovieDetailsList";
import { Pages } from "../../utils";

export default function DetailsPage() {
  const { selectedMovie } = useContext(MoviesContext);
  return (
    <Layout page={Pages.MOVIE}>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={6}>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            width={"100%"}
            alt={selectedMovie.title}
          />
        </Grid>
        <Grid item xs={5}>
          <MovieDetailsList />
        </Grid>
      </Grid>
    </Layout>
  );
}
