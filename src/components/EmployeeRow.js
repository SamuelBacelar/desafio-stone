import React from 'react';



function EmployeeRow(props) {

    function handleDeleteClick() {
        props.onDelete(props.id);
    }

    function handleEditClick() {
        props.onEdit(props.id);
    }
    
    return(
        <tr>
            <td hidden>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.job}</td>
            <td>{props.city}</td>
            <td>{props.allocation}</td>
            <td><button className="Btn-action" onClick={handleEditClick}><img src="./images/edit_icon.png" alt="" width="19px"/>Editar</button><button className="Btn-action" onClick={handleDeleteClick}><img src="./images/delete_icon.png" width="18px" alt=""/>Deletar</button></td>
        </tr>    
    );
};

export default EmployeeRow;