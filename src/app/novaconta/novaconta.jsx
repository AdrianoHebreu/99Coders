/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState }  from 'react';
import './novaconta.css';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../config/firebase';
import 'firebase/auth';

function NovaConta(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

  function cadastrarUsuario(){
    setMensagem('');

    if (!email || !senha) {
      setMensagem('Informe o email ou senha!');
      return;
    }

    firebase.auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(resultado => {
      setSucesso('S');
    })
    .catch(error => {
      setSucesso('N');
      if (error.message === 'Password should be at least 6 characters') {
        setMensagem('A senha deve ter pelo menos 6 caracteres');
      } else if (error.message === 'The email address is badly formatted.') {
        setMensagem('O email não é válido');
      }
      else if (error.message === 'The email address is already in use by another account.') {
        setMensagem('Esse email já está em uso por outra conta');
      }
      else {
        setMensagem('Erro ao criar conta: ' + error.message);
      }
    })
  }

  //Arrow function

    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="/img/logo-small2.png" alt="" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(e)=> setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        
        <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar Conta</button>

        { // sucesso === 1 ? 'faça isso' : 'faça aquilo'
        mensagem.length > 0 ?
        <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null
        }

        {
          sucesso === 'S' ? <Redirect to='/app/home' /> : null
        }

        <div className="login-links mt-5">
          <Link to="/app" className="mx-3"> Já tenho uma conta</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
      </form>
    </div>
  }

export default NovaConta;