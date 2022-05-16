import React from "react";
import { Col } from "react-bootstrap";
import { mySkills } from "../../data/skillsData";

const SkillContect = () => {
    return (
        <Col md={4} className="mt-5">
            <div className="skills_content">
                <h5 className="text-danger text-uppercase">Skill & contact form</h5>

                <div className="skill_badge">
                    {mySkills.map((data, index) => {
                        return (
                            <button key={index} className={data.class}>
                                {data.text}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="mt-5">
                <form method="post" action="">
                    <div className="mb-3">
                        <label className="text-light fw-light">Email address</label>
                        <input className="form-control" type="email" required placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label className="text-light fw-light">Message</label>
                        <textarea className="text-light fw-light form-control" placeholder="Please write in your message here" required rows={4}></textarea>
                    </div>

                    <input type={"submit"} className="btn btn-primary btn-lg"/>
                </form>
            </div>
        </Col>
    )
}

export default SkillContect;