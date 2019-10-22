import React, { Component } from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { getAll, findByRegion, findByName } from "../Api/countries";
import CountryCard from "../Components/CountryCard";
import { Grid, InputBase } from "@material-ui/core";
import Select from "../Components/Select";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginBottom: 30
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    marginLeft: 0,
    width: "100%"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    height: 40
  }
});

function Search(props) {
  const { classes, onBlur } = props;
  const [search, setSearch] = React.useState("");
  const onChange = event => {
    setSearch(event.target.value);
    onBlur(event.target.value);
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        value={search}
        name="search"
        onChange={onChange}
      />
    </div>
  );
}

export default withStyles(styles)(Search);
