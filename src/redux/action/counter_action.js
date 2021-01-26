import {INCREMENT ,DECREMENT} from '../action_types.js'

export const createIncrement = value => ({type:INCREMENT ,value:value})

export const createDecrement = value => ({type:DECREMENT ,value:value})

export const createIncrementAsync = (value ,delay) => {
    return (dispatch) => {
        return setTimeout(() => {
            dispatch(createIncrement(value))
        }, delay);
    }
}