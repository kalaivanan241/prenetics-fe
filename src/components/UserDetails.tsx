import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserDetails = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Row>
          <Col>
            <h6>First Name</h6>
          </Col>
          <Col>Kalai</Col>
        </Row>
        <Row>
          <Col>
            <h6>Last Name</h6>
          </Col>
          <Col>gunase</Col>
        </Row>
        <Row>
          <Col>
            <h6>Date Of Birth</h6>
          </Col>
          <Col>6th July 1993</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
