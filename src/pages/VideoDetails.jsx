import Footer from "../components/Footer";
import Header from "../components/Header";
import newsImage from "../assets/news.jpg"
import bgImage from "../assets/bg (1).jpg"
import NewsComponent from "../components/NewsComponent";
import Subscribtion from "../components/Subscribtion";
import MustWatch from "../components/MustWatch";
import { Link } from "react-router-dom";
import MoreVideoComponent from "../components/MoreVideoComponent";



export default function VideoDetails() {
    return (
        <div className=" w-full">
            <Header />
            <div className=" pt-28 mt-5 px-5 w-full bg-black flex justify-center ">
                <div className=" w-full lg:w-[800px] h-[300px] lg:h-[400px]">
                    <img src={newsImage} className=" w-full object-cover h-full" alt="" />
                </div>
            </div>
            <div className="  mt-5 px-5 text-sm lg:text-base w-full flex justify-center ">
                <div className=" w-full lg:w-[800px]">
                    <p className=" text-[10px] mt-2">By NowThis</p>
                    <p className=" text-[9px] mt-1 ">Published on 3/12/2019 at 12:15 PM</p>
                    <p>Actor and writer Natalie Walker started a now viral Twitter thread acting out common one-dimensional roles for women characters.

                        “I am just a huge Oscars buff,” she said. “The year before it had been Keira Knightley and Felicity Jones in ‘The Imitation Game’ and ‘The Theory of Everything.’ And so you kept seeing sort of the same Oscars for your consideration clip.”

                        Walker felt that the talented actresses, and the amazing women they portrayed, were still just playing the support system for men in the films. This, coupled with her own frustration at auditions, led to her beginning to do parodies of typical female film roles online.

                        “The trope characters kept getting more and more meta and self-aware of the movie they were in,” she explained.

                        Only 49% of Oscar Best Pictures winners from 1929 to 2017 have passed the Bechdel Test, which requires two named women to speak to each other about something other than a man.

                        “There’s so few roles already that when you get the one, even if you know it’s not a great role, you will commit to it and try to do your best to put all of these things that are not on the page there,” said Walker. “The sort of danger of that is that you will do so will in a role that isn’t written that well, that then the writer doesn’t realize that they didn’t actually give you a great role.”

                    </p>
                </div>
            </div>
            <div className=" mt-5 w-full flex justify-center ">
                <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px]">
                    <p className=" mb-5 font-bold text-xl">More Videos</p>
                    <div className="grid lg:grid-cols-4 gap-5">
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                        <Link to="/videos/details">
                            <MoreVideoComponent />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
