import { combineReducers } from "redux";

import login from "./login/reducer";
import user from "./user/reducer";

export default combineReducers({ login, user });
