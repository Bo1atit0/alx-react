import React from "react"
import './Header.css'
import logo from '../Holberton_Logo.jpg';


export function Header() {
    return (
        <div className='App-header'>
        <img src={logo} alt='Holberton Logo'/>
        <h1>School dashboard</h1>
      </div>
    )
}