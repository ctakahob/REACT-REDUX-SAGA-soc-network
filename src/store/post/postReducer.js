import types from "./postActionTypes";

const INITIAL_STATE = {
  allPosts: [],
  userBody: {},
  currentPost: {},
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return { ...state, allPosts: action.payload };

    case types.FETCH_PROFILE:
      return { ...state, userBody: action.payload };

    case types.FETCH_POST:
      return { ...state, currentPost: action.post };
    default:
      return state;
  }
};

export default postReducer;
