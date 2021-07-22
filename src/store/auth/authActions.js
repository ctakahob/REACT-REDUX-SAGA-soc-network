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

// export const addNewPost = (post) => ({
//   type: types.ADD_NEW_POST,
//   payload: post,
// });

// export const addNewComents = (coments) => ({
//   type: types.ADD_NEW_COMMENTS,
//   payload: coments,
// });

// export const addRequestPost = (post) => ({
//   type: types.ADD_POST_REQUEST,
//   payload: post,
// });

// export const putCurrentPost = (post) => ({
//   type: types.REQUEST_PUT_POST,
//   payload: post,
// });

// export const fetchPosts = () => ({
//   type: types.REQUEST_POSTS,
// });

// export const requestProfile = () => ({
//   type: types.REQUEST_PROFILE,
// });

// export const getPostToId = (path) => ({
//   type: types.REQUEST_POST,
//   payload: path,
// });

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
