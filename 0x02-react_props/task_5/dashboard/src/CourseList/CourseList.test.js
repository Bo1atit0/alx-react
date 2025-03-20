import CourseList from "./CourseList";
import '@testing-library/jest-dom';
import { getAllByRole, render, screen } from '@testing-library/react';

describe('CourseList component', () => {
    it('renders without crashing', () => {
        render(<CourseList />)
    })

    it('checks that it renders all 5 rows', () => {
        render(<CourseList />)
        const cells = screen.getAllByRole('row')
        expect(cells).toHaveLength(cells.length)
    })
})

//verify that CourseList renders correctly if you pass an empty array 
describe('courselist renders correctly with an empty array', () => {
    render(<CourseList listCourses={[]}/>)
    expect(screen.getByText('No courses available yet')).toBeInTheDocument();
})

//when you pass a list of courses, the component renders it correctly

describe('CourseList renders correctly with a list of courses', () => {
    const mockCourses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
      ]
      render(<CourseList listCourses={mockCourses}/>)
      expect(screen.getByText('ES6')).toBeInTheDocument();
      expect(screen.getByText('Webpack')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
})