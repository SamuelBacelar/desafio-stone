import React from 'react';
import PresTitle from './PresTitle';
import Button from './Button';

function Presentation(props) {
    return(
         <div className="Presentation">
             {props.children}
        </div>
    );
};

export default Presentation;