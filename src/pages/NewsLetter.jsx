import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsComponent from "../components/NewsComponent";
import { Link, useLocation } from "react-router-dom";
import Subscribtion from "../components/Subscribtion";
import { Host } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";


export default function HalpingHand() {

    const location = useLocation()

    const [pageData, setPageData] = useState(null)

    const fatchPageData = async () => {
        try {
            const res = await axios.get(`${Host}/api/news${location.pathname}`)
            setPageData(res.data)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fatchPageData()
    }, [location])

    console.log(pageData)

    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-36">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                        <div>
                            <p className=" text-3xl font-extrabold border-b-4 py-5 mb-10 border-black">News Letter</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className=" col-span-3 lg:col-span-2">
                                {
                                    pageData?.post.map((post, index) => {
                                        return (
                                            <Link key={index} to="/news/details">
                                                <NewsComponent post={post} />
                                            </Link>
                                        )
                                    })
                                }
                                {/* <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <div className=" my-5">
                                    <Subscribtion />
                                </div>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link>
                                <Link to="/news/details">
                                    <NewsComponent />
                                </Link> */}
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