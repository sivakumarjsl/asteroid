import * as types from './actionTypes';
import { initial_state } from '../initialState';

const chapterReducer = (state = initial_state, action) => {
    switch (action.type) {
        case types.GET_ASTEROID_DETAILS.REQUEST:
            return {
                ...state,
                asteroidDetails: null,
                error: false,
                isLoading: true
            }
        case types.GET_ASTEROID_DETAILS.SUCCESS:
            return {
                ...state,
                asteroidDetails: action.payload,
                error: false,
                isLoading: false
            }
        case types.GET_ASTEROID_DETAILS.FAILED:
            return {
                ...state,
                asteroidDetails: null,
                error: true,
                isLoading: false
            }
        case types.RANDOM_ASTEROID_DETAILS.REQUEST:
            return {
                ...state,
                randomId: null,
                error: false,
                isLoading: true
            }
        case types.RANDOM_ASTEROID_DETAILS.SUCCESS:
            return {
                ...state,
                randomId: action.payload.near_earth_objects.length ? action.payload.near_earth_objects[0].id : null,
                error: false,
                isLoading: false
            }
        case types.RANDOM_ASTEROID_DETAILS.FAILED:
            return {
                ...state,
                randomId: null,
                msg: action.payload,
                error: true,
                isLoading: false
            }
        default:
            return state
    }
}

export default chapterReducer
