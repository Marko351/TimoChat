import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TimoLogo from '../../assets/TimoLogo.png';

import {
  Container,
  LogoWrapper,
  LogoImg,
  LogoText,
  NavWrapper,
  NavItemWrapper,
} from './NavBar.styled.js';
import CustomNavLink from '../../common/NavLink/CustomNavLink';

const index = (props) => {
  return (
    <Container>
      <NavWrapper>
        <LogoWrapper>
          <LogoImg src={TimoLogo} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoText>TimoChat</LogoText>
          </Link>
        </LogoWrapper>
        <NavItemWrapper>
          <CustomNavLink to="/login" text="Login" />
          <CustomNavLink to="/register" text="Sign up" />
        </NavItemWrapper>
      </NavWrapper>
    </Container>
  );
};

index.propTypes = {};

export default index;
