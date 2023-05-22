import { BsFacebook } from "react-icons/bs"
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai"
import { FaSnapchatGhost } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import SideNave from "./SideNave"

export default function Header() {

  const location = useLocation()
  const [showSubHeader, setShowSubHeader] = useState(false)
  const [showSideNave, setShowSideNav] = useState(false)


  const toggleShowSidNav = () => {
    setShowSideNav(!showSideNave)
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShowSubHeader(true)
    } else {
      setShowSubHeader(false)
    }
  })

  return (
    <div className=" z-50 bg-white fixed top-0 left-0 w-screen border-t-4  border-yellow-200 flex justify-center">
      {
        showSideNave &&
        <SideNave toggleShowSidNav={toggleShowSidNav} showSideNave={showSideNave} setShowSideNav={setShowSideNav} />
      }
      <div className="w-full px-5 xl:w-[1180px] 2xl:w-[1200px] py-2 relative">
        {/* top part start */}
        <div className=" bg-white  flex justify-between items-center">
          <div className="">
            <Link to="/">
              <span className=" font-semibold text-3xl">Logo</span>
            </Link>
          </div>
          <div className=" flex items-center gap-4">
            <div className=" hidden xl:flex items-center gap-5">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
              <a href="http://instragram.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
              <a href="https://story.snapchat.com" target="_blank" rel="noopener noreferrer">
                <FaSnapchatGhost />
              </a>
              <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                <AiFillYoutube />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <SiTiktok />
              </a>

            </div>
            <div className=" border px-2 py-[6px] cursor-pointer hover:bg-yellow-300 transition-all duration-150 ease-linear flex items-center">
              <AiOutlineMail className=" text-xs mr-1" />
              <span className=" text-[11px] font-bold">SUBSCRIB</span>
            </div>
            <AiOutlineMenu className=" cursor-pointer" onClick={toggleShowSidNav} />
          </div>
        </div>
        {/* top part ends */}

        {/* bottom part start  */}
        <div className={`flex justify-between  transition-all duration-200 ease-in-out ${showSubHeader ? "h-0 opacity-0 py-0" : " py-2 h-auto opacity-100"}`}>
          <div className=" flex items-center gap-2">
            <Link to="/news">
              <span className={`font-semibold inline-block py-2 px-2 text-sm border-b-2 ${location.pathname.includes("news") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>News</span>
            </Link>
            <Link to="/politics">
              <span className={`font-semibold inline-block py-2 px-2 text-sm border-b-2 ${location.pathname.includes("politics") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>Politics</span>
            </Link>
            <Link to="/culture">
              <span className={`font-semibold inline-block py-2 px-2 text-sm border-b-2 ${location.pathname.includes("culture") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>Culture</span>
            </Link>
            <div onClick={toggleShowSidNav} className=" flex gap-2 items-center font-semibold py-2 px-2 text-sm  cursor-pointer border-b-2 border-transparent hover:border-blue-950">
              <span>More</span>
              <AiOutlinePlus />
            </div>
          </div>
          <div className=" hidden xl:flex gap-5 items-center pr-10">
            <Link to="/padcast" className=" font-semibold text-gray-400 text-sm">Podcasts</Link>
            <a href="http://youtube.com" target="_blank" rel="noopener noreferrer" className=" font-semibold text-gray-400 text-sm" >Earth On YouTube</a>
          </div>
        </div>
        {/* bottom part end  */}
      </div>
    </div>
  )
}
