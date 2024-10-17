import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quizz from './Quizz';
import PreQuizz from './PreQuizz-';
import PreQuizz2 from './PreQuizz2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stop from './Stop';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/PreQuizz" element={<PreQuizz/>}/>
        <Route path="/PreQuizz2" element={<PreQuizz2/>}/>
        <Route path="/Quizz" element={<Quizz/>}/>
        <Route path="/Stop" element={<Stop/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

