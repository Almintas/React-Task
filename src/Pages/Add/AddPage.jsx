import { useState } from "react";
import { BASE_URL } from "../../Components/API/API";
import { AddButton } from "../../Components/Buttons/AddButton/AddButton";


const AddPage = () => {
    const [userAddTitle, setUserAddTitle] = useState('');
    const [userAddDescription, setUserAddDescription] = useState('');

    const handleAddButton = (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');

        fetch(`${BASE_URL}/content/skills`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,

                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: userAddTitle,
                description: userAddDescription
            })
        })
        .then(res => res.json())
        .then(data => {
            alert('new Skill added')
        })
    }

    return (
        <>
        <form onSubmit={handleAddButton}>
            <input type='text' onChange={(event) => setUserAddTitle(event.target.value)} />
            <input type='textarea' onChange={(event) => setUserAddDescription(event.target.value)} />

            <AddButton />
        </form>
        </>
    )
}

export default AddPage;