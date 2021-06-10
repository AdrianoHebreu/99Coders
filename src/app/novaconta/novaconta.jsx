/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './novaconta.css';
import { Link } from 'react-router-dom';

function NovaConta(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="/img/logo-small2.png" alt="" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>
        
        <button className="w-100 btn btn-lg btn-primary" type="submit">Criar Conta</button>

        <div className="login-links mt-5">
          <Link to="/app" className="mx-3"> Já tenho uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
      </form>
    </div>
  }

export default NovaConta;