import React from 'react';

function Button(props) {
    return(
          <button className="Button" type={props.type}>{props.name}</button>
    );
};

export default Button;