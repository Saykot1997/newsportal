import { BsFacebook } from "react-icons/bs"
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai"
import { FaSnapchatGhost } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import SideNave from "./SideNave"
import Header from "./Header"

export default function HomeHeader() {

    const location = useLocation()
    const [showSubHeader, setShowSubHeader] = useState(false)
    const [showSideNave, setShowSideNav] = useState(false)


    const toggleShowSidNav = () => {
        setShowSideNav(!showSideNave)
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            setShowSubHeader(true)
        } else {
            setShowSubHeader(false)
        }
    })
    return (
        <div className="w-full border-t-4  border-yellow-200">
            <Header Home />
            {
                showSideNave &&
                <SideNave toggleShowSidNav={toggleShowSidNav} showSideNave={showSideNave} setShowSideNav={setShowSideNav} />
            }
            <div className="px-5 w-full py-2 relative">
                <div className=" w-full flex justify-between lg:pt-8">
                    <div className=" hidden lg:flex gap-5">
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
                    <div className=" ">
                        <div className=" flex lg:justify-center mb-3">
                            <Link to="/" className=" block">
                                <span className=" font-semibold text-xl lg:text-6xl">Logo</span>
                            </Link>
                        </div>
                        <div className=" hidden lg:flex items-center gap-2">
                            <Link to="/news">
                                <span className={`font-semibold  inline-block py-2 px-2 text-[12px] lg:text-sm border-b-2 ${location.pathname.includes("news") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>News</span>
                            </Link>
                            <Link to="/politics">
                                <span className={`font-semibold  inline-block py-2 px-2 text-[12px] lg:text-sm border-b-2 ${location.pathname.includes("politics") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>Politics</span>
                            </Link>
                            <Link to="/culture">
                                <span className={`font-semibold  inline-block py-2 px-2 text-[12px] lg:text-sm border-b-2 ${location.pathname.includes("culture") ? " border-blue-950" : "border-transparent"}  cursor-pointer hover:border-blue-950`}>Culture</span>
                            </Link>
                            <div onClick={toggleShowSidNav} className=" flex gap-2 items-center font-semibold  py-2 px-2 text-[12px] lg:text-sm  cursor-pointer border-b-2 border-transparent hover:border-blue-950">
                                <span>More</span>
                                <AiOutlinePlus />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" flex items-center gap-3">
                            <Link to="/newsletters">
                                <div className=" border px-2 py-[6px] cursor-pointer hover:bg-yellow-300 transition-all duration-150 ease-linear flex items-center">
                                    <AiOutlineMail className=" text-xs mr-1" />
                                    <span className=" text-[11px] font-bold">SUBSCRIB</span>
                                </div>
                            </Link>
                            <AiOutlineMenu className=" cursor-pointer" onClick={toggleShowSidNav} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
