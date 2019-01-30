import React, { Component } from "react";

class WeatherDetails extends Component {
    render() {
        // const bool = Object.keys(weather).length === 0 && weather.constructor === Object;
        const {main = '', name = '', coord = ''} = this.props.weather || {};    
        
        const weatherResults = (
            <div>
                <p>City: {name}</p>
                <p>Geolocation: {coord.lat}°, {coord.lon}° </p>
                <p>Temperature: {main.temp}°C</p>
                <p>Pressure: {main.pressure}hPa</p>
                <p>Humidity: {main.humidity}%</p>
            </div>
        );

        return (
            <div>
                {weatherResults}
            </div>
        );
    }
}

export default WeatherDetails;
