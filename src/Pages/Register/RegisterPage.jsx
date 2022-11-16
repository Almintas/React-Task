import { useState } from "react";
import { RegisterButton } from "../../Components/Buttons/RegisterButton/RegisterButton";
import { FormWrapper, InputWrapperEmail, InputWrapperPassword } from "./RegisterPage.styled";


export const RegisterPage = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [registerError, setRegisterError] = useState('');


    const handleRegisterButton = (event) => {
        event.preventDefault();

        const BASE_URL = ('https://autumn-delicate-wilderness.glitch.me/v1/');

        fetch(BASE_URL + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.err) {
                setRegisterError(data.err);
            } else {
                console.log('success')
            }
        })
};




return (
    <FormWrapper onSubmit={handleRegisterButton}>
        
        <InputWrapperEmail type='email' 
        placeholder='Email'  
        onChange={(event) => {
            setUserEmail(event.target.value);
        }} />
        
        <InputWrapperPassword type='password' 
        placeholder='Password' 
        onChange={(event) => {
            setUserPassword(event.target.value);
        }} />
        
        <br />
        <RegisterButton />
        {registerError && <h3>{registerError}</h3>}
    </FormWrapper>
)
};