import types from "./authActionTypes";

const INITIAL_STATE = {
  isLogined: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isLogined: action.payload,
        error: null,
      };

    case types.LOG_IN_WITH_LOCAL_STORAGE:
      return { ...state, isLogined: true };
    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOG_OUT:
      localStorage.clear();
      return { ...state, isLogined: false, error: null };
    default:
      return state;
  }
};

export default authReducer;
