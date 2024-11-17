import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  // Test that App renders without crashing
  test('renders without crashing', () => {
    render(<App />);
    // expect(screen.getByText(/Notifications/i)).toBeInTheDocument(); 
  });

  // Verify that App renders sections with specific classes
  test('renders App-header, App-body, and App-footer', () => {
    render(<App />);
    expect(document.querySelector('.app')).toBeTruthy(); 
    expect(document.querySelector('.App-body')).toBeTruthy();
    expect(document.querySelector('.App-footer')).toBeTruthy();
  });

  // Test that CourseList is not displayed when isLoggedIn is false
  test('CourseList is not displayed when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    const courseList = screen.queryByRole('table', { name: /course list/i });
    expect(courseList).not.toBeInTheDocument();
  });

  // Test that Login is displayed and CourseList is not displayed when isLoggedIn is false
  test('Login is displayed when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    const loginComponent = screen.getByText(/Login/i); 
    expect(loginComponent).toBeInTheDocument();
  });

  // Test that Login is not displayed and CourseList is displayed when isLoggedIn is true
  test('Login is not displayed and CourseList is displayed when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    const login = screen.queryByRole('form'); // Adjust based on Login component output
    expect(login).not.toBeInTheDocument();

    const courseList = screen.getByRole('table'); // Adjust based on CourseList content
    expect(courseList).toBeInTheDocument();
  });
});
