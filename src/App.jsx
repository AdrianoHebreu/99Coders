import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

/** Paginas */
import Site from './site/site';
import Login from './app/login/login';

function App() {
    return <BrowserRouter>
            <Route exact path ='/' component={Site}/>
            <Route exact path ='/app'component={Login}/>
           </BrowserRouter>;
}

export default App;