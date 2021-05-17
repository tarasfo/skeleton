import * as types from './constants';

const defaultState = {
  isUserRetreiving: false,
  user: null,
};

export default (state = defaultState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case types.REQUEST_USER: {
      return {
        ...state,
        isUserRetreiving: true,
      };
    }
    case types.SET_USER: {
      return {
        ...state,
        user: action.payload,
        isUserRetreiving: false,
      };
    }
    default: {
      return state;
    }
  }
};