// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunctionalComp  from "./Components/FunctionalComp";
import ClassComp from './Components/ClassComp';
function App() {
  return (
    <div className="wrapper">
    <h1>hi</h1>
    <h1>Components</h1>
    <FunctionalComp/>
    <ClassComp/>
    </div>
  );
}

export default App;
