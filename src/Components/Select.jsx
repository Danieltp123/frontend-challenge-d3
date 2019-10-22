import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    backgroundColor: theme.palette.primary.main
  }
});

function SelectComponent(props) {
  const { classes } = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-simple">Filter by Region</InputLabel>
      <Select
        value={props.value}
        onChange={props.setValues}
        labelWidth={130}
        inputProps={{
          name: "region",
          id: "outlined-age-simple"
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="americas">Americas</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SelectComponent);
