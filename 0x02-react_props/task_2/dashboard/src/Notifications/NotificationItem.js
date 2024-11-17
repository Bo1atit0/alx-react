import PropTypes from 'prop-types'
import React from 'react'

const NotificationItem = ({type='default', value='', html=null}) => {
  if (html) {
    return(
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html} />
    )} else {
      return(
        <li data-notification-type={type}>{value}</li>
      )
    }
  }
  NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
  };



  


export default NotificationItem

