import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../Assets/Styles/Footer/Footer.css'
export default function Footer() {
  return (
    <div className='Footer' style={{ backgroundColor:'#0C3950'}}>
        <br/>
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <Row>
                        <h4 style={{ color:'#FFFF99' }}>About Us</h4>
                        <p style={{ color:'#FFFFFF'}}>"We are one of the leading education service providers', rendering a wide range of services from coaching to training in the field of education, through dedicated efforts of professionals, devoted to ensuring success and growth of students."</p>
                    </Row>
                    <Row>
                        <Col>
                            <a href='https://web.facebook.com/sanjaipandeyclasses'><img src='Icons/download.png'/></a>
                        </Col>
                        <Col>
                            <a href='https://web.facebook.com/sanjaipandeyclasses'><img src='Icons/download.png'/></a>
                        </Col>
                        <Col>
                            <a href='https://web.facebook.com/sanjaipandeyclasses'><img src='Icons/download.png'/></a>
                        </Col>
                        <Col>
                            <a href='https://web.facebook.com/sanjaipandeyclasses'><img src='Icons/download.png'/></a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <a href="https://play.google.com/store/apps/details?id=com.spclasses.android&amp;hl=en"><img src="Icons/google-play-badge.png"/></a>
                    </Row>
                </Col>
                <Col sm={2}>
                    <h4 style={{ color:'#FFFF99' }}>QUICK LINKS</h4>
                    <ul className='listElement'>
                        <li style={{ color:'#FFFFFF' }}>- Home</li>
                        <li style={{ color:'#FFFFFF' }}>- About Us</li>
                        <li style={{ color:'#FFFFFF' }}>- Results</li>
                        <li style={{ color:'#FFFFFF' }}>- Courses</li>
                    </ul>
                </Col>
                <Col sm={3}>
                    <h4 style={{ color:'#FFFF99' }}>CONTACT US</h4>
                    <p style={{ color:"#FFFFFF"}}>11-E, Tashkent Marg, Near Regency Hotel
                       Opp. Patrika Press, Civil Lines,
                       Allahabad, Uttar Pradesh 211001
                       Telephone : +(91)-94156 14156
                       Email : sanjaipandeyclasses@gmail.com</p>
                </Col>
                <Col sm={3}>
                    <h4 style={{ color:'#FFFF99' }}>WORKING HOURS</h4>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>MONDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>TUESDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>WEDNESDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>THURSDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>FRIDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>SATURDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>11:00AM To 7:00PM</p></Col>
                    </Row>
                    <Row>
                        <Col sm={5}><p style={{ color:'#FFFFFF'}}>SUNDAY</p></Col>
                        <Col><p style={{ color:'#FFFFFF'}}>Closed</p></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
