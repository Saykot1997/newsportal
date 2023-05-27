import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsComponent from "../components/NewsComponent";
import { Link, useLocation } from "react-router-dom";
import { Host } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { GoSearch } from "react-icons/go";


export default function SearchPage() {

    const location = useLocation()

    const [pageData, setPageData] = useState(null)
    const [searchString, setSearchString] = useState("")

    const fatchPageData = async () => {
        try {
            const res = await axios.get(`${Host}/api/search?SC=${searchString}`)
            setPageData(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setSearchString(location.search.split("=")[1])
        fatchPageData()
    }, [location])

    // console.log(pageData)

    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-28">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                        <div className=" mt-10 grid grid-cols-3">
                            <div className=" col-span-3 lg:col-span-2">
                                <div className=" ">
                                    <p className=" text-2xl font-extrabold mb-3">All Results for:</p>
                                    <div className=" w-full relative group my-5">
                                        <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder="What are you looking for?" className=" bg-gray-100 group-hover:bg-gray-100 focus:bg-gray-100  p-2 w-full placeholder:text-sm focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out" />
                                        <GoSearch onClick={fatchPageData} className=" absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 group-hover:text-gray-950" />
                                    </div>
                                    <p className=" font-bold mt-10 border-b-2 border-black pb-3 mb-8">{pageData.length} results</p>
                                </div>
                                {
                                    pageData?.map((post, index) => {
                                        return (
                                            <Link key={index} to="/news/details">
                                                <NewsComponent post={post} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=" ml-0 md:ml-32  lg:ml-56 mt-10">
                            <button className=" bg-yellow-400 hover:bg-yellow-500 font-semibold py-2 md:px-28 lg:px-32 w-full md:w-auto">LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
