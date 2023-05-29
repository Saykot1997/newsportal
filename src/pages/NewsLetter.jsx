import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsComponent from "../components/NewsComponent";
import { Link, useLocation } from "react-router-dom";
import Subscribtion from "../components/Subscribtion";
import { Host } from "../../data";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadMoreButton from "../components/LoadMoreButton";


export default function NewsLetter() {

    const location = useLocation()

    const [pageData, setPageData] = useState(null)
    const [displayData, setDisplayData] = useState([])

    const fatchPageData = async () => {
        try {
            const res = await axios.get(`${Host}/api/news${location.pathname}`)
            setPageData(res.data)
            setDisplayData(res.data.post)
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
                                    displayData.map((post, index) => {
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
                        <LoadMoreButton displayData={displayData} setDisplayData={setDisplayData} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
