import React, {Component} from 'react'

import '../../css/detail/consumptionDetail.less';

import {goBack} from '../../utils/window'

export default class consumptionDetail extends Component {

  componentWillMount() {
    document.title = '消费明细'
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
        </div>
    )
  }
}