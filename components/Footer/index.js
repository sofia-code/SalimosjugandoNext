import React from 'react';
import { FooterContenedor, Redes, Derechos, Logo } from './styles';
function Footer (){
    return (
        <FooterContenedor>
        
            
            <Derechos>
                <Logo>
                    <img src="/img/logo.png" />    
                </Logo>           
                <h5> ® Todos los derechos reservados</h5>
            </Derechos>

            <Redes>
                <h4>Hecho con &#9829; por Sofita Hadjilias | Todos los derechos reservados</h4>
            </Redes>
          
        </FooterContenedor>

    );
}

export default Footer;