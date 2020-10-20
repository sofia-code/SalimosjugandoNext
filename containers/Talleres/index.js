import React, { Component } from 'react';
import Link from 'next/link'
import YouTube from 'react-youtube';

import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
 
    TextosSecciones,
    TextosTalleres,
    Talleres,
    TalleresFondo,
    TallerHoy,
    TallerHoyTextos,
    LasActividades,
    ActividadesTalleres,
    CardImgActividades,
} from './styles';


export default class TalleresContainer extends Component {
    render() {
        const opts = {
          height: '620',
          width: '1440',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
  
    return (
    <>
            <TalleresFondo>
                    <Talleres>
                        <TextosTalleres>
                            <h1>Talleres</h1>
                            <h3>En casa, todos los Sábados y Domingos!</h3>
                        </TextosTalleres>
                    </Talleres>  
            </TalleresFondo>
            <Wrapper direction="column">
            <TallerHoy>
                <TallerHoyTextos>
                    <h1>Hoy: Yoga Recreativa</h1>
                    <h3>Profesora: Brenda Yui</h3>
                </TallerHoyTextos>
                <YouTube videoId="3bjggxDiXyk" opts={opts} onReady={this._onReady} />;
            </TallerHoy>

                
                    <ActividadesTalleres>       
                        <TextosSecciones>
                            <h1>El próximo finde:</h1>
                        </TextosSecciones>
                        <LasActividades>
                            <div>
                            <CardImgActividades>
                                <img src="/img/talleres/1.jpg" />
                            </CardImgActividades>
                                <h1>Fútbol Talleres</h1>
                                <h2>Lunes y Miércoles 20hs</h2>
                                <h2>Sede "El Polideportivo"</h2>
                            </div> 

                              <div>
                                 <CardImgActividades>
                                    <img src="/img/talleres/2.jpg" />
                                 </CardImgActividades>
                                <h1>Spinning</h1>
                                <h2>Jueves y Sábados 10hs</h2>
                                <h2>Sede "Megatlon Caballito"</h2>
                            </div> 

                          
                        </LasActividades>
                  </ActividadesTalleres>  
                         
        </Wrapper>
   
    </>

);
}
}
