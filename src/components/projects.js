import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/projects.css';
const Projects = () =>{
    return (
        <div id='projects'>
            <Container>
                <h2>Projects</h2>
                <hr/>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>Meetings Application</strong>
                            <br/>
                            January 2021 - April 2021
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>This application helps you manage your meetings – you can filter to view meetings(past, present
and future) or search for meetings based on the meetings description. Meetings can be created
and also drop off from a scheduled meetings. Additionally teams can also be created.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>
                                Fake News Detection using Deep Learning
                            </strong>
                            <br/>
                            July 2020 – October 2020
                        </p>
                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                    The project is concerned with identifying a solution that could be used to detect and filter out sites
containing fake news for purposes of helping users to avoid being lured by clickbaits.<br/>
Machine learning models are created using logistic regression, Random Forest classifier, Naïve Bayes
which could help in estimating the authenticity of the news by taking news articles as input and
compared the accuracy we got using different models.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <p>
                            <strong>Library Management System using C++</strong>
                            <br/>
                            Jan 2020 – March 2020
                        </p>

                    </Col>
                    <Col md={8} sm={12}>
                        <p>
                        Aided in the day-to-day operations of the libraries. The purpose of the system is to permit storing
details of an outsized number of books and permit for add, borrow, return facilities separately to
staff and students. Different privileges are given to different types of users.<br/>
This was a team project where we have to liaising and meet with other teammates so that project gets
complete before deadline.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;