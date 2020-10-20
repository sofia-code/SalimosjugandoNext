import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const FooterContenedor = styled.div`
margin-bottom: 2%;
width: 100%;
display: flex;

cursor: pointer;
img {
  width: 15%;
}
`;


export const Derechos = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin:0 auto;

    h5{
      color:  ${leerColor(colores.gris)};
      width: 100%;
      text-align:center;
      letter-spacing:1.5px;
    }

`;
