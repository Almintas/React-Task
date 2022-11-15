import { RegisterButton } from "../../Components/Buttons/RegisterButton/RegisterButton";
import { FormWrapper, InputWrapper } from "./RegisterPage.styled";


export const RegisterPage = () => {
    const handleRegisterButton = (event) => {
        event.preventDefault();
    }

    return (
        <FormWrapper onSubmit={handleRegisterButton}>
            <InputWrapper type='email' placeholder='Email' />
            <InputWrapper type='password' placeholder='Password' />
            <br />
            <RegisterButton />
        </FormWrapper>
    )
}