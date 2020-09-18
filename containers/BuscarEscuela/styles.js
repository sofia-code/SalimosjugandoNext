import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';



export const Buscador = styled.div`
   width: 45%;
   display:flex;
   flex-wrap: wrap;
   justify-content: right;
`;


export const Form = styled.div`
select{
  padding:8px;
  width:50%;
  font-weight: 800;
  background-color: ${leerColor(colores.gris)};
  margin-right: 2%;
  margin-top: 2%;
}
  input{
    background-color: ${leerColor(colores.celeste)};
    padding:8px;
    width:20%;
    font-weight: 800;
    color:  ${leerColor(colores.gris)};
    border: none;
    margin-top: 2%;
  }
`;

export const Resultados = styled.div`
   width:100%;
   margin-top:5%;
   display:flex;
   flex-wrap: wrap;
`;


export const Card = styled.a`
  display: flex!important;
  background-color:#060621;
  border-radius: 70px;
  flex-direction: row;
  margin-bottom:5%;
  width: 100%;
  cursor: pointer;
  
`;

export const CardImg = styled.div`
    width: 25%;
    img{
    width: 200%;
    height: 245px;
    border-radius: 60px;
    object-fit: cover;
    }

`;

export const TitulosCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  margin-top: 1%;

  h2{
    font-size: 18px;
    color: ${leerColor(colores.gris)};
    text-transform: uppercase;
    font-weight: 800;
  }

  h3{
    font-size: 17px;
    color: ${leerColor(colores.celeste)};
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
  }

  h4{
    font-size: 14px;
    color: ${leerColor(colores.gris)};
    font-weight: 500;
    font-style: italic;
    } 

    h5{
    font-size: 13px;
    color: ${leerColor(colores.gris)};
    font-weight: 500;
    font-style: italic;
  }
`;