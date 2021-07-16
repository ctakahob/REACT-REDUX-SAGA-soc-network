import types from "./authActionTypes";

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
});

export const registerStart = (credentials) => ({
  type: types.REGISTER_START,
  payload: credentials,
});

export const addNewPost = (post) => ({
  type: types.ADD_NEW_POST,
  payload: post,
});

export const addRequestPost = (post) => ({
  type: types.ADD_POST_REQUEST,
  payload: post,
});

export const fetchPosts = () => ({
  type: types.REQUEST_POSTS,
});

export const requestProfile = () => ({
  type: types.REQUEST_PROFILE,
});
export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const getallPosts = (data) => ({
  type: types.GET_ALL_POSTS,
  payload: data,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
