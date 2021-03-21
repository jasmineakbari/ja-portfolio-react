import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from "./components/Contact";

function App() {
  const [page] = useState({ About, Portfolio, Resume})
  const [currentPage, setCurrentPage] = useState(page);
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Banner></Banner>
      <Nav
        page={page}
        setCurrentPage={setCurrentPage}
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
    </div>
  );
}

export default App;
