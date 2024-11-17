import React from 'react'
import './Notifications.css'
import close from '../../src/close-icon.png'
import { getLatestNotifications } from '../utils'


import NotificationItem from './NotificationItem'

const notification = getLatestNotifications();

export function Notifications({displayDrawer='false'}) {
    return <> 
    <div className='menuItem'>
        Your notifications

    </div>
    {displayDrawer='true' && (
        <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem html={{__html: notification}}/>
        </ul>
        <button aria-label='Close' 
                style={{position: 'absolute', right: '0', top: '1vh', border: 'none'}}
                onClick={() => {console.log('Close button has been clicked')}}
                >
                    <img src={close} alt='close image'/>
        </button>
    </div>
    )}
    
    </>

}
