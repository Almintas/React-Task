import { useEffect } from "react";
import { BASE_URL } from "../../Components/API/API";


const HomePage = () => {

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
                alert('Something is wrong')
            } else {
                console.log(data)
            }
        })
    }, []);

    return (
        <>
        
        </>
    )
}

export default HomePage;