import React, { useState } from 'react';

import {
  Container,
  CardBody,
  HeadingAuth,
} from '../../common/StyledComponents/CommonStyledComponents';
import { Wrapper, Text } from './Login.styled';
import CustomInput from '../../common/Input';
import CustomButton from '../../common/Button/Button';

const Login = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <CardBody>
          <HeadingAuth>Login</HeadingAuth>
          <Text>Sign in to your account</Text>
          <CustomInput
            label="Enter Email"
            type="text"
            onChange={onChange}
            name="email"
          />
          <CustomInput
            label="Enter Password"
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

export default Login;
