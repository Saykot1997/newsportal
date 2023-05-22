import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImage from "../assets/politics.jpg"
import NewsComponent from "../components/NewsComponent";
import { Link } from "react-router-dom";
import Subscription from "../components/Subscribtion"

export default function News() {
  return (
    <div className=" w-full">
      <Header />
      <div className=" w-full pt-28">
        <div className=" w-full h-[180px] lg:h-[380px] relative">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
          <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:py-6 py-2 px-3 lg:px-10 border-[10px] lg:border-[20px] border-red-300 flex justify-center items-center">
            <span className=" font-extrabold text-white text-2xl sm:text-xl lg:text-6xl tracking-widest">Politics</span>
          </div>
        </div>
        <div className=" mt-5 w-full flex justify-center ">
          <div className=" w-full px-5 xl:w-[1240px] 2xl:w-[1400px]">
            <div className="grid grid-cols-3">
              <div className=" col-span-3 lg:col-span-2">
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
                </Link>
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
