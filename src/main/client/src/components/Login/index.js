import React, { useState } from "react";
import { Input, InputLabel, InputAdornment, FormControl, IconButton, Stack, Button } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { setToken } from "../../store/loginReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const LoginFormControl = (props) => {
    return (
        <FormControl sx={{width: '15rem'}} {...props}/>
    )
}

function Login() {
    const dispatch = useDispatch();
    const {push} = useHistory();
    const [passwordShowing, setPasswordShowing] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });
    
    const togglePasswordShowing = () => {
        setPasswordShowing(!passwordShowing);
    }

    const login = async () => {
        await dispatch(setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.8lSCknTnRANlJ0AVzCgO2yF838WYA7bLaAR7vAKnofo"));
        console.log("TODO: USE AN ACTUAL TOKEN HERE AND PUT IT IN AN ACTION!");
        push("/");
    }

    const onFormChange = (evt) => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    }

    return (
        <Stack spacing={2} mt={1} alignItems="center">
            Login
            <LoginFormControl>
                <InputLabel htmlFor="login-username-input">Username</InputLabel>
                <Input
                    id="login-username-input"
                    value={formValues.username}
                    onChange={onFormChange}
                    name="username" />
            </LoginFormControl>
            <LoginFormControl>
                <InputLabel htmlFor="login-password-input">Password</InputLabel>
                <Input
                    id="login-password-input"
                    type={passwordShowing ? "text" : "password"}
                    value={formValues.password}
                    name="password"
                    onChange={onFormChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordShowing}>
                                {passwordShowing ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    } />
            </LoginFormControl>
            <LoginFormControl>
                <Button
                sx={{mt: "1rem"}}
                variant="contained"
                onClick={login}>
                    Submit
                </Button>
            </LoginFormControl>
        </Stack>
    );
}

export default Login;