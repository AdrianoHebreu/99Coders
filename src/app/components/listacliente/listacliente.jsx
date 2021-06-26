import React from 'react';
import './listacliente.css';
import clientes from '../../dados/clientes';

function ListaClientes() {
    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
            </tr>
        </thead>
        <tbody>
            {
                clientes.map((cliente) => {
                    return <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.name}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.fone}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default ListaClientes;