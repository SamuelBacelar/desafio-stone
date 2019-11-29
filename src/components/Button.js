import React from 'react';
import { Link } from 'react-router-dom'

function Button(props) {
    return(
           <Link to="/register"><button className="Button">{props.name}</button></Link>
    );
};

export default Button;