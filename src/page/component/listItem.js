import React, {Component} from 'react'

import './../../css/listItem.less'

export default class ListItem extends Component{
  render(){
    const {showTop = false, showTitle = false, leftTitle, rightTitle} = this.props.data;
    const {icon='', text, showProportion = false} = this.props.data;
    const {rightText, showRightIcon = true, handleClick} = this.props.data;
    return(
        <div className={`m-list-item ${showTop ? 'mt-10' : ''}`}>
          {showTitle ?
              <div className='item-title'>
                <span>{leftTitle}</span>
                <div className='fr'>{rightTitle}</div>
              </div> : ''}
          <div className={`item-content ${showProportion ? 'aboveTop' : ''}`} onClick={handleClick}>
            <div className='item-left fl'>
              {icon ? <i className={`left-icon icon-${icon}`}/> : ''}
            </div>
            <div>
              <div className='item-center fl'>
                {text}
              </div>
              <div className='item-right fr'>
                {rightText}
                {showRightIcon && handleClick ? <img src={require('./../../image/chart/more.png')} alt=""/> : ''}
              </div>
              {showProportion ?
                  <div className='proportion'>

                  </div>: ''}
            </div>

          </div>
        </div>
    )
  }
}