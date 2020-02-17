import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import CardCountrie from "../../components/CardCountrie";
import { Main, ContainerCards, Nav, AnimatedSpinner } from "./styles";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regionSelected, setRegionSelected] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    loadCountries();
    // eslint-disable-next-line
  }, [regionSelected]);

  useEffect(() => {
    setFilteredCountries(search());
    // eslint-disable-next-line
  }, [searchInput]);
  //

  const loadCountries = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/${regionSelected}`
    );
    const data = await response.json();
    setAllCountries(data);
    setFilteredCountries(data);
    setloading(false);
  };

  const search = () => {
    let filtered = [];
    if (!searchInput) {
      filtered = allCountries;
    } else {
      filtered = allCountries.filter(c =>
        c.name.toUpperCase().includes(searchInput.toUpperCase())
      );
    }
    return filtered;
  };

  return loading ? (
    <AnimatedSpinner>
      <FaSpinner color="#000" size={60} />
    </AnimatedSpinner>
  ) : (
    <Main>
      <Nav>
        <input
          type="text"
          placeholder="Search for a country... "
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <select
          value={regionSelected}
          onChange={e => setRegionSelected(e.target.value)}
        >
          <option value="all">All</option>
          <option value="region/africa">Africa</option>
          <option value="region/americas">Americas</option>
          <option value="region/asia">Asia</option>
          <option value="region/europe">Europe</option>
          <option value="region/oceania">Oceania</option>
        </select>
      </Nav>
      <ContainerCards>
        {filteredCountries.map(countrie => {
          return (
            <Link
              key={countrie.alpha2Code}
              to={`country/${countrie.alpha2Code}`}
            >
              <CardCountrie countrie={countrie} />
            </Link>
          );
        })}
      </ContainerCards>
    </Main>
  );
};

export default Home;
