import logo from '../src/Holberton_Logo.jpg';
import './App.css';
import Utils, { getFooterCopy, getFullYear } from './utils.js'

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='Holberton Logo'/>
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}

export default App;
