import { combineReducers } from "redux";
// import UserReducer from "./reducer-user";
import FetchEntries from './reducer-fetch-entries'
// import FetchUsers from "./reducer-fetch-users";

const rootReducer = combineReducers({
    // loggedInUser: UserReducer,
    // onlineUsers: FetchUsers,
    FetchedEntries: FetchEntries
});

export default rootReducer;