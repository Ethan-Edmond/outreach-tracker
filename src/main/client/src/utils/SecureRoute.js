import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import {decode} from "jsonwebtoken";

function SecureRoute (props) {
    const {push} = useHistory();
    const token = useSelector((state) => state.login.token);
    const isGood = decode(token);
    const reject = () => {
        push('/login');
        return null;
    }
    return (
        isGood ? <Route {...props}/> : reject()
    );
}

export default SecureRoute;