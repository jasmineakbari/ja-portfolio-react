import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Banner></Banner>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
