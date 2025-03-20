import React from 'react';

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App';


describe('App Component', () => {
   

    beforeEach(() => {
         render(<App />);
    })
    // test that App renders without crashing
    it('renders without crashing', () => {
       
        expect(screen.getByTestId('app-body')).toBeInTheDocument();
        expect(screen.getByTestId('app-footer')).toBeInTheDocument();
    })
    
    // verify that App renders a div with the class App-header
    it('renders a div with class app', () => {
        
        expect(document.querySelector('.app')).toBeTruthy();
    })
    
    // verify that App renders a div with the class App-body
    it('renders a div with the class App-body', () => {
        expect(screen.getByTestId('app-body')).toBeTruthy();
    })

    // verify that App renders a div with the class App-footer
    it('renders a div with the class App-footer', () => {
        expect(screen.getByTestId('app-footer')).toBeTruthy();
    })

    // Verify that App renders the Notification Component
    it('renders the Notification Component', ()=> {
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    } )

    // Verify that App renders the Header Component
    it('renders the Header Component', () => {
        expect(screen.getByRole('heading', { name: /School dashboard/i})).toBeInTheDocument();
    })

    // Verify that App renders the Login Component
    it('renders the Login Component', () => {
        expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    })

    //test to check that CourseList is not displayed
    it('checks that courselist is not displayed', () => {
        render(<App isLoggedIn={false} />)
        expect(screen.queryByRole('table')).not.toBeInTheDocument()
    })
} )

describe('App component when isLoggedIn is true', () => {
    beforeEach(() => {
        render(<App isLoggedIn={true} />)
    })

    test('Login Component is not included', () => {
        expect(screen.queryByText('Login to access the full dashboard')).not.toBeInTheDocument();
    })

    test('CourseList component is included', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})