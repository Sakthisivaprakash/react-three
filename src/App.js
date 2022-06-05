import React from "react";
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages";

function App() {
  return (
      <BrowserRouter>
          <Home />
      </BrowserRouter>
  );
}

export default App;
