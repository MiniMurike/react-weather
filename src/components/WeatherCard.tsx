import React from "react";

import "../styles/WeatherCard.css";

function WeatherCard(props) {
    console.log(props.data);
    return (
        <>
            {props.itteration == 1 ?
                <>
                    <div className={"title"}><strong>Погода на сегодня</strong></div>
                    <div className={"title"}><strong>Будущие прогнозы</strong></div>
                </>:""}
            <div className={"weather-card"}>
                <h2>{props.data.dt_txt.split(" ")[0]}</h2>
                <p className={"data"}>
                    <span><strong>Температура: </strong>{ (props.data.main.temp - 273.15).toFixed(0) } C<sup>o</sup></span>
                    <span><strong>Влажность: </strong>{ props.data.main.humidity }%</span>
                    <span><strong>Погода: </strong>{ props.data.weather[0].description }</span>
                    <span><strong>Скорость ветра </strong>{ props.data.wind.speed } м/с</span>
                </p>
            </div>
        </>
    )
}

export default WeatherCard;