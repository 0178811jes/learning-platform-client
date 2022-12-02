import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const DisplayError = () => {
   
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
            
            <h4>Please <button onClick={handleLogout}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;