
import './App.css';
import { Notifications } from './Notifications';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Login } from './Login/Login';


function App() {
  return (
    <>
     <Notifications />
     <div className='app'>
      <Header />
      </div>
      <div className='App-body'>
        <Login />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>

      
    </>
  )
}

export default App;
