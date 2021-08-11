import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { AuthContext } from './app/context/auth';

/** Paginas */
import Site from './site/site';
import Login from './app/login/login';
import NovaConta from './app/novaconta/novaconta';
import ResetSenha from './app/resetsenha/resetsenha';
import Home from './app/home/home';
import NovoCliente from './app/novocliente/novocliente';
import EditarCliente from './app/editarcliente/editarcliente';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

    const { logado } = useContext(AuthContext);

    function SecureRoute({ ...params }) {
        if (!logado) {
            return <Redirect to="/app" />
        } else {
            return <Route {...params} />
        }
    }

    return <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Site} />
            <Route exact path='/app' component={Login} />
            <Route exact path='/app/novaconta' component={NovaConta} />
            <Route exact path='/app/resetsenha' component={ResetSenha} />

            <SecureRoute exact path='/app/home' component={Home} />
            <SecureRoute exact path='/app/novocliente' component={NovoCliente} />
            <SecureRoute exact path='/app/editarcliente/:id' component={EditarCliente} />
        </Switch>
    </BrowserRouter>;
}

export default App;