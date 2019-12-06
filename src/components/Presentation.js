import React from 'react';

function Presentation(props) {
    return(
         <div className="Presentation">
             {props.children}
        </div>
    );
};

export default Presentation;