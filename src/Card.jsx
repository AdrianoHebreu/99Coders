import React from 'react';

function Card (props) {

    return <div>
     <h3>{props.nome}</h3>
     <h3>{props.email}</h3>
     <h3>{props.fone}</h3>
     <p> Código: {props.codigo}</p>
    </div>
}

export default Card;