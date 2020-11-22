import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {firebase} from "../../lib";
const firebaseDB = firebase.database();

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
    ContenedorBoton,
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

  
function HomeContainer() {
        const [escuelas, setEscuelas] = useState([]);
        const getData = async () => {
           
            firebaseDB.ref('escuelas').once('value', (snapshot) => {
                const escuelasArr = [];
                snapshot.forEach((childSnapshot) => {
                escuelasArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
                })
                // escuelasArr.reverse()
                console.log('getData',escuelasArr);
                setEscuelas(escuelasArr);
            })
        };
        useEffect(() => {
            getData();
        }, []);

    return (
    <>

            <EncontraEscuela>
                 <ContenedorSlider>
                    
                        <div>
                            <img src="/img/home/1.jpg" />
                        </div>
                    
                    <h1>ENCONTRÁ LA ESCUELA DE FÚTBOL IDEAL PARA TU HIJO/A</h1>
                   <ContenedorBoton> <Boton><Link href={"/buscar-escuela"}>Buscar ahora</Link></Boton></ContenedorBoton>
                </ContenedorSlider>
            </EncontraEscuela>

            <Wrapper>

                <EscuelasRecomendadas> 
                    <h1>Escuelas Recomendadas</h1>
                    <GrillaEscuelas>
                        {escuelas.slice(0,6).map(escuela =>(
                            <Card href={"/buscar-escuela"}> 
                            <CardImg>
                                <img src= {escuela.imagen}/>
                            </CardImg>
                            <TitulosCard>
                                <h2>{escuela.name}</h2>
                                <hr />
                                <h4>{escuela.barrio}</h4>
                            </TitulosCard>
                           
                        </Card>
                        ))}
                    </GrillaEscuelas>
                </EscuelasRecomendadas>
            </Wrapper>


    
             <PadresFondo>
                    <Padres>
                        <TextosPadres>
                            <Wrapper direction="column">
                                <h1>Comunidad de padres</h1>
                                <h3>¡Sumate! Sé parte de la comunidad para disfrutar de 
                                beneficios, acceder a los talleres para tu hijo
                                y muchas cosas más!</h3>
                                <Boton><a href="/api/login">Registrate</a></Boton>
                            </Wrapper>
                        </TextosPadres>
                    </Padres>  
                </PadresFondo>

                <Wrapper direction = "column">
                <Talleres>       
                        <TextosSecciones>
                            <img src="/img/home/Ttalleres.png" />
                            <h2>Talleres</h2>
                            <h1>En casa, ¡todos los fin de semana!</h1>
                            <Boton><Link href={"/talleres"}>Ver Más</Link></Boton>
                        </TextosSecciones>
                            <img src="/img/home/talleres.png" />
                    </Talleres>      
                    <SalimosManejando>    
                        <img src="/img/home/combi.png" />   
                        <TextosSecciones>
                            <img src="/img/home/Tsalimosmanejando.png" />
                            <h1>¿No llegás a llevarlos?</h1>
                            <Boton><Link href={"/comunidad-padres"}>Ver Más</Link></Boton>
                        </TextosSecciones>    
                    </SalimosManejando>   
                       
                </Wrapper>
               
                 <QuienesSomos>
                    <ImagenSomosFamilia><img src="/img/home/somosFamilia.png" /></ImagenSomosFamilia>
                    <img src="/img/home/somos.png" />
                    <TextosQuienesSomos>
                    
                    <h3>¡Hola! Somos un grupo de profesionales aficionados por el fútbol que 
                    buscan impulsar la educación futbolística desde temprana edad.

                    Nuestro objetivo es brindarte los servicios que se 
                    adapten a tus necesidades y a las de tus hijos. 
                   
                    Formá parte de Salimos Jugando y sumate a un espacio donde puedas
                    conocer personas y compartir la pasión por el fútbol junto con tus hijos.</h3>
                     <Boton><a mp-mode="dftl" href= "https://mpago.la/1bnhPkz" name="MP-payButton">Donar </a></Boton>
                     


                    </TextosQuienesSomos>       

                </QuienesSomos>     
       
    </>
    );
  }


export default HomeContainer;


    // export async function getServerSideProps({ req, res }) {
    //     const session = await auth0.getSession(req);
    //     if (!session || !session.user) {
    //     res.writeHead(302, {
    //         Location: "/api/login",
    //     });
    //     res.end();
    //     return {};
    //     }
    //     return { props: { user: session.user } };
    // }


// <YouTube videoId="SIhkSwaIJlw" opts={opts} />; 