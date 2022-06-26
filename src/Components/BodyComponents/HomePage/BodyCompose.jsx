import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navigation from './Navigation';
import Carasoul from './Carasoul';
import NoticeBoard from './NoticeBoard'
import GoogleReviews from './GoogleReviews'
import MainBody from './MainBody'
import Testimonial from './Testimonial'

export default function BodyCompose() {
  return (
    <>
        <Navigation/>
        <Carasoul />
        <Container>
            <Row>
                <Col sm={4}>
                    <Row>
                        <NoticeBoard />
                    </Row>
                    <Row>
                        <GoogleReviews/>
                    </Row>
                </Col>
                <Col sm ={8}>
                    <Row>
                        <MainBody/>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Testimonial/>
            </Row>
        </Container>
        
    </>
  )
}
