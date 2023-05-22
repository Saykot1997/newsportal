import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Politics from './pages/Politics';
import Culture from './pages/Culture';
import NewsDetails from './pages/NewsDetails';
import PoliticsDetails from './pages/PoliticDetails';
import Padcast from './pages/Podcast';
import Newsletters from './pages/Newsletters';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/padcast" element={<Padcast />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/news/details" element={<NewsDetails />} />
        <Route path="/politics/details" element={<PoliticsDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
