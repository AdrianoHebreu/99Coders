import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

/** Paginas */
import Site from './site/site';
import Login from './app/login/login';
import NovaConta from './app/novaconta/novaconta';
import ResetSenha from './app/resetsenha/resetsenha';
import Home from './app/home/home';
import NovoCliente from './app/novocliente/novocliente';

function App() {
    return <BrowserRouter>
            <Route exact path ='/' component={Site}/>
            <Route exact path ='/app'component={Login}/>
            <Route exact path ='/app/novaconta'component={NovaConta}/>
            <Route exact path ='/app/resetsenha'component={ResetSenha}/>
            <Route exact path ='/app/home'component={Home}/>
            <Route exact path ='/app/novocliente'component={NovoCliente}/>
           </BrowserRouter>;
}

export default App;