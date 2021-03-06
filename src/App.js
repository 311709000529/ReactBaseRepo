import React from 'react'
import {Route ,Switch ,Redirect} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'


export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
          <Redirect to='login' />
        </Switch>
      </div>
    )
  }
}