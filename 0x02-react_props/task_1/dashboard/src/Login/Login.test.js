import React from "react";
import shallow from 'enzyme';
import { Login } from "./Login";

describe('Login Component', () => {
    const login = shallow(<Login />)
    it('Login Component renders without crashing', () => {
        expect(login).toBeTruthy();
    })
    // h1
    it('2 input and label tags', () => {
        expect(login.find('input')).toHaveLengthOf(2)
        expect(login.find('label')).toHaveLengthOf(2)
    })
    
})