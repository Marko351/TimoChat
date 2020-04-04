import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${({ size }) => (size === 'big' ? '1.4rem' : '')};
  padding: ${({ size }) => (size === 'big' ? '1.7rem 4.6rem' : '')};
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
  letter-spacing: 0.2rem;
  outline: none;
  transition: all 0.3s;

  &:hover {
    background: ${({ color }) =>
      color === 'primary'
        ? 'var(--color-primary-dark)'
        : 'var(--color-grey-light)'};
  }

  ${({ customStyle }) => {
    if (customStyle) {
      return {
        ...customStyle,
      };
    }
  }}
`;
