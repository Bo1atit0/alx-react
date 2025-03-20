import './App.css';
import { Notifications } from '../Notifications/Notifications'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { useState } from 'react';


function App({isLoggedIn=true}) {

  // const [displayDrawer, setDisplayDrawer] = useState(false)
  return (
    <>
    <div className='notifications'>
      <Notifications />
    </div>
     

     <div className='app'>
      <Header />
      </div>

      <div className='App-body' data-testid='app-body'>
        {isLoggedIn ? <CourseList /> : <Login />}
        
      </div>
      
      <div className='App-footer' data-testid='app-footer'>
        <Footer />
      </div>

      
    </>
  )
}


export default App;
