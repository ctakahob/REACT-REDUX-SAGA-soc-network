import axios from "axios";
import types from "./authActionTypes";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
} from "./authActions";

const loginUrl = "https://test-api-post.herokuapp.com";

axios.defaults.headers.common["Content-Type"] = "application/json";

const logIn = async (email, password) => {
  const response = await axios.post(loginUrl + "/auth/sign_in", {
    email,
    password,
  });
  localStorage.setItem(
    "Authorization",
    JSON.stringify(response.headers.authorization)
  );
  return true;
};

const register = async (email, password) => {
  await axios.post(loginUrl + "/auth/sign_up", {
    email,
    password,
  });
};

// const getAllPosts = async () => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let config = {
//     headers: {
//       Authorization: key,
//     },
//   };
//   const response = await axios.get(loginUrl + "/posts/all", config);
//   return response.data.reverse();
// };

// export function* sagaWatcher() {
//   yield takeEvery(types.REQUEST_POSTS, sagaWorker);
//   yield takeEvery(types.REQUEST_PROFILE, profileWorker);
//   yield takeEvery(types.ADD_POST_REQUEST, postWorker);
//   yield takeEvery(types.ADD_NEW_COMMENTS, commentWorker);
//   yield takeEvery(types.REQUEST_POST, postRequestWorker);
//   yield takeEvery(types.REQUEST_PUT_POST, postPutWorker);
// }

// function* sagaWorker() {
//   try {
//     const payload = yield call(getAllPosts);
//     yield put({ type: types.FETCH_POSTS, payload });
//   } catch (e) {
//     console.log(e);
//   }
// }

// const getProfile = async () => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let config = {
//     headers: {
//       Authorization: key,
//     },
//   };
//   const response = await axios.get(loginUrl + "/user/profile", config);
//   return response.data;
// };

// function* profileWorker() {
//   try {
//     const payload = yield call(getProfile);
//     yield put({ type: types.FETCH_PROFILE, payload });
//   } catch (e) {
//     console.log(e);
//   }
// }

// const addPost = async (title, description) => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let body = {
//     title,
//     description,
//   };
//   const response = await axios.post(loginUrl + "/posts/add", body, {
//     headers: { Authorization: key },
//   });

//   return response.data;
// };

// function* postWorker({ payload: { title, description } }) {
//   try {
//     yield addPost(title, description);
//     yield put({ type: types.REQUEST_POSTS });
//   } catch (error) {
//     return console.error;
//   }
// }

// const addComment = async (title, post_id) => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let body = {
//     title,
//     post_id,
//   };
//   const response = await axios.post(loginUrl + "/comments/add", body, {
//     headers: { Authorization: key },
//   });
//   return console.log(response);
// };

// function* commentWorker({ payload: { title, post_id } }) {
//   try {
//     yield console.log(title, post_id);
//     yield addComment(title, post_id);
//     const payload = post_id;
//     console.log(payload);
//     yield put({ type: types.REQUEST_POST, payload });
//   } catch (error) {
//     return console.error;
//   }
// }

// const getPost = async (path) => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let config = {
//     headers: {
//       Authorization: key,
//     },
//   };
//   const response = await axios.get(loginUrl + "/posts/post/" + path, config);
//   return response.data;
// };

// function* postRequestWorker({ payload }) {
//   try {
//     const post = yield getPost(payload);
//     yield put({ type: types.FETCH_POST, post });
//   } catch (error) {
//     return console.error;
//   }
// }

// const postPutPost = async (post_id, title, description) => {
//   let jwtKey = localStorage.getItem("Authorization");
//   let key = JSON.parse(jwtKey);
//   let body = {
//     title,
//     description,
//   };
//   let config = {
//     headers: {
//       Authorization: key,
//     },
//   };
//   const response = await axios.put(
//     loginUrl + "/posts/post/" + post_id,
//     body,
//     config
//   );
//   return console.log(response);
// };

// function* postPutWorker({ payload: { post_id, title, description } }) {
//   try {
//     yield postPutPost(post_id, title, description);
//     const payload = post_id;
//     yield put({ type: types.REQUEST_POST, payload });
//     yield put({ type: types.REQUEST_POSTS });
//     yield put({ type: types.REQUEST_PROFILE });
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* logInWithCredentials({ payload: { email, password } }) {
  try {
    const user = yield logIn(email, password);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* registerWithCredentials({ payload: { email, password } }) {
  try {
    yield register(email, password);
    yield put(registerSuccess({ email, password }));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* logInAfterRegister({ payload: { email, password } }) {
  yield logInWithCredentials({ payload: { email, password } });
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
    // call(sagaWatcher),
  ]);
}
