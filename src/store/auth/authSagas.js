import axios from "axios";
import types from "./authActionTypes";
import { all, call, put, takeLatest, takeEvery } from "redux-saga/effects";

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
  const response = await axios.post(loginUrl + "/auth/sign_up", {
    email,
    password,
  });
  console.log(response);
};

const getAllPosts = async () => {
  let jwtKey = localStorage.getItem("Authorization");
  let key = JSON.parse(jwtKey);
  let config = {
    headers: {
      Authorization: key,
    },
  };
  const response = await axios.get(loginUrl + "/posts/all", config);
  console.log(response.data);
  return response.data;
};

export function* sagaWatcher() {
  yield takeEvery(types.REQUEST_POSTS, sagaWorker);
  yield takeEvery(types.REQUEST_PROFILE, profileWorker);
}

function* sagaWorker() {
  try {
    const payload = yield call(getAllPosts);
    yield put({ type: types.FETCH_POSTS, payload });
  } catch (e) {
    console.log(e);
  }
}

const getProfile = async () => {
  let jwtKey = localStorage.getItem("Authorization");
  let key = JSON.parse(jwtKey);
  let config = {
    headers: {
      Authorization: key,
    },
  };
  const response = await axios.get(loginUrl + "/user/profile", config);
  console.log(response.data);
  return response.data;
};
// export function* profileWatcher() {

// }

function* profileWorker() {
  try {
    const payload = yield call(getProfile);
    yield put({ type: types.FETCH_PROFILE, payload });
  } catch (e) {
    console.log(e);
  }
}

const addPost = async (title, description) => {
  let jwtKey = localStorage.getItem("Authorization");
  let key = JSON.parse(jwtKey);
  let body = {
    title,
    description,
  };
  const response = await axios.post(loginUrl + "/posts/add", body, {
    headers: { Authorization: key },
  });
  console.log(response.data);
  return response.data;
};

export function* postaddWatcher() {
  yield takeEvery(types.ADD_POST_REQUEST, postWorker);
}

function* postWorker({ payload: { title, description } }) {
  try {
    console.log("Start");
    yield addPost(title, description);
    console.log("add post");
    yield put({ type: types.REQUEST_POSTS });
    console.log("REQUEST_POSTS");
  } catch (error) {
    return console.error;
  }
}

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
    call(sagaWatcher),
    call(postaddWatcher),
    // call(profileWatcher),
  ]);
}
