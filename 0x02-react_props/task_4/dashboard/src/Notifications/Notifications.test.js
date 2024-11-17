import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Notifications } from "./Notifications";




describe('Notification component', () => {
    // test that Notifications renders without crashing
    // it('renders without crashing', () => {
    //     const notification = shallow(<Notifications />)
    //     expect(notification).toBeTruthy();
    // })
    test('renders without crashing', () => {
        render(<Notifications />)
    })

    // verify that Notifications renders three list items
    // it('renders 3 list items', () => {
    //     const notification = shallow(<Notifications />);
    //     expect(notification.find('li')).toHaveLength(3)
    // })
    test('verify that Notifications renders three list items', () => {
        render(<Notifications />)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(3)
    })

    // verify that Notifications renders the text Here is the list of notifications
    test('Notifications renders the text Here is the list of notifications', () => {
        render(<Notifications />)
        const text = screen.getByText('Here is the list of notifications');
        expect(text).toBeInTheDocument()
    })
})

describe('Check menuItem', () => {
    // Check that the menu item is being displayed when displayDrawer is false
    test('menu item is displayed when displayDrawer is false', () => {
        render(<Notifications />);
        const menuItem = screen.getByText('Your notifications');
        expect(menuItem).toBeInTheDocument();
    });

    // Check that the div.Notifications is not displayed when displayDrawer is false
    test('Notifications div is displayed when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />)
        const notificationsDiv = screen.getByText('Here is the list of notifications')
        expect(notificationsDiv).toBeInTheDocument();
    });
})

