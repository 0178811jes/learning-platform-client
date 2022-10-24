import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const RightSideNav = () => {
    return (
        <ButtonGroup vertical>
            <Button variant="outline-primary">Button</Button>
            <Button variant="outline-dark">Button</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;