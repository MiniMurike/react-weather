import React from "react";

import InputField from "./InputField";
import DataField from "./DataField";

import "../styles/Main.css";

function Main() {
    let [data, updateWeatherData] = React.useState([]);
    return(
        <main>
            <InputField updateDataFunc={updateWeatherData} />
            <DataField data={data}/>
        </main>
    )
}

export default Main;