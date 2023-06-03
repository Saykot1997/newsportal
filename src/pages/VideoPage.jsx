import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsComponent from "../components/NewsComponent";
import { Link, useLocation } from "react-router-dom";
import Subscribtion from "../components/Subscribtion";
import { Host } from "../../data";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadMoreButton from "../components/LoadMoreButton";
import VideoComponent from "../components/VideoComponent";


export default function VideoPost() {



    const location = useLocation()

    const [pageData, setPageData] = useState(null)
    const [displayData, setDisplayData] = useState([])

    const fatchPageData = async () => {
        try {
            const res = await axios.get(`${Host}/api/news/videos`)
            // setPageData(res.data)
            // setDisplayData(res.data.post)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        fatchPageData()
    }, [])


    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-36">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                        <div>
                            <p className=" text-3xl font-extrabold border-b-4 py-5 mb-10 border-black">Videos</p>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className=" col-span-3 lg:col-span-2">
                                <Link to="/videos/details">
                                    <VideoComponent />
                                </Link>
                            </div>
                        </div>
                        {/* <LoadMoreButton displayData={displayData} setDisplayData={setDisplayData} /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
