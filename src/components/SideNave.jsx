import { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import Section from "./Section"
import { useSelector } from "react-redux"
import { Host } from "../../data"

export default function SideNave({ showSideNave, setShowSideNav }) {

    const [right, setRight] = useState(true)
    const menuData = useSelector((state) => state.MenuData.MenuData)
    const SpecialMenu = useSelector((state) => state.SpecialMenu.SpecialMenu)
    const SocialAppLink = useSelector((state) => state.SocialAppLink.SocialAppLink)
    const companyInfo = useSelector((state) => state.CompanyInfo.CompanyInfo)
    const [searchString, setSearchString] = useState("")
    const navigation = useNavigate()

    useEffect(() => {
        setRight(false)
    }, [])

    window.addEventListener("mouseup", (e) => {
        const sidebar = document.getElementById("sidebar")
        const sidebarCloseButton = document.getElementById("sidebarClose")
        if (showSideNave && (sidebarCloseButton.contains(e.target) || !sidebar.contains(e.target))) {
            setShowSideNav(false)
        }
    })

    const SearchTheValue = () => {
        navigation(`/search?SC=${searchString}`)

    }


    return (
        <div className=' z-[1000] w-full h-screen bg-black fixed top-0 left-0 bg-opacity-20 p-1 sm:p-5'>
            <div className="w-full h-full flex justify-end">
                <div id="sidebar" className={` bg-white rounded-tl-xl rounded-bl-xl h-full overflow-y-scroll w-[360px] p-5 transition-all duration-300 ease-in-out ${right ? "translate-x-[450px]" : "translate-x-0"}`}>
                    <div className=" flex justify-between pb-3">
                        {
                            companyInfo &&
                            <Link to="/" className=" block">
                                <img src={`${Host}/${companyInfo.logo}`} className="w-16" alt="" />
                            </Link>
                        }
                        <div className=" flex gap-3 items-center">
                            <Link to="/subscribtion">
                                <div className=" border px-2 py-[6px] cursor-pointer hover:bg-yellow-300 transition-all duration-150 ease-linear flex items-center">
                                    <AiOutlineMail className=" text-xs mr-1" />
                                    <span className=" text-[11px] font-bold">SUBSCRIB</span>
                                </div>
                            </Link>
                            <div id="sidebarClose" className="cursor-pointer">
                                <AiOutlineClose className=" text-lg " />
                            </div>
                        </div>
                    </div>
                    <div className=" w-full relative group my-5">
                        <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder="What are you looking for?" className=" bg-gray-50 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out" />
                        <GoSearch onClick={SearchTheValue} className=" absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 group-hover:text-gray-950" />
                    </div>
                    <div>
                        {
                            menuData && menuData.map((menu, index) => {
                                return (
                                    <Section key={index} data={menu} />
                                )
                            })
                        }
                        {
                            SpecialMenu && SpecialMenu.map((menu, index) => {

                                if (menu.title.toLowerCase() === "podcasts") {
                                    return (
                                        <Link key={index} to="/podcast" className=" block py-5 border-b font-semibold text-lg hover:text-gray-500 transition-all duration-75 ease-in">Padcast</Link>
                                    )
                                } else {
                                    return (
                                        <a key={index} href={menu.link} target="_blank" rel="noopener noreferrer" className=" block py-5 border-b font-semibold text-lg hover:text-gray-500 transition-all duration-75 ease-in" >{menu.title}</a>
                                    )
                                }
                            })
                        }


                    </div>
                    <div className=" mt-5">
                        <p className=" font-semibold text-lg ">Subscrib to KnowThis</p>
                        <p className=" text-[12px] text-gray-700 leading-5 mt-1">Quecly get up to speed on the essential news stories you need to know about today</p>
                        <input type="text" placeholder="Type yout email address here" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out mt-3" />
                        <button className=" uppercase bg-yellow-300 py-2 w-full mt-2 hover:bg-yellow-400 transition-all duration-200 ease-in-out">Subscribe</button>
                        <div className=" mt-5 flex items-center">
                            <input type="checkbox" className=" text-gray-400 checked:text-gray-400" />
                            <p className=" ml-2 text-gray-400 text-[12px]">I am 21+ years old</p>
                        </div>
                        <p className=" mt-1 text-[12px] text-gray-400">By signing up, I agree to the <span className=" underline">Terms</span> and <span className=" underline">Privete Policy</span></p>
                    </div>
                    <div className=" flex gap-5 my-5 text-xl">

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
                    <div className=" mt-5">
                        <p className=" text-[12px] text-gray-500 cursor-pointer">Cookie Settings</p>
                        <Link to="/newsletters">
                            <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">NewsLetter</p>
                        </Link>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Accessability</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Advartise With Us</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Career</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Contact Us</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Cookie Policy</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Do not Sell or Share My Personal Information</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Press</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Policy</p>
                        <p className=" text-[12px] text-gray-600 cursor-pointer mt-4">Tarms + Conditions</p>
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <p className=" font-bold text-2xl">VOXMEDIA</p>
                        <div className=" text-[10px]">
                            <p>@2023 Vox. Media, LLC.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
