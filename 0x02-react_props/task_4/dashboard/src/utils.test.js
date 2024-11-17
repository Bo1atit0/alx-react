// import React from 'react'
// import {render, screen} from '@testing-library/react'
import { getFullYear, getFooterCopy, getLatestNotifications } from './utils.js'

// Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
test('Renders the correct year', () =>{
    const year = new Date().getFullYear();
    expect(year).toBe(getFullYear())

});
// Write a test to check that getFooterCopy returns the correct string when the argument is true or false
test('If true Correctly returns FooterCopy string', () => {
    const trueFooterCopy = getFooterCopy(true);
    expect(trueFooterCopy).toBe('Holberton School')
});

test('If false, Correctly returns FooterCopy string', () => {
    const falseFooterCopy = getFooterCopy(false);
    expect(falseFooterCopy).toBe('Holberton School main dashboard')
})
// Write a test checking the returned string for getLatestNotification
test('Check returned string of getLatestNotification', () => {
    const notification = getLatestNotifications();
    expect(notification).toBe(`<strong>Urgent requirement</strong> - complete by EOD`)
})
