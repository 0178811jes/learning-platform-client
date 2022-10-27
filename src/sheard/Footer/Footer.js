import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaProductHunt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='text-center mt-6 bg-black text-white mb-3'>
            <h2>Create,<br /> collaborate and organize your work <br /> all in one place.</h2>
            <Link to='/'><Button variant="warning" className='mt-4 mb-4'><FaProductHunt></FaProductHunt>  Python Course</Button></Link>
        </div>
    );
};

export default Footer;