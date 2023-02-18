import {
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../App";
import { Genre } from "../../utils";

const useStyles = makeStyles(theme =>
  createStyles({
    categoryCard: {
      width: "20%",
      height: "300px",
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
    categoryText: {
      textAlign: "center",
      marginTop: "35%",
      fontSize: "2rem",
    },
  })
);

export default function CategoryCard() {
  const classes = useStyles();
  const { movieCategory, setSelectedCategory } = useContext(MoviesContext);
  const navigate = useNavigate();

  const handleSelectCategory = (item: Genre) => {
    localStorage.setItem("category", JSON.stringify(item));
    setSelectedCategory(item);
    navigate("/category");
  };

  return (
    <Grid container>
      {movieCategory?.map(item => (
        <Card
          className={classes.categoryCard}
          key={item.id}
          onClick={() => handleSelectCategory(item)}
        >
          <CardContent>
            <Typography className={classes.categoryText}>
              {item.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}