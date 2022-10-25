import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            <h4>{allDetails.title}</h4>
        </div>
    );
};

export default Details;