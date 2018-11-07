import React from 'react';
import {render} from 'react-dom';

import '../../css/component/alert.less'

/**
 *
 * @param id 要删除的元素的id
 * @param view 要删除的元素
 */
const removeAlert = (id, view) => {
    if(id){
      view =  document.getElementById(id);
    }
    if (view) {
        document.body.removeChild(view)
    }
}

// 返回
export const AlertMessage = (params) => {
    removeAlert('alertMessage');
    let {content, cancelBtn = '取消', cancelFn, confirmBtn = '确认', confirmFn, title} = params;
    const view = document.createElement('div');
    view.setAttribute('id', 'alertMessage');
    document.body.appendChild(view);
    view.addEventListener('click', function(e){
        if(e.target.className === 'm-alert-message'){
            removeAlert('', view);
        }
    });
    render(
        <div className='m-alert-message'>
            <div className='tip'>
                {title ? <div className='tip-title'>{title}</div> : ''}
                <div className='tip-content'>{content}</div>
                <div className='tip-buttons'>
                    {cancelBtn && <button onClick={() => {
                        removeAlert('', view);
                        cancelFn && cancelFn();
                    }}>{cancelBtn}</button>}
                    {confirmBtn && <button onClick={() => {
                        removeAlert('', view);
                        confirmFn && confirmFn();
                    }}>{confirmBtn}</button>}
                </div>
            </div>
        </div>,
        view
    )
}