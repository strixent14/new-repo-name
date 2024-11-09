import React from 'react';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css'; 
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Review from './components/review/Review';
import Pricing from "./components/pricing/Pricing"; 

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Main />
    </HashRouter>
  );
}

const Main = () => {
  const location = useLocation();

  return (
    <main className='main'>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

export default App;