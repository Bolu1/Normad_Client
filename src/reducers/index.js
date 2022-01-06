import {combineReducers} from 'redux'

import jobs from './jobs'
import auth from './auth'

const reducers = combineReducers({ jobs, auth})
export default reducers