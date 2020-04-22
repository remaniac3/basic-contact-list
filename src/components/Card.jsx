// Layout template of the cards.

import React from "react";
import ProfilePic from "./ProfilePic";
import Details from "./Details";
import EmailAddress from "./EmailAddress";

function Card(props) {
    return (
        <div className="contacts">
            <div className="avatar">
                <ProfilePic img={props.img} />
            </div>
            <div className="details">
                <h3>{props.name}</h3>
                <Details detailInfo={props.species} />
                <Details detailInfo={props.job} />
                <EmailAddress emailAdd={props.email} />
            </div>
        </div>
    );
}

export default Card;