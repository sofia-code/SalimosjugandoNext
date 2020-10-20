import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const Container = styled.div`
    width: 100%;
`;

export const Padres = styled.div`
    margin-top: 2%;
    
`;

export const PadresFondo = styled.div`
  background-image: url("../img/home/padres.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 600px;
  width: 100%;
`;


export const TextosPadres = styled.div`
    display: flex;
    flex-direction: column;
  
    h1{
      position:relative;
      top: 140px;
      left: 0px;
      left: 235px;
      width: 36%;
      color: #fff;
      background-color:  ${leerColor(colores.celeste)};
 
      font-size: 60px;
      text-align: initial;
      letter-spacing: 3px;
    }

    h3{
      color:  ${leerColor(colores.gris)};
      width: 30%;
      margin-bottom: 8%;
      position:relative;
      top: 110px;
      left: 0px;
      left: 235px;
      font-weight:700;
      font-size: 24px;
    }
`;


export const DescuentoSemana = styled.div`
    width: 100%;  
    margin-top: 5%;
    

    h1{
      margin-bottom: 5%;
      width: 40%;
      color: ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.rosa)};
      font-size: 38px;
      letter-spacing: 3px;
    }
    
`;

export const Descuentos = styled.div`
      display: flex;
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

export const TitulosCard = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    font-size: 24px;
    color: ${leerColor(colores.gris)};
    background-color: ${leerColor(colores.celeste)};
    text-transform: uppercase;
    font-weight: 800;
    display:flex;
    padding: 5px;
  }

`;

export const ContenedorImagenes = styled.div`
  width: 100%;

 img{
    width: 90%;
    height: 570px;
    object-fit: cover;
    transition: transform .3s;
    
 }

 img:hover{
  transform: scale(1.5);
 }
`;


export const SalimosManejando = styled.div`
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-wrap:wrap;
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

export const ImagenesSalimosManejando = styled.div`
    margin-top: 2%;
    width:100%;
    display:flex;
    img{
     width:50%;
	}
`;


export const ActividadesPadres = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const LasActividades = styled.div`
    margin-top: 5%;
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 20px;

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












