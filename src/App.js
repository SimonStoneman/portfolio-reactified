import {Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
