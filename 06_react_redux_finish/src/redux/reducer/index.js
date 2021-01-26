import {combineReducers} from 'redux'
import personRender from './person_reducer.js'
import counterRender from './counter_reducer.js'

export default combineReducers({
    count: counterRender ,
    person: personRender
})