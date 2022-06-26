import React from 'react';
import { Carousel, CarouselItem, Card } from 'react-bootstrap';
export default function 
() {
  return (
    <>
        <h3 style={{textAlign:'center'}}>Notice Board</h3>
        <hr/>
            <Carousel >
                <CarouselItem interval={2000}>
                    <Card style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title>Notice Title</Card.Title>
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
                    <Card.Title>Notice Title</Card.Title>
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
                    <Card.Title>Notice Title</Card.Title>
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
                    <Card.Title>Notice Title</Card.Title>
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
                    <Card.Title>Notice Title</Card.Title>
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
                    <Card.Title>Notice Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </CarouselItem>
            </Carousel>
            <hr/>
    </>
  )
}
