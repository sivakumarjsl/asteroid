import { combineReducers } from 'redux'
import asteroidReducer from '../service/asteroid/reducer';
const examApp = combineReducers({
    asteroidReducer,
})
export default examApp