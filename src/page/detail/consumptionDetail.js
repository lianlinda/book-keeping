import React, {Component} from 'react'

import '../../css/detail/consumptionDetail.less';

import {goBack} from '../../utils/window';
import {AlertMessage} from '../component/alert';

export default class consumptionDetail extends Component {

  componentWillMount() {
    document.title = '消费明细'
  }

  edit = () => {
    this.props.history.push('/keeping')
  }

  deleteConfirm = () => {
      let params = {
          title: '确认删除',
          content: '删除后数据不可恢复！',
          confirmBtn: '删除',
          confirmFn: this.deleteConsumption
      }
      AlertMessage(params)
  }

  deleteConsumption = () => {

  }

  render(){
    return(
        <div className='m-consumptionDetail'>
          <div className='head'>
            <div className='back'>
              <img src={require('../../image/find/back.png')} alt="" onClick={goBack}/>
            </div>
            <div className='head-center'>

            </div>
            <div className='share'>分享</div>
          </div>
          <div className='content'>
              <ul>
                  <li><label>类型</label></li>
                  <li><label>金额</label></li>
                  <li><label>日期</label></li>
                  <li><label>备注</label></li>
              </ul>
          </div>
          <ul className='foot'>
            <li onClick={this.edit}>编辑</li>
            <li onClick={this.deleteConfirm}>删除</li>
          </ul>
        </div>
    )
  }
}