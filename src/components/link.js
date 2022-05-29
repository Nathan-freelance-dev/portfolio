import React from "react";
import { Link } from "react-router-dom";

const MyLinks = ({path, text}) => {
     return (
          <Link to={path} className="btn btn-outline-dark cta btn-lg">
               {text}
          </Link>
     )
}

export default MyLinks;