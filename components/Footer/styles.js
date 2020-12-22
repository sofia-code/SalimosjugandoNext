import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const FooterContenedor = styled.div`
    margin-bottom: 2%;
    width: 100%;
    
    display:flex;
    flex-direction:row;
    margin-top: 10%;
    text-align:center;
  

cursor: pointer;
img {
  width: 15%;
}


@media (min-width: ${breakpoints.mobileGrande}){
      margin-top: 3%;
    }


    @media (min-width: ${breakpoints.laptop}){
      margin-top: 0%;
    }
`;


export const Derechos = styled.div`
 
 width: 100%;
    h5{
      color:  ${leerColor(colores.gris)};
      
      text-align:left;
      letter-spacing:1.5px;
    }

    h3{
      color:  ${leerColor(colores.rosa)};
      font-size: 18px;
      text-align:left;

    }



`;

export const Redes = styled.div`
 width: 100%;

    .ul{
      -webkit-box-pack: center;
      place-content: space-around center;
      display: flex;
      text-decoration: none;
      list-style: none;
      font-size: 11px;
      margin: 0px auto;
      font-weight: 600;
      -webkit-box-align: center;
      align-items: center;
    }

    .li{
      padding: 0px 10px;
    text-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.4s ease 0s;
    }

    .li img{
      font-size: 10px;
    text-align: center;
    margin: 0px auto;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.4s ease 0s;
    width: 50px;
}
    
`;
