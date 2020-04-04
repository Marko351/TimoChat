import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, GET_ERRORS } from './types';

export const loginUser = (userData, history) => (dispatch) => {
  return axios
    .post('/auth/login-user', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('timoToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set loged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Logout user
export const logoutUser = (fromCps) => (dispatch) => {
  localStorage.removeItem('timoToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  if (!fromCps) {
    window.location.href = '/login';
  }
};
