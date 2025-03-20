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
        expect(cells.length).toBe(5)
    })

    
})