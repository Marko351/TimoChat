import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: var(--color-grey-light);
  margin: 0;
  padding: 0;
  height: 8rem;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 3px 41px -16px rgba(97, 31, 105, 0.5);
`;

export const NavWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 48rem) {
    padding: 0 2rem 0 2rem;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 100%;
  color: transaprent;
  background-color: transparent;
`;
export const LogoText = styled.span`
  font-family: 'DaveysDoodleface';
  color: var(--color-primary);
  font-size: 4rem;
  margin-left: 0.5rem;
`;

export const NavItemWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: stretch;
  font-size: 2rem;
  height: 100%;
`;
