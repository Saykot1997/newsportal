import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Politics from './pages/Politics';
import Culture from './pages/Culture';
import NewsDetails from './pages/NewsDetails';
import PoliticsDetails from './pages/PoliticDetails';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/news/details" element={<NewsDetails />} />
        <Route path="/politics/details" element={<PoliticsDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
