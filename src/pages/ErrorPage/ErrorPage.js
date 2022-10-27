import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <h1>404 Error Page</h1>
            <h3>Sorry, there are no another pages</h3>
            <Link to='/'><button>Go back</button></Link>
        </div>
    );
};

export default ErrorPage;