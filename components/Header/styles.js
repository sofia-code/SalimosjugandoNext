import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerHeader = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 50% 60%;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 10px 0;

    #nav{
      display:none;
    }


    
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 30% 70%;

    #nav {
        display:block;
        width: 100%;
        padding: 0;
        list-style: none;   
        display: flex; 
        justify-content: space-around;

    }

    #nav li {
        float: left; 
        
    }

    #nav li a {
        display: block;
        padding: 8px 15px;
        text-decoration: none;
        font-weight: bold;
        color: #ccc;
        font-size: 14px;
        transition: all 2s ease;
        transition: transform .2s;
       }

    #nav li a:hover {
    color: #00c5d9;
    transform: scale(1.5);
    
    }
  }    

`;

export const MobileHeader = styled.div`
    div {
      display: flex;
      flex-direction:column;
      background-color: ${leerColor(colores.azul)};
      border-radius: 20px;
      list-style-type: none;
    }

    ul {
      list-style-type: none;
      overflow: hidden;
      border-radius: 20px;
      color: #fff;
    }
  
    ul li {
      background-color: ${leerColor(colores.azul)};
      font-size: 18px;
      width:100%; 
      margin-top:20%;
      font-weight:bolder;
    }

  .dropdown {
      display:flex;
      flex-wrap: wrap;
      position: absolute;
      z-index: 99;
      margin-bottom: 2%;
    }

    .dropdown a {
      margin: 0;
    }

    .dropup {
      display: none;
    }

    @media (min-width: ${breakpoints.tablet}) {
      display:none;
  }

`;


export const Hamburguer = styled.div`
      display: block;
      max-width: 90%;
      margin-left: 65px;
     
      img {
        width: 40%;
        
      }

      @media (min-width: ${breakpoints.tablet}) {
        display:none;

  }
`;

export const Logo = styled.div`

    position: relative;
    z-index: 2;
    img {
    width: 30%;
  }


@media (min-width: ${breakpoints.mobile}) {

  width: 100%;
  cursor: pointer;
  margin-left:20%;
  margin-top: 4%;
  img {
    width: 35%;
    transition: transform .2s;
  }
  
    img:hover {
    transform: scale(1.5);
  
    }  
}

@media (min-width: ${breakpoints.notebook}) {

  img {
    width: 18%;
    transition: transform .2s;
  }
}

`;
