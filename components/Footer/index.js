import React from 'react';
import { FooterContenedor,  Derechos, Redes } from './styles';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function Footer (){
    return (
        <FooterContenedor>
            <Derechos>       
            <a href="https://www.behance.net/sofihadjilias" target="_blank"><h5>Salimos Jugando ® | Hecho con &#9829; por <h3>Sofita Hadjilias</h3> </h5> </a>
                
            </Derechos>

            <Redes>
                <a href="https://www.facebook.com/Salimos-Jugando-106054751396959" target="_blank">
                        <img class="fb" src="/img/facebook.png" /> 
                    </a>

                    <a href="https://www.youtube.com/channel/UCX3zOqxkdtMw0aswNffDXfw" target="_blank">
                        <img src="/img/youtube.svg" /> 
                    </a>
            </Redes>
        </FooterContenedor>

    );
}

export default Footer;