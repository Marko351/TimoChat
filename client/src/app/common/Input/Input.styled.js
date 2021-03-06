import styled from 'styled-components';

export const InputContainer = styled.div `
  display: block;
  width: 100%;
  margin-top: 1rem;
`;

export const Label = styled.label `
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.8);
`;

export const Input = styled.input `
  width: 100%;
  padding: 0.5rem;
  font-size: 1.6rem;
  ${props => ({
    border: !props.errorMessage ? '1px solid var(--color-grey-dark)' : '1px solid red'
  })}
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Small = styled.small `
  display: block;
  color: red;
  font-size: 1rem;
  margin-top: .2rem;
`