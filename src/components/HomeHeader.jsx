import { AiOutlineMail, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import SideNave from "./SideNave"
import Header from "./Header"
import { useSelector } from "react-redux"
import { Host } from "../../data"
import { GiArchiveRegister } from "react-icons/gi"
import { BsCloudUploadFill } from "react-icons/bs"

export default function HomeHeader() {

    const location = useLocation()
    const headerSubmenuData = useSelector((state) => state.HeaderSubMenuData.HeaderSubMenuData)
    const companyInfo = useSelector((state) => state.CompanyInfo.CompanyInfo)
    const SocialAppLink = useSelector((state) => state.SocialAppLink.SocialAppLink)
    const [showSideNave, setShowSideNav] = useState(false)

    const toggleShowSidNav = () => {
        setShowSideNav(!showSideNave)
    }

    return (
        <div className="w-full flex justify-center border-t-4  border-yellow-200">
            <Header Home />
            {
                showSideNave &&
                <SideNave toggleShowSidNav={toggleShowSidNav} showSideNave={showSideNave} setShowSideNav={setShowSideNav} />
            }
            <div className="w-full px-5 pr-8 xl:w-[1240px] 2xl:w-[1300px] py-2 relative">
                <div className=" w-full flex justify-between lg:pt-8">
                    <div className=" hidden lg:flex gap-5">
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
                    <div className=" ">
                        <div className=" flex lg:justify-center mb-3">
                            {
                                companyInfo &&
                                <Link to="/" className=" block">
                                    <img src={`${Host}/${companyInfo.logo}`} className=" w-16 lg:w-auto" alt="" />
                                </Link>
                            }
                        </div>
                        <div className=" hidden lg:flex items-center gap-2">
                            {
                                headerSubmenuData && headerSubmenuData.map((submenu, index) => {
                                    return (
                                        <Link to={`/${submenu.slug}`} key={index}>
                                            <span className={`font-semibold  inline-block py-2 px-2 text-[12px] lg:text-sm border-b-2 capitalize ${location.pathname === `/${submenu.slug}` ? " border-blue-950" : "border-transparent"} cursor-pointer hover:border-blue-950`}>{submenu.name}</span>
                                        </Link>
                                    )
                                })
                            }

                            <div onClick={toggleShowSidNav} className=" flex gap-2 items-center font-semibold  py-2 px-2 text-[12px] lg:text-sm  cursor-pointer border-b-2 border-transparent hover:border-blue-950">
                                <span>More</span>
                                <AiOutlinePlus />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" flex items-center gap-3">
                            <Link to="/register">
                                <GiArchiveRegister className=" mr-1 cursor-pointer" />
                            </Link>
                            <Link to="/upload-video">
                                <BsCloudUploadFill className=" ml-1 cursor-pointer" />
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
                </div>
            </div>
        </div>

    )
}
