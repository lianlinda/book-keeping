import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/foot.less'

export default class Foot extends Component {
  render() {
    return (
        <ul className='m-foot'>
          <li>
            <NavLink to='/detail' activeClassName='active'>
              <img src={require('../../image/foot/detail.png')} alt="明细"/>
              <span>明细</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/chart'>
              <img src={require('../../image/foot/chart.png')} alt="图表"/>
              <span>图表</span>
            </NavLink>
          </li>
          <li className='add'>
            <NavLink to='/keeping'>
              <div>
                <img src={require('../../image/foot/add.png')} alt="记账"/>
                <span>记账</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/find'>
              <img src={require('../../image/foot/find.png')} alt="发现"/>
              <span>发现</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mine'>
              <img src={require('../../image/foot/mine.png')} alt="我的"/>
              <span>我的</span>
            </NavLink>
          </li>
        </ul>
    )
  }
}