import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const Container = styled.div`
    width: 100%;
`;

export const Torneos = styled.div`
    margin-top: 2%;
    
`;

export const TorneosFondo = styled.div`
  background-image: url("../img/torneos/portada.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 600px;
  width: 100%;
`;


export const TextosTorneos = styled.div`
    display: flex;
    flex-direction: column;
  
    h1{
      position:relative;
      top: 140px;
      left: 0px;
      left: 235px;
      width: 15%;
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


export const TablaPosiciones = styled.div`
    width: 100%;
    h1{
    color:  ${leerColor(colores.gris)};
    }

    table{
      width: 100%;
      tr:nth-child(even) {background-color: #060621;
    }

    thead th{
      background-color: #060621;
      font-size:20px;
    }

    th, td {
      color:  ${leerColor(colores.gris)};
      text-align: left;
    }


}
`;

  export const HoyJuega = styled.div`
  width: 60%;
  margin-top:5%;
  text-align:center;
  background-color: #060621;

  h1, h2, h3{
    color:  ${leerColor(colores.gris)};
  }

  img{
    margin-right: 30px;
    margin-left: 30px;
    width: 15%;
  }

`;

export const ProximasFechas = styled.div`

`;









