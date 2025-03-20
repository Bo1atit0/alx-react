import React from 'react'
import PropTypes, { string } from 'prop-types';

const CourseListRow = ({ isHeader=false, textFirstCell, textSecondCell=null}) => {
  return (
    <tr>
        {isHeader ? 
            (textSecondCell === null ? (
              <th colSpan='2'>
                {textFirstCell}
              </th>
                    ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                        </>
                        ) 
        ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
        )}
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CourseListRow