import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css';

const Footer = () => {
    return (
        <>
            <main>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copyright &copy; ShopIn
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Footer