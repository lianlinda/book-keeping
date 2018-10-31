import React, {Component} from 'react'
import Foot from './layout/foot.js'
import '../css/chart.less'

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPay: true,// 标识是否为支出,默认为支出
      isShowPay: false,//控制是否显示 选择收入或支出
      timeSlot: 'week'//选择周月年，默认选中周
    }
  }

  componentWillMount() {
    document.title = '图表'
  }

  // 顶部弹出选择支出或收入
  showPayOrIncome = () => {
    this.setState({
      isShowPay: !this.state.isShowPay
    })
  }

  // 选择收入或支付
  choosePayOrIncome = (event) => {
    let value = event.target.getAttribute('data-value');
    if (value === 'pay') {
      document.getElementById('choosePay').getElementsByClassName('j-checked')[0].className = 'fr j-checked'
      document.getElementById('chooseIncome').getElementsByClassName('j-checked')[0].className = 'fr j-checked hide'
      setTimeout(() => {
        this.setState({
          isPay: true,
          isShowPay: false
        })
      }, 100)
    } else {
      document.getElementById('choosePay').getElementsByClassName('j-checked')[0].className = 'fr j-checked hide'
      document.getElementById('chooseIncome').getElementsByClassName('j-checked')[0].className = 'fr j-checked'
      setTimeout(() => {
        this.setState({
          isPay: false,
          isShowPay: false
        })
      }, 100)
    }
  }

  // 选择收入或支出需要改变对应事项
  changeContent = () => {
    if (this.state.isPay) {
      return (
          <div className='pay'>
            <div>
              <ul className='time-list' onClick={this.chooseTimeSlot.bind(this, 'smallTime')}>
                <li>41周</li>
                <li>上周</li>
                <li className='active'>本周</li>
              </ul>
            </div>
            <div className='chart-wrap'>
              <p className='total'>总支出: 0.00</p>
              <p className='average'>平均值: 0.00</p>
              <div className='chart'>图</div>
            </div>
            <div className='bottom'>
              <p>支出排行榜</p>
              <div className='no-data'>
                <img src={require('./../image/detail/noData.png')} alt=""/>
                <div>暂无数据</div>
              </div>
            </div>
          </div>
      )
    } else {
      return (
          <div className='income'>
            <div>
              <ul className='time-list' onClick={this.chooseTimeSlot.bind(this, 'smallTime')}>
                <li className='active'>本周</li>
              </ul>
            </div>
            <div className='chart-wrap'>
              <p className='total'>总收入: 1.00</p>
              <p className='average'>平均值: 0.00</p>
              <div className='chart'>图</div>
            </div>
            <div className='bottom'>
              <p>收入排行榜</p>
              <div className='no-data'>
                <img src={require('./../image/detail/noData.png')} alt=""/>
                <div>暂无数据</div>
              </div>
            </div>
          </div>
      )
    }
  }

  // 选择周月年,或第几周/月/年
  chooseTimeSlot = (type, event) => {
    Array.from(event.target.parentElement.children).forEach(e => {
          e.className = ''
        }
    )
    event.target.className = 'active'
    if (type === 'bigTime') {
      this.setState({
        timeSlot: event.target.getAttribute('data-value')
      })
    }
  }

  render() {
    let headerText = this.state.isPay ? '支出' : '收入';
    return (
        <div className='m-chart'>
          <div className='head'>
            <h2 onClick={this.showPayOrIncome}>
              {headerText}
              <img src={require('./../image/detail/down.png')} alt=""/>
            </h2>
            <ul className='tab' onClick={this.chooseTimeSlot.bind(this, 'bigTime')}>
              <li className='active' data-value='week'>周</li>
              <li data-value='month'>月</li>
              <li data-value='year'>年</li>
            </ul>
          </div>
          <div className={`pay-income ${this.state.isShowPay ? '' : 'hide'}`}>
            <ul onClick={this.choosePayOrIncome}>
              <li data-value="pay" id='choosePay'>
                <img src={require('./../image/keeping/pay.png')} alt="支出"/>
                支出
                <img src={require('./../image/keeping/tick.png')} alt="" className='fr j-checked'/>
              </li>
              <li data-value="income" id='chooseIncome'>
                <img src={require('./../image/keeping/income.png')} alt="收入"/>
                收入
                <img src={require('./../image/keeping/tick.png')} alt="" className='fr j-checked hide'/>
              </li>
            </ul>
          </div>
          {this.changeContent()}
          <Foot/>
        </div>
    )
  }
}