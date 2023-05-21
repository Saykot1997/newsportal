import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/news';
import Politics from './pages/Politics';
import Culture from './pages/Culture';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
