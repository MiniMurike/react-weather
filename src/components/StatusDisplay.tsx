import React from "react";

import "../styles/StatusDisplay.css";

function StatusDisplay(props) {
    return (
        <div className={ props.order + " status-window" + (props.hidden ? " hidden" : "") }>
            { props.children }
        </div>
    );
}


export default StatusDisplay;