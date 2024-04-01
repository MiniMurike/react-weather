import React, { Component } from "react";

import StatusDisplay from "./StatusDisplay";
import WeatherCard from "./WeatherCard";

import "../styles/DataField.css";

function DataField(props) {
    return (
        <div id={ "data-field" }>
            <StatusDisplay order={ "start" } >
                <div className={ "ico" }></div>
                <div className={ "text" }>Чтобы начать, введите город</div>
            </StatusDisplay>
            <StatusDisplay order={ "loading" } hidden>
                <div className={ "ico" }></div>
                <div className={ "text" }>Обработка запроса</div>
            </StatusDisplay>
            <StatusDisplay order={ "done" } hidden>
                <div className={ "text" }>Данные получены. Выводим...</div>
            </StatusDisplay>
            <StatusDisplay order={ "error" } hidden>
                <div className={ "text" }>К сожалению, по введёным параметрам не удалось ничего получить!</div>
            </StatusDisplay>
            {props.data.map((card, index) => <WeatherCard data={card} itteration={index} key={card.dt} />)}
        </div>
    )
}

export default DataField;