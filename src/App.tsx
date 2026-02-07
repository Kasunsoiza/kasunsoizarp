import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { BuilderPage } from '@/pages/Builder';

function App() {
  return (
    <BrowserRouter basename="/europin-cv-maker">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<BuilderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
