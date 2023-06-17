import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route exact path='/' Component={HomeScreen}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
