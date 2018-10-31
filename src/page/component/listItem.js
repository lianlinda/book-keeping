import React, {Component} from 'react'

import './../../css/listItem.less'

export default class ListItem extends Component{
  render(){
    const {showTitle = false, icon='', text, rightText, showRightIcon = true ,handleClick} = this.props.data;
    return(
        <div className='m-list-item'>
          <div className={`item-title ${showTitle ? '' : 'hide'}`}>

          </div>
          <div onClick={handleClick} className='clearfix'>
            <div className='item-left fl'>
              {icon ? <i className={`left-icon icon-${icon}`}/> : ''}
            </div>
            <div className='item-center fl'>
              {text}
            </div>
            <div className='item-right fr'>
              {rightText}
              {showRightIcon && handleClick ? <img src={require('./../../image/chart/more.png')} alt=""/> : ''}
            </div>
          </div>
        </div>
    )
  }
}