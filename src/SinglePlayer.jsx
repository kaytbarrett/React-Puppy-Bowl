import React from 'react';
import Button from '@mui/material/Button';
import { useFetchSinglePlayerQuery } from './puppyBowlApi';


const SinglePlayer = () => {
    const { data , error, isLoading } = useFetchSinglePlayerQuery();
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <h1>{data.data.player.name}</h1>
        // <div className="single-player">
        //         <div key={data.player.id} className="player-card">
        //             <img className="player-image" src={data.player.imageUrl} alt={data.player.name} />

        //             <div className="player-details">
        //                 <h2> {data.player.name} </h2>
        //                 <h2 className="breed">Breed: {data.player.breed} </h2>
        //                 <h2 className="status">Status: {data.player.status} </h2>
        //             </div>
        //             <Button color="secondary" onClick={() => {onBackButtonClick}}>Back</Button>
        //         </div>
        // </div>
    );
};

export default SinglePlayer;