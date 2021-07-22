import types from "./authActionTypes";

const INITIAL_STATE = {
  isLogined: false,
  error: null,
  allPosts: [],
  userBody: {},
  currentPost: {},
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

    case types.FETCH_POSTS:
      return { ...state, allPosts: action.payload };

    case types.FETCH_PROFILE:
      return { ...state, userBody: action.payload };

    case types.FETCH_POST:
      return { ...state, currentPost: action.post };

    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOG_OUT:
      localStorage.clear();
      return { ...state, isLogined: false };
    default:
      return state;
  }
};

export default authReducer;
