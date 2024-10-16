import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quizz from './Quizz';
import './index.css';
import LandingPage from './Landingpage';
import ArticlePage from './ArticlePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stop from './Stop';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="/ArticlePage" element={<ArticlePage/>}/>
        <Route path="/Quizz" element={<Quizz/>}/>
        <Route path="/Stop" element={<Stop/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
);

