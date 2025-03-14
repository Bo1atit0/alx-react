
import './App.css';
import { Notifications } from '../Notifications/Notifications'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';


function App() {
  return (
    <>
     <Notifications />

     <div className='app'>
      <Header />
      </div>

      <div className='App-body' data-testid='app-body'>
        <Login />
      </div>
      
      <div className='App-footer' data-testid='app-footer'>
        <Footer />
      </div>

      
    </>
  )
}

export default App;
