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

export const HeadingAuth = styled.h3`
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

export const CardBody = styled.div`
  width: 45rem;
  box-shadow: 0px 0px 50px -30px rgba(0, 0, 0, 0.75);
  padding: 2rem;

  @media (max-width: 48rem) {
    width: 70%;
  }
`;
