import React, { Component } from 'react';
import Link from 'next/link'
import YouTube from 'react-youtube';

import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
    ActividadesTalleres,
    LasActividades,
    CardImgActividades,
    TextosSecciones,
    TextosTalleres,
    Talleres,
    TalleresFondo,
    VideoResponsive,
    TallerHoy,
    TallerHoyTextos,
} from './styles';


export default class TalleresContainer extends Component {
    render() {
        const opts = {
          height: '520',
          width: '920',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            
          }}

          const opts2 = {
            height: '250',
            width: '400',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            }
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
                    <h1>Taller de hoy: </h1>
                </TallerHoyTextos>
                <VideoResponsive>
                <YouTube videoId="OrRjLGXEiq4" opts={opts} onReady={this._onReady} />;
                </VideoResponsive>
            </TallerHoy>
        
                    <ActividadesTalleres>       
                        <TextosSecciones>
                            <h1>Mirá los talleres pasados:</h1>
                        </TextosSecciones>
                        <LasActividades>
                            <div>
                            <CardImgActividades>
                            <YouTube videoId="7aSeafShefI" opts={opts2} onReady={this._onReady} />;
                            </CardImgActividades>
                         
                            </div> 

                              <div>
                                 <CardImgActividades>
                                 <YouTube videoId="qfXD3SBEvVE" opts={opts2} onReady={this._onReady} />;
                                 </CardImgActividades>
                            
                            </div> 

                            <div>
                                 <CardImgActividades>
                                 <YouTube videoId="MwYzNyqWS7Q" opts={opts2} onReady={this._onReady} />;
                                 </CardImgActividades>
                            
                            </div> 

                            <div>
                                 <CardImgActividades>
                                 <YouTube videoId="OrRjLGXEiq4" opts={opts2} onReady={this._onReady} />;
                                 </CardImgActividades>
                            
                            </div> 

                            <div>
                                 <CardImgActividades>
                                 <YouTube videoId="qfXD3SBEvVE" opts={opts2} onReady={this._onReady} />;
                                 </CardImgActividades>
                            
                            </div> 

                            <div>
                                 <CardImgActividades>
                                 <YouTube videoId="MwYzNyqWS7Q" opts={opts2} onReady={this._onReady} />;
                                 </CardImgActividades>
                            
                            </div> 
                          
                        </LasActividades>
                  </ActividadesTalleres>  
                         
        </Wrapper>
   
    </>

);
}
}
