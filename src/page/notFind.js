import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/notFind.less'

export default class notFind extends Component {
  componentWillMount() {
    document.title = '出错了'
  }

  render() {
    return (
        <div className='m-notFind'>
          <img src={require('./../image/common/404.png')} alt=""/>
          <p>Sorry，找不到你想要的页面</p>
          <Link to='/'>返回首页</Link>
        </div>
    )
  }
}