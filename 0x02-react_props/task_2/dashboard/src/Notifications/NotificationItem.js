import PropTypes from 'prop-types'
import React from 'react'

const NotificationItem = ({type, value, html}) => {
  return (
    <div>
        <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{__html: {html}}}
        >
            {value}</li>
    </div>
  )};

  NotificationItem.propType = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
  };

  NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: null,
  };


export default NotificationItem

