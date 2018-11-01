import React, {Component} from 'react'
import '../../css/datePicker.less'

export default class datePicker extends Component {
  constructor(props) {
    super(props);
    //let time = new Date("2018-12-31");
    let time = new Date();
    let today = {
      year: time.getFullYear(),
      month: time.getMonth(),
      day: time.getDate(),
    };
    this.state = {
      isShow: false,
      monthDay: {
        flatYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      },
      year: {
        options: [today.year - 1, today.year, today.year + 1]
      },
      month: {
        options: [today.month, today.month + 1, today.month + 2 > 12 ? 1 : today.month + 2]
      },
      day: {
        options: [today.day - 1, today.day, today.day + 1]
      }
    };
    // 调整时间选项
    if (this.isLeapYear(today.year)) {
      if (this.state.day.options[2] > this.state.monthDay.leapYear[today.month]) {
        this.state.day.options[2] = 1
      }
      if (this.state.day.options[0] < 1) {
        this.state.day.options[0] = this.state.monthDay.leapYear[today.month]
      }
    } else {
      if (this.state.day.options[2] > this.state.monthDay.flatYear[today.month]) {
        this.state.day.options[2] = 1
      }
      if (this.state.day.options[0] < 1) {
        this.state.day.options[0] = this.state.monthDay.flatYear[today.month]
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.isLeapYear(nextState.year.options[1])) {
      // TODO 遗留问题 day选择31号，月份选择2月的情况下，day要变成29号
      /*if (nextState.day.options[1] > nextState.monthDay.leapYear[nextState.month.options[1]] || this.state.day.options[1] === this.state.monthDay.leapYear[this.state.month.options[1]]) {
        // day选择31号，月份选择2月的情况下，day要变成29号
        /!*this.setState({
          day: {
            options: [nextState.monthDay.leapYear[nextState.month.options[1]] - 1, nextState.monthDay.leapYear[nextState.month.options[1]], 1]
          }
        });*!/
        return false
      } else*/ if (nextState.day.options[2] > nextState.monthDay.leapYear[nextState.month.options[1]]) {
        // day不能超过最大天数
        this.setState({
          day: {
            options: [nextState.day.options[0], nextState.day.options[1], 1]
          }
        });
        return false
      } else if (nextState.day.options[0] < 1) {
        // day不能小于1
        this.setState({
          day: {
            options: [nextState.monthDay.leapYear[nextState.month.options[1]], nextState.day.options[1], nextState.day.options[2]]
          }
        });
        return false
      } else {
        return true
      }
    } else {
      // TODO 遗留问题 day选择31号，月份选择2月的情况下，day要变成28号
      /*if (nextState.day.options[1] > nextState.monthDay.flatYear[nextState.month.options[1]] || this.state.day.options[1] === this.state.monthDay.flatYear[this.state.month.options[1]]) {
        // day选择31号，月份选择2月的情况下，day要变成28号
        /!*this.setState({
          day: {
            options: [nextState.monthDay.flatYear[nextState.month.options[1]] - 1, nextState.monthDay.flatYear[nextState.month.options[1]], 1]
          }
        });*!/
        return false
      } else*/ if (nextState.day.options[2] > nextState.monthDay.flatYear[nextState.month.options[1]]) {
        // day不能超过最大天数
        this.setState({
          day: {
            options: [nextState.day.options[0], nextState.day.options[1], 1]
          }
        });
        return false
      } else if (nextState.day.options[0] < 1) {
        // day不能小于1
        this.setState({
          day: {
            options: [nextState.monthDay.flatYear[nextState.month.options[1]], nextState.day.options[1], nextState.day.options[2]]
          }
        });
        return false
      } else {
        return true
      }
    }
  }

  // 显示
  show() {
    this.setState({
      isShow: true
    })
  }

  // 取消
  close = () => {
    this.setState({
      isShow: false
    })
  }

  // 判断是否是闰年
  isLeapYear(year) {
    if (((year % 4) === 0) && ((year % 100) !== 0) || ((year % 400) === 0)) {
      return true
    } else {
      return false
    }
  }

  startChooseDate(type, event) {
    this.setState({
      [type]: Object.assign({}, this.state[type], {pageY: event.targetTouches[0].pageY})
    })
  }

  choosing(type, event) {
    let startPageY = this.state[type].pageY;
    let nowPageY = event.targetTouches[0].pageY;
    if (nowPageY - startPageY > 0) {
      this.rollDate(type, 'up')
    } else {
      this.rollDate(type, 'down')
    }
  }

  rollDate = (type, direction) => {
    let temp = this.state[type].options;
    /*console.log(direction);*/
    switch (direction) {
      case 'up':
        for (let i = 0; i < temp.length; i++) {
          temp[i]--;
          switch (type) {
            case 'year':
              this.setState({
                year: Object.assign({}, this.state[type], {options: temp})
              });
              break;
            case 'month':
              if (temp[i] < 1) {
                temp[i] = 12;
                // 对应年份要减1，对应日期要变
                this.setState({
                  year: {
                    options: [this.state.year.options[0] - 1, this.state.year.options[1] - 1, this.state.year.options[2] - 1]
                  }
                })
              };
              break;
            case 'day':
              if (this.isLeapYear(this.state.year.options[1])) {// 是闰年
                if (temp[i] < 1) {
                  temp[i] = this.state.monthDay.leapYear[this.state.month.options[0]]
                }
              } else {
                if (temp[i] < 1) {
                  temp[i] = this.state.monthDay.flatYear[this.state.month.options[0]]
                }
              }
              break;
          }
        }
        break;
      case 'down':
        for (let i = 0; i < temp.length; i++) {
          temp[i]++;
          switch (type) {
            case 'year':
              this.setState({
                year: Object.assign({}, this.state[type], {options: temp})
              });
              break;
            case 'month':
              if (temp[i] > 12) {
                temp[i] = 1;
                // 对应年份要加1，对应日期要变
                this.setState({
                  year: {
                    options: [this.state.year.options[0] + 1, this.state.year.options[1] + 1, this.state.year.options[2] + 1]
                  }
                })
              }
              break;
            case 'day':
              if (this.isLeapYear(this.state.year.options[1])) {// 是闰年
                if (temp[i] > this.state.monthDay.leapYear[this.state.month.options[0]]) {
                  temp[i] = 1
                }
              } else {
                if (temp[i] > this.state.monthDay.flatYear[this.state.month.options[0]]) {
                  temp[i] = 1
                }
              }
              break;
          }
        }
        break;
      default:
        return;
    }
  }

  // 确定
  save = () => {
    this.close()
  }

  render() {
    let that = this;
    let dataChoose = function (vm) {
      switch (that.props.type) {
        case 'year':
          return (
              <div className='date-choose'>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'year')} onTouchMove={vm.choosing.bind(vm, 'year')}>
                  {
                    vm.state.year.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
          )
          break;
        case 'month':
          return (
              <div className='date-choose'>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'year')} onTouchMove={vm.choosing.bind(vm, 'year')}>
                  {
                    vm.state.year.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'month')} onTouchMove={vm.choosing.bind(vm, 'month')}>
                  {
                    vm.state.month.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
          )
          break;
        case 'day':
          return (
              <div className='date-choose'>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'year')} onTouchMove={vm.choosing.bind(vm, 'year')}>
                  {
                    vm.state.year.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'month')} onTouchMove={vm.choosing.bind(vm, 'month')}>
                  {
                    vm.state.month.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
                <ul onTouchStart={vm.startChooseDate.bind(vm, 'day')} onTouchMove={vm.choosing.bind(vm, 'day')}>
                  {
                    vm.state.day.options.map((item, index) => {
                      return (
                          <li key={index}>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
          )
          break;
        default:
          return null
      }
    }
    return (
        <div className={`m-date-picker ${this.state.isShow ? '' : 'hide'}`}>
          <div className='modal' onClick={this.close} onTouchStart={this.close}/>
          <div className='date-content'>
            <div className='date-head'>
              <span className='fl' onClick={this.close}>取消</span>
              <span>{this.props.title}</span>
              <span className='fr' onClick={this.save}>确定</span>
            </div>
            {dataChoose(this)}
          </div>
        </div>
    )
  }
}