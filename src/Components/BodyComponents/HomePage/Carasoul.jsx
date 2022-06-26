import React from 'react';
import { Container, Carousel, CarouselItem} from 'react-bootstrap';
import '../../../Assets/Styles/Carousels/Carousels.css'

export default function 
() {
  return (
    <Container>
         <>
            <hr/>
            <Carousel fade variant='dark'>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/1.jpg'/>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/2.jpg'/>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/3.jpg'/>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/4.jpg'/>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/5.jpg'/>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <img className = "CarouselEach" src='Carousels/6.jpg'/>
                </CarouselItem>
            </Carousel>
            <hr/>
        </>
    </Container>
  )
}

