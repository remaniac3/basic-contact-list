import React from "react";

function Avatar(props) {
    return <img className="avatar-image" src={props.img} alt={props.name} />
}

export default Avatar;