import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import './App.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quotes from './Quotes';


function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quotes' element={<Quotes />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;