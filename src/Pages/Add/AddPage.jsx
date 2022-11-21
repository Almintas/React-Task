import { useState } from "react";
import { BASE_URL } from "../../Components/API/API";
import { AddButton } from "../../Components/Buttons/AddButton/AddButton";
import { StyledLink } from "../../Components/Menu/Menu.styled";
import { DivWrapper, FormWrapper, InputTextareaWrapper, InputWrapper } from "./AddPage.styled";


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

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: userAddTitle,
                description: userAddDescription
            })
        })
            .then(res => res.json())
            .then(alert('Successfully added a new skill'))
    };

    return (
        <>
            <div>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/add'>Add</StyledLink>
            </div>

            <FormWrapper onSubmit={handleAddButton}>
                <DivWrapper>
                    <InputWrapper type='text'
                        placeholder='Skill'
                        onChange={(event) => setUserAddTitle(event.target.value)} />
                </DivWrapper>

                <DivWrapper>
                    <InputTextareaWrapper type='textarea'
                        placeholder='Discribe your skill'
                        onChange={(event) => setUserAddDescription(event.target.value)} />
                </DivWrapper>

                <br />

                <AddButton />
            </FormWrapper>
        </>
    )
};

export default AddPage;