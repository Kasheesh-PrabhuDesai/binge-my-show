import { Grid, makeStyles, createStyles, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { NavigationButtons } from "../../utils";

const useStyles = makeStyles(theme =>
  createStyles({
    buttonContainer: {
      margin: theme.spacing(5),
    },
  })
);

export default function Navigation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigationButtons = (type: string) => {
    if (type === NavigationButtons.BACK) {
      navigate(-1);
    }
    if (type === NavigationButtons.CHANGE_CATEGORY) {
      navigate("/");
    }
  };
  return (
    <Grid
      container
      justifyContent="flex-start"
      className={classes.buttonContainer}
      spacing={3}
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigationButtons(NavigationButtons.BACK)}
        >
          Go back
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            handleNavigationButtons(NavigationButtons.CHANGE_CATEGORY)
          }
        >
          Change category
        </Button>
      </Grid>
    </Grid>
  );
}
