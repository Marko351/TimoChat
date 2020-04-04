import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.styled';

const CustomButton = ({ onClick, text, size, color, customStyle }) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      color={color}
      customStyle={customStyle}
    >
      {text.toUpperCase()}
    </Button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomButton;
