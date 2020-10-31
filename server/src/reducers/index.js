import { combineReducers } from "redux";
// import UserReducer from "./reducer-user";
import FetchEntries from './reducer-fetch-entries'
// import FetchUsers from "./reducer-fetch-users";

const rootReducer = combineReducers({
    // loggedInUser: UserReducer,
    // onlineUsers: FetchUsers,
    FetchedEntries: FetchEntries
    //filters: {
    //     name: [],
    //     sci name: [],
    //     season: []
    // }
});

export default rootReducer;