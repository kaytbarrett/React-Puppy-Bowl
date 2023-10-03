import { useState } from 'react'

function SignUpForm() {
    const [breed, setBreed] = useState("");
    const [id, setId] = useState("");
    const [pupName, setPupName] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players'
            const data = {
                player:  {
                    id: id,
                    name: pupName,
                    breed: breed,
                    imageUrl: imageUrl,
                }
            };

            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);

        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <>
        <header>
            <h2>Add a player!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name: {" "} <input
                        value={pupName}
                        onChange={(e) => {
                            const value = e.target.value
                            setPupName(value);
                        }} />
                </label>
                <label>
                    Id: {" "}<input
                        value={id}
                        onChange={(e) =>
                            setId(e.target.value)} />
                </label>
                <label>
                    Breed: {" "}<input
                        value={breed}
                        onChange={(e) =>
                            setBreed(e.target.value)} />
                </label>
                <label>
                    Image URL: {" "}<input
                        value={image}
                        onChange={(e) =>
                            setImage(e.target.value)} />
                </label>
                <button id="button">Submit</button>
            </form>
            </header>
        </>
    )
};

export default SignUpForm;