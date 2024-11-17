
import './App.css';
import { Notifications } from '../Notifications/Notifications';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';


function App({isLoggedIn=false}) {
  return (
    <>
    
     <Notifications />
     <div className='app'>
      <Header />
      </div>

      <div className='App-body'>
      {isLoggedIn ? <CourseList /> : <Login />}
        
      </div>
      <div className='App-footer'>
        <Footer />
      </div>

      
    </>
  )
}

export default App;
