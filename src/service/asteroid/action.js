import axios from 'axios';
import * as types from './actionTypes';


export const getAsteroidDetails = (data) => dispatch => {
    dispatch({ type: types.GET_ASTEROID_DETAILS.REQUEST })
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${data}?api_key=Z6v6t7GLEdnORuMhfuG5nQxE9smYN8OBajWQaBch`)
        .then(res => {
            dispatch({ type: types.GET_ASTEROID_DETAILS.SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: types.GET_ASTEROID_DETAILS.FAILED })
        })
}

export const randomAsteroidDetails = (data) => dispatch => {
    dispatch({ type: types.RANDOM_ASTEROID_DETAILS.REQUEST })
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Z6v6t7GLEdnORuMhfuG5nQxE9smYN8OBajWQaBch`)
        .then(res => {
            dispatch({ type: types.RANDOM_ASTEROID_DETAILS.SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: types.RANDOM_ASTEROID_DETAILS.FAILED })
        })
}

