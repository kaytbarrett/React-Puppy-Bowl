import React from 'react';
import Button from '@mui/material/Button';
import { useFetchSinglePlayerQuery } from './puppyBowlApi';



const SinglePlayer = () => {
    let playerId = 2197
    const { data , error, isLoading } = useFetchSinglePlayerQuery( playerId );

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <div className="single-player">
                <div key={data.data.player.id} className="player-card">
                    <img className="player-image" src={data.data.player.imageUrl} alt={data.data.player.name} />

                    <div className="player-details">
                        <h2> {data.data.player.name} </h2>
                        <h2 className="breed">Breed: {data.data.player.breed} </h2>
                        <h2 className="status">Status: {data.data.player.status} </h2>
                    </div>
                    <Button color="secondary" onClick={() => {onBackButtonClick}}>Back</Button>
                </div>
        </div>
    );
};

export default SinglePlayer;