import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Components/API/API";
import { LoginButton } from "../../Components/Buttons/LoginButton/LoginButton"
import { FormWrapper, InputWrapper } from "./LoginPage.styled"


const LoginPage = () => {
    const [userLoginEmail, setUserLoginEmail] = useState('');
    const [userLoginPassword, setUserLoginPassword] = useState('');
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState();

    const handleLoginButton = (event) => {
        event.preventDefault();

        fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: userLoginEmail,
                password: userLoginPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.err) {
                setLoginError(data.err)
            } else {
                navigate('/')
            }
        })
    }

    return (
        <FormWrapper onSubmit={handleLoginButton}>
            <InputWrapper 
            type='email' 
            placeholder='Email'
            onChange={(event) => {
                setUserLoginEmail(event.target.value);
            }} />
            
            <InputWrapper 
            type='password' 
            placeholder='Password'
            onChange={(event) => {
                setUserLoginPassword(event.target.value);
            }} />
            
            <br />
            
            <LoginButton />

            {loginError && <h3>{loginError}</h3>}

        </FormWrapper>
    )
};

export default LoginPage;