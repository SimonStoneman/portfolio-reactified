import {Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Project from './pages/Project';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const name = 'Simon Stoneman';

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing name={name}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <Footer name={name}/>
    </>
  );
}

export default App;
