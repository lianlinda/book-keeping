import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import loginTip from './loginTip'
import login from './login'
import register from './register'
import NotFind from './../notFind'

export default class _router extends Component {
  render(){
    return(
        <Switch>
          <Route path='/account/loginTip' component={loginTip}/>
          <Route path='/account/login' component={login}/>
          <Route path='/account/register' component={register}/>
          <Route component={NotFind}/>
        </Switch>
    )
  }
}