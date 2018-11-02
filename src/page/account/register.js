import React, {Component} from 'react'

import '../../css/account/register.less'

import {goBack} from '../../utils/window'


export default class loginTip extends Component {

  componentWillMount() {
    document.title = '注册'
  }

  render(){
    return(
        <div className='m-register'>
          <div className='head'>
            <div className='back'>
              <img src={require('./../../image/find/back.png')} alt="" onClick={goBack}/>
            </div>
            <h2>
              注册
            </h2>
          </div>
        </div>
    )
  }
}