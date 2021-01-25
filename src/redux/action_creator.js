import {INCREMENT ,DECREMENT} from './action_types'

export const createIncrement = value => ({type:INCREMENT ,value:value})

export const createDecrement = value => ({type:DECREMENT ,value:value})

