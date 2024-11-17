import PropTypes from 'prop-types'
import React from 'react'

const NotificationItem = ({type='default', value='', html=null}) => {
  if (html) {
    return(
      <div>
        <li 
        data-priority={type}
        dangerouslySetInnerHTML={html}
        />
      </div>
    )
  }else {
    return(
      <div>
        <li
        data-priority={type}>{value}</li>
      </div>
    )
  }
  };

  NotificationItem.propType = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
  };


export default NotificationItem

