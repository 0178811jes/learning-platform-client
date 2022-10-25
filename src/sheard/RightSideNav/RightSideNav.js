import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";


const RightSideNav = () => {
    return (
        <ButtonGroup vertical>
            <Button className="mb-3" variant="outline-primary"> <FaGoogle></FaGoogle> Google Login</Button>
            <Button variant="outline-dark"> <FaFacebook></FaFacebook> Facebook</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;