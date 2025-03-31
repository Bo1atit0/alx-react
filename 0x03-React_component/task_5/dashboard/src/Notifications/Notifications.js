import React, { Component } from 'react'
import './Notifications.css'
import NotificationItem from './NotificationItem'


class Notifications extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length   
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        const markAsRead = (id) => {
            console.log(`Notification ${id} has been marked as read`)
        }
        return (
            <div className='not-container'>
                <div className='menuItem'>Your notifications</div>
                { displayDrawer &&
                <div className='Notifications'>
                    {Array.isArray(listNotifications) && listNotifications.length > 0 ? 
                        (
                            <>
                                            <p>Here is the list of notifications</p>
                                            <ul>
                                                {listNotifications.map((notification) => (
                                                    <NotificationItem
                                                        markAsRead = {() => markAsRead(notification.id)}
                                                        id = {notification.id}
                                                        key={notification.id}
                                                        type={notification.type}
                                                        value={notification.value} 
                                                        html={notification.html}  />
                                                ))}
                                            </ul>
                                            <button aria-label='Close' onClick={() => { alert('yayyyy')}}> X </button>
                                        </>
                                        
                                        ) : (
                                                <ul>
                                            <li style={{listStyle: 'none'}}>No new notification for now</li>
                                        </ul>
                                        )}
                                            
                                    </div>
                                }
                            
                    
                        
    
             </div>
        )
    }
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
}

export default Notifications;