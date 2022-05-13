import { Button } from "react-bootstrap";
import React from "react";
import * as faIcons from 'react-icons/fa'

const CallToAction = () => {
    return (
        <a href="#contact" className="text-decoration-none">
            <Button variant="primary" className="btn-lg">
                Contact me <faIcons.FaRegPaperPlane />
            </Button>
        </a>
    )
}

export default CallToAction;