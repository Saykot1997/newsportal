import { AiOutlineMail, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import SideNave from "./SideNave"
import { useSelector } from "react-redux"
import { Host } from "../../data"
import { GiArchiveRegister } from "react-icons/gi"


export default function Header({ Home }) {

  const headerSubmenuData = useSelector((state) => state.HeaderSubMenuData.HeaderSubMenuData)
  const companyInfo = useSelector((state) => state.CompanyInfo.CompanyInfo)
  const SocialAppLink = useSelector((state) => state.SocialAppLink.SocialAppLink)
  const SpecialMenu = useSelector((state) => state.SpecialMenu.SpecialMenu)

  const location = useLocation()
  const [showSubHeader, setShowSubHeader] = useState(false)
  const [showSideNave, setShowSideNav] = useState(false)
  const [scrollYvalue, setScrollYvalue] = useState(0)

  const toggleShowSidNav = () => {
    setShowSideNav(!showSideNave)
  }

  window.addEventListener("scroll", () => {
    setScrollYvalue(window.scrollY)

    if (window.scrollY > 200) {
      setShowSubHeader(true)
    } else {
      setShowSubHeader(false)
    }
  })


  return (
    <div className={` ${(Home && scrollYvalue < 300) ? "-translate-y-52" : "translate-y-0"} transition-all duration-300 ease-in-out z-[1000] bg-white fixed top-0  left-0 w-full border-t-4  border-yellow-200 flex justify-center`}>
      {
        showSideNave &&
        <SideNave toggleShowSidNav={toggleShowSidNav} showSideNave={showSideNave} setShowSideNav={setShowSideNav} />
      }
      <div className="w-full px-5 pr-8 xl:w-[1240px] 2xl:w-[1300px] py-2 relative">
        {/* top part start */}
        <div className=" bg-white  flex justify-between items-center">
          <div className="">
            {
              companyInfo &&
              <Link to="/" className=" block">
                <img src={`${Host}/${companyInfo.logo}`} className="w-16" alt="" />
              </Link>
            }
          </div>
          <div className=" flex items-center gap-4">
            <div className=" hidden lg:flex items-center gap-5">
              {
                SocialAppLink && SocialAppLink.map((data, index) => {
                  return (
                    <a key={index} href={data.link} target="_blank" rel="noopener noreferrer">
                      <i className={data.icon} aria-hidden="true"></i>
                    </a>
                  )
                })
              }
            </div>
            <Link to="/register">
              <GiArchiveRegister className=" ml-1 cursor-pointer" />
            </Link>
            <Link to="/subscribtion">
              <div className=" border px-2 py-[6px] cursor-pointer hover:bg-yellow-300 transition-all duration-150 ease-linear flex items-center">
                <AiOutlineMail className=" text-xs mr-1" />
                <span className=" text-[11px] font-bold">SUBSCRIB</span>
              </div>
            </Link>
            <AiOutlineMenu className=" cursor-pointer" onClick={toggleShowSidNav} />
          </div>
        </div>
        {/* top part ends */}

        {/* bottom part start  */}
        <div className={`flex justify-between  transition-all duration-200 ease-in-out ${showSubHeader ? "h-0 opacity-0 py-0" : " py-2 h-auto opacity-100"}`}>
          <div className=" flex items-center gap-2 flex-wrap">
            {
              headerSubmenuData && headerSubmenuData.map((submenu, index) => {
                return (
                  <Link to={`/${submenu.slug}`} key={index}>
                    <span className={`font-semibold  inline-block py-2 px-2 text-[12px] lg:text-sm border-b-2 capitalize ${location.pathname === `/${submenu.slug}` ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>{submenu.name}</span>
                  </Link>
                )
              })
            }
            <div onClick={toggleShowSidNav} className=" flex gap-2 items-center font-semibold  py-2 px-2 text-[12px] lg:text-sm  cursor-pointer border-b-2 border-transparent hover:border-blue-950">
              <span>More</span>
              <AiOutlinePlus />
            </div>
          </div>
          <div className=" hidden xl:flex gap-5 items-center pr-10">
            {
              SpecialMenu && SpecialMenu.map((menu, index) => {

                if (menu.title.toLowerCase() === "podcasts") {
                  return (
                    <Link to="/podcast" key={index} className=" font-semibold text-gray-400 text-sm" >{menu.title}</Link>
                  )
                } else {
                  return (
                    <a key={index} href={menu.link} target="_blank" rel="noopener noreferrer" className=" font-semibold text-gray-400 text-sm" >{menu.title}</a>
                  )
                }
              })
            }
            {/* <Link to="/podcast" className=" font-semibold text-gray-400 text-sm">Podcasts</Link> */}
          </div>
        </div>
        {/* bottom part end  */}
      </div>
    </div>
  )
}
