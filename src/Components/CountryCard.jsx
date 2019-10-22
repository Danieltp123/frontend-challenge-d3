import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main
  },
  flag: {}
}));

export default function CountryCard(props) {
  const { country } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/details/${country.alpha2Code}`}>
            <CardMedia
              component="img"
              height="150"
              src={country.flag}
              alt={`${country.name} flag`}
            />
            <CardContent>
              <Typography variant="subtitle1">{country.name}</Typography>
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
                <b>Capital:</b> {country.capital}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
