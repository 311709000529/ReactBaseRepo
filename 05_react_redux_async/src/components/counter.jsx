import React from 'react'


export default class Counter extends React.Component {
    // state = {
    //     count:0
    // }
    // componentDidMount() {
    //     console.log(this.props)
    // }
    increment = () => {
        let { value } = this.refs.selectNumber
        this.props.increment(value*1)
    }
    decrement = () => {
        // let { count } = this.state
        let { value } = this.refs.selectNumber
        this.props.decrement(value * 1)
        // this.setState({ count: (count - value * 1) })
        // this.props.store.dispatch(createDecrement(value * 1))
    }
    incrementIfOdd = () => {
        // let count = this.props.store.getState()
        let { value } = this.refs.selectNumber
        if (this.props.count % 2 === 1) {
            // this.setState({ count: (count + value * 1) })
            // this.props.store.dispatch(createIncrement(value * 1))
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        // let { count } = this.state
        let { value } = this.refs.selectNumber
        // setTimeout(() => {
        //     this.props.increment(value * 1)
        //     // this.setState({ count: (count + value * 1) })
        //     // this.props.store.dispatch(createIncrement(value * 1))
        // }, 1000);
        this.props.incrementAsync(value ,1000)
    }
    render() {
        return (
            <div>
                <h1>当前数量为{this.props.count}</h1>
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