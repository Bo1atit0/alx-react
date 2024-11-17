import CourseList from './CourseList'
import {render, screen} from '@testing-library/react'

// render without crashing
test('CourseList renders without crashing', () => {
    render(<CourseList />);
})

// renders 5 different rows
test('CourseList renders 5 different rows', () => {
    render(<CourseList />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(5);


})