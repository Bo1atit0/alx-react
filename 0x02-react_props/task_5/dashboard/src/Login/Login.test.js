import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Login } from "./Login";

describe('Login Component', () => {

    it('renders the Footer Component without crashing', () => {
        render(<Login />)
    })

    it('verifies that Components renders 2 input and 2 label tags', ()=> {

        render(<Login />)
        // Login renders 2 inputs and 2 labels
        const inputs = screen.getAllByLabelText(/.+/);
        expect(inputs.length).toBe(2)
    })
})