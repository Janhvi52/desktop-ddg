import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nextland from './components/Nextland'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom"
import Try1left from "./components/Try1left";
import Try2left from "./components/Try2left";
import Landing from "./components/Landing";
import Win from "./components/Win";
import Lose from "./components/Lose";
import { Route, Router, Routes } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
 
    <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Nextland" element={<Nextland/>}/>
          <Route path="/App" element={<App/>}/>
          <Route path="/Win" element={<Win/>}/>
          <Route path="/Lose" element={<Lose/>}/>
          <Route path="/Try1left" element={<Try1left/>}/>
          <Route path="/Try2left" element={<Try2left/>}/>
        </Routes>
   
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
