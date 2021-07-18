import types from "./authActionTypes";

const INITIAL_STATE = {
  isLogined: false,
  error: null,
  allPosts: [],
  userBody: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isLogined: action.payload,
        error: null,
      };
    case types.FETCH_POSTS:
      return { ...state, allPosts: action.payload };

    case types.FETCH_PROFILE:
      return { ...state, userBody: action.payload };

    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOG_OUT:
      localStorage.clear();
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
