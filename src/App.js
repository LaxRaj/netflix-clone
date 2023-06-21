import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router  , Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //loggedin
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        //logged 
        dispatch(logout());
      }
    })

    return unsubscribe;
  } ,[dispatch]);


  return (
    <div className="app">
      <Router>
        { !user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' 
            Component={ProfileScreen}/>
            <Route exact path='/' 
            Component={HomeScreen}
            />
          </Routes>
        )}    
      </Router>
    </div>
  );
}

export default App;
