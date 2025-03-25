import React from "react";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Header } from "./Header";

describe('Header Component', () => {
    
    it('Header Component renders without creashing', () => {
        render(<Header />)
    })
    // h1
    it('h1 renders', () => {
        render(<Header />)
        expect(screen.getByRole('heading', { name: /School dashboard/i})).toBeInTheDocument();
    })
    it('img renders', () => {
        render(<Header />)
        expect(screen.getByAltText('Holberton Logo')).toBeInTheDocument();
    })
})