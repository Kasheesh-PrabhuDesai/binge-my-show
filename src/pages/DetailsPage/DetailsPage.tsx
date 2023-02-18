import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { useContext } from "react";
import { MoviesContext } from "../../App";
import MovieDetailsList from "../../components/Lists/MovieDetailsList";
import Navigation from "../../components/Navigation";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "100vh",
      width: "100vw",
      justifyContent: "space-evenly",
      background: "#F6F9FB",
      padding: theme.spacing(1),
    },
    buttonContainer: {
      margin: theme.spacing(5),
    },
  })
);

export default function DetailsPage() {
  const classes = useStyles();
  const { selectedMovie } = useContext(MoviesContext);
  return (
    <Grid container className={classes.container}>
      <Navigation />
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
    </Grid>
  );
}
