import React from "react";
import './Login.css';

export function Login() {
    return(
        <>
         <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>

          <label htmlFor='mail'>Email:</label>
          <input type='email' id='mail' />

          <label htmlFor='pass'>Password:</label>
          <input type='password' id='pass'/>

          <button>OK</button>
        </form>
      </div>
      </>
    )
}