import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
  SET_CURRENT_USER
} from './types';
import {
  GET_ERRORS,
  CLEAN_UP_ERRORS
} from '../../../reduxConfig/errors/types';

export const registerUser = (userData) => async dispatch => {
  try {
    const response = await axios.post('/auth/register', userData);
    const {
      token
    } = response.data;
    localStorage.setItem('timoToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    return {
      error: false
    }
  } catch (error) {
    if (error.response.status === 422) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    }
    return {
      error: true
    }
  }
}

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/login', userData);
    const {
      token
    } = response.data;
    localStorage.setItem('timoToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    return {
      error: false
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
    return {
      error: true
    }
  }
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