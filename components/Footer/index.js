import React from 'react';
import { FooterContenedor,  Derechos, Redes } from './styles';
import { Wrapper } from "../../components";
function Footer (){
    return (
        <FooterContenedor>
              <Wrapper>
            <Derechos>       
            <h5>Salimos Jugando ® | Hecho con &#9829; por</h5> <a href="https://www.behance.net/sofihadjilias" target="_blank"><h3>SOFIA HADJILIAS</h3></a>
                
            </Derechos>

            <Redes>
                <ul class="ul">
                    <li class="li">
                        <a href="https://www.facebook.com/Salimos-Jugando-106054751396959" target="_blank">
                            <img class="fb" src="/img/fb.png" /> 
                        </a>
                    </li>

                    <li class="li">
                        <a href="https://www.youtube.com/channel/UCX3zOqxkdtMw0aswNffDXfw" target="_blank">
                            <img src="/img/youtube.png" /> 
                        </a>
                    </li>

                </ul>
            </Redes>

            </Wrapper>
        </FooterContenedor>

    );
}

export default Footer;