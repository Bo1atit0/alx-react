import React from "react";
// import { act } from "react";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import NotificationItem from "./NotificationItem";

describe('NotificationItem component', () => {

    // Test1: Basic Rendering Check
    test('renders without crashing', () => {
        render(<NotificationItem type="default" value='Test Notification' />)
});

    // Test2: Rendering correct type and value
    test('renders the correct data-notification-type and value', () => {
        render(<NotificationItem type='default' value='Test Notification' />)
        const listItem = screen.getByText('Test Notification');
        expect(listItem).toHaveAttribute('data-notification-type', 'default');
        expect(listItem).toHaveTextContent('Test Notification');
    });

    // Test3: Rendering correct html 
    test('renders the correct html', () => {
        render(<NotificationItem type='default' html={{ __html: '<u>Html Content</u>'}} />)
        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveAttribute('data-notification-type', 'default');
        expect(listItem.innerHTML).toBe('<u>Html Content</u>');
    })
})