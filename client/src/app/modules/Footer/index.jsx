import React from 'react';
import moment from 'moment';

import { Footer } from './Footer.styled';

const index = (props) => {
  return <Footer>Copyright &copy; {moment(new Date()).year()} TimoChat</Footer>;
};

export default index;
