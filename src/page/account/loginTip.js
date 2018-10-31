import React, {Component} from 'react'

import './../../css/account/loginTip.less'

export default class loginTip extends Component {
  componentWillMount() {
    document.title = '登录'
  }

  close = () => {
    window.history.back()
  }

  moreMethod = () => {

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
            <span onClick={this.moreMethod}>更多登录方式</span>
          </div>
        </div>
    )
  }
}