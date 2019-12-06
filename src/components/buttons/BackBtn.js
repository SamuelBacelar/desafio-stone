import React from 'react';
import { Link } from 'react-router-dom'

function BackBtn(props) {
    return(
          <Link to={props.route}><button className="Back-btn" type={props.type}>{props.name}</button></Link>
    );
};

export default BackBtn;