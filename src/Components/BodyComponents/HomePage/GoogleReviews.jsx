import React from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';
export default function GoogleReviews() {
  return (
    <>
      <h5 style={{textAlign:'center'}}>Google Reviews</h5>
      <hr/>
      <Carousel >
                <CarouselItem interval={2000}>
                    <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title>Sanjai Pandey</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem interval={2000}>
                <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Shashank Dwivedi</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
                <CarouselItem interval={2000}>
                <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Manav</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Taufiq</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Akansha</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Shailja</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
            </Carousel>
    </>
  )
}
