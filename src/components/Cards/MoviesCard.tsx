import {
  Card,
  Grid,
  makeStyles,
  createStyles,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../App";

const useStyles = makeStyles(theme =>
  createStyles({
    categoryCard: {
      width: "35%",
      height: "600px",
      margin: theme.spacing(5),
      borderRadius: 12,
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px",
      "&:hover": {
        border: "4px solid #0859d1",
        cursor: "pointer",
        transition: "all .15s linear",
      },
    },
    moviesText: {
      textAlign: "center",
      fontSize: "1.4rem",
    },
    cardHeaderRoot: {
      overflow: "hidden",
    },
    cardHeaderContent: {
      overflow: "hidden",
    },
  })
);

export default function MoviesCard({ movies }) {
  const { setSelectedMovie } = useContext(MoviesContext);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleShowMovieDetails = (movie: any) => {
    setSelectedMovie(movie);
    localStorage.setItem("movie", JSON.stringify(movie));
    navigate("/movie");
  };

  return (
    <Grid container justifyContent="center">
      {movies.length <= 0 ? (
        <Typography variant="h3">
          No movies could be found. Try again with a different genre
        </Typography>
      ) : (
        movies.map(movie => (
          <Card
            className={classes.categoryCard}
            key={movie.id}
            onClick={() => handleShowMovieDetails(movie)}
          >
            <CardHeader
              title={
                <Typography noWrap gutterBottom className={classes.moviesText}>
                  {movie.title}
                </Typography>
              }
              classes={{
                root: classes.cardHeaderRoot,
                content: classes.cardHeaderContent,
              }}
            />
            <CardContent>
              <Grid container>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={"100%"}
                  height={450}
                  alt={movie.title}
                  style={{ objectFit: "fill" }}
                />
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </Grid>
  );
}
