import {connect} from 'react-redux'
import Counter from '../components/counter.jsx'
import {createIncrement ,createDecrement} from '../redux/action_creator'


function mapStateToProps(state) {
    return {count:state}
}


function mapDispatchToProps(dispatch) {
    return {
        increment:(value) => {dispatch(createIncrement(value))},
        decrement:(value) => {dispatch(createDecrement(value))}
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Counter)
