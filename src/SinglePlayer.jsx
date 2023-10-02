import React from 'react';
import { useFetchSinglePlayerQuery } from './puppyBowlApi';
import BackButton from './BackButton';
import { useParams } from 'react-router-dom';



const SinglePlayer = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetchSinglePlayerQuery(id);

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
                <BackButton />
            </div>
        </div>
    );
};

export default SinglePlayer;