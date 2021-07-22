import { all, call } from "redux-saga/effects";

import { authSagas } from "./auth/authSagas";
import { postSagas } from "./post/postSaga";

// export default function* rootSaga() {
//   yield all([call(sagas)]);
// yield all([call()]);
// }

export default function* rootSaga() {
  yield all([authSagas(), postSagas()]);
  // code after all-effect
}
