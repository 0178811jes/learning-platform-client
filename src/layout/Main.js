import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../sheard/Footer/Footer';
import Header from '../sheard/Header/Header';
import LeftSideNav from '../sheard/LeftSide/LeftSideNav';
import RightSideNav from '../sheard/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>

                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;