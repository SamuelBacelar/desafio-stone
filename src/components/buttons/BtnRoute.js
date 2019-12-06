import React from 'react';
import { Link } from 'react-router-dom'

function BtnRoute(props) {
    return(
        <div>
            <Link to={props.route}><button className={props.className} type={props.type}>{props.name}</button></Link>
        </div>
         
    );
};

export default BtnRoute;