import React, { Component } from 'react';
import Link from 'next/link'

import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
    Escuelas,
    ContenedorEscuelita
} from './styles';


function AdministradorContainer() {
  
    return (
    <>      

        <Wrapper direction="column">
        
                    <Escuelas>       
                            <h1>Administrador de Escuelas</h1>
                        <ContenedorEscuelita>

                            <form method="">
                                <input type="image" alt="Submit" />
                                <input type="text" name="nombre" placeholder="Nombre escuela" required="" />
                                <input type="text" name="barrio" placeholder="Barrio" required="" />
                                <input type="text" name="direccion" placeholder="Direccion" required="" />
                                <input type="text" name="contacto" placeholder="Contacto" required="" />


                                <input id="modificar" type="submit" name="submit" value="Modificar" />
                                <input id="eliminar" type="submit" name="submit" value="Eliminar" />
                            </form>

                        </ContenedorEscuelita>

                        <ContenedorEscuelita>

                            <form method="">
                                <input type="image" alt="Submit" />
                                <input type="text" name="nombre" placeholder="Nombre escuela" required="" />
                                <input type="text" name="barrio" placeholder="Barrio" required="" />
                                <input type="text" name="direccion" placeholder="Direccion" required="" />
                                <input type="text" name="contacto" placeholder="Contacto" required="" />


                                <input id="modificar" type="submit" name="submit" value="Modificar" />
                                <input id="eliminar" type="submit" name="submit" value="Eliminar" />
                            </form>

                        </ContenedorEscuelita>
                     
                  </Escuelas>  
                         
        </Wrapper>
   
    </>

);
}
export default AdministradorContainer;
