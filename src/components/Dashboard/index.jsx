import React, { Component } from "react";
import moment from "moment";

import { currentForecasts } from "../../staticData";

import ForecastListIcon from "../../assets/image/forecasts_list.svg";

import "./styles.scss";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenForecast: {}
        };
    }

    forecastProbability = (percentage) => {
        if (percentage >= 75) {
            return "yes";
        } else if (percentage >= 50) {
            return "maybe";
        } else if (percentage <= 75) {
            return "no";
        } else {
            return "not enough information";
        }
    };

    handleForecastDetails = (chosenForecast) => this.setState({ chosenForecast });

    renderForecastDetails = () => {
        const {
            chosenForecast: { title, condition, dueDate, image, forecastsNumber, forecast }
        } = this.state;
        if (!forecast) {
            return (
                <div className="choose_forecast">
                    <img src={ForecastListIcon} alt="choose a forecast" className="forecasts_list" />
                    <p>Choose a forecast from the list to see the details</p>
                </div>
            );
        }
        return (
            <div className="forecast_details">
                <div className="details_title">{title}</div>
                <div className="details_wrapper">
                    <div className="details">
                        <div className="condition">{condition}</div>
                        <div className="due_date">
                            <span className="detail">Due date:</span>
                            {moment(dueDate).format("DD-MM-YYYY")}
                        </div>
                        <div className="number_of_forecasts">
                            <span className="detail">Number of forecasts Made:</span>
                            {forecastsNumber}
                        </div>
                        <div className="current_forecast">
                            <span className="detail">Current forecast:</span>
                            {forecast.isBoolean
                                ? `${forecast.percentage}% PROBABILITY, ${this.forecastProbability(
                                      forecast.percentage
                                  )}`
                                : `${forecast.percentage}%`}
                        </div>
                    </div>
                    <img src={image} alt={title} className="forecast_image" />
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className="dashboard_wrapper">
                <h1 className="title">Current Forecasts:</h1>
                <section className="forecasts_container">
                    <div className="forecasts">
                        {currentForecasts.map((forecast) => {
                            const { id, title, condition } = forecast;
                            return (
                                <div
                                    className="forecast"
                                    key={`forecast_${id}`}
                                    onClick={() => this.handleForecastDetails(forecast)}
                                >
                                    <div className="name_block">{title}</div>
                                    <div className="condition_block">{condition}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="forecast_details_wrapper">{this.renderForecastDetails()}</div>
                </section>
            </div>
        );
    }
}

export default Dashboard;
