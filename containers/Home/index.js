import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import YouTube from 'react-youtube';*/
import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
    ContainerTexts, 
    EncontraEscuela, 
    Text, 
    Form,  
    ContenedorSlider,
    EscuelasRecomendadas, 
    Card,
    CardImg,
    TitulosCard,
    Torneitos,
    ContenedorImagenes,
    SalimosManejando,
    TextosSecciones,
    TextosPadres,
    Padres,
    PadresFondo,
    Talleres,
    QuienesSomos,
    TextosQuienesSomos,
    ImagenSomosFamilia,
} from './styles';


export default class HomeContainer extends Component {
    render(){
   
  
    const settings2 = {
        slidesToShow: 4,
        responsive: [
        {
        breakpoint: 768,
        settings:{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToScroll: 4
        },
    },
    {
        breakpoint: 375,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '40px',
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
    

      const settings3 = {
        slidesToShow: 3,
        responsive: [
            {
        breakpoint: 768,
            settings:{
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            speed: 500,
            rows: 1,
            slidesPerRow: 1,
            arrows: false,
         },
        },
        
        {
        breakpoint: 375,
            settings:{
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "40px",
            slidesToShow: 1,
            speed: 500,
            rows: 1,
            slidesPerRow: 1,    
            arrows: false,
     },
    },
  ],
    };

      const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed:2000,
      };

    const opts = {
        height: '700',
        width: '1440',
        playerVars: {
          /* https://developers.google.com/youtube/player_parameters*/
          autoplay: 3,
        },
      };
    
    return (
    <>
     <Wrapper direction="column">
        
      </Wrapper>
            <EncontraEscuela>
                {/* <ContenedorSlider>
                    <Slider {...settings} >
                        <div>
                            <img src="/img/home/1.jpg" />
                        </div>
                        <div>
                            <img src="/img/home/2.jpg" />                    
                        </div>
                        <div>
                            <img src="/img/home/3.jpg" />                    
                        </div>
                    </Slider>
                    <h1>ENCONTRÁ LA ESCUELA DE FÚTBOL IDEAL PARA TU HIJO/A</h1>
                    <button><Boton><Link href={"/BuscarEscuela"}>Buscar ahora</Link></Boton></button>
                </ContenedorSlider>
                             */}

            </EncontraEscuela>

            <Wrapper direction="column">
                <EscuelasRecomendadas>
                    <a href="/api/login">Login</a>
                    <a href="/api/logout">Logout</a>
                <h1>Escuelas Recomendadas</h1>
                    {/* <Slider {...settings2}>            
              
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela La Semilla</h2>
                                <h4>Flores</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela Botincitos FC</h2>
                                <h4>Caballito</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela La Gambeteada</h2>
                                <h4>San Isidro</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela Chiquititos</h2>
                                <h4>Devoto</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela Rayo</h2>
                                <h4>Boedo</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela Los chiquitos</h2>
                                <h4>San Isidro</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Escuela MiniFutbol</h2>
                                <h4>Floresta</h4>
                            </TitulosCard>
                        </Card>
                    </Slider> */}
                </EscuelasRecomendadas>
            </Wrapper>

           
                <Torneitos> 
                <Wrapper>
                    <h1>Torneos</h1>
                </Wrapper>
                        <ContenedorImagenes>
                            {/* <Slider {...settings3} >

                            <div>
                                <img src="/img/home/T1.jpg" />
                            </div>
                            <div>
                                <img src="/img/home/T2.jpg" />                   
                            </div>
                            <div>
                                <img src="/img/home/T3.jpg" />                 
                            </div>
                            <div>
                                <img src="/img/home/T4.jpg" />                 
                            </div>
                            <div>
                                <img src="/img/home/T5.jpg" />                 
                            </div>
                            <div>
                                <img src="/img/home/T6.jpg" />                 
                            </div>
                            <div>
                                <img src="/img/home/T7.jpg" />                 
                            </div>
                            </Slider>   */}

                        </ContenedorImagenes>
                </Torneitos>

                <Wrapper direction="column">
                    <SalimosManejando>       
                        <TextosSecciones>
                            <img src="/img/home/Tsalimosmanejando.png" />
                            <h1>¿No llegás a llevarlos?</h1>
                            <h3>Contratá nuestra combi de Salimos Jugando para llevar y traer a tu hijo a la escuelita de fútbol.</h3>
                            <Boton>Ver Más</Boton>
                        </TextosSecciones>
                        <img src="/img/home/salimosManejando.png" />
                    </SalimosManejando>   
                </Wrapper>


                <PadresFondo>
                    <Padres>
                        <TextosPadres>
                            <h1>Comunidad de padres</h1>
                            <h3>¡Sumate! Sé parte de la comunidad para disfrutar de 
                            beneficios, acceder a los talleres para tu hijo
                            y muchas cosas más!</h3>
                        </TextosPadres>
                    </Padres>  
                </PadresFondo>

                <Wrapper direction="column">
                    <Talleres>       
                        <TextosSecciones>
                            <img src="/img/home/Ttalleres.png" />
                            <h2>Talleres</h2>
                            <h1>En casa, ¡todos los días!</h1>
                            <h3>Hoy: Estratégias fútbolísticas con dibujos a cargo del profe Martin Messe</h3>
                            <Boton>Ver Más</Boton>
                        </TextosSecciones>
                            <img src="/img/home/talleres.png" />
                    </Talleres>         

                <QuienesSomos>
                    <img src="/img/home/quienesSomos.png" />
                    <TextosQuienesSomos>
                    <ImagenSomosFamilia><img src="/img/home/somosFamilia.png" /></ImagenSomosFamilia>
                    <h3>Somos un grupo de profesionales aficionados por el fútbol que 
                    buscan impulsar la educación futbolística desde temprana edad. <br /><br />

                    Nuestro objetivo es brindarte los servicios que se 
                    adapten a tus necesidades y a las de tus hijos. <br /><br />

                    Formá parte de Salimos Jugando y sumate a un espacio donde puedas
                    conocer personas y compartir la pasión por el fútbol.</h3>
                     <Boton><a mp-mode="dftl" href= "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=203413372-474341f6-4d95-442c-a1aa-eaa78feee2a9" name="MP-payButton">Donar </a></Boton>
                    </TextosQuienesSomos>



                    

                </QuienesSomos>
       
        </Wrapper>
   
    </>

);
}
}


export async function getServerSideProps({ req, res }) {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: "/api/login",
      });
      res.end();
      return {};
    }
    return { props: { user: session.user } };
  }

//export default HomeContainer;
// <YouTube videoId="SIhkSwaIJlw" opts={opts} />; 