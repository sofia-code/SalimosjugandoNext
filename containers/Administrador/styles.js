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

export const ContenedorAgregar = styled.div`
   width: 100%;
   padding: 1%;
   background-color: #0a0f1f;
   margin-bottom: 20px;

   h2{
    font-size: 26px;
    color:  ${leerColor(colores.gris)};
   }

   input, #agregar{
     width: 13%;
     padding: 1%;
     margin-right: 5px;
   }

   #agregar{
    background-color:  ${leerColor(colores.rosa)};
    color:  ${leerColor(colores.gris)};
    border:none;
    cursor:pointer;
    font-size: 18px;
    font-weight: bolder;
    margin-left: 4%;
   }

  
`;


export const ContenedorEscuelita = styled.div`
   width: 100%;
   padding: 1%;
   margin-top: 10px;
   background-color: #0a0f1f;

   h2{
    font-size: 26px;
    color:  ${leerColor(colores.gris)};
   }


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

