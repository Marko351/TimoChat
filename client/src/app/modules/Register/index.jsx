import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  CardBody,
  HeadingAuth,
} from '../../common/StyledComponents/CommonStyledComponents';
import { Wrapper, Text } from './Register.styled';
import CustomInput from '../../common/Input';
import CustomButton from '../../common/Button/Button';
import { registerUser } from './redux/actions';
import { cleanUpErrors } from '../../reduxConfig/errors/actions';


const Register = ({ registerUser, errors, cleanUpErrors }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorsInComponent, setErrorsInComponent] = useState({
    username: '',
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
      username: userCredentials.username,
      email: userCredentials.email,
      password: userCredentials.password
    }
    registerUser(data);
  }

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
            errorMessage={errorsInComponent.email}
          />
          <CustomInput
            label="Enter Username"
            type="text"
            onChange={onChange}
            name="username"
            errorMessage={errorsInComponent.username}
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

Register.propTypes = {
  errors: PropTypes.array.isRequired,
  registerUser: PropTypes.func.isRequired,
  cleanUpErrors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors.errors
})

export default connect(mapStateToProps, { registerUser, cleanUpErrors })(Register);
