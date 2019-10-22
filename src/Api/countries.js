import axios from "axios";
const URL = "https://restcountries.eu/rest/v2";

export function getAll() {
  return axios(`${URL}/all`)
    .then(res =>
      res.status < 400 ? Promise.resolve(res.data) : Promise.reject(res.data)
    )
    .catch(error => Promise.reject(error));
}

export function findByName(name) {
  return axios(`${URL}/name/${name}`)
    .then(res =>
      res.status < 400 ? Promise.resolve(res.data) : Promise.reject(res.data)
    )
    .catch(error => Promise.reject(error));
}

export function findByCode(code) {
  return axios(`${URL}/alpha/${code}`)
    .then(res =>
      res.status < 400 ? Promise.resolve(res.data) : Promise.reject(res.data)
    )
    .catch(error => Promise.reject(error));
}

export function findByRegion(region) {
  return axios(`${URL}/region/${region}`)
    .then(res =>
      res.status < 400 ? Promise.resolve(res.data) : Promise.reject(res.data)
    )
    .catch(error => Promise.reject(error));
}
