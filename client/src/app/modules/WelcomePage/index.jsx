import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TimoBackground from '../../assets/TimoBackground.jpg';
import Timo1 from '../../assets/Timo1.jpg';
import Timo2 from '../../assets/Timo2.jpg';

import {
  Wrapper,
  Heading1,
  TextWrapper,
  ImageWrapper,
  Description,
  ButtonsWrapper,
  Image,
} from './WelcomePage.styled';
import {
  Container,
  Heading3,
} from '../../common/StyledComponents/CommonStyledComponents';
import Button from '../../common/Button/Button';

const index = ({ props }) => {
  const onButtonClick = (action) => {
    if (action === 'signin') {
      props.history.push('/login');
    } else {
      props.history.push('/register');
    }
  };

  return (
    <Fragment>
      <Container backgroundImg={TimoBackground}>
        <Heading1>Welcome to Timo Chat</Heading1>
        <Wrapper>
          <TextWrapper>
            <Heading3>Timo brings the team together, wherever you are</Heading3>
            <Description>
              With all of your communication and tools in one place, remote
              teams will stay productive no matter where you’re working from.
            </Description>
            <ButtonsWrapper>
              <Button
                size="big"
                text="Sign in"
                color="primary"
                onClick={() => onButtonClick('signin')}
              />
              <Button
                size="big"
                text="Sign up"
                color="secondary"
                customStyle={{ marginLeft: '2rem' }}
                onClick={() => onButtonClick('signup')}
              />
            </ButtonsWrapper>
          </TextWrapper>
          <ImageWrapper>
            <Image src={Timo1} photo="p1" />
            <Image src={Timo2} photo="p2" />
          </ImageWrapper>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

index.propTypes = {};

export default index;
