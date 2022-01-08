import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/experiences.css';

const Experiences = () =>{
    return (
        <div id="experience">
            <Container>
            <h2>Experiences</h2>
            <p className="profile-sub">Nothing ever becomes real 'til it is experienced.
                <br/>
                ― John Keats
            </p>
            <hr/>
            <h3>Educations</h3>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>VIT University</strong>
                            <br/>
                            July 2017 - June 2021
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                            <strong>Bachelor - Electronics and communication Engineering with specilization in internet of things and sensors</strong>
                            <br/>
                            lorem
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>Narayana junior college</strong>
                            <br/>
                            June 2015 - June 2017
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                            <strong>Highschool - MPC</strong>
                            <br/>
                            lorem
                        </p>
                    </Col>
                </Row>
                <hr/>
                <h3>Careers</h3>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>Wipro</strong>
                            <br/>
                            July 2021 - present
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                            <strong>Project Engineer</strong>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>Publicis Sapient</strong>
                            <br/>
                            January 2021 - June 2021
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                            <strong>Enginnering Intern</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Experiences;