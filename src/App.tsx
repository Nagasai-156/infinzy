import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
