import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import '../styles/profile.css';
const Profile = () =>{
    return(
    <div id="profile">
        <Container>
            <h2 >Profile</h2>
            <p className="profile-sub">I'm a web developer</p>
            <hr/>
            <Row>
                <Col  md={4} sm={12}>
                    <h3>About me</h3>
                    <span>I am an allround web developer.</span>
                </Col>
                <Col  md={4} sm={12}>
                    <div style={{height:'246px',borderRadius:'50%',backgroundColor:'grey'}}></div>
                </Col>
                <Col  md={4} sm={12}>
                    <h3>Details</h3>
                    <p>
                        <strong>Name:</strong>
                        <br/>
                        Bhardwaz
                        <br/>
                        <strong>Age:</strong>
                        <br/>
                        21 years
                        <br/>
                        <strong>Location</strong>
                        <br/>
                        kadapa, Andhra Pradesh, India
                    </p>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Profile;