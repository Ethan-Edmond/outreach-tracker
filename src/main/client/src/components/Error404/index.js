import React from "react";
import { Link } from "react-router-dom";

function Error404 () {
    return (
        <div>
            <h4>Sorry... this page doesn't exist</h4>
            <Link to="/">Go Home?</Link>
        </div>
    )
}

export default Error404;