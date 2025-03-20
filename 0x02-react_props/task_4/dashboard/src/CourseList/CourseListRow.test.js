import CourseListRow from "./CourseListRow";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Test CourseListRow component', ()=> {
    it('test the component renders one cell with colspan = 2 when textSecondCell does not exist if isHeader is true', ()=> {
        render(<CourseListRow isHeader={true} textFirstCell='Text' />)
        const cell = screen.getByText('Text');
        expect(cell).toBeInTheDocument();
        expect(cell).toHaveAttribute('colspan', '2')
    })

    it('check to test the component renders two cells when textSecondCell is present', ()=> {
        render(<CourseListRow isHeader={true} textFirstCell='Text' textSecondCell='Text2' />)
        const cell1 = screen.getByText('Text')
        const cell2 = screen.getByText('Text2')
        expect(cell1).toBeInTheDocument();
        expect(cell2).toBeInTheDocument();
    })

    // When isHeader is false
    it('test the component renders correctly two td elements within a tr element', () => {
        render(<CourseListRow isHeader={false} textFirstCell='text'/>)
        const cell = screen.getAllByRole('cell')
        expect(cell.length).toBe(2)
        expect(cell[0].tagName).toBe('TD')
        expect(cell[1].tagName).toBe('TD')
    })
})