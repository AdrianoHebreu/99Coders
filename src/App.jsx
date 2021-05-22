import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card.jsx';
import clientes from './clientes';

function createCard(cliente) {
    return <Card 
    key={cliente.id}
    codigo={cliente.id}
    nome={cliente.name}
    email={cliente.email}
    fone={cliente.fone}/>
}

function App() {
    return <div>
            <Header texto="99 CRM"/>
            {clientes.map(createCard)}
            <Footer/>
           </div>;
}

export default App;