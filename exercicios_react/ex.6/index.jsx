import React from 'react'
import ReactDOM from 'react-dom'
import Family from './famaly'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName='Fonteles' >
            <Member name='Alvaro'/>
        </Family>
    </div>
    , document.getElementById('app'))