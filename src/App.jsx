import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Review from './components/review/Review';
import Pricing from "./components/Pricing/Pricing"; // Correct import for Pricing

const App = () => {
  return (
    <HashRouter>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} /> {/* Updated route for Pricing */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
