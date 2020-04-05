import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Input, Label, InputContainer } from './Input.styled';

const index = ({ label, type, name, onChange, placeholder }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

index.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default index;
