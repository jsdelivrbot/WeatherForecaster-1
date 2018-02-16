import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // make sure the state stay the same, only return the new array
            return [...state, action.payload.data];
    }
    return state;
}