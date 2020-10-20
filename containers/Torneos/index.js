import React, { Component } from 'react';
import Link from 'next/link'
import Slider from 'react-slick';
/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import YouTube from 'react-youtube';*/
import { Header, Footer, Wrapper, Boton } from '../../components';
import {  
    TextosTorneos,
    Torneos,
    TorneosFondo,
    HoyJuega,
    ProximasFechas,
    TablaPosiciones
} from './styles';


export default class TorneosContainer extends Component {
    render(){
   
    return (
    <>
               <TorneosFondo>
                    <Torneos>
                        <TextosTorneos>
                            <h1>Torneos</h1>
                        </TextosTorneos>
                    </Torneos>  
                </TorneosFondo>

        
         <Wrapper direction="column">

            <HoyJuega>
                <h1>Hoy juega</h1>
                <h2>Martes 3 de Noviembre | 16 hs</h2>
                <img src= '/img/torneos/equipo1.png' />
                <img src= '/img/torneos/equipo2.png' />
                <h3>Cancha El polideportivo</h3>
            </HoyJuega>   

            <ProximasFechas>
                
            </ProximasFechas> 


            <TablaPosiciones>     
                <h1>Tabla de Posiciones</h1>
                    <table  cellpadding="9" >
                        <thead>            
                        <tr>
                            <th>Puesto</th>
                            <th>Club</th>
                            <th>Ganados</th>
                            <th>Perdidos</th>
                            <th>Empatados</th>
                            <th>Puntos</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>La Semilla</td>
                            <td>5</td>
                            <td>1</td>
                            <td>1 </td>
                            <td>23 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Romita </td>
                            <td>4</td>
                            <td>2 </td>
                            <td>0 </td>
                            <td>22 </td>
                        </tr>
                        <tr>
                            <td>3 </td>
                            <td> Turenita </td>
                            <td>3</td>
                            <td>1 </td>
                            <td>1 </td>
                            <td>20 </td>
                        </tr>
                        <tr>
                            <td>4 </td>
                            <td>Messis </td>
                            <td>3 </td>
                            <td>2 </td>
                            <td>0 </td>
                            <td>19 </td>
                        </tr>
                        <tr>
                            <td>5 </td>
                            <td>Caballitos </td>
                            <td>2</td>
                            <td>1 </td>
                            <td>1</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>6 </td>
                            <td>Unidos FC </td>
                            <td>2</td>
                            <td>2 </td>
                            <td>0 </td>
                            <td>9 </td>
                        </tr>
                        <tr>
                            <td>7 </td>
                            <td>Fulbito </td>
                            <td>1</td>
                            <td>4 </td>
                            <td>2 </td>
                            <td>3 </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Botincitos </td>
                            <td>0</td>
                            <td>5 </td>
                            <td>0 </td>
                            <td>0 </td>
                        </tr>
                        </tbody>
                        </table>
            </TablaPosiciones>  
        </Wrapper>
    </>

);
}
}

