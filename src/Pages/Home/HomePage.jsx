import { useEffect, useState } from "react";
import { BASE_URL } from "../../Components/API/API";


const HomePage = () => {
    const [userSkill, setUserSkill] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`${BASE_URL}/content/skills`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.err) {
                alert(data.err)
            } else {
                console.log(data)
            }
        })
    }, []);

    return (
        <>
        <form>
            <h1>{userSkill}</h1>
        </form>
        </>
    )
}

export default HomePage;