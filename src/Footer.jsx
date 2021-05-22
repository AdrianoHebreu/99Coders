import React from 'react';

function Footer () {

    var ano = new Date().getFullYear();
    
    return <div>
        <p>Desenvolvido por Adriano Toledo - {ano}</p>
        </div>;
}

export default Footer;