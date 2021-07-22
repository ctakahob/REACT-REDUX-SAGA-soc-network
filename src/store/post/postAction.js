import types from "./postActionTypes";

export const addNewPost = (post) => ({
  type: types.ADD_NEW_POST,
  payload: post,
});

export const addNewComents = (coments) => ({
  type: types.ADD_NEW_COMMENTS,
  payload: coments,
});

export const addRequestPost = (post) => ({
  type: types.ADD_POST_REQUEST,
  payload: post,
});

export const putCurrentPost = (post) => ({
  type: types.REQUEST_PUT_POST,
  payload: post,
});

export const fetchPosts = () => ({
  type: types.REQUEST_POSTS,
});

export const requestProfile = () => ({
  type: types.REQUEST_PROFILE,
});

export const getPostToId = (path) => ({
  type: types.REQUEST_POST,
  payload: path,
});
