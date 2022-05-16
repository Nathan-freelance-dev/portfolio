import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "../projects/projects";
import SkillContect from "../skills_contact/skill_contact";

const RecentProjects = () => {
    return (
        <>
            <section className="projects">
                <Container>
                    <h5 className="text-danger">RECENT PROJECTS</h5>

                    <Row>
                        <Projects />
                        <SkillContect />
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RecentProjects;