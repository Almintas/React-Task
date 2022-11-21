import { useState } from "react";
import { RegisterButton } from "../../Components/Buttons/RegisterButton/RegisterButton";
import { FormWrapper, InputWrapper } from "./RegisterPage.styled";
import { BASE_URL } from "../../Components/API/API";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../Components/Menu/Menu.styled";


const RegisterPage = () => {
    const [userRegisterEmail, setUserEmail] = useState('');
    const [userRegisterPassword, setUserPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();


    const handleRegisterButton = (event) => {
        event.preventDefault();

        fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userRegisterEmail,
                password: userRegisterPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.err) {
                    setRegisterError(data.err);
                } else {
                    navigate('/');
                    alert('You are now registered')
                }
            })
    };




    return (
        <>
            <div>
                <StyledLink to='/login'>Login</StyledLink>
                <StyledLink to='/register'>Register</StyledLink>
            </div>

            <FormWrapper onSubmit={handleRegisterButton}>

                <InputWrapper type='email'
                    placeholder='Email'
                    onChange={(event) => setUserEmail(event.target.value)} />

                <InputWrapper type='password'
                    placeholder='Password'
                    onChange={(event) => setUserPassword(event.target.value)} />

                <br />

                <RegisterButton />
                {registerError && <h3>{registerError}</h3>}

            </FormWrapper>
        </>
    )
};

export default RegisterPage;