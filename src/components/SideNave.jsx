import { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FaSnapchatGhost } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { Link } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import Section from "./Section"

export default function SideNave({ showSideNave, setShowSideNav }) {
    const [right, setRight] = useState(true)

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




    return (
        <div className=' z-[1000] w-full h-screen bg-black fixed top-0 left-0 bg-opacity-20 p-1 sm:p-5'>
            <div className="w-full h-full flex justify-end">
                <div id="sidebar" className={` bg-white rounded-tl-xl rounded-bl-xl h-full overflow-y-scroll w-[360px] p-5 transition-all duration-300 ease-in-out ${right ? "translate-x-[450px]" : "translate-x-0"}`}>
                    <div className=" flex justify-between pb-3">
                        <Link to="/">
                            <span className=" font-semibold text-3xl">Logo</span>
                        </Link>
                        <div className=" flex gap-3 items-center">
                            <div className=" border px-2 py-[6px] cursor-pointer hover:bg-yellow-300 transition-all duration-150 ease-linear flex items-center">
                                <AiOutlineMail className=" text-xs mr-1" />
                                <span className=" text-[11px] font-bold">SUBSCRIB</span>
                            </div>
                            <div id="sidebarClose" className="cursor-pointer">
                                <AiOutlineClose className=" text-lg " />
                            </div>
                        </div>
                    </div>
                    <div className=" w-full relative group my-5">
                        <input type="text" placeholder="What are you looking for?" className=" bg-gray-50 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out" />
                        <GoSearch className=" absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 group-hover:text-gray-950" />
                    </div>
                    <div>
                        <Section data={{
                            title: "Sections",
                            options: [
                                { title: "News", link: "/news" },
                                { title: "Politics", link: "/politics" },
                                { title: "Culture", link: "/culture" },
                                { title: "Identity", link: "/identity" },
                                { title: "Money", link: "/money" },
                                { title: "Options", link: "/options" },
                            ]
                        }}
                        />
                        <Section
                            data={{
                                title: "Topics",
                                options: [
                                    { title: "LGBTQ+", link: "/lgbtq+" },
                                    { title: "Sustainablity", link: "/sustainablity" },
                                    { title: "Health", link: "/health" },
                                    { title: "Feel Good", link: "/feel-good" },
                                    { title: "Justic", link: "/justic" },
                                ]
                            }}
                        />
                        <Section
                            data={{
                                title: "Features",
                                options: [
                                    { title: "Can it save the planate", link: "/can-it-save-the-planate" },
                                    { title: "Common Goods", link: "/common-goods" },
                                    { title: "SEEN", link: "/seen" },
                                    { title: "One Smaill Stap", link: "/one-small-stap" },
                                    { title: "In The Toggether", link: "/in-the-together" },
                                ]
                            }}
                        />
                        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer" className=" block py-5 border-b font-semibold text-lg hover:text-gray-500 transition-all duration-75 ease-in">
                            Earth On Youtube
                        </a>
                        <Link to="/padcast" className=" block py-5 border-b font-semibold text-lg hover:text-gray-500 transition-all duration-75 ease-in">
                            Padcast
                        </Link>
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
