import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImage from "../assets/politics.jpg"
import NewsComponent from "../components/NewsComponent";
import { Link, useLocation } from "react-router-dom";
import Subscription from "../components/Subscribtion"
import { useEffect, useState } from "react";
import { Host } from "../../data";
import axios from "axios";

export default function News() {

  const location = useLocation()

  const [pageData, setPageData] = useState(null)

  const fatchPageData = async () => {
    try {
      const res = await axios.get(`${Host}/api/news${location.pathname}`)
      setPageData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fatchPageVideoData = async () => {
    try {
      // console.log(location.pathname)
      const res = await axios.get(`${Host}/api/video${location.pathname}`)
      // http://news.bglc.net/api/video/politics
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fatchPageData()
    fatchPageVideoData()
  }, [location])

  // console.log(pageData)

  return (
    <div className=" w-full">
      <Header />
      <div className=" w-full pt-28">
        <div className=" w-full h-[180px] lg:h-[380px] relative">
          {
            pageData && pageData.backgroundmedia.type === "Video" ?
              <video autoPlay={true} src={`${Host}/${pageData?.backgroundmedia?.path}`} className=" h-full w-full object-cover  "></video>
              :
              <img src={`${Host}/${pageData?.backgroundmedia?.path}`} alt="" className="w-full h-full object-cover" />
          }
          <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:py-6 py-2 px-3 lg:px-10 border-[10px] lg:border-[20px] border-red-300 flex justify-center items-center">
            <span className=" font-extrabold text-white text-2xl sm:text-xl lg:text-6xl tracking-widest">Politics</span>
          </div>
        </div>
        <div className=" mt-5 w-full flex justify-center ">
          <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
            <div className="grid grid-cols-3">
              <div className=" col-span-3 lg:col-span-2">
                {
                  pageData?.post.map((post, index) => {
                    return (
                      <Link key={index} to="/politics/details">
                        <NewsComponent post={post} />
                      </Link>
                    )
                  })
                }
                {/* <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <div className=" my-5">
                  <Subscription />
                </div>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
                  <NewsComponent />
                </Link>
                <Link to="/politics/details">
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
