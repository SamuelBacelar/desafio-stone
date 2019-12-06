import React from 'react';

function ContainerTitle(props) {
    return(
        <div>
            <div className="Container-title">
                <h2>{props.title}</h2>
            </div>
            <hr></hr>
        </div>
         
    );
};

export default ContainerTitle;