import React, {Component} from 'react'

import KeyBoard from './component/keyBoard.js'

import '../css/keeping.less';

import {goBack} from '../utils/window'

export default class Keeping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPay: true,// 标识是否为支出,默认为支出
    }
  }
  componentWillMount() {
    document.title = '记账'
  }

  // 底部弹出键盘
  showKeyBoard = (event) => {
    this.refs.keyBoard.show()
  }

  // 选择收入或支付
  choosePayOrIncome = (event) => {
    Array.from(event.target.parentElement.children).forEach(e => {
          e.className = ''
        }
    )
    event.target.className = 'active'
    let value = event.target.getAttribute('data-value');
    if (value === 'pay') {
      this.setState({
        isPay: true
      })
    } else {
      this.setState({
        isPay: false
      })
    }
    // 收起键盘
    this.refs.keyBoard.hide()
  }

  // 顶部点击取消,返回上一个页面
  cancel = () => {
    window.history.back()
  }

  // 选择收入或支出需要改变对应事项
  changeContent = () => {
    if (this.state.isPay) {
      return (
          <div className='pay-list-wrap'>
            <ul className='pay-list' onClick={this.showKeyBoard}>
              <li>
                <img src={require('./../image/keeping/restaurant.png')} alt=""/>
                <div>餐饮</div>
              </li>
              <li>
                <img src={require('./../image/keeping/restaurant.png')} alt=""/>
                <div>购物</div>
              </li>
              <li>
                <img src={require('./../image/keeping/restaurant.png')} alt=""/>
                <div>购物</div>
              </li>
              <li>
                <img src={require('./../image/keeping/restaurant.png')} alt=""/>
                <div>购物</div>
              </li>
              <li>
                <img src={require('./../image/keeping/restaurant.png')} alt=""/>
                <div>购物</div>
              </li>
            </ul>
          </div>
      )
    } else {
      return (
          <div className='income-list-wrap'>
            <ul className='income-list'>
              <li onClick={this.showKeyBoard}>
                <img src={require('./../image/keeping/salary.png')} alt=""/>
                <div>工资</div>
              </li>
            </ul>
          </div>
      )
    }
  }

  render() {
    return (
        <div className='m-keeping'>
          <div className='head'>
            <h2>
              <ul onClick={this.choosePayOrIncome}>
                <li className='active' data-value="pay">支出</li>
                <li data-value="income">收入</li>
              </ul>
            </h2>
            <span className='fr cancel' onClick={goBack}>
              取消
            </span>
          </div>
          {this.changeContent()}
          <KeyBoard ref='keyBoard'/>
        </div>
    )
  }
}