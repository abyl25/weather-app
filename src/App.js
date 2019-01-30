import React, { Component } from "react";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import apikey from './config/apikey';
import "./App.css";

class App extends Component {
  constructor() {
    // console.log("constructor()");
    super();
    this.state = {
      searchCity: "",
      location: {},
      weather: {},
      main: {}
    };

    // this.getLocationByIP();
    this.getByGeolocationAPI();
  }

  getLocationByIP = () => {
    // console.log("getLocationByIP()");
    const url = "http://ip-api.com/json";
    fetch(url).then(resp => resp.json())
      .then(data => {
        console.log('Location (ip-api.com): ' + JSON.stringify(data));
        let loc = {
          lat: data.lat,
          lon: data.lon
        };
        
        this.setState({
          location: loc
        }, () => this.getWeather('', this.state.location));
    })
  }

  getByGeolocationAPI = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return "Geolocation is not supported by your browser";
    }
    
    navigator.geolocation.getCurrentPosition(position => {
      let loc = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }; 
      console.log("geolocation: " + JSON.stringify(loc));
      this.setState({
        location: loc
      }, () => this.getWeather('', this.state.location));
    }, () => console.log("Unable to retrieve your location"));
  }

  getWeather = (city = '', location = '') => {
    // console.log("getWeather()");
    const { lat, lon } = location;
    
    let weatherURL;
    if (city.length > 0) {
      weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    } else {
      weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    }

    fetch(weatherURL).then(resp => resp.json())
      .then(data => {
        console.log("Weather data: ");
        console.log(data);

        this.setState({
          weather: data,
          main: data.main
        });
      })
      .catch(error => {
        console.log("Error in fetching data from api: " + error);
      });
  };
    
  searchHandler = e => {
    e.preventDefault();
    const cityName = e.target.elements[0].value.trim();
    if (cityName.length > 0) {
      this.getWeather(cityName);
    }
  };

  render() {
    // console.log("render() called");
    return (
      <div className="App">
        <h2>Weather Info</h2>
        <Search searchHandler={this.searchHandler} />
        <WeatherDetails weather={this.state.weather}/>
      </div>
    );
  }
}

export default App;
