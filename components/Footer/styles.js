import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const FooterContenedor = styled.div`
    margin-bottom: 2%;
    width: 100%;

    display:flex;
    flex-direction:row;
    margin-top: 5%;
    text-align:center;
    margin: 0 auto;

cursor: pointer;
img {
  width: 15%;
}
`;


export const Derechos = styled.div`
 
 width: 100%;
    h5{
      color:  ${leerColor(colores.gris)};
      
      text-align:center;
      letter-spacing:1.5px;
    }

    h3{
      color:  ${leerColor(colores.rosa)};
      font-size: 18px;
    }



`;

export const Redes = styled.div`
 width: 100%;

    img{
      width: 5%;
    }

    .fb{
      width: 9%!important;
    }
  




`;
