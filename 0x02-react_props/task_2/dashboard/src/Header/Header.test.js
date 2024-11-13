import React from "react";
import shallow from 'enzyme';
import { Header } from "./Header";

describe('Header Component', () => {
    const header = shallow(<Header />)
    it('Header Component renders without creashing', () => {
        expect(header).toBeTruthy();
    })
    // h1
    it('h1 renders', () => {
        expect(header.find('h1').text()).toBe('School dashboard')
    })
    it('img renders', () => {
        expect(header.find('img').exists()).toBe(true)
    })
})