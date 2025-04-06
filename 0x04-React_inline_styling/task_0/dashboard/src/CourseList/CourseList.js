import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

const CourseList = ({listCourses=[]}) => {
  return (
    <table id='CourseList'>
        <thead>
            <CourseListRow textFirstCell='Available courses' isHeader={true} />
            <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
        </thead>

        <tbody>
          {listCourses.length === 0 ? (
            <tr>
              <td colSpan='2'>
                No courses available yet
              </td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow 
                key={course.id} 
                textFirstCell={course.name} 
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
    </table>
  )
}

export default CourseList