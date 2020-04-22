import React from "react";

function Card(props) {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                <p>{props.species}</p>
                <p>{props.job}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;