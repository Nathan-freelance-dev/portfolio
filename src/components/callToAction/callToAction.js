import React from "react";
import { Button } from "react-bootstrap";
import './index.scss'

const CallToAction = ({text}) => {
     return (
          <>
               <Button variant="outline-dark" className="cta btn-lg">
                    {text}
               </Button>
          </>
     )
}

export default CallToAction;