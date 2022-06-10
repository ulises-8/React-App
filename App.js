  import * as React from 'react'
  import logo from './logo.svg';
  import './App.css';
  import { useEffect, useState } from 'react';
  import List from './components/List';
  import SearchPlace from './components/SearchPlace';

    function App() {
      //list of countries
      const [countries, setCountries] = useState([]);

      //make GET request to server for API -> DB
      const getCountries = async () => {
        // starts a request and returns a promise
        const response = await fetch("/api/get/countries");
        const countriesData = await response.json();

        //set countries to the countriesData array from DB
        setCountries(countriesData);
      }
      
      //call get countries -> API -> DB
      useEffect(() => {
        getCountries();
      }, []);

      //user input country
      const [searchCountry, setSearchCountry] = React.useState('');

      //callback function - event handler
      const handleCountrySearch = (event) => {
        setSearchCountry(event.target.value); 
        if (countries.find((country) => country.country.toLowerCase() === event.target.value.toLowerCase())) {
          getCities(event.target.value); //call get cities if input search/country matches a country from the country list
        }
    };
      //filter list of countries to searched country - pass to List component
      const searchedCountries = countries.filter(function (country) {
        return country.country.toLowerCase().includes(searchCountry.toLowerCase());
    });

      
      const [cities, setCities] = useState([])

      const getCities = async(country) => {
        const response = await fetch(`api/get/cities/${country}`);
        const citiesData = await response.json();

        setCities(citiesData)
      }

      const [searchCity, setSearchCity] = React.useState('');

      //callback function - event handler
      const handleCitySearch = (event) => {
      setSearchCity(event.target.value);
      // console.log(event.target.value, "PRINTING");
    };

      const searchedCities = cities.filter(function (city) {
        return city.city.toLowerCase().includes(searchCity.toLowerCase());
    });

    return (
        <div>
          <h1> Discover the World!</h1>
          <h3> Select your Destination</h3>
          <SearchPlace
          id="Country"
          label="Country"
          onChange={handleCountrySearch}
          /> 
          <List list={searchedCountries}/> 
          {searchedCountries.find((country) => country.country.toLowerCase() === searchCountry.toLowerCase()) &&
            <>
            <SearchPlace
            url = "<a href=https://earth.google.com/web/search/"
            id="City"
            label="City"
            onChange={handleCitySearch} />
            <List list={searchedCities} />
          </>

          }
        </div>
      )
  }

  export default App;

