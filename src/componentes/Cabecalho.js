import React from 'react';
import '../assets/css/cabecalho.css'

function Cabecalho() {
    return (
        <header className="cabecalhoPrincipal">
            <div className="container">
                <img src={require("../assets/img/icon-login.png")} />

                <nav className="cabecalhoPrincipal-nav">
                    Administrador
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho;