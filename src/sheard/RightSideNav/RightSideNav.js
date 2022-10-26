import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvaider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvaider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

    return (
        <ButtonGroup vertical>
            <Button onClick ={handleGoogleSignIn} className="mb-3" variant="outline-primary"> <FaGoogle></FaGoogle> Google Login</Button>
            <Button variant="outline-dark"> <FaFacebook></FaFacebook> Facebook</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;