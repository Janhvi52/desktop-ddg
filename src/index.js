import React from 'react';
import { Route, Routes } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Try1left from "./components/Try1left";
import Try2left from "./components/Try2left";
import Landing from "./components/Landing";
import Lose from "./components/Lose";
import Win from "./components/Win";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
 
    <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/App" element={<App/>}/>
          <Route path="/Win" element={<Win/>}/>
          <Route path="/Lose" element={<Lose/>}/>
          <Route path="/Try1left" element={<Try1left/>}/>
          <Route path="/Try2left" element={<Try2left/>}/>
        </Routes>
   
  </BrowserRouter>
 );

