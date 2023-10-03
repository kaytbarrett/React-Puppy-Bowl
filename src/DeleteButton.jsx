import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function RemovePlayer() {

    const { id } = useParams();
    const [error, setError] = useState(null);

    async function DeletePlayer(event) {
        event.preventDefault();

        try {
            const URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${id}`

            const response = await fetch(URL, {
                    method: "DELETE",
            });


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Removed: ', result);

        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }

    }

    return (
        <>
                <button id="button"  onClick={DeletePlayer}>Remove Player</button>
        </>
    )
};

export default RemovePlayer;
