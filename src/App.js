import React from 'react';
import './App.css' ;
import MainComponent from "./components/MainComponent/MainComponent"
import Table from  './table';

function App() {
  return (
    <div className="App">
      <Table/>
      <MainComponent/>
    </div>
  );
}

export default App;
