import React, {Component} from 'react'

import DatePicker from './component/datePicker.js'
import '../css/bill.less'

export default class Bill extends Component {

  componentWillMount() {
    document.title = '账单'
  }

  // 底部弹出选择几月份
  showChooseTime = () => {
    this.refs.datePicker.show()
  }

  // 点击返回按钮
  goBack = () => {
    window.history.back()
  }

  render() {
    let time = new Date();
    return (
        <div className='m-bill'>
          <div className='head'>
            <h2>
              <img src={require('./../image/find/back.png')} alt="" onClick={this.goBack}/>
              账单
            </h2>
            <div className='sub-title' onClick={this.showChooseTime}>
              {time.getFullYear()}年
              <img src={require('./../image/detail/down.png')} alt=""/>
            </div>
            结余
            <ul>
              <li>收入</li>
              <li>支出</li>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <DatePicker title='选择月份' type='year' ref='datePicker'/>
        </div>
    )
  }
}