// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunctionalComp  from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
function App() {
  return (
    <div className="wrapper">
    <h1>hi</h1>
    <h1>Components</h1>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    </div>
  );
}

export default App;
