import styled, { css } from 'styled-components';
import { breakpoints, leerColor, colores } from '../../constants';

export const BotonGenerico = styled.a`
    border-radius: 20px;
    background-color: hsl(185.5,100%,42.5%);
    color: #fff;
    font-size: 17px;
    padding: 14px 30px;
    width: 35%;
    text-align: center;
    font-weight: bolder;
    cursor: pointer;
  
  ${props =>
    props.isBotonRosa &&
    css`
      width: fit-content;
      margin: 0 auto;
      border: 1px solid ${leerColor(colores.gris)};
      background-color: ${leerColor(colores.celeste)};
      color: ${leerColor(colores.rosa)};
      font-size: 0.6em;
      font-weight: 600;
      padding: 0.7em 1em 0.7em 1em;
      @media (max-width: ${breakpoints.laptop}) {
        height: fit-content;
        margin: 0;
      }
    `}
`;


