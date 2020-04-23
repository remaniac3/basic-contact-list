import React from "react";

function EmailAddress(props) {
    return <p><a href={`mailto:${props.emailAdd}`}>{props.emailAdd}</a></p>
}

export default EmailAddress;