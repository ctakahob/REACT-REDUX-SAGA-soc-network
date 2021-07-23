import { all } from "redux-saga/effects";

import { authSagas } from "./auth/authSagas";
import { postSagas } from "./post/postSaga";

export default function* rootSaga() {
  yield all([authSagas(), postSagas()]);
}
