import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'

function LayoutPublic({ title }: { title: string }) {
    return (
        <React.Fragment>
            <NavbarComponent />
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-5 fw-bold text-center">{title}</h1>
                        </Col>
                    </Row>
                    <Outlet />
                </Container>
            </main>
        </React.Fragment>
    )
}
export default LayoutPublic
