
import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


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

  max-width: 100%;
  img{
    width:200%;
    height:400px;
  }

  h1{
    position:absolute;
      top: 160px;
      left: 70px;
      width: 80%;
      color: #fff;
 
      font-size: 30px;
      text-align: initial;
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
  }

  button{
    position: absolute;
    top: 380px;
    left: 120px;
    background-color: transparent;
    border: none;
    }

  @media (min-width: ${breakpoints.mobileGrande}) {
  img{
     height:500px;
  }

  h1{
    top: 300px;
    left: 265px;
    width: 70%;
    font-size: 40px;
  }

  }


  @media (min-width: ${breakpoints.mobileGrande}) {
  img{
      width:100%;
      height: 700px;
      object-fit: cover;
      background-image: linear-gradient(180deg, #000000 57%, #333 100%);
      opacity: 0.70;
    }

    h1{
      font-size: 60px;
    }

    button{
      top: 570px;
      left: 250px;
    }
  }


  @media (min-width: ${breakpoints.notebook}) {
    h1{
      top: 300px;
      left: 265px;
    }
  }
`;


export const EscuelasRecomendadas = styled.div`
    width: 100%;  
    margin-top: 10%;

    h1{
      margin-bottom: 5%;
      width: 85%;
      color: ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.rosa)};
      font-size: 26px;
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
    }

    @media (min-width: ${breakpoints.laptop}) {
    h1{
     
      width: 35%;
      font-size: 38px;
      
    }
  }
`;

export const Card = styled.a`

@media (min-width: ${breakpoints.laptop}) {
  display: flex!important;
  background-color:#060621;
  border-radius: 70px;
  flex-direction: row;
  max-width: 95%;
  cursor: pointer;
}
`;

export const CardImg = styled.div`
    height: 150px;
    width: 150px;
    img{
      width: 100%;
      height: 200px;
      object-fit:cover;
    }

`;

export const TitulosCard = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 24px;
    color: ${leerColor(colores.gris)};
    text-transform: uppercase;
    font-weight: 800;
    display:flex;
  }

  h4{
    font-size: 20px;
    color: ${leerColor(colores.gris)};
    } 
  }


  @media (min-width: ${breakpoints.laptop}){
  h2{
    font-size: 18px;
    display:flex;
    text-align: left;
    margin-left: 30px;
    margin-top: 25px;
  }

  h4{
    font-size: 14px;
    text-align: left;
    margin-left: 30px;
    } 
  }

`;


export const Testimonios = styled.div`
    margin-top:8%;
    width:100%;
`;

export const Torneitos = styled.div`
    width: 100%;
    margin-top: 8%;
    
    h1{
      width: 50%;
      color: ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.celeste)};
      font-size: 30px;
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
    }

    @media (min-width: ${breakpoints.laptop}){
      h1{
      width: 12%;
      font-size: 38px;
    }
  }
  `;


export const ContenedorImagenes = styled.div`
      width: 100%;
    
      img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform .3s;
    }

  @media (min-width: ${breakpoints.laptop}){
    img{
        width: 90%;
        height: 570px;
        object-fit: cover;
        transition: transform .3s;
        
    }

    img:hover{
      transform: scale(1.5);
      }
 }
`;


export const SalimosManejando = styled.div`
   
   display:flex;
   img{
      display:none;
    }


   @media (min-width: ${breakpoints.laptop}){
    margin-top: 10%;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    
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
    margin-top: 8%;

    h1{
      color:  ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.rosa)};
      font-size: 30px;
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
    }

    h3{
      color:  ${leerColor(colores.gris)};
      margin-bottom: 8%;
    }


`;

export const Padres = styled.div`
    margin-top: 8%;
`;

export const PadresFondo = styled.div`
  background-image: url("../img/home/padres.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 500px;
  width: 100%;
`;


export const TextosPadres = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    h1{
      position:relative;
      top: 40px;
      color:${leerColor(colores.gris)};
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
      font-size: 60px;
    }

    h3{
      position:relative;
      color:  ${leerColor(colores.gris)};
      margin-top: 10%;
      font-size: 18px;
    }

    @media (min-width: ${breakpoints.tablet}){
    h1{
      top: 110px;
      left: 0px;
      left: 235px;
      width: 50%;
    }

    h3{
      margin-top: 6%;
      width: 30%;
      margin-bottom: 8%;
      left: 0px;
      left: 235px;
      font-weight:700;
      font-size: 18px;
    }
  }
`;


export const Talleres = styled.div`

    display:flex;
    img{
      display:none;
    }
    h2{
      display:block;
      color: #fff;
      font-family: 'Racing Sans One', cursive;
      letter-spacing: 3px;
      font-size: 30px;
    }

    @media (min-width: ${breakpoints.tablet}){

      margin-top: 10%;
      width: 100%;
      display: grid;
      grid-template-columns: 40% 60%;
    
    img{
      display:block;
      width:90%;
    }

    h2{
      display:none;
    }
    }

`;

export const QuienesSomos = styled.div`

  display:flex;
  max-width:100%;
  flex-direction:column;

  img{
    display:none;
  }

@media (min-width: ${breakpoints.tablet}){
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    
    img{
      display:block;
      width:80%;
    }
  } 
`;

export const ImagenSomosFamilia = styled.div`
    margin-top:10%;
    img{
      display:block;
      width:100%;
    }
    
    @media (min-width: ${breakpoints.tablet}){
      img{
        width:20%;
      }
    }
    
`;

export const TextosQuienesSomos = styled.div`
    width: 100%;
    
    h3{
      color:  ${leerColor(colores.gris)};
      margin-bottom: 8%;
      font-style: italic;
      font-weight:500;
      line-height: 2em;
      font-size:14px;
    }

    @media (min-width: ${breakpoints.tablet}){
    

    img{
      width:80%;
    }

    h3{
      font-size:14px;
    }
  } 

`;











