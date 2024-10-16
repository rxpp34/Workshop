import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quizz from './Quizz';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stop from './Stop';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/Quizz" element={<Quizz/>}/>
        <Route path="/Stop" element={<Stop/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

