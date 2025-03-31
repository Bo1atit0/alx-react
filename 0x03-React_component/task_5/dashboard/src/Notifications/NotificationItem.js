import PropTypes from 'prop-types'
import React, { Component, PureComponent } from 'react'

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id} = this.props

      if (html) {
        return(
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            dangerouslySetInnerHTML={html} />
          )} else {
            return(
              <li 
              data-notification-type={type}
            onClick={() => {markAsRead(id)}}>{value}</li>  
      )
    }
  }

}

   NotificationItem.propTypes = {
     type: PropTypes.string,
     value: PropTypes.string,
     html: PropTypes.shape({
         __html: PropTypes.string
     }),
     markAsRead: PropTypes.func.isRequired,
     id: PropTypes.number.isRequired
   };

  NotificationItem.defaultProps = {
     type: 'default',
     value: '',
     html: null,
    
   }

export default NotificationItem

