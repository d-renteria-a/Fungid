import axios from "axios";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ENTRIES = 'FETCH_ENTRIES';

const ROOT_URL = '/api'

export function setCurrentUser(user) {
    const req = axios.post(`${ROOT_URL}/login`, {username: user});
    // console.log('received from server-login: ', res)
    return { type: SET_CURRENT_USER, payload: req}
}

export function fetchUsers() {
    const req = axios.get(`${ROOT_URL}/users`);
    // console.log('received from server-users: ', res.data)
    return { type: FETCH_USERS, payload: req}
}

export function fetchEntries() {
    const req = axios.get(`${ROOT_URL}/data_entries`);
    return { type: "FETCH_ENTRIES", payload: req}
}
