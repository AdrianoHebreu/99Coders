import React, { useState } from 'react'

const AuthContext = React.createContext({});

function AuthProvider(props) {
    let isLogado = localStorage.getItem("logado");
    const [usuario, setUsuario] = useState('');
    const [logado, setLogado] = useState(isLogado === "S" ? true : false);

    return (
        <AuthContext.Provider value={{logado, setLogado, usuario, setUsuario}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};