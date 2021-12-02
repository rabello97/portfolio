import React from 'react'
import marca from '../img/marca.svg'

function Header(){
    return(
        <header className="header">
            <img src={marca} alt="lobo"/>
            <nav>
                <ul className="header-menu">
                    <li><a href="#experiencia">experiência</a></li>
                    <li><a href="#formacao">formação</a></li>
                    <li><a href="#contato">contato</a></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header; 