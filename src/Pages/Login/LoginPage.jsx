import { LoginButton } from "../../Components/Buttons/LoginButton/LoginButton"
import { FormWrapper, InputWrapper } from "./LoginPage.styled"


export const LoginPage = () => {
    return (
        <FormWrapper>
            <InputWrapper type='email' placeholder='Email' />
            <InputWrapper type='password' placeholder='Password' />
            <br />
            <LoginButton />
        </FormWrapper>
    )
};