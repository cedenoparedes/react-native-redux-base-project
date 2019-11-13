import {FECHING_LOGIN, FECHING_SUCCESS, FECHING_FAIL} from '../constants';

const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

export default dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECHING_LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case FECHING_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    case FECHING_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};
