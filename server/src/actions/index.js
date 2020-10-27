import axios from "axios";
export const SET_CURRENT_USER = 'set_current_user';
export const FETCH_USERS = 'fetch_users';

const ROOT_URL = '/api'

export function setCurrentUser(user) {
    const res = axios.post(`${ROOT_URL}/login`, {username: user});
    console.log('received from server-login: ', res)
    return { type: SET_CURRENT_USER, payload: res}
}

export function fetchUsers() {
    const res = axios.get(`${ROOT_URL}/users`);
    console.log('received from server-users: ', res.data)
    return { type: FETCH_USERS, payload: res}
}