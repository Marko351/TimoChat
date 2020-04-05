import styled from 'styled-components';

export const Button = styled.button`
  ${({ size }) => {
    if (size === 'big') {
      return {
        fontSize: '1.4rem',
        padding: '1.7rem 4.6rem',
        letterSpacing: '.2rem',
      };
    } else {
      return {
        fontSize: '1rem',
        padding: '1.2rem 2.8rem',
        letterSpacing: '.1rem',
      };
    }
  }}
  background: ${({ color }) =>
    color === 'primary' ? 'var(--color-primary)' : '#fff'};
  color: ${({ color }) =>
    color === 'primary' ? 'var(--color-grey-light)' : 'var(--color-primary)'};
  border: ${({ color }) =>
    color === 'primary' ? '0px' : '2px solid var(--color-primary)'};
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: none;
  font-weight: 700;
  outline: none;
  transition: all 0.3s;

  &:hover {
    background: ${({ color }) =>
      color === 'primary'
        ? 'var(--color-primary-dark)'
        : 'var(--color-grey-light)'};
  }

  &:active {
    transform: scale(0.95);
  }

  ${({ customStyle }) => {
    if (customStyle) {
      return {
        ...customStyle,
      };
    }
  }}
`;
