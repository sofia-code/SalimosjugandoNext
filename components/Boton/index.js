import React from 'react';
import PropTypes from 'prop-types';
import { BotonGenerico } from './styles';

function Boton({ children }) {

  return (
    <BotonGenerico>
      {children}
    </BotonGenerico>
  );
}
Boton.propTypes = {
  children: PropTypes.string,
};

export default Boton;
