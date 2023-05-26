import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import NewsComponent from "../components/NewsComponent";
import { Link } from "react-router-dom";
import Subscribtion from "../components/Subscribtion";
import mustWatchImage from "../assets/mustwatchhome.jpg"
import heroImage from "../assets/hero.jpg"
import Caradual from "../components/Caradual";
import { Host } from "../../data";
import axios from "axios";


export default function Home() {

  const test = async () => {
    try {
      // const res = await axios.post(`${Host}/api/guest_register_store`)
      const res = await axios.get(`${Host}/api/search?politics`)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" w-full">
      <HomeHeader />
      <div className=" mt-5 w-full">
        <div className="w-full flex justify-center ">
          <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
            <div className=" grid grid-cols-4 gap-5">
              <div className=" col-span-4 lg:col-span-3">
                <div className=" w-full grid grid-cols-2 gap-5 ">
                  <Link to="/news/details" className=" col-span-2 md:col-span-1">
                    <div>
                      <p className=" text-2xl font-extrabold">One Year After Uvalde Shooting, Investigation of Police Response Continues</p>
                      <p className=" text-sm mt-2 leading-6">The continuing probe underlines the lasting fallout over Texas' deadliest school shooting.</p>
                    </div>
                  </Link>
                  <Link to="/news/details" className=" col-span-2 md:col-span-1">
                    <div>
                      <img src={heroImage} alt="" />
                    </div>
                  </Link>
                </div>
                <hr className=" mt-8 mb-3" />
                <div>
                  <button onClick={test}>Click Me</button>
                </div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                  <Link to="/news/details">
                    <div className=" group">
                      <img src={mustWatchImage} alt="" className=" w-full" />
                      <p className=" mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">Biden, McCarthy To Hold Pivotal Meeting on Debt Ceiling As Time To Resolve Standoff Grows Short</p>
                      <p className=" mt-2 text-gray-500 text-[12px]">Griner got off to the perfect start in her first regular-season home game since being released from a Russian prison.</p>
                    </div>
                  </Link>
                  <Link to="/news/details">
                    <div className=" group">
                      <img src={mustWatchImage} alt="" className=" w-full" />
                      <p className=" mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">Biden, McCarthy To Hold Pivotal Meeting on Debt Ceiling As Time To Resolve Standoff Grows Short</p>
                      <p className=" mt-2 text-gray-500 text-[12px]">Griner got off to the perfect start in her first regular-season home game since being released from a Russian prison.</p>
                    </div>
                  </Link>
                  <Link to="/news/details">
                    <div className=" group">
                      <img src={mustWatchImage} alt="" className=" w-full" />
                      <p className=" mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">Biden, McCarthy To Hold Pivotal Meeting on Debt Ceiling As Time To Resolve Standoff Grows Short</p>
                      <p className=" mt-2 text-gray-500 text-[12px]">Griner got off to the perfect start in her first regular-season home game since being released from a Russian prison.</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" col-span-4 lg:col-span-1">
                <div className=" w-full px-4 py-5 bg-gray-100">
                  <p className=" font-semibold ">Latest Headlines</p>
                  <span className=" w-full block h-1 bg-black my-5"></span>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">World Summits’ “Family Photos” Show Putin’s Isolation</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm pb-5 border-b mb-5 hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                  <Link to="/news/details">
                    <p className=" font-bold text-sm hover:text-gray-600">Back in Hoodies and Gym Shorts, Fetterman Tackles Senate Life After Depression Treatment</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-xl font-bold border-b-4 py-5 mb-10 border-black">Must Watch</p>
              <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
                <Link to="/news/details">
                  <div className=" group">
                    <img src={mustWatchImage} alt="" className=" w-full" />
                    <p className=" text-[10px] font-bold my-2">NEWS</p>
                    <p className=" group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">WATCH: Harrison Ford Receives Honorary Palme d'Or at Cannes Film Festival</p>
                  </div>
                </Link>
                <Link to="/news/details">
                  <div className=" group">
                    <img src={mustWatchImage} alt="" className=" w-full" />
                    <p className=" text-[10px] font-bold my-2">NEWS</p>
                    <p className=" group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">WATCH: Harrison Ford Receives Honorary Palme d'Or at Cannes Film Festival</p>
                  </div>
                </Link>
                <Link to="/news/details">
                  <div className=" group">
                    <img src={mustWatchImage} alt="" className=" w-full" />
                    <p className=" text-[10px] font-bold my-2">NEWS</p>
                    <p className=" group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">WATCH: Harrison Ford Receives Honorary Palme d'Or at Cannes Film Festival</p>
                  </div>
                </Link>
                <Link to="/news/details">
                  <div className=" group">
                    <img src={mustWatchImage} alt="" className=" w-full" />
                    <p className=" text-[10px] font-bold my-2">NEWS</p>
                    <p className=" group-hover:text-gray-600 transition-all duration-100 ease-in-out font-extrabold text-sm">WATCH: Harrison Ford Receives Honorary Palme d'Or at Cannes Film Festival</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full py-10 bg-black my-10">
          <Caradual />
        </div>
        <div className=" w-full flex justify-center ">
          <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
            <div>
              <p className=" text-3xl font-extrabold border-b-8 py-5 mb-10 border-black">Recent</p>
            </div>
            <div className="grid grid-cols-3">
              <div className=" col-span-3 lg:col-span-2">
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
