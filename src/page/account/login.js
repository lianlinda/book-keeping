import React, {Component} from 'react'

import './../../css/account/login.less'

import {goBack} from '../../utils/window'


export default class loginTip extends Component {

  componentWillMount() {
    document.title = '登录'
  }

  render(){
    return(
        <div className='m-login'>
          <div className='close'>
            <img src={require('./../../image/account/close.png')} alt="" onClick={goBack} className='fr'/>
          </div>
        </div>
    )
  }
}