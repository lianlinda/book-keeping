import React, {Component} from 'react'

import './../../css/account/register.less'


export default class loginTip extends Component {

  componentWillMount() {
    document.title = '注册'
  }

  // 点击返回按钮
  goBack = () => {
    window.history.back()
  }

  render(){
    return(
        <div className='m-register'>
          <div className='head'>
            <div className='back'>
              <img src={require('./../../image/find/back.png')} alt="" onClick={this.goBack}/>
            </div>
            <h2>
              注册
            </h2>
          </div>
        </div>
    )
  }
}