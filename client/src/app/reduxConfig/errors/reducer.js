import {
  GET_ERRORS,
  CLEAN_UP_ERRORS
} from './types';

const initialState = {
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
      case CLEAN_UP_ERRORS:
        return {
          ...state,
          errors: []
        }
        default:
          return state
  }
}