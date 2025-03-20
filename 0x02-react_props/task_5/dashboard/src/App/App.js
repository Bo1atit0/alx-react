import './App.css';
import { Notifications } from '../Notifications/Notifications'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { useState } from 'react';


function App({isLoggedIn=true}) {

  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]

  const notification = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'}}
  ]

  return (
    <>
    <div className='notifications'>
      <Notifications listNotifications={notification} />
    </div>
     

     <div className='app'>
      <Header />
      </div>

      <div className='App-body' data-testid='app-body'>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        
      </div>
      
      <div className='App-footer' data-testid='app-footer'>
        <Footer />
      </div>

      
    </>
  )
}


export default App;
