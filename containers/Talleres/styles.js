import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const Container = styled.div`
    width: 100%;
`;

export const Talleres = styled.div`
    margin-top: 2%;
    
`;

export const TalleresFondo = styled.div`
  background-image: url("../img/talleres/portada.jpg");
  background-size: cover;
  height: 700px;
  width: 100%;
`;


export const TextosTalleres = styled.div`
    display: flex;
    flex-direction: column;
  
    h1{
      position:relative;
      top: 140px;
      left: 80px;
      font-size: 68px;
      width: 70%;
      color: #fff;
      background-color:  ${leerColor(colores.celeste)};
 
      font-size: 70px;
      text-align: initial;
      letter-spacing: 3px;
    }

    h3{
      color:  ${leerColor(colores.gris)};
      width: 55%;
      margin-bottom: 8%;
      position:relative;
      top: 110px;
      left: 0px;
      left: 80px;
      font-weight:700;
      font-size: 24px;
    }
    
    @media (min-width: ${breakpoints.laptop}) {

    h1{
      left: 235px;
      width: 25%;
    }

    h3{
      left: 235px;
      width:30%;
    }

  }
`;


export const TallerHoy = styled.div`
    width: 100%;  
    margin-top: 5%;
    text-align:center;
    background-color: #020719;
    padding: 2%;
    border-radius: 25px;
`;

export const TallerHoyTextos = styled.div`
    text-align: left;
    margin-bottom: 3%;

    h1{
      color: ${leerColor(colores.celeste)};
      font-weight: black;
    }

    h3{
      font-size: 18px;
      color: ${leerColor(colores.gris)};
    }
`;

export const VideoResponsive = styled.div`
    width: 100%;

   iframe{
      width:100%;
    }
   
    @media (min-width: ${breakpoints.laptop}) {
      iframe{
      width:100%;
    }
    }
  
`;

export const Card = styled.a`
  display: flex!important;
  border-radius: 70px;
  flex-direction: column;
  max-width: 95%;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  
`;

export const CardImg = styled.div`
    height: 250px;
    width: 150px;
    img{
     width: 200%;
    height: 300px;
    object-fit: cover;
    border-radius: 150px;
    }

`;



export const TextosSecciones = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
 
    h1{    
      color: ${leerColor(colores.celeste)};
      font-size: 40px;
      letter-spacing: 3px;
    }

    h3{
      color:  ${leerColor(colores.gris)};
      margin-bottom: 2%;
      width:55%;
    }

`;



export const ActividadesTalleres = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const LasActividades = styled.div`
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction:column;

    img{
        width: 250%!important;
        height: 350px!important;
        object-fit: cover;
        border-radius: 250px!important;
	}

    h1{
        font-size: 24px;
        color: ${leerColor(colores.gris)};
        background-color: ${leerColor(colores.rosa)};
        text-transform: uppercase;
        font-weight: 800;
        display:flex;
        padding: 5px;
        width:50%;
	}

    h2, h3{
     color:  ${leerColor(colores.gris)};
      margin-bottom: 2%;
      width:80%;
      font-size: 18px;
  }

  iframe{
      width:200%;
    }

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 40% 40%;
    grid-column-gap: 85px;
  }
  
  @media (min-width: ${breakpoints.laptopL}) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 20px;

    iframe{
      width:250%;
    }
  }

`;



export const CardImgActividades = styled.div`
    height: 385px;
    width: 150px;
    img{
     width: 200%;
    height: 300px;
    object-fit: cover;
    border-radius: 150px;
    }

`;












