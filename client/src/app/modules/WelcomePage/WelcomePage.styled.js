import styled from 'styled-components';

export const Container = styled.div((props) => {
  return {
    background: `var(--color-grey-light)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0',
    padding: 0,
    height: '86.7vh',
  };
});

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 48rem) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading1 = styled.h1`
  margin-top: 3rem;
  font-size: 4.2rem;
  padding: 3rem;
  font-weight: 700;
  letter-spacing: 0.3rem;

  @media (max-width: 48rem) {
    margin-top: 1rem;
    padding: 2rem;
    font-weight: 500;
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 3rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: right;

  @media (max-width: 48rem) {
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
    align-items: left;
    padding: 2rem;
  }
`;

export const Heading3 = styled.h3`
  font-size: 3.2rem;
  padding: 2rem 2rem 2rem 0;
  font-weight: 100;
  line-height: 4rem;

  @media (max-width: 48rem) {
    line-height: 3rem;
    font-size: 2.2rem;
    padding: 0rem;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  padding: 2rem 2re 2rem 0;
  font-weight: 100;
  line-height: 3rem;

  @media (max-width: 48rem) {
    margin-top: 2rem;
    font-size: 1.6rem;
    padding: 0rem;
  }
`;

export const ButtonsWrapper = styled.div`
  justify-self: center;
  display: flex;
  justify-content: left;
  width: 100%;
  margin-top: 5rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 3rem;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 0.2rem;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;
  outline-offset: 1rem;

  ${({ photo }) => {
    if (photo === 'p1') {
      return {
        left: '30%',
        top: '2rem',
      };
    } else if (photo === 'p2') {
      return {
        left: '50%',
        top: '14rem',
      };
    }
  }}

  &:hover {
    outline: 0.2rem solid var(--color-primary);
    transform: scale(1.05);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
`;
