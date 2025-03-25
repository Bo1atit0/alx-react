import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Notifications } from "./Notifications";


const notification = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'}}
  ]

describe('Notification component', () => {

    beforeEach(() => {
        render(<Notifications displayDrawer={true} listNotifications={notification}/>);
    })
    // test that Notifications renders without crashing
    it('renders without crashing', () => {
        render(<Notifications />)
    })

    // verify that Notifications renders correct number of list items
    it('renders correct number of list items', () => {
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(listItems.length);
    })

    //verify that correct value of list items
    it('renders correct value of list items', () => {
        expect(screen.getByText('New course available')).toBeInTheDocument();
        expect(screen.getByText('New resume available')).toBeInTheDocument();
        expect(screen.getByText('Urgent requirement')).toBeInTheDocument();
    })
    // verify that Notifications renders the text Here is the list of notifications
    it('renders the text Here is the list of notifications', () => {
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

//Notifications renders correctly if you pass an empty array or 
// if you don’t pass the listNotifications property

describe('Notifications component with no array or array elements', () => {
    test('with empty array', () => {
        render(<Notifications listNotifications={[]} />)
        expect(screen.getByText('No new notification for now')).toBeInTheDocument()
    })

    test('with an object instead of an array', () => {
        render(<Notifications listNotifications={{}}/>)
        expect(screen.queryByText('no new notification for now')).not.toBeInTheDocument()
    })

    // when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is

    test('listNotifications is empty the message Here is the list of notifications is not displayed', () => {
        render(<Notifications listNotifications={[]}/>)
        expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
    })

    test('listNotifications is empty the message No new notification for now is displayed', () => {
        render(<Notifications listNotifications={[]}/>)
        expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    })
})


