import React from 'react'
import { Col } from 'react-bootstrap'
import { projects } from '../../data/projectsData'

const Projects = () => {
    return (
        <Col md={8}>
            <div className="projects_container mt-4">
                {projects.map((data, idx) => {
                    return  (
                        <a className="text-decoration-none" key={idx} href={data.path}>
                            <div className="project_box mt-5 text-light">
                                <h1>
                                    {data.title}
                                </h1>

                                <p className="mt-3 fs-6">
                                    {data.details}
                                </p>

                                <div className="mt-3">
                                    <h6 className="text-danger fw-light">
                                        {data.tech}
                                    </h6>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </Col>
    )
}

export default Projects;