import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const ContainerHeader = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 10px 0;

    #nav{
      display:none;
    }

    

  @media (min-width: ${breakpoints.tablet}) {
    

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
        font-size: 13px;
        transition: all 2s ease;
        transition: transform .2s;
       }

    #nav li a:hover {
    color: #00c5d9;
    transform: scale(1.5);
    
    }
  }    

`;

export const Hamburguer = styled.div`
      display: block;
      max-width: 50%;
     
      img {
        width: 30%;
        
      }

      @media (min-width: ${breakpoints.mobileGrande}) {
        display:none;

  }
`;

export const Logo = styled.div`



@media (min-width: ${breakpoints.mobileGrande}) {

  width: 100%;
  cursor: pointer;
  margin-left: 2%;
    margin-top: 4%;
  img {
    
    transition: transform .2s;
  }
  
    img:hover {
    transform: scale(1.5);
  
    }  

}
`;
