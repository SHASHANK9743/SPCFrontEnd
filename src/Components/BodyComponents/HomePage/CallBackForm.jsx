import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


export default function CallBackForm() {
  return (
    <>
        <Form>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Control type="" placeholder="Enter Full Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formBasicClass">
                        <Form.Control type="" placeholder="Enter Class" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formContactNumber">
                        <Form.Control type="" placeholder="Contact Number" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-2" controlId="formSubject">
                        <Form.Select>
                            <option>Chemistry</option>
                            <option>Physics</option>
                            <option>Mathematics</option>
                            <option>Science</option>
                            <option>Social Science</option>
                            <option>Survey Maps</option>
                            <option>English</option>
                            <option>Economics</option>
                            <option>Accounts</option>
                            <option>Commerce</option>
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button type="submit">Request Callback!!!</Button>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </Form>
    </>
  )
}
