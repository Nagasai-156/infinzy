import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
