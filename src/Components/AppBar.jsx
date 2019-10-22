import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

export default function(props) {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="subtitle1" className={classes.title}>
          <Link to="/">Where in the word?</Link>
        </Typography>
        <Button onClick={props.setDark}>
          <Typography variant="subtitle1">
            <FontAwesomeIcon icon="moon" /> Dark Mode
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
