import styled from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';


export const Filtro = styled.div`
   width:100%;
   margin-top:5%;
   margin-bottom:5%;
   display:flex;
   background-color: #060621;
    padding: 1%;
    border-radius: 19px;

   h2{
    font-size: 18px;
    color: ${leerColor(colores.gris)};
    text-transform: uppercase;
    font-weight: 800;
    text-align:center;
   }
   
   select {
    margin-left: 3%;
    width: 30%;
    font-size: 15px;
    color: ${leerColor(colores.celeste)};
    background-color: ${leerColor(colores.azul)};
    border-radius: 70px;
    border-style: none;
    padding:1%;
    cursor:pointer;
   }

   option{
    font-size: 18px;
    color: ${leerColor(colores.celeste)};


   }

   @media (min-width: ${breakpoints.laptopL}) {
   }
`;

// export const Resultados = styled.div`
//    width:100%;
//    margin-top:5%;
//    display:flex;
//    flex-direction:column;
   


//    @media (min-width: ${breakpoints.laptopL}) {
//     flex-direction:row;
//     flex-wrap: wrap;
    
//    }
// `;


// export const Card = styled.a`
//   display: flex!important;
//   background-color:#060621;
//   border-radius: 70px;
//   flex-direction: row;
//   margin-bottom: 5%;
//   margin-right: 5%;
//   width: 100%;
//   cursor: pointer;

//   .modalOn {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 99;
//     width: 100%;
//     height: 100%;
//     opacity: 0.5;
//   }

//     .modalOn a {
     
//     }

//     .modalOff {
//       display: none;
//     }


  
//   @media (min-width: ${breakpoints.laptopL}) {
//     width: 45%;
//    }
  
// `;

// export const CardImg = styled.div`
//     width: 25%;
//     img{
//     width: 200%;
//     height: 245px;
//     border-radius: 60px;
//     object-fit: cover;
//     }

// `;

// export const TitulosCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 30%;
//   margin-top: 1%;

//   h2{
//     font-size: 18px;
//     color: ${leerColor(colores.gris)};
//     text-transform: uppercase;
//     font-weight: 800;
//   }

//   h3{
//     font-size: 17px;
//     color: ${leerColor(colores.celeste)};
//     text-transform: uppercase;
//     font-weight: 800;
//     font-style: italic;
//   }

//   h4{
//     font-size: 14px;
//     color: ${leerColor(colores.gris)};
//     font-weight: 500;
//     font-style: italic;
//     } 

//     h5{
//     font-size: 13px;
//     color: ${leerColor(colores.gris)};
//     font-weight: 500;
//     font-style: italic;
//   }
// `;


export const GrillaEscuelas = styled.div`
    display: flex;
    flex-direction: column;


@media (min-width: ${breakpoints.laptop}) {
   
    display:grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 50px;
    grid-row-gap: 45px;
    width: 100%;  
    margin-top: 5%;
}

`;

export const Resultados = styled.div`
    
    h1{
      margin-bottom: 5%;
      color: ${leerColor(colores.gris)};
      font-size: 26px;
      letter-spacing: 3px;
      width: 40%;
    }

    @media (min-width: ${breakpoints.laptop}) {
    h1{
      margin-top: 5%;
      font-size: 38px;
    }
  }
`;

export const Card = styled.a`

@media (min-width: ${breakpoints.laptop}) {
  background-color:#060621;
  border-radius: 70px;
  cursor: pointer;
  transition: transform .4s ease-out;
}  &:hover{
    transform: scale(1.1);
    box-shadow: 0 2px 3px 0 rgb(255 255 255 / 8%), 0 3px 10px 0 rgb(48 28 212 / 19%);
  }

`;

export const CardImg = styled.div`  
    img{
      width: 100%;
      height: 230px;
      object-fit: cover;
    
    }
`;

export const TitulosCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

  hr{
    width: 85%;
    border-color: ${leerColor(colores.rosa)};;
  }

  h2{
    color: ${leerColor(colores.gris)};
    text-align: center;
    font-size:37px;
    
  }

  h3{
    font-size: 25px;
    color: ${leerColor(colores.gris)};
    text-align: center;
    margin: 0;
  }

  h4{
    font-size: 20px;
    color: ${leerColor(colores.celeste)};
    text-align: center;
    font-family: Roboto;
    font-weight:bold;
  } 

  h5{
    font-size: 20px;
    color: ${leerColor(colores.gris)};
    background-color: ${leerColor(colores.rosa)};
    text-align: center;
    border-radius: 6px;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 4%;
    font-family: Arial;
    
  } 
  
`;