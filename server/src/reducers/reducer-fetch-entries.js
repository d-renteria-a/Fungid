/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ENTRIES} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ENTRIES:
            return action.payload.data;
        default:
            return state;
    }
}
