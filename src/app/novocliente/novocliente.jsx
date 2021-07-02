/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import './novocliente.css';

function NovoCliente() {
  return <div>
    <Navbar />
    <div className="container-fluid titulo">

      <div className="offset-lg-3 col-lg-6">
        <h1>Novo Cliente</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user"></i> Nome</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope"></i> E-mail</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-phone-alt"></i> Fone</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="text-center">
            <Link to='/app/home' className="btn btn-outline-primary btn-acao" type="button">Cancelar</Link>
            <button type="submit" className="btn btn-primary btn-acao">Salvar</button>
          </div>

        </form>
      </div>
    </div>
  </div>;
}

export default NovoCliente;