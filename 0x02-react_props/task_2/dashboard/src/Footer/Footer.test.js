import React from "react";
import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react'
import { Footer } from "./Footer";


describe('Footer Component', () => { 
    beforeEach( () => {
        render(<Footer />)
    })

    it('verify Footer Component renders without crashing', () => {
        expect(document.querySelector('.App-footer')).toBeTruthy();
    })

    it('Verify that component renders text - Copyright', () => {
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    })
})