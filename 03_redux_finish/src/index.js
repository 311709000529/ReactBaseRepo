import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'


ReactDOM.render(<App store={store}/> ,document.querySelector("#root"))


store.subscribe( () => {
    ReactDOM.render(<App store={store} />, document.querySelector("#root"))
})