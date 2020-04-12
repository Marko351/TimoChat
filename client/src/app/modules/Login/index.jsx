import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  CardBody,
  HeadingAuth,
} from '../../common/StyledComponents/CommonStyledComponents';
import { Wrapper, Text } from './Login.styled';
import CustomInput from '../../common/Input';
import CustomButton from '../../common/Button/Button';
import { loginUser } from '../Register/redux/actions';
import { cleanUpErrors } from '../../reduxConfig/errors/actions';

const Login = ({ errors, loginUser, cleanUpErrors }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const [errorsInComponent, setErrorsInComponent] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    return cleanUpErrors;
  }, [])

  useEffect(() => {
    let newErrors = {}
    errors.forEach(error => {
      newErrors = {
        ...newErrors,
        [error.path]: error.message
      }
    })
    setErrorsInComponent(newErrors);
  }, [errors])

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmitClick = () => {
    const data = {
      email: userCredentials.email,
      password: userCredentials.password
    }
    loginUser(data);
  }

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
            errorMessage={errorsInComponent.email}
          />
          <CustomInput
            label="Enter Password"
            type="password"
            onChange={onChange}
            name="password"
            errorMessage={errorsInComponent.password}
          />
          <CustomButton
            customStyle={{ marginTop: '2rem' }}
            size="small"
            text="Submit"
            color="primary"
            onClick={onSubmitClick}
          />
        </CardBody>
      </Wrapper>
    </Container>
  );
};

Login.propTypes = {
  errors: PropTypes.array.isRequired,
  loginUser: PropTypes.func.isRequired,
  cleanUpErrors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors.errors
})

export default connect(mapStateToProps, { loginUser, cleanUpErrors })(Login);
