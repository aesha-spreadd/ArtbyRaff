import React from 'react';
import { GlobalStyles } from './GlobalStyled';
import About from './Components/About';
import Originals from './Components/Originals';
import Sculptures from './Components/Sculptures';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import { cardsData } from './Data/Card';
import FullNavbar from './Components/FullNavbar';
import Banner from './Components/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customized from './Components/Customized';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <>
        <Routes>
          <Route path="/*" element={<Customized />} />
          <Route path="/fullnavbar" element={<FullNavbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route
            path="/originals"
            element={<Originals cardsData={cardsData} />}
          />
          <Route path="/sculptures" element={<Sculptures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
