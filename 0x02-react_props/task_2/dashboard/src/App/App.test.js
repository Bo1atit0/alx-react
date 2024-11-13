import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App Component', () => {
    const app = shallow(<App />)
    // test that App renders without crashing
    it('renders without crashing', () => {
        expect(app).toBeTruthy();
    })
    
    // verify that App renders a div with the class App-header
    it('renders a div with class App-header', () => {
        expect(app.find('.App-header').exists()).toBe(true)
    })
    
    // verify that App renders a div with the class App-body
    it('renders a div with the class App-body', () => {
        expect(app.find('.App-body').exists()).toBe(true)
    })

    // verify that App renders a div with the class App-footer
    it('renders a div with the class App-footer', () => {
        expect(app.find('.App-footer').exists()).toBe(true)
    })
} )



