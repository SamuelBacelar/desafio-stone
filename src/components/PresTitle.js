import React from 'react';

function PresTitle(props) {
    return(
         <div className="pres-title">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default PresTitle;