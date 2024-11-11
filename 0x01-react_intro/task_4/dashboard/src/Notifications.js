import React from 'react'
import './Notifications.css'
import close from '../src/close-icon.png'
import { getLatestNotifications } from './utils'

const notification = getLatestNotifications();

export function Notifications() {
    return <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority='default'>New course available</li>
            <li data-priority='urgent'>New resume available</li>
            <li dangerouslySetInnerHTML={{__html: notification}}/>
        </ul>
        <button aria-label='Close' 
                style={{position: 'absolute', right: '0', top: '1vh', border: 'none'}}
                onClick={() => {console.log('Close button has been clicked')}}
                >
                    <img src={close} alt=''/>
                </button>
    </div>

}
