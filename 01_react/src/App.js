import React from 'react'

export default class App extends React.Component {
    state = {
        count:0
    }
    add = () => {
        let {count} = this.state
        let {value} = this.refs.selectNumber
        this.setState({count:(count + value*1) })
    }
    dec = () => {
        let { count } = this.state
        let { value } = this.refs.selectNumber
        this.setState({ count: (count - value * 1) })
    }
    incrementIfOdd = () => {
        let { count } = this.state
        let { value } = this.refs.selectNumber
        if ( count % 2 === 1 ) {
            this.setState({ count: (count + value * 1) })
        }
    }
    incrementAsync = () => {
        let { count } = this.state
        let { value } = this.refs.selectNumber
        setTimeout(() => {
            this.setState({ count: (count + value * 1) })
        }, 1000);
    }
    render() {
        let { count } = this.state
        return (    
            <div>
                <h1>当前数量为{count}</h1>
                <select ref='selectNumber'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.dec}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}