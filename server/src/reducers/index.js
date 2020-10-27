import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import FetchUsers from "./reducer-fetch-users";

const rootReducer = combineReducers({
    loggedInUser: UserReducer,
    onlineUsers: FetchUsers,
});

export default rootReducer;