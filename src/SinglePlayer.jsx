import React from 'react';
import { useFetchSinglePlayerQuery } from './puppyBowlApi';
import BackButton from './BackButton';
import { useParams } from 'react-router-dom';
import RemovePlayer from './DeleteButton';


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
            <div key={data.data.player.id} className="single-card">
                <img className="single-image" src={data.data.player.imageUrl} alt={data.data.player.name} />

                   <h1 className="h1"> {data.data.player.name} </h1>

                   <div className="single-details">
                    <h3>Id: {data.data.player.id}</h3>
                    <h3>Breed: {data.data.player.breed} </h3>
                    <h3>Status: {data.data.player.status} </h3>
                </div>
                <BackButton /><RemovePlayer />
            </div>
        </div>
    );
};

export default SinglePlayer;