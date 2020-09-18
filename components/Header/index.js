import React from 'react';
import Link from 'next/link';

import { ContainerHeader, Logo, Hamburguer } from './styles';



function Header (){
    return (
        <ContainerHeader>

            <Logo>
                     {/* <a>
                         <img src="/img/logo.png" />
                    </a> */}
          </Logo>

          <Hamburguer><img src="img/menu.svg" /></Hamburguer>


            <ul id="nav">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/Torneos"}>Torneos</Link></li>
                <li><Link href={"/ComunidadPadres"}>Comunidad de padres</Link></li>
                <li><Link href={"/"}>Talleres</Link></li>
                <li><Link href={"/"}>Registro</Link></li>
              </ul>
        </ContainerHeader>

    );
}

export default Header;