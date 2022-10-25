import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../sheard/CourseSummary/CourseSummary';

const Home  = () => {
    const allDetails= useLoaderData();
    return (
        <div>
            <h3>Python Course:{allDetails.length}</h3>
            {
                allDetails.map(details => <CourseSummary
                    key={details._id}
                    details={details}

                ></CourseSummary>)
            }
        </div>
    );
};

export default Home ;