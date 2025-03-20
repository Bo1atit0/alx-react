import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Notifications } from "./Notifications";




describe('Notification component', () => {

    beforeEach(() => {
        render(<Notifications displayDrawer={true}/>);
    })
    // test that Notifications renders without crashing
    it('renders without crashing', () => {
        render(<Notifications />)
    })

    // verify that Notifications renders three list items
    it('renders 3 list items', () => {
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(3);
    })

    // verify that Notifications renders the text Here is the list of notifications
    it('', () => {
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    })

    test('check that the menu item is being displayed', () => {
        expect(screen.getByText('Your notifications')).toBeInTheDocument()
    })
})

describe('display drawer is false', () => {
    beforeEach(() => {
        render(<Notifications displayDrawer={false} />)
    })

    test('check that the menu item is being displayed', () => {
        expect(screen.getByText('Your notifications')).toBeInTheDocument()
    })

    test('check that the div.Notifications is not displayed', () => {
        expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
    })


})

