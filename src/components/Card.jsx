// Layout template of the cards.

import React from "react";
import "./layout.css";

function Card(props) {
    return (
        <div>
            <div>
                <h3>{props.name}</h3>
                <img src={props.img} alt={props.name} className="avatar-image"/>
            </div>
            <div>
                <p>{props.species}</p>
                <p>{props.job}</p>
                <p><a href={`mailto:${props.email}`}>{props.email}</a></p>
            </div>
        </div>
    );
}

export default Card;