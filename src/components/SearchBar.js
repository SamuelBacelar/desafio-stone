import React from 'react';
import Button from './Button';



function SearchBar(props) {
    return(
         <div className="Container">
            <input type="text" placeholder="Faça sua busca"></input>
            <Button name="Filtrar"/>
        </div>
    );
};

export default SearchBar;