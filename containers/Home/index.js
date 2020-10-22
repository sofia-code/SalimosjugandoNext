import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import firebase from "firebase";
/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/
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
    HoyJuega,
    GrillaEscuelas,
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
        // (function(){
            
        //     const config = {
        //         apiKey:process.env.FIREBASE_API_KEY,
        //         authDomain:process.env.FIREBASE_AUTH_DOMAIN,
        //         databaseURL:process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        //         projectId:process.env.FIREBASE_PROJECT_ID,
        //         storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
        //         messagingSenderId: process.env.FIREBASE_SENDER_ID,
        //         appId:process.env.FIREBASE_SENDER_APPID
        //       };
        //       if (!firebase.apps.length) {
        //         firebase.initializeApp(config);
        //     }
            
        //     const preObject =  document.getElementById('MK54eVspiihkUP7n1Vo');
        //     const dbRefObject = firebase.database().ref().child('escuelas');
        //     const ulList = document.getElementById('list');
        //     const dbRefList = dbRefObject.child('name');

        //     dbRefObject.on('value', snap => {
        //         preObject.innerText = JSON.stringify(snap.val(), null, 3);
        //     });

        //     dbRefList.on('child_added', snap => console.log(snap.val()))


        // }());
    return (
    <>
     <Wrapper direction="column">
        
      </Wrapper>
            <EncontraEscuela>
                 <ContenedorSlider>
                    
                        <div>
                            <img src="/img/home/1.jpg" />
                        </div>
                    
                    <h1>ENCONTRÁ LA ESCUELA DE FÚTBOL IDEAL PARA TU HIJO/A</h1>
                    <button><Boton><Link href={"/buscar-escuela"}>Buscar ahora</Link></Boton></button>
                </ContenedorSlider>
                             

            </EncontraEscuela>

            <Wrapper direction="column">

                <EscuelasRecomendadas> 
                    <h1>Escuelas Recomendadas</h1>
                    <GrillaEscuelas>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>La Semilla</h2>
                                <hr />
                                <h4>Flores</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Botincitos FC</h2>
                                <hr />
                                <h4>Caballito</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>La Gambeteada</h2>
                                <hr />
                                <h4>San Isidro</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Los Chiquititos FC</h2>
                                <hr />
                                <h4>Devoto</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela4.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>Rayo Fútbol</h2>
                                <hr />
                                <h4>Boedo</h4>
                            </TitulosCard>
                        </Card>
                        <Card>
                            <CardImg>
                                <img src= '/img/home/escuela1.jpg' />
                            </CardImg>
                            <TitulosCard>
                                <h2>America League</h2>
                                <hr />
                                <h4>San Isidro</h4>
                            </TitulosCard>
                        </Card>
                    </GrillaEscuelas>
                </EscuelasRecomendadas>
            </Wrapper>


                <Torneitos> 
                    <Wrapper>
                        <img src= '/img/home/Ttorneos.png' />
                    </Wrapper>
                        <HoyJuega>
                            <img src= '/img/torneos/equipo1.png' />
                            <img src= '/img/torneos/equipo2.png' />
                            <h3>Martes 3 de Noviembre | 16 hs</h3>
                            <h4>Cancha "El polideportivo"</h4>
                            
                        </HoyJuega>
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
                            <Wrapper direction="column">
                                <h1>Comunidad de padres</h1>
                                <h3>¡Sumate! Sé parte de la comunidad para disfrutar de 
                                beneficios, acceder a los talleres para tu hijo
                                y muchas cosas más!</h3>
                                <Boton>Registrate</Boton>
                            </Wrapper>
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