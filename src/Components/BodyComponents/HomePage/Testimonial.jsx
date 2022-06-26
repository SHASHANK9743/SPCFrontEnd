import React from 'react'
import { Container, Row, Col, Carousel, CarouselItem, Card } from 'react-bootstrap';
import '../../../Assets/Styles/Testimonial/Testimonial.css'

export default function Testimonial() {
  return (
    <>
      <Container>
        <br/>
        <Row>
          <Col sm={4}>
          <hr/>
              <h4 style={{textAlign:'center'}}>Our Toppers</h4>
              <br/>
              <Carousel fade variant='dark'>
                <CarouselItem>
                  <img className="TestimonialEach" src='Toppers/1(1).jpg'/>
                </CarouselItem>
                <CarouselItem>
                  <img className="TestimonialEach" src='Toppers/1(1).jpg'/>
                </CarouselItem>
                <CarouselItem>
                  <img className="TestimonialEach" src='Toppers/1(1).jpg'/>
                </CarouselItem>
              </Carousel>
          </Col>
          <Col sm={8}>
          <hr/>
              <h4 style={{textAlign:'center'}}>Testimonial</h4>
              <br/>
              <Carousel>
                <CarouselItem>
                  <Card>
                    <Card.Body>
                      <Card.Title>Topper Number 1</Card.Title>
                      <Card.Text>Text By Topper Number 1</Card.Text>
                    </Card.Body>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                <Card>
                    <Card.Body>
                      <Card.Title>Topper Number 2</Card.Title>
                      <Card.Text>Text By Topper Number 2</Card.Text>
                    </Card.Body>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <Card.Body>
                      <Card.Title>Topper Number 3</Card.Title>
                      <Card.Text>Text By Topper Number 3</Card.Text>
                    </Card.Body>
                  </Card>
                </CarouselItem>
              </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}
