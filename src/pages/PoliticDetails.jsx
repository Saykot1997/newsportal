import Footer from "../components/Footer";
import Header from "../components/Header";
import newsImage from "../assets/news.jpg"
import NewsComponent from "../components/NewsComponent";
import Subscribtion from "../components/Subscribtion";
import MustWatch from "../components/MustWatch";
import { Link } from "react-router-dom";



export default function PoliticsDetails() {
    return (
        <div className=" w-full">
            <Header />
            <div className=" pt-28 mt-5 w-full flex justify-center ">
                <div className=" w-full px-5 xl:w-[1240px] 2xl:w-[1400px]">
                    <div className="grid grid-cols-3 gap-10">
                        <div className=" col-span-3 lg:col-span-2">
                            <p className=" text-gray-500 text-[10px] mb-5">News</p>
                            <p className=" text-xl lg:text-3xl font-bold">UN: More Than 1 Million People Now Displaced Due to Sudan Conflict</p>
                            <p className=" text-gray-600 mt-5 text-sm lg:text-base">The agency said approximately 250,000 people have left Sudan while more than 843,000 have been internally displaced with Sudan's borders.</p>
                            <div className=" my-5">
                                <p className=" text-gray-700 text-[10px]">By Tom McKenna</p>
                                <p className=" text-gray-600 text-[10px]">Published on 5/20/2023 at 5:38 PM</p>
                            </div>
                            <div>
                                <img src={newsImage} alt="" className=" w-full " />
                                <p className=" text-gray-500 text-[12px]">Credit: Getty Images</p>
                            </div>
                            <div className=" border-b pb-10 mb-8 mt-8">
                                <p className=" text-gray-600 text-sm lg:text-base leading-6 lg:leading-7">More than 1 million people have been displaced by the ongoing conflict in Sudan, according to new estimates from the United Nations Refugee Agency. Of that number, the agency said approximately 250,000 people have left Sudan while more than 843,000 have been internally displaced with Sudan's borders.

                                    The conflict is a result of fighting between Sudan's armed forces, led by Gen. Abdel-Fattah al-Burhan, and a paramilitary group called the Rapid Support Forces, led by Gen. Mohamed Hamdan Dagalo, a.k.a. Hemedti. Both groups are looking to take control of Sudan, and fighting between the two broke out on April 15 as the country was attempting to transition to a democracy.

                                    On May 17, the UN issued a statement calling on the international community to provide $3 billion in collective aid to assist with the ongoing humanitarian crisis.

                                    “More than a month into this crisis, countless people remain terrified inside Sudan, and those who have fled across the country’s many borders are in need of help, often finding themselves in places where access is extremely hard and resources strained,” UN High Commissioner for Refugees Filippo Grandi said. “Humanitarians are working hard to respond but we need—once again—to call on countries and individuals with the means, to step up and provide the resources so we can help people who have lost everything.”</p>
                            </div>
                            <Subscribtion />
                        </div>
                        <div className=" col-span-3 lg:col-span-1">
                            <MustWatch />
                        </div>

                    </div>
                    <div>
                        <p className=" text-xl font-bold mt-5 mb-3">Related</p>
                        <span className=" block h-1 w-full bg-black mb-5"></span>
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
