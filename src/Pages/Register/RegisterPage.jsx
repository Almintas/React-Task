import { RegisterButton } from "../../Components/Buttons/RegisterButton/RegisterButton";
import { FormWrapper, InputWrapperEmail, InputWrapperPassword } from "./RegisterPage.styled";


export const RegisterPage = () => {
    const handleRegisterButton = (event) => {
        event.preventDefault();

        const BASE_URL = ('https://autumn-delicate-wilderness.glitch.me/v1/');

        fetch(BASE_URL + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: '',
                password: 'kikitata'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
};




return (
    <FormWrapper onSubmit={handleRegisterButton}>
        <InputWrapperEmail type='email' placeholder='Email' />
        <InputWrapperPassword type='password' placeholder='Password' />
        <br />
        <RegisterButton />
    </FormWrapper>
)
};