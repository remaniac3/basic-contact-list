import React from "react";
import { checkPropTypes } from "prop-types";

function EmailAddress(props) {
    return <p><a href={`mailto:${props.emailAdd}`}>{props.emailAdd}</a></p>
}

export default EmailAddress;