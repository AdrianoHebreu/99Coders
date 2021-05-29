import React from 'react';

function Features () {
    return <section id='features'>
        <div className='container'>
            <div className='row'>

                <div className='col-lg-4 feature-box'>
                    <i class="icon fas fa-heart fa-5x"></i>
                    <h3>Facil de usar</h3>
                    <p>O sistema possui um interface simples e facil de utilizar.</p>
                </div>

                <div className='col-lg-4 feature-box'>
                <i class="icon fas fa-globe-americas fa-5x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu fluxo de negócio de forma eficiente, onde quer que você esteja.</p>
                </div>

                <div className='col-lg-4 feature-box'>
                <i class="icon fas fa-columns fa-5x"></i>
                    <h3>Organizar é tudo</h3>
                    <p>Tenha sua carteira de clientes sempre muito bem organizada.</p>
                </div>

            </div>
        </div>
    </section>
}

export default Features;