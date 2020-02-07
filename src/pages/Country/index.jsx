import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";

import BorderCountries from "../../components/BorderCountries";
import { CountryContainer, BackButton, AnimatedSpinner } from "./styles";

function Country({ match }) {
  // useEffect(() => {
  //   loadCountrie();
  // }, []);
  const [country, setCountry] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function loadCountry() {
      const code = match.params.code.toLowerCase();

      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${code}`
      );
      const data = await response.json();

      setCountry(data[0]);
      setloading(false);
    }
    loadCountry();
  }, []);

  return loading ? (
    <AnimatedSpinner className="load">
      <FaSpinner color="#000" size={60} />
    </AnimatedSpinner>
  ) : (
    <Fragment>
      {loading.name}
      <nav>
        <Link to="/">
          <BackButton>
            <span>
              <FaArrowLeft />
            </span>
            Back
          </BackButton>
        </Link>
      </nav>

      <CountryContainer>
        <div className="container-img">
          <img src={country.flag} alt={`flag of ${country.name}`} />
        </div>
        <section className="data-container">
          <h1>{country.name}</h1>
          <div>
            <p>
              Population: <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              Native Name: <span>{country.altSpellings[1]}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              Currencies:
              <span>
                {country.currencies.map(currenci => {
                  return <> {currenci.name}</>;
                })}
              </span>
            </p>
            <p>
              Languages:
              <span>
                {country.languages.map(language => {
                  return <> {language.name}</>;
                })}
              </span>
            </p>
          </div>
          <div>
            <p>
              Border Countries: <BorderCountries border={country.borders} />
            </p>
          </div>
        </section>
      </CountryContainer>
    </Fragment>
  );
}

export default Country;
