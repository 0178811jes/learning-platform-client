import React, { useContext } from 'react';
import {  useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const DisplayError = () => {
    const error = useRouteError();
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login');
            })
            .catch(e => console.error(e));
    }

    return (
        <div>
            <p>Something went wrong</p>
            <p>{error.statusText || error.message}</p>
            <h4>Please <button onClick={handleLogout}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;