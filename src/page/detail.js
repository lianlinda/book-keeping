import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import DatePicker from './component/datePicker'
import Foot from './layout/foot'
import ListItem from './component/listItem'

import '../css/detail.less'

export default class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: {height: (document.querySelector('body').offsetHeight - 56) / 16 + 'rem'},
      noData_height: {height: (document.querySelector('body').offsetHeight - 56) / 16 - 7.5 + 'rem'},
    }
  }
  componentWillMount() {
    document.title = '明细'
  }

  // 底部弹出选择几月份
  showChooseTime = () => {
    this.refs.datePicker.show()
  }

  render() {
    let time = new Date();
    let month = time.getMonth() + 1 > 9 ? time.getMonth() + 1 : `0${time.getMonth() + 1}`;
    return (
        <div className='m-detail'>
          <div className='head'>
            <div className='head-content'>
              <h2><img src={require('./../image/common/logo2.png')} alt="鲨鱼记账" className='logo-text'/></h2>
              <ul className='head-menu'>
                <li className='month' onClick={this.showChooseTime}>
                  <div className='sub-title'>{time.getFullYear()}年</div>
                  <div>
                    <span>{month}月</span>
                    <img src={require('./../image/detail/down.png')} alt=""/>
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
              </ul>
            </div>
            <Link className='dangerous-tip' to='/account/loginTip'>
                <img src={require('./../image/detail/tip.png')} alt="风险"/>
                <span>数据存在极大的丢失风险，请尽快登录！</span>
            </Link>
          </div>
          <div className='content'>
            {/*<div className='no-data'>
              <img src={require('./../image/detail/noData.png')} alt="暂无数据"/>
              <div>暂无数据</div>
            </div>*/}
            <div className='has-data'>
              <ListItem data={{
                showTitle: true,
                leftTitle: '10月26日 星期五',
                rightTitle: '支出：6',
                icon: 'VIP',
                text: '服饰',
                rightText: '-6',
                showRightIcon: false,
                handleClick: this.showChooseTime
              }}/>
            </div>
          </div>
          <DatePicker title='选择月份' type='day' ref='datePicker'/>
          <Foot/>
        </div>
    )
  }
}