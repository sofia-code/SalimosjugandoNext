
import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerBody = styled.div`
  background-color: ${leerColor(colores.azul)};
`;

export const Container = styled.div`
    width: 100%;
`;

export const EncontraEscuela = styled.div`
    width: 100%;      
`;

export const ContainerTexts = styled.div`
  width: 100%;
`;

export const ContenedorSlider = styled.div`
      h1{
        font-size: 30px;
        left: 85px;
        position: absolute;
        top: 225px;
        width: 70%;
        color: #fff;
      }

      img{
        width: 100%;
        height:500px;
        object-fit:cover;
      }


@media (min-width: ${breakpoints.tablet}) {
        h1{
          font-size: 40px;
        }
}



@media (min-width: ${breakpoints.laptop}) {
    div{
        width:100%;
    }

      img{
        width: 100%;
        height: 820px;
        object-fit:cover;
      }

      h1{
        position:absolute;
        left: 220px;
        top: 300px;
        font-size: 70px;
        text-align: center;
        letter-spacing: 3px;
      }
}

@media (min-width: ${breakpoints.laptopL}) {
      h1{
        left: 265px;
        top: 340px;
      }
}
`;

export const ContenedorBoton = styled.div`
        position: absolute;
        top: 460px;
        left: 110px;
         
        margin: 0 auto;
        text-align:center;

@media (min-width: ${breakpoints.laptop}) {
        top: 665px;
        left: 0px;

}
`;

export const GrillaEscuelas = styled.div`
    display: flex;
    flex-direction: column;


@media (min-width: ${breakpoints.laptop}) {
   
    display:grid;
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 50px;
    grid-row-gap: 45px;
    width: 100%;  
    margin-top: 5%;
}

`;

export const EscuelasRecomendadas = styled.div`
    
    h1{
      margin-bottom: 5%;
      color: ${leerColor(colores.gris)};
      font-size: 26px;
      letter-spacing: 3px;
      width: 40%;
    }

    @media (min-width: ${breakpoints.laptop}) {
    h1{
      margin-top: 5%;
      font-size: 38px;
    }
  }
`;

export const Card = styled.a`

@media (min-width: ${breakpoints.laptop}) {
  background-color:#060621;
  border-radius: 70px;
  cursor: pointer;
  transition: transform .4s ease-out;
}  &:hover{
    transform: scale(1.1);
    box-shadow: 0 2px 3px 0 rgb(255 255 255 / 8%), 0 3px 10px 0 rgb(48 28 212 / 19%);
  }

`;

export const CardImg = styled.div`  
    img{
      width: 100%;
      height: 230px;
      object-fit: cover;
    
    }
`;

export const TitulosCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

  hr{
    width: 75%;
    border-color: ${leerColor(colores.rosa)};;
  }

  h2{
    color: ${leerColor(colores.gris)};
    text-transform: uppercase;
    font-weight: 800;
    text-align: left;
    margin-left: 55px;
  }

  h4{
    font-size: 20px;
    color: ${leerColor(colores.gris)};
    text-align: left;
    margin-left: 55px;
    font-style: italic;
  } 
  
`;

export const HoyJuega = styled.div`
    width: 100%;
    text-align:center;
    background-image: url("../img/home/red.png");
    background-size: cover;
    background-attachment: fixed;
    height: 440px;

  h1{
    color:  ${leerColor(colores.rosa)};
  }

  h3,h4{
    color:  ${leerColor(colores.gris)};
    margin-bottom: 2%;

  }

  img{
    margin-right: 30px;
    margin-left: 30px;
    width: 12%;
    margin-top: 1%;
  }

`;


export const ContenedorImagenes = styled.div`
      width: 50%;
    
      img{
        width: 40px;
        height: 200px;
        object-fit: cover;
        transition: transform .3s;
    }

  @media (min-width: ${breakpoints.notebook}){
    img{
        width: 90%;
        height: 570px;
        object-fit: cover;
        transition: transform .3s;
        
    }

    img:hover{
      transform: scale(1.5);
      }

      h1{
      width: 30%;
      font-size: 38px;
    }
 }
`;


export const SalimosManejando = styled.div`
       display:none;
 

   @media (min-width: ${breakpoints.laptop}){
    margin-top: 10%;
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    
    img{
      display:block;
      width:90%;
    }
   }

`;

export const TextosSecciones = styled.div`
    display: flex;
    flex-direction: column;
    width:85%;
    margin-top: 20%;

    h1{
      color:  ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.rosa)};
      font-size: 30px;
      letter-spacing: 3px;
    }

    h3{
      color:  ${leerColor(colores.gris)};
      margin-bottom: 8%;
    }


`;

export const Padres = styled.div`
    
`;

export const PadresFondo = styled.div`
  margin-top: 8%;
  background-image: url("../img/home/padres.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 500px;
  width: 100%;
`;


export const TextosPadres = styled.div`
    
    width:100%;

    h1{
      position:relative;
      top: 40px;
      color:${leerColor(colores.gris)};
      letter-spacing: 3px;
      font-size: 60px;
      text-align: center;
    }

    h3{
      position:relative;
      color:  ${leerColor(colores.gris)};
      margin-top: 6%;
      margin-bottom: 4%;
      top: 10px;
      font-size: 18px; 
      text-align: center;

    }

    @media (min-width: ${breakpoints.tablet}){
    h1{
      top: 110px;      
    }

    h3{
      font-size: 20px;
      margin-top: 10%;

    }
  }

  @media (min-width: ${breakpoints.laptopL}){

    h3{
      margin-top: 7%;

    }
  }
  
`;

export const Talleres = styled.div`
    
    display:none;

    @media (min-width: ${breakpoints.laptop}){

      margin-top: 10%;
      width: 100%;
      display: grid;
      grid-template-columns: 40% 60%;
    
    img{
      display:block;
      width:100%;

    }

    h2{
      display:none;
    }
    }

`;

export const QuienesSomos = styled.div`

  display:none;
  font-family:Roboto;
  font-weight:bold;




@media (min-width: ${breakpoints.laptop}){
    margin-top: 10%;
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    max-width:100%;
    flex-direction:column;
    
    img{
      display:block;
      width:75%;
      margin: 0 auto;
      text-align:center;
    }
  } 
`;

export const ImagenSomosFamilia = styled.div`
    img{
      display:block;
      width:50%;
    }
    
    @media (min-width: ${breakpoints.tablet}){
      img{
        width:35%;
        margin-bottom:3%;
      }
    }
    
`;

export const TextosQuienesSomos = styled.div`
    width: 55%;
    margin: 0 auto;
    text-align: center;
    background-color: #060621;
    border-radius: 70px;
    padding: 2%;
    cursor: pointer;
  transition: transform .4s ease-out;
}  &:hover{
    transform: scale(1.1);
    box-shadow: 0 2px 3px 0 rgb(255 255 255 / 8%), 0 3px 10px 0 rgb(48 28 212 / 19%);
  }

    
    h3{
      color:  ${leerColor(colores.gris)};
      margin-bottom: 3%;
      font-weight:500;
      line-height: 2em;
      font-size:18px;
      text-align:justify;
    }

    @media (min-width: ${breakpoints.tablet}){
    

    img{
      width:20%;
    }

    h3{
      font-size:20px;
    }    
`;


export const FormularioContacto = styled.div`
    background-image: url("../img/home/red.png");
    background-size: cover;
    background-attachment: fixed;
    margin-bottom: 3%;
    padding-bottom:2%;

    h2{
      color:  ${leerColor(colores.rosa)};
      font-size:55px;
      letter-spacing:2px;
    }

      label {
          color:  ${leerColor(colores.gris)};
          display:block;
          margin-top:20px;
          letter-spacing:1px;
          font-size: 20px;
      }
      .formulario {
          display:block;
          margin:0 auto;
          width:510px;
          color:  ${leerColor(colores.rosa)};
          font-family: Roboto;
      }
      form {
          margin:0 auto;
          width:400px;
      }
      
      input, textarea {
          width: 400px;
          height: 24px;
          background-color: hsl(0,0%,96.1%);
          padding: 20px;
          margin-top: 5px;
          color:  ${leerColor(colores.azul)};
          font-size: 16px;
          font-family: Roboto;
      }
      
      textarea {
          height:250px;
      }
      
      #submit {
          width: 150px;
          height: 45px;
          border:none;
          margin-top:15px;
          margin-bottom: 7%;
          cursor:pointer;
          color:  ${leerColor(colores.gris)};
          background-color:  ${leerColor(colores.celeste)};
          padding: 5px;

      }
    
`;


export const ValidacionFormulario = styled.div`

    width: 100%;
    text-align: center;
    position: absolute;
    background-color:  ${leerColor(colores.rosa)};
    color:  ${leerColor(colores.gris)};
    font-size: 20px;


    @media (min-width: ${breakpoints.laptop}){
      font-size: 28px;
    }
`;



