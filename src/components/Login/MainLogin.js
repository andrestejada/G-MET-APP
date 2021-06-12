import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Logincard from './Logincard';
import LoginForm from './LoginForm';

const MainLogin = () => {
    return (
        <>
            <Container fluid >
                <Row className='row-main-login'>
                    <Col md={6} >
                        <Logincard/>
                    </Col>
                    <Col md={6} >
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>   
        </>
    )
}

export default MainLogin
