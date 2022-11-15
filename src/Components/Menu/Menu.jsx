import { Audi } from "../Logo/Logo";
import { StyledLink, Title } from '../Menu/Menu.styled';

export const Menu = () => {
    return (
        <>
            <Audi />
            <Title>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/add'>Add Skill</StyledLink>
                <StyledLink to='/register'>Register</StyledLink>
                <StyledLink to='/login'>Login</StyledLink>
            </Title>
        </>
    )
};