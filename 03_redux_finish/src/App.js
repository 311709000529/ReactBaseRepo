import React from 'react'
import { createIncrement ,createDecrement} from './redux/action_creator'
export default class App extends React.Component {
    // state = {
    //     count:0
    // }
    increment = () => {
        // let {count} = this.state
        let {value} = this.refs.selectNumber
        // this.setState({count:(count + value*1) })
        this.props.store.dispatch(createIncrement(value*1))
    }
    decrement = () => {
        // let { count } = this.state
        let { value } = this.refs.selectNumber
        // this.setState({ count: (count - value * 1) })
        this.props.store.dispatch(createDecrement(value*1))
    }
    incrementIfOdd = () => {
        let count  = this.props.store.getState()
        let { value } = this.refs.selectNumber
        if ( count % 2 === 1 ) {
            // this.setState({ count: (count + value * 1) })
            this.props.store.dispatch(createIncrement(value * 1))
        }
    }
    incrementAsync = () => {
        // let { count } = this.state
        let { value } = this.refs.selectNumber
        setTimeout(() => {
            // this.setState({ count: (count + value * 1) })
            this.props.store.dispatch(createIncrement(value * 1))
        }, 1000);
    }
    render() {
        return (    
            <div>
                <h1>当前数量为{this.props.store.getState()}</h1>
                <select ref='selectNumber'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}