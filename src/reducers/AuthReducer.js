import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
const INITIAL_STATE = {
  email: 'asif@gmail.com',
  password: '12345678',
  user: null,
  error: '',
  loading: false
};

export default (state=INITIAL_STATE, action) => {

  switch(action.type){
    case EMAIL_CHANGED:
      return { ...state, email: action.payload.toLowerCase() };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return { ...state, user: null, error: 'Authentication failed.', loading: false };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
