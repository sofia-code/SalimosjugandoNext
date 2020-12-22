import React, { useEffect, useState } from "react";
import Link from "next/link";
import { firebase } from "../../lib";
//import actualizarEscuelita from "../../pages/api/escuelas/edit";
const firebaseDB = firebase.database();
import { Header, Footer, Wrapper, Boton } from "../../components";
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
  FormularioContacto,
  ValidacionFormulario,
} from "./styles";

function HomeContainer() {
  const [escuelas, setEscuelas] = useState([]);
  const [contactoMensaje, setContactoMensaje] = useState("");

  const getData = async () => {
    //  const data = {
    //      name:"nombreCambiado",
    //      barrio:"barrioCambiado",
    //      telefono:"telefonoCambiado",
    //      direccion: "direcCambiada",
    //      imagen: "imgCambiada"
    //  }
    //  const id = "MOcJZWQDNfYb9oFbDvY";
    //  await actualizarEscuelita(data, id);

    firebaseDB.ref("escuelas").once("value", (snapshot) => {
      const escuelasArr = [];
      snapshot.forEach((childSnapshot) => {
        escuelasArr.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      // escuelasArr.reverse()
      console.log("getData", escuelasArr);
      setEscuelas(escuelasArr);
    });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      setContactoMensaje("Se envió tu consulta, te responderemos a la brevedad, ¡gracias!");
      } else {
        setContactoMensaje("Ocurrió un error, por favor vuelva a intentarlo");
      }
    };
    xhr.send(data);
  }

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
          <ContenedorBoton>
            {" "}
            <Boton>
              <Link href={"/buscar-escuela"}>Buscar ahora</Link>
            </Boton>
          </ContenedorBoton>
        </ContenedorSlider>
      </EncontraEscuela>

      <Wrapper>
        <EscuelasRecomendadas>
          <h1>Escuelas Recomendadas</h1>
          <GrillaEscuelas>
            {escuelas.slice(0, 6).map((escuela, inx) => (
              <Card key={inx} href={"/buscar-escuela"}>
                <CardImg>
                  <img src={escuela.imagen} />
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
              <h3>
                ¡Sumate! Sé parte de la comunidad para disfrutar de beneficios, acceder a los
                talleres para tu hijo y muchas cosas más!
              </h3>
              <Boton>
                <a href="/api/login">Registrate</a>
              </Boton>
            </Wrapper>
          </TextosPadres>
        </Padres>
      </PadresFondo>

      <Wrapper direction="column">
        <Talleres>
          <TextosSecciones>
            <img src="/img/home/Ttalleres.png" />
            <h2>Talleres</h2>
            <h1>En casa, ¡todos los fines de semana!</h1>
            <Boton>
              <Link href={"/talleres"}>Ver Más</Link>
            </Boton>
          </TextosSecciones>
          <img src="/img/home/talleres.png" />
        </Talleres>
        <SalimosManejando>
          <img src="/img/home/combi.png" />
          <TextosSecciones>
            <img src="/img/home/Tsalimosmanejando.png" />
            <h1>¿No llegás a llevarlos?</h1>
            <Boton>
              <Link href={"/comunidad-padres"}>Ver Más</Link>
            </Boton>
          </TextosSecciones>
        </SalimosManejando>
      </Wrapper>

      <QuienesSomos>
        <ImagenSomosFamilia>
          <img src="/img/home/somosFamilia.png" />
        </ImagenSomosFamilia>
        <img src="/img/home/somos.png" />
        <TextosQuienesSomos>
          <h3>
            ¡Hola! Somos un grupo de profesionales aficionados por el fútbol que buscan impulsar la
            educación futbolística desde temprana edad. Nuestro objetivo es brindarte los servicios
            que se adapten a tus necesidades y a las de tus hijos. Formá parte de Salimos Jugando y
            sumate a un espacio donde puedas conocer personas y compartir la pasión por el fútbol
            junto con tus hijos.
          </h3>
          <Boton>
            <a mp-mode="dftl" href="https://mpago.la/1bnhPkz" target="_blank" name="MP-payButton">
              Donar{" "}
            </a>
          </Boton>
        </TextosQuienesSomos>
      </QuienesSomos>

      <FormularioContacto>
        <Wrapper>
          <h2>¡Contactanos!</h2>
        </Wrapper>
        <form  
          onSubmit={submitForm}
          action="https://formspree.io/f/moqppjnb"
          method="POST">

          <label for="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            required=""
          />

          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            required=""
          />

          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" placeholder="Mensaje" required=""></textarea>
          <input id="submit" type="submit" name="submit" value="Enviar" />
        </form>

        
       {contactoMensaje?.length && (<ValidacionFormulario>{contactoMensaje}</ValidacionFormulario>)}
   

      </FormularioContacto>
      
   
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
