import React, {Component} from 'react'
import {render} from 'react-dom'

import './../../css/account/loginTip.less'

import {goBack} from '../../utils/window'

export default class loginTip extends Component {
  componentWillMount() {
    document.title = '登录'
  }

  moreMethod = {
    hide: () => {
      let view = document.getElementById('moreMethod');
      document.body.removeChild(view)
    },
    show: () => {
      const view = document.createElement('div');
      view.setAttribute('id', 'moreMethod');
      document.body.appendChild(view);
      render(
          <div className='m-login-method'>
            <div className='modal' onClick={this.moreMethod.hide} onTouchStart={this.moreMethod.hide}/>
            <div className='method'>
              <div className='register' onClick={this.goRegister}>注册</div>
              <div onClick={this.goLogin}>手机登录</div>
              <div className='cancel' onClick={this.moreMethod.hide}>取消</div>
            </div>
          </div>,
          view
      )
    }
  }

  goRegister = () => {
    this.moreMethod.hide()
    this.props.history.push('/account/register')
  }

  goLogin = () => {
    this.moreMethod.hide()
    this.props.history.push('/account/login')
  }

  render(){
    return(
        <div className='m-loginTip'>
          <div className='close'>
            <img src={require('./../../image/account/close.png')} alt="" onClick={goBack} className='fr'/>
          </div>
          <div>
            <img src={require('./../../image/common/logo.png')} alt="" className='logo-img'/>
            <img src={require('./../../image/common/logo2.png')} alt="鲨鱼记账" className='logo-text'/>
          </div>
          <div className='btn-wrap'>
            <button className='wx-login'>微信登录</button>
            <span onClick={this.moreMethod.show}>更多登录方式</span>
          </div>
        </div>
    )
  }
}