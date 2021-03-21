import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [currentPage, handlePageChange] = useState('About');

  useEffect(() => {
    document.title = `${currentPage}`;
  });
  
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
    }
  };
  
  return (
    <div>
      <Banner></Banner>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
