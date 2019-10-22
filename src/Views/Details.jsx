import React, { Component } from "react";
import { findByCode } from "../Api/countries";
import { Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBack from "@material-ui/icons/ArrowBack";

class Details extends Component {
  state = {
    country: null,
    borderCountries: [],
    loading: true
  };

  componentDidMount() {
    const { code } = this.props.match.params;
    findByCode(code).then(res =>
      this.setState({ country: res, loading: false })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.country || this.state.country !== prevState.country) {
      this.setState({ borderCountries: [] });
      const appendBorderCountry = country =>
        this.setState({
          borderCountries: [...this.state.borderCountries, country]
        });
      this.state.country &&
        this.state.country.borders.forEach(item =>
          findByCode(item)
            .then(res => appendBorderCountry(res))
            .catch(() => appendBorderCountry({ name: item }))
        );
    }
    return;
  }

  render() {
    const { country, loading, borderCountries } = this.state;
    return loading ? (
      <h2>Loading ...</h2>
    ) : (
      <>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <Link to="/">
            <Button style={{ textAlign: "center", fontSize: 16 }}>
              <ArrowBack /> Back
            </Button>
          </Link>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={country.flag}
              width="100%"
              alt={`${country.name}'s flag`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <b>{country.name}</b>
            </Typography>
            <Typography>
              <b>Native Name:</b> {country.nativeName}
            </Typography>
            <Typography>
              <b>Population:</b>{" "}
              {Intl.NumberFormat("pt-BR", { style: "decimal" }).format(
                country.population
              )}
            </Typography>
            <Typography>
              <b>Region:</b> {country.region}
            </Typography>
            <Typography>
              <b>Sub Region:</b> {country.subregion}
            </Typography>
            <Typography>
              <b>Capital:</b> {country.capital}
            </Typography>
            <Typography>
              <b>Top level Domain:</b> {country.topLevelDomain[0]}
            </Typography>
            <Typography>
              <b>Currencies:</b>{" "}
              {country.currencies.map(item => item.name).join(", ")}
            </Typography>
            <Typography>
              <b>Language:</b>{" "}
              {country.languages.map(item => item.name).join(", ")}
            </Typography>
            <Typography>
              <b>Border Countries:</b>
              <Grid container>
                {borderCountries.map(country => (
                  <Grid key={country.alpha2Code} item>
                    <Button onClick={() => this.setState({ country })}>
                      {country.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Details;
