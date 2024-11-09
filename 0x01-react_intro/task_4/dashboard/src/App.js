import logo from '../src/Holberton_Logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js'

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='Holberton Logo'/>
        <h1>School dashboard</h1>
      </div>

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

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}

export default App;
