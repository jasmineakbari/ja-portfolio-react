import React, { useState } from 'react';
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
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Banner></Banner>
      <Nav
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
        <>
          <About currentPage={currentPage}></About>
          <Portfolio currentPage={currentPage}></Portfolio>
          <Resume currentPage={currentPage}></Resume>
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
