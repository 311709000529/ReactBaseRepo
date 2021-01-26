import {connect} from 'react-redux'
import Counter from '../components/counter.jsx'
import { createIncrement, createDecrement, createIncrementAsync} from '../redux/action/counter_action.js'


// function mapStateToProps(state ,ownProps) {
//     // console.log(state,ownProps)
//     return {count:state,ownProps:ownProps}
// }


// function mapDispatchToProps(dispatch) {
//     return {
//         increment:(value) => {dispatch(createIncrement(value))},
//         decrement:(value) => {dispatch(createDecrement(value))}
//     }
// }

export default connect(
    state => ({count:state.count ,person:state.person}),
    {
        increment: createIncrement,
        decrement: createDecrement,
        incrementAsync: createIncrementAsync
    }
    )(Counter)
