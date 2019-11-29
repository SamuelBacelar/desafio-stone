import React from 'react';

function Form(props) {
    return(
           <form action={props.action}>
                {props.children}
           </form>
    );
};

export default Form;