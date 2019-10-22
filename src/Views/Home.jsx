import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { getAll, findByRegion, findByName } from "../Api/countries";
import CountryCard from "../Components/CountryCard";
import { Grid } from "@material-ui/core";
import Select from "../Components/Select";
import Search from "../Components/Search";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginBottom: 30
  }
});

class Home extends Component {
  state = {
    countries: [],
    region: "",
    search: ""
  };
  componentDidMount() {
    this.setState({ loading: true });
    getAll().then(res => this.setCountries(res));
  }

  setCountries(countries) {
    this.setState({ loading: false, countries: countries });
  }

  searchCountry = search => {
    search
      ? findByName(search)
          .then(res => this.setCountries(res))
          .catch(() => console.log("Not found"))
      : getAll().then(res => this.setCountries(res));
  };

  changeRegion = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    value
      ? findByRegion(value).then(res => this.setCountries(res))
      : getAll().then(res => this.setCountries(res));
  };

  render() {
    const { classes } = this.props;
    const { countries, region } = this.state;
    return (
      <div className={classes.root}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.root}
          spacing={3}
        >
          <Grid item xs={12} md={3}>
            <Search onBlur={this.searchCountry} />
          </Grid>
          <Grid item xs={9} md={2}>
            <Select setValues={this.changeRegion} value={region} />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          spacing={3}
          className={classes.root}
        >
          {countries.map(country => (
            <CountryCard key={country.alpha2Code} country={country} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
