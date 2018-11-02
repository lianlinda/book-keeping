import React, {Component} from 'react'

import DatePicker from '../component/datePicker.js'
import '../../css/bill.less'

import {goBack} from '../../utils/window'

export default class Bill extends Component {

  componentWillMount() {
    document.title = '账单'
  }

  // 底部弹出选择几月份
  showChooseTime = () => {
    this.refs.datePicker.show()
  }

  render() {
    let time = new Date();
    return (
        <div className='m-bill'>
          <div className='head'>
            <div className='back'>
              <img src={require('../../image/find/back.png')} alt="" onClick={goBack}/>
            </div>
            <h2>
              账单
            </h2>
            <div className='choose-year' onClick={this.showChooseTime}>
              {time.getFullYear()}年
              <img src={require('../../image/detail/down.png')} alt=""/>
            </div>
            <div className='balance'>
              <p>结余</p>
              <p className='balance-money'>123.00</p>
            </div>
            <ul className='sub-title'>
              <li><label>收入</label>123.00</li>
              <li><label>支出</label>0.00</li>
            </ul>
          </div>
          <table>
            <thead>
              <tr>
                <th>月份</th>
                <th>收入</th>
                <th>支出</th>
                <th>结余</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10月</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>123.00</td>
              </tr>
            </tbody>
          </table>
          <DatePicker title='选择月份' type='year' ref='datePicker'/>
        </div>
    )
  }
}