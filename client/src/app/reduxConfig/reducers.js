import {
  combineReducers
} from 'redux';
import authReducer from '../modules/Register/redux/reducer';
import errorReducer from './errors/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;