import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../../sheard/CourseSummary/CourseSummary';

const Category = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            <h4>This is Category : {allDetails.length}</h4>
            {
                allDetails.map(details=> <CourseSummary
                    key={details._id}
                    details={details}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Category;