import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 48rem) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  margin: 1rem 0 2rem 0;
`;
