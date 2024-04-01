import React from "react";
import axios from "axios";

import "../styles/InputField.css";

let config = require("../../config.json");

const statusTypes: Array<string> = ["start", "loading", "done", "error"];

function InputField(props) {
    const getCityCoords = (city: string) => {
        let data = {
            lat: Number,
            lon: Number};
        updateResponseStatus("loading");

        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${config.API_KEY}`)
            .then(response => {
                data.lat = response.data[0].lat;
                data.lon = response.data[0].lon;
                getCityWeather(data);
            }).catch(response => {
                console.log(response);
                updateResponseStatus("error");
                return;
            });
        }

    const getCityWeather = (coords) => {
        let data = [];
        axios.get(`https:api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&lang=ru&appid=${config.API_KEY}`)
            .then(response => {
            setTimeout(() => {
                for (let i = 0; i < 40; i += 8) {
                    data.push(response.data.list[i]);
                }
                updateResponseStatus("done");
                setTimeout(function() {
                    document.getElementById("data-field").style.display = "grid";
                    updateResponseStatus("none");
                    props.updateDataFunc(data);
                }, 1500);
            }, 1500);
            }).catch(response => {
                console.log(response);
                updateResponseStatus("error");
            });
    }

    const getData = () => {
        props.updateDataFunc([]);
        document.getElementById("data-field").style.display = "flex";
        const searchFieldValue = (document.getElementById("search-field") as HTMLInputElement).value;

        if (searchFieldValue === "") {
        updateResponseStatus("error");
        return;
    }
        getCityCoords(searchFieldValue);
    }

    const updateResponseStatus = (statusType: string) => {
        statusTypes.map(el => {
            document.getElementsByClassName(el)[0].classList.add("hidden");
        });
        if (statusType == "none") return;
        document.getElementsByClassName(statusType)[0].classList.remove("hidden");
    }

    const keyDownHandler = (event) => {
        if (event.code == "Enter") {
            getData();
        }
    }

    return (
        <div className={"input-field"}>
            <input type={"text"} id={"search-field"} onKeyDown={ keyDownHandler } placeholder={"Введите город"}/>
            <button className={"btn btn-send-request"} onClick={ getData }>Отправить</button>
        </div>
    )
}

export default InputField;