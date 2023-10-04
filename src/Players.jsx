import React, { useState } from 'react';
import { useFetchPlayersQuery } from './puppyBowlApi';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import SignUpForm from './SignUpForm';
import TextField from '@mui/material/TextField';

const Players = () => {
    const { data = {}, error, isLoading } = useFetchPlayersQuery();
    const [searchTerm, setSearchTerm] = useState('');

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlayers = data.data.players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="players">
                <div className="intro">
                    <h1>Welcome to the Puppy Bowl Event!</h1>
                    <p>Come and join us for a fun-filled day of adorable puppy football!</p>
                    <p>Get ready to meet the talented pups competing in this year's Puppy Bowl... and here they are:</p>
                </div>
                <div className="search-bar">
                <TextField
                        label="Search for a puppy"
                        placeholder="Search for a puppy"
                        size="small" 
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="form">
                    <SignUpForm />
                </div>
                {filteredPlayers.map(player => (
                    <div key={player.id} className="player-card">
                        <img className="player-image" src={player.imageUrl} alt={player.name} />

                        <div className="player-details">
                            <h2>{player.name}</h2>
                            <h2 className="breed">Breed: {player.breed}</h2>
                            <h2 className="status">Status: {player.status}</h2>
                        </div>
                        <Link to={`/player/${player.id}`}>
                            <Button color="secondary" key={player.id}>See Details</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;
