import React, { Component } from 'react'
import './Notifications.css'
import { getLatestNotifications } from '../utils'
import NotificationItem from './NotificationItem'


class Notifications extends Component {

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <div className='not-container'>
                <div className='menuItem'>Your notifications</div>
                
                            {/* <> */}
                                { displayDrawer && 
                                    <div className='Notifications'>
                                        <p>Here is the list of notifications</p>
                                        {!Array.isArray(listNotifications) || listNotifications.length === 0 ? (
                                        <ul>
                                            <li style={{listStyle: 'none'}}>No new notification for now</li>
                                        </ul>
                                        ) : (
                                            <ul>
                                                {listNotifications.map((notification) => (
                                                    <NotificationItem 
                                                        key={notification.id}
                                                        type={notification.type}
                                                        value={notification.value} 
                                                        html={notification.html}  />
                                                ))}
                                        </ul>
                                        )} 
    
                                        <button aria-label='Close' onClick={() => {
                                            alert('yayyyy')
                                        }}>X
                                                
                                        </button>
                                    </div>
                                }
                                {/* </> */}
                    
                        
    
             </div>
        )
    }
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
}

export default Notifications;