import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quizz from './Quizz';
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/Quizz" element={<Quizz/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

