import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CardCountrie from "../../components/CardCountrie";
import { Main, ContainerCards, Nav } from "./styles";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regionSelected, setRegionSelected] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    loadCountries();
  }, [regionSelected]);

  useEffect(() => {
    setFilteredCountries(search());
    console.log(filteredCountries);
  }, [searchInput]);
  //

  const loadCountries = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/${regionSelected}`
    );
    const data = await response.json();
    setAllCountries(data);
    setFilteredCountries(data);
    console.log("loadContries");
  };

  const search = () => {
    console.log("search");
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

  return (
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
        <Link to="https://restcountries.eu/rest/v2/alpha?codes=col">test</Link>
        {filteredCountries.map(countrie => {
          return <CardCountrie key={countrie.alpha2Code} countrie={countrie} />;
        })}
      </ContainerCards>
    </Main>
  );
};

export default Home;