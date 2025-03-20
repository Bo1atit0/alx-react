import React from 'react'
import './Notifications.css'
import close from '../../src/close-icon.png'
import { getLatestNotifications } from '../utils'

import NotificationItem from './NotificationItem'

const notification = getLatestNotifications();

export function Notifications( {displayDrawer=true, listNotifications=[]}) {
    return (
        <div className='not-container'>
            <div className='menuItem'>Your notifications</div>
            
            {!Array.isArray(listNotifications) || listNotifications.length === 0 ? (
                        <ul>
                            <li style={{listStyle: 'none'}}>No new notification for now</li>
                        </ul>
                    ) : (
                        <>
                            { displayDrawer && 
                                <div className='Notifications'>
                                    <p>Here is the list of notifications</p>
                                    <ul>
                                            {listNotifications.map((notification) => (
                                                <NotificationItem 
                                                    key={notification.id}
                                                    type={notification.type}
                                                    value={notification.value} 
                                                    html={notification.html}  />
                                            ))}
                                    </ul>

                                    <button aria-label='Close' onClick={() => {
                                        alert('yayyyy')
                                    }}>X
                                            {/* <img src={close} alt='' style={{width: '5px'}}/> */}
                                    </button>
                                </div>
                            }
                            </>
                            )
                
                    }

         </div>
    )
}
