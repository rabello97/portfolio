import React from 'react'
import perfil from  '../img/perfil.jpg'

function Contents(){
    return(
        <main className="introducao">
            <img src={perfil} alt="lobo cinza" />
            <div> 
                <h1>Desenvolvedor Front End &<br/>UX/UI Designer</h1>
                <p>Localizado em Curitiba, Paraná</p>
            </div>
        </main>
    )
}

export default Contents;