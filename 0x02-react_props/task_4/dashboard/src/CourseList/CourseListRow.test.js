import CourseListRow from "./CourseListRow"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';




// Check if isHeader is true and firstCell is present
test('When isHeader is true component renders one cell with colspan=2 when only textFirstcell is present', () => { 
    render(<CourseListRow isHeader={true} textFirstCell='HeaderCell'/>);
    const cell = screen.getByText('HeaderCell');
    expect(cell).toBeInTheDocument();
    expect(cell.tagName).toBe('TH');
    expect(cell).toHaveAttribute('colspan', '2');
})

test('When isHeader is true component renders two cells when text secondcell is present', () => {
    render(<CourseListRow isHeader={true} textFirstCell='Header cell 1' textSecondCell='Header cell 2' />)
    
    const cell1 = screen.getByText('Header cell 1');
    const cell2 = screen.getByText('Header cell 2');

    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();

    expect(cell1.tagName).toBe('TH');
    expect(cell2.tagName).toBe('TH');
}

)

// Check if isHeader is False
test('When isHeader is false component renders correctly two td elements within a tr element', () => {
    render(<CourseListRow isHeader={false} textFirstCell='header1' textSecondCell='header2' />)

    const row = screen.getByRole('row')
    expect(row).toBeInTheDocument();

    const cells = screen.getAllByRole('cell')
    expect(cells.length).toBe(2)
    expect(cells[0]).toHaveTextContent('header1');
    expect(cells[1]).toHaveTextContent('header2')

   

})