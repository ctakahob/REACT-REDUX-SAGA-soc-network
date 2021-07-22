import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import post from "./post/postReducer";

export default combineReducers({ auth, post });
