import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Politics from './pages/Politics';
import NewsDetails from './pages/NewsDetails';
import PoliticsDetails from './pages/PoliticDetails';
import Padcast from './pages/Podcast';
import NewsLetter from './pages/NewsLetter';
import SubcriptionPage from './pages/SubcriptionPage';
import HalpingHand from './pages/HalpingHand';
import { useEffect } from 'react';
import { Host } from '../data';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { menuDataFatched } from "./redux/menu_data_slice"
import { headerSubmenuDataFatched } from "./redux/header_submenu_data_slice"
import { companyInfoFatched } from "./redux/company_info_slice"
import { socialAppLinkFatched } from "./redux/socal_app_link_slice"
import { SpecialMenuFatched } from "./redux/special_menu_slice"
import SearchPage from './pages/SearchPage';
import VideoPage from './pages/VideoPage';
import VideoDetails from './pages/VideoDetails';
import Register from './pages/Register';


function App() {

  const dispatch = useDispatch()
  const CompanyInfo = useSelector((state) => state.CompanyInfo.CompanyInfo)
  const SocialAppLink = useSelector((state) => state.SocialAppLink.SocialAppLink)
  const HeaderSubMenuData = useSelector((state) => state.HeaderSubMenuData.HeaderSubMenuData)
  const MenuData = useSelector((state) => state.MenuData.MenuData)
  const SpecialMenu = useSelector((state) => state.SpecialMenu.SpecialMenu)

  console.log({ CompanyInfo, SocialAppLink, HeaderSubMenuData, MenuData, SpecialMenu })
  const fatchMenuData = async () => {
    try {
      const res = await axios.get(`${Host}/api/website_menu_submenu`)
      dispatch(menuDataFatched(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fatchHederSubMenuData = async () => {
    try {
      const res = await axios.get(`${Host}/api/header_submenu`)
      dispatch(headerSubmenuDataFatched(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  const fatchCompanyInfo = async () => {
    try {
      const res = await axios.get(`${Host}/api/company_information`)
      dispatch(companyInfoFatched(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  const fatchSocialLinks = async () => {
    try {
      const res = await axios.get(`${Host}/api/social_media_link`)
      dispatch(socialAppLinkFatched(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  const fatchSpecialMenu = async () => {
    try {
      const res = await axios.get(`${Host}/api/special_menu`)
      dispatch(SpecialMenuFatched(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fatchMenuData()
    fatchHederSubMenuData()
    fatchCompanyInfo()
    fatchSocialLinks()
    fatchSpecialMenu()
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/podcast" element={<Padcast />} />
        <Route path="/helping-hand" element={<HalpingHand />} />
        <Route path="/news-letter" element={<NewsLetter />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/videos/details" element={<VideoDetails />} />
        <Route path="/subscribtion" element={<SubcriptionPage />} />
        <Route path="/news/details" element={<NewsDetails />} />
        <Route path="/politics/details" element={<PoliticsDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
