import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const Escuelas = styled.div`
    width: 100%;
    margin-top: 5%;

    h1{
      margin-bottom:3%;
      font-size: 36px;
      color:  ${leerColor(colores.gris)};
    }
`;

export const ContenedorEscuelita = styled.div`
   width: 100%;
   padding: 1%;
   background-color: #0a0f1f;

   input{
     width: 13%;
     padding: 1%;
     margin-right: 5px;
   }

   #modificar{
    background-color:  ${leerColor(colores.celeste)};
    color:  ${leerColor(colores.gris)};
    border:none;
    cursor:pointer;
    font-size: 18px;
    font-weight: bolder;
    margin-left: 4%;
   }

   #eliminar{
    background-color: red;
    color:  ${leerColor(colores.gris)};
    border:none;
    cursor:pointer;
    font-size: 18px;
    font-weight: bolder;
    margin-left: 2%;
   }


`;

