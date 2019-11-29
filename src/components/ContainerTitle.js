import React from 'react';

function ContainerTitle(props) {
    return(
         <div className="container-title">
            <h2>{props.title}</h2>
            <hr></hr>
        </div>
    );
};

export default ContainerTitle;