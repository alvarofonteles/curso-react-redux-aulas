import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button title={props.title} className={'btn btn-' + props.style}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)