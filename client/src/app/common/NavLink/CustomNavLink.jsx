import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {
  textDecoration: 'none',
  color: 'var(--color-secondary)',
  marginLeft: '2rem',
  fontFamily: 'Comic Neue',
  display: 'flex',
  alignItems: 'center',
};

const CustomNavLink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      style={style}
      activeStyle={{
        borderBottom: '.4rem solid var(--color-primary)',
        marginTop: '.4rem',
      }}
    >
      {text}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomNavLink;
