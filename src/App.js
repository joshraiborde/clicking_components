// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunctionalComp  from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
function App() {
  return (
    <div className="wrapper">
    <h1>hi</h1>
    <h1>Components</h1>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <br></br>
    <Counter/>
    <ParentComp/>
    </div>
  );
}

export default App;
