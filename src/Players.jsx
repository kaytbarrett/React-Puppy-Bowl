import React from 'react';
import { useFetchPlayersQuery } from './puppyBowlApi';

const Players = () => {
    const { data = {}, error, isLoading } = useFetchPlayersQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="players">
            <div className="intro">
                <h1>Welcome to the Puppy Bowl Event!</h1>
                <p>Come and join us for a fun-filled day of adorable puppy football!</p>
                <p>Get ready to meet the talented pups competing in this year's Puppy Bowl... and here they are:</p>
            </div>

            {data.data.players.map((player) => (
                <div key={player.id} className="player-card">
                    <img className="player-image" src={player.imageUrl} alt={player.name} />

                    <div className="player-details">
                        <h2> {player.name} </h2>
                        <h2> {player.breed} </h2>
                        <h2> {player.status} </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Players;