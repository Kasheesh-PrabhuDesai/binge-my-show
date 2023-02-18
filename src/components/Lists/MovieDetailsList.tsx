import {
  List,
  ListItem,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { useContext } from "react";
import { MoviesContext } from "../../App";

const useStyles = makeStyles(theme =>
  createStyles({
    headingText: {
      fontSize: "2.5rem",
      color: "#000",
    },
    paraText: {
      fontSize: "1.5rem",
      color: "#575454",
    },
  })
);

export default function MovieDetailsList() {
  const classes = useStyles();
  const { selectedMovie } = useContext(MoviesContext);
  return (
    <List>
      <ListItem>
        <Typography className={classes.headingText}>
          {selectedMovie.title}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.adult ? " A " : " U/A "}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.headingText}>Overview</Typography>{" "}
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.overview}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.headingText}>Popularity</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.popularity} %
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.headingText}>Release Date</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.release_date}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.headingText}>Rating</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.vote_average} / 10
        </Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.headingText}>Reviews</Typography>
      </ListItem>
      <ListItem>
        <Typography className={classes.paraText}>
          {selectedMovie.vote_count}
        </Typography>
      </ListItem>
    </List>
  );
}
