import React, { useState } from 'react';

import {
  Container,
  CardBody,
  HeadingAuth,
} from '../../common/StyledComponents/CommonStyledComponents';
import { Wrapper, Text } from './Register.styled';
import CustomInput from '../../common/Input';
import CustomButton from '../../common/Button/Button';

const Register = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <CardBody>
          <HeadingAuth>Register</HeadingAuth>
          <Text>Sign up to your account</Text>
          <CustomInput
            label="Enter Email"
            type="text"
            onChange={onChange}
            name="email"
          />
          <CustomInput
            label="Enter Username"
            type="text"
            onChange={onChange}
            name="username"
          />
          <CustomInput
            label="Enter Password"
            type="password"
            onChange={onChange}
            name="password"
          />
          <CustomInput
            label="Confirm Password"
            type="password"
            onChange={onChange}
            name="password"
          />
          <CustomButton
            customStyle={{ marginTop: '2rem' }}
            size="small"
            text="Submit"
            color="primary"
            onClick={() => {}}
          />
        </CardBody>
      </Wrapper>
    </Container>
  );
};

export default Register;
