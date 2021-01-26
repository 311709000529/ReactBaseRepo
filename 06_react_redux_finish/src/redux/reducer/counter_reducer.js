import {INCREMENT ,DECREMENT} from '../action_types.js'

let initCount = 0
export default function operaCount(preState = initCount ,action ) {
    // console.log('-------recuder----------',action)
    let newCount 
    switch (action.type) {
        case INCREMENT:
            newCount = preState + action.value
            // console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        case DECREMENT:
            newCount = preState - action.value
            // console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        default:
            // console.log('preStete = ', preState)
            return preState
    }
}