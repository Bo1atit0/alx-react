import React from "react";
import shallow from 'enzyme';
import { Footer } from "./Footer";

describe('Footer Component', () => {
    const footer = shallow(<Footer />)
    it('Footer Component renders without crashing', () => {
        expect(footer).toBeTruthy();
    })
    // h1
    it('Footer component should at least contain the text copyright', () => {
        expect(footer.text()).toContain("Copyright")
    })
    
})