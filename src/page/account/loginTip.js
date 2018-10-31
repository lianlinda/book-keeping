import React, {Component} from 'react'
import {render} from 'react-dom'

import './../../css/account/loginTip.less'

export default class loginTip extends Component {
  componentWillMount() {
    document.title = '登录'
  }

  close = () => {
    window.history.back()
  }

  moreMethod = {
    hide: () => {
      let view = document.getElementById('moreMethod');
      document.removeChild(view)
    },
    show: () => {
      const view = document.createElement('div');
      view.setAttribute('id', 'moreMethod');
      document.body.appendChild(view);
      render(
          <div className='m-login-method'>
            <div className='modal'/>
            <div className='method'>
              <div>注册</div>
              <div>手机登录</div>
              <div>取消</div>
            </div>
          </div>,
          view
      )
    }
  }

  render(){
    return(
        <div className='m-loginTip animate-route'>
          <div className='close'>
            <img src={require('./../../image/account/close.png')} alt="" onClick={this.close} className='fr'/>
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