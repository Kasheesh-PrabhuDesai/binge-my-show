import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { Pages } from "../../utils";
import Navigation from "../Navigation";

type LayoutProps = {
  children: React.ReactNode;
  page: Pages;
};

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "100vh",
      width: "100vw",
      justifyContent: "space-evenly",
      background: "#F6F9FB",
      padding: theme.spacing(1),
    },
  })
);

export default function Layout({ children, page }: LayoutProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {page !== Pages.HOME && <Navigation />}
      {children}
    </Grid>
  );
}
