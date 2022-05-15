import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../../data/projectsData";

const RecentProjects = () => {
    return (
        <>
            <section className="projects">
                <Container>
                    <h5 className="text-danger">RECENT PROJECTS</h5>

                    <Row>
                        <Col md={8}>
                            <div className="projects_container mt-4">
                                {projects.map((data, idx) => {
                                    return  (
                                        <a className="text-decoration-none" href={data.path}>
                                            <div className="project_box mt-5 text-light">
                                                <h1>
                                                    {data.title}
                                                </h1>

                                                <p className="mt-3 fs-5">
                                                    {data.details}
                                                </p>

                                                <div className="mt-3">
                                                    <h5 className="text-danger">
                                                        {data.tech}
                                                    </h5>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RecentProjects;