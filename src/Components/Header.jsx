import React from 'react'
import '../Assets/Styles/Header/Header.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Header() {
  return (
        <div className='HeaderContainer'>
            <Container>
            <Row>
                <Col sm={5}>
                    <div>
                        <br/>
                        <img className='Name' src='/name.png'></img>   
                    </div>
                </Col>
                <Col sm={4}>
                    <div>
                        <Container>
                            <Col>
                                <Row>
                                    <div>
                                        <br/>
                                        <img className='SPCDigitalLearning' src='/SPCDigitalLearning.png'></img>
                                    </div>
                                </Row>
                            </Col>
                        </Container>
                    </div>
                </Col>
                <Col sm={3}>
                    <Container>
                        <br/>
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            </Container>
        </div>   
  )
}
