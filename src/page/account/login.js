import React, {Component} from 'react'

import './../../css/account/login.less'


export default class loginTip extends Component {

  componentWillMount() {
    document.title = '登录'
  }

  render(){
    return(
        <div className='m-login'>

        </div>
    )
  }
}