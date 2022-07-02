
import React from 'react'
import { Col, Badge, ListGroup } from 'react-bootstrap';
import './socialApp.css'
const ActiveMembersList = () => {
    <>
        <Col md={3}>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </>
}

export default ActiveMembersList;