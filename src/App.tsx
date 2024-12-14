import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { FlashEffect } from './components/FlashEffect';
import { RandomSoundEffect } from './components/RandomSoundEffect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FlashEffect />
        <RandomSoundEffect />
      </div>
    </Router>
  );
}

export default App;