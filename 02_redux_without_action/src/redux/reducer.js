let initCount = 0
export default function operaCount(preState = initCount ,action ) {
    let newCount 
    switch (action.type) {
        case 'add':
            newCount = preState + action.value
            console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        case 'dec':
            newCount = preState - action.value
            console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        case 'incrementIfOdd':
            newCount = preState + action.value
            console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        case 'incrementAsync':
            newCount = preState + action.value
            console.log('preStete = ', preState, '  newCount = ', newCount)
            return newCount
        default:
            console.log('preStete = ', preState)
            return preState
    }
}