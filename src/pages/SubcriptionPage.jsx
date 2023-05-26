import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribtion from "../components/Subscribtion";
import knowThisImage from "../assets/knowthisbig.jpg"


export default function Newsletters() {

    return (
        <div className=" w-full">
            <Header />
            <div className=" w-full pt-28">
                <div className=" w-full flex justify-center ">
                    <div className=" w-full px-5 xl:w-[1200px] 2xl:w-[1300px] grid gap-10 md:grid-cols-3 items-center py-20">
                        <div className=" col-span-1">
                            <img src={knowThisImage} alt="" />
                        </div>
                        <div className=" col-span-2">
                            <Subscribtion page={true} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
