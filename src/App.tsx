import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';
import About from './About';
import Skills from './Skills';
import Talent from './Talent';
import Content from './Content';
import CorporateExperiences from './CorporateExperiences';
import Approach from './Approach';
import CustomSolutions from './CustomSolutions';
import Clients from './Clients';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/content" element={<Content />} />
        <Route path="/corporate-experiences" element={<CorporateExperiences />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/custom-solutions" element={<CustomSolutions />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
