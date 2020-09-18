import React from 'react';
import PropTypes from 'prop-types';

import { WrapperContainer } from './styles';

function Wrapper({ direction, children }) {
  return (
    <WrapperContainer direction = {direction}>
      {children}
    </WrapperContainer>
  );
}

Wrapper.propTypes = {
  direction: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Wrapper;
