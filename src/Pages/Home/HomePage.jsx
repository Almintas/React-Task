import { useEffect, useState } from "react";
import { BASE_URL } from "../../Components/API/API";
import { StyledLink } from "../../Components/Menu/Menu.styled";
import { DivWrapper } from "./HomePage.styled";


const HomePage = () => {
    const [screen, setScreen] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`${BASE_URL}/content/skills`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.err) {
                    alert('Something is wrong')
                } else {
                    setScreen(data)
                }
            })
    }, []);

    return (
        <>
            <div>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/add'>Add</StyledLink>
            </div>

            <h2>Skills</h2>
            
            {screen
                .filter((screen) => screen.title)
                .map((screen) => (
                    <DivWrapper key={screen.id}>
                        <h2>{screen.title}</h2>
                        <p>{screen.description}</p>
                    </DivWrapper>
                ))}

        </>
    )
};

export default HomePage;