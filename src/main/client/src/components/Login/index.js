import React, { useState } from "react";
import { Input, InputLabel, InputAdornment, FormControl, IconButton, Stack, Button } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { login, register } from "../../store/loginReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const LoginFormControl = (props) => {
    return (
        <FormControl sx={{width: '15rem'}} {...props}/>
    )
}

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [passwordShowing, setPasswordShowing] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });
    
    const togglePasswordShowing = () => {
        setPasswordShowing(!passwordShowing);
    }

    const toggleRegsitering = () => {
        setRegistering(!registering);
    }

    const submit = async () => {
        const submitFn = registering ? register : login;
        const argObj = {
            username: formValues.username,
            password: formValues.password,
            history
        };
        dispatch(submitFn(argObj));
    }

    const onFormChange = (evt) => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    }

    return (
        <Stack spacing={2} mt={1} alignItems="center">
            Please {registering ? "register" : "login" } to use outreach tracker
            <LoginFormControl>
                <Button
                id="login-register-switch"
                onClick={toggleRegsitering}
                variant="contained"
                color="secondary"
                sx={{mt: "1rem"}}>
                    {registering ? "I need to login" : "I need to register"}
                </Button>
            </LoginFormControl>
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
                onClick={submit}>
                    {registering ? "Register" : "Login"}
                </Button>
            </LoginFormControl>
        </Stack>
    );
}

export default Login;