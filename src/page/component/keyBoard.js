import React, {Component} from 'react'
import DatePicker from './datePicker.js'

import '../../css/keyboard.less'

export default class keyBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
      money: '0.00',
      isShowFinish: true
    }
  }

  // 显示
  show = () => {
    this.setState({
      isShow: true
    })
  }

  // 收起
  hide = () => {
    this.setState({
      isShow: false
    })
  }

  // 完成
  finish = () => {
    this.setState({
      isShow: false,
      money: '0.00'
    })
  }

  // 点击等于号
  equal = () => {
    let _money = this.state.money;
    if (_money.split('+')[1]) {
      this.setState({
        money: (Number(_money.split('+')[0]) + Number(_money.split('+')[1])).toString(),
        isShowFinish: true
      })
    } else if (_money.split('-')[1]) {
      this.setState({
        money: (Number(_money.split('-')[0]) - Number(_money.split('-')[1])).toString(),
        isShowFinish: true
      })
    }
  }

  // 点击键盘
  clickKey = (event) => {
    let value = event.target.getAttribute('data-value');
    let _money = this.state.money;
    switch (value) {
      case '+':
        // 点击加号
        if (!_money.includes('+')) {
          if (Number(_money) !== 0) {
            if (_money.includes('-')) {
              this.setState({
                money: _money.slice(0, _money.length - 1) + value
              });
            } else {
              this.setState({
                money: _money + value
              });
            }
          }
        } else {
          if (_money.split('+')[1]) {
            this.setState({
              money: (Number(_money.split('+')[0]) + Number(_money.split('+')[1])).toString() + value
            });
          }
        }
        break;
      case '-':
        // 点击减号
        if (!_money.includes('-')) {
          if (Number(_money) !== 0) {
            if (_money.includes('+')) {
              this.setState({
                money: _money.slice(0, _money.length - 1) + value
              });
            } else {
              this.setState({
                money: _money + value
              });
            }
          }
        } else {
          if (_money.split('-')[1]) {
            this.setState({
              money: (Number(_money.split('-')[0]) - Number(_money.split('-')[1])).toString() + value
            });
          }
        }
        break;
      case 'del':
        // 点击删除键
        if (Number(_money) !== 0) {
          if (_money.length > 1) {
            this.setState({
              money: _money.slice(0, _money.length - 1)
            });
          } else {
            this.setState({
              money: '0'
            });
          }
        }
        break;
      case 'finish':
        // 点击完成或是等于号
        this.state.isShowFinish ? this.finish() : this.equal();
        break;
      default:
        // 点击数字键盘或小数点
        if (Number(_money) === 0) {
          this.setState({
            money: value
          });
        } else {
          if (!_money.includes('.')){
            if (_money.includes('+') || _money.includes('-')) {
              this.setState({
                isShowFinish: false,
                money: _money + value
              });
            } else {
              this.setState({
                money: _money + value
              });
            }
          } else {
            if (_money.includes('+') || _money.includes('-')) {

            } else {
              if(_money.split('.')[1].length < 2 && value !== '.'){
                this.setState({
                  money: _money + value
                });
              }
            }
          }
        }
        break;
    }
  }

  // 底部弹出选择几月份
  showChooseTime = () => {
    this.refs.datePicker.show()
  }

  // TODO 安卓收起软键盘，输入框不失焦；电脑浏览器模拟手机端不应该收起键盘
  // 用户填写备注，收起数字键盘
  focusRemarks = () => {
    document.getElementById('number-keyBoard').className = 'hide'
  }

  // 用户不填写备注，数字键盘展开
  RemarksBlur = () => {
    document.getElementById('number-keyBoard').className = ''
  }

  render() {
    return (
        <div className={`m-keyboard ${this.state.isShow ? '' : 'hide'}`}>
          <div className='remark'>
            <label htmlFor="">备注: </label>
            <input type="text" placeholder='点击写备注...' onFocus={this.focusRemarks} onBlur={this.RemarksBlur}/>
            <span className='money'>{this.state.money}</span>
          </div>
          <table id="number-keyBoard" onClick={this.clickKey}>
            <tbody>
              <tr>
                <td data-value="7">7</td>
                <td data-value="8">8</td>
                <td data-value="9">9</td>
                <td onClick={this.showChooseTime}>今天</td>
              </tr>
              <tr>
                <td data-value="4">4</td>
                <td data-value="5">5</td>
                <td data-value="6">6</td>
                <td data-value="+">+</td>
              </tr>
              <tr>
                <td data-value="1">1</td>
                <td data-value="2">2</td>
                <td data-value="3">3</td>
                <td data-value="-">-</td>
              </tr>
              <tr>
                <td data-value=".">.</td>
                <td data-value="0">0</td>
                <td className='del' data-value="del">
                  <img src={require('../../image/keeping/backspace.png')} alt="删除" data-value="del"/>
                </td>
                <td className='finish' data-value="finish">{this.state.isShowFinish ? '完成' : '='}</td>
              </tr>
              </tbody>
          </table>
          <DatePicker title='选择月份' type='day' ref='datePicker'/>
        </div>
    )
  }
}