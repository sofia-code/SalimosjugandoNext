import React, { Component } from 'react';
import Link from 'next/link';
import auth0 from '../../lib/auth0'
/*import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/

import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
    DescuentoSemana, 
    Descuentos,
    Card,
    CardImg,
    TitulosCard,
    SalimosManejando,
    ImagenesSalimosManejando,
    TextosSecciones,
    TextosPadres,
    Padres,
    PadresFondo,
    LasActividades,
    ActividadesPadres,
    CardImgActividades,
} from './styles';


export default class ComunidadPadresContainer extends Component {
    render(){
   
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
    <>
             <PadresFondo>
                    <Padres>
                        <TextosPadres>
                            <h1>Comunidad de padres</h1>
                            <h3>Mamis y papis, ¡ustedes también pueden disfrutar de beneficios!</h3>
                        </TextosPadres>
                    </Padres>  
                </PadresFondo>

            <Wrapper direction="column">
                <DescuentoSemana>
                <h1>Descuentos de esta semana</h1>
                <Descuentos>
                    {/* <Slider {...settings}>             */}
                       <Card>
                            <CardImg>
                                <img src= '/img/padres/descuentos1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>-20% en lavadero de autos</h2>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/padres/descuentos2.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>3x2 en jugos "Baggio"</h2>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/padres/descuentos3.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>-30% en pelota de fútbol Adidas</h2>
                            </TitulosCard>
                        </Card>
                        </Descuentos>
                        {/* <Card>
                            <CardImg>
                               <img src= '/img/padres/descuentos4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>-15% medias de fútbol de  niños</h2>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/padres/descuentos5.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>2x1 alfajores "Jorgito"</h2>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/padres/descuentos6.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>-25% en bebidas "Levite"</h2>
                            </TitulosCard>
                        </Card> */}
                        
                    {/* </Slider> */}
                </DescuentoSemana>
            </Wrapper>
             

               
                    <SalimosManejando>   
                         <Wrapper direction="column">
                            <TextosSecciones>
                                <h1>Salimos Manejando</h1>
                                <h3>Más de 50 familias contrataron nuestra combi de Salimos Jugando para llevar y traer a sus hijos a la escuelita de fútbol. Te garantizamos el viaje de manera segura y a un costo accesible. </h3>
                                <Boton>Contactar ahora</Boton>
                            </TextosSecciones>
                         </Wrapper>
                         <ImagenesSalimosManejando>
                            <img src="/img/padres/combi1.jpg" />
                            <img src="/img/padres/combi2.jpg" />                 
                         </ImagenesSalimosManejando>
                    </SalimosManejando>   
          


                <Wrapper direction="column">
                    <ActividadesPadres>       
                        <TextosSecciones>
                            <h1>Actividades pensadas para vos</h1>
                        </TextosSecciones>
                        <LasActividades>
                            <div>
                            <CardImgActividades>
                                <img src="/img/padres/actividades1.jpg" />
                            </CardImgActividades>
                                <h1>Fútbol padres</h1>
                                <h2>Lunes y Miércoles 20hs</h2>
                                <h2>Sede "El Polideportivo"</h2>
                            </div> 

                              <div>
                                 <CardImgActividades>
                                    <img src="/img/padres/actividades2.jpg" />
                                 </CardImgActividades>
                                <h1>Spinning</h1>
                                <h2>Jueves y Sábados 10hs</h2>
                                <h2>Sede "Megatlon Caballito"</h2>
                            </div> 

                              <div>
                                <CardImgActividades>
                                    <img src="/img/padres/actividades3.jpg" />
                                </CardImgActividades>
                                <h1>Funcional</h1>
                                <h2>Martes y Viernes 19:30hs</h2>
                                <h2>Sede "Sport Club Flores"</h2>
                            </div> 
                          
                        </LasActividades>
                  </ActividadesPadres>  
       
        </Wrapper>
     
             
    </>

);
}
}
// 
//  <Boton><a mp-mode="dftl" href= "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=203413372-474341f6-4d95-442c-a1aa-eaa78feee2a9" name="MP-payButton">Donar </a></Boton>
//export default HomeContainer;
// <YouTube videoId="SIhkSwaIJlw" opts={opts} />; 