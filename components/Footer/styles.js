import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const FooterContenedor = styled.div`
margin-bottom: 2%;
width: 100%;
display: grid;
grid-template-columns: 50% 50%;
cursor: pointer;
img {
  width: 15%;

}

`;

export const Redes = styled.div`

`;

export const Derechos = styled.div`
display: flex;
flex-wrap:wrap;
h5{
   color:  ${leerColor(colores.gris)};
   width: 50%;

}

`;

export const Logo = styled.div`
width: 10%;
cursor: pointer;
img {
  width: 80%;

}


`;