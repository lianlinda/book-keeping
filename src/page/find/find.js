import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Foot from '../layout/foot.js'
import '../../css/find.less'

export default class Find extends Component{
  componentWillMount() {
    document.title = '发现'
  }
  render () {
    let time = new Date()
    let month = time.getMonth() + 1 > 9 ? time.getMonth() + 1 : `0${time.getMonth() + 1}`
    return (
        <div className='m-find'>
          <div className='head'>
            <h2>
              发现
            </h2>
          </div>
          <div className='bill'>
            <Link to='/bill'>
              <div className='bill-head'>
                <span>账单</span>
                <img src={require('../../image/chart/more.png')} alt="更多" className='fr'/>
              </div>
              <ul className='bill-content'>
                <li className='month' onClick={this.showChooseTime}>
                <div>
                  <span>{month}月</span>
                </div>
                </li>
                <li>
                  <div className='sub-title'>收入</div>
                  <span>0.00</span>
                </li>
                <li>
                  <div className='sub-title'>支出</div>
                  <span>0.00</span>
                </li>
                <li>
                  <div className='sub-title'>结余</div>
                  <span>0.00</span>
                </li>
              </ul>
            </Link>
          </div>
          <div className='margin'/>
          <div className='common-function'>
            财富星课堂
          </div>
          <div className='margin'/>
          <div className='common-function'>
            常用功能
          </div>
          <Foot/>
        </div>
    )
  }
}