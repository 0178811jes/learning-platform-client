import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            <h4>This is Category : {allDetails.length}</h4>
        </div>
    );
};

export default Category;