import React, { Component } from 'react'

import ListItem from './component/listItem'
import Foot from './layout/foot'

import '../css/mine.less'

export default class Mine extends Component{
  componentWillMount() {
    document.title = '我的'
  }

  handleClick = () => {

  }

  render () {
    return (
        <div className='m-mine'>
          <div className='head'>
            头像
            打卡
            登录状态
            <ul className='flex'>
              <li>
                <p>-</p>
                <p>已连续打卡</p>
              </li>
              <li>
                <p>-</p>
                <p>记账总天数</p>
              </li>
              <li>
                <p>-</p>
                <p>记账总笔数</p>
              </li>
            </ul>
          </div>
          <ListItem data={{icon: 'VIP', text: '升级为VIP', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '徽章', rightText: '已获得0枚', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '类别设置', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '定时提醒', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '声音开关'}}/>
          <ListItem data={{icon: 'VIP', text: '明细详情'}}/>
          <ListItem data={{icon: 'VIP', text: '邀请好友', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '去应用市场给鲨鱼记账评分', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '意见反馈', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '帮助', handleClick: this.handleClick}}/>
          <ListItem data={{icon: 'VIP', text: '关于鲨鱼记账', handleClick: this.handleClick}}/>
          <Foot/>
        </div>
    )
  }
}