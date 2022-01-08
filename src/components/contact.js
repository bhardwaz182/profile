import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Contact = () =>{
    return (
        <div id="contact">
            <Container>
                <h2>Contact</h2>
                <hr/>
                <Row>
                    <Col md={6} sm={12}>
                        <a href='https://twitter.com/bhardwaz6'><FontAwesomeIcon className='icon' icon={faTwitterSquare}/><span>https://twitter.com/bhardwaz6</span></a>
                    </Col>
                    <Col md={6} sm={12}>
                    <a href='https://www.linkedin.com/in/bhardwaz-reddy-ba42b916b/'><FontAwesomeIcon className='icon' icon={faLinkedin}/><span>https://www.linkedin.com/in/bhardwaz-reddy-ba42b916b/</span></a>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <a href='mailto:bharadwaz182@gmail.com'><FontAwesomeIcon className='icon' icon={faAt} /><span>bharadwaz182@gmail.com</span></a>
                    </Col>
                </Row>
                <hr/>
            </Container>

        </div>
    );
}

export default Contact;