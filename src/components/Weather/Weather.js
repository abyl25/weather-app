import React, { Component } from "react";
import './details.css';

class Weather extends Component {
    render() {
        const {main = '', name = '', coord = ''} = this.props.weather || {};           

        return (
            <div className="details">
                <p className="weather-key">City: <span className="weather-value">{name}</span></p>
                <p className="weather-key">Geolocation: <span className="weather-value">{coord.lat}°, {coord.lon}°</span> </p>
                <p className="weather-key">Temperature: <span className="weather-value">{main.temp}°C</span></p>
                <p className="weather-key">Pressure: <span className="weather-value">{main.pressure}hPa</span></p>
                <p className="weather-key">Humidity: <span className="weather-value">{main.humidity}%</span></p>
            </div>
        );
    }
}

export default Weather;
