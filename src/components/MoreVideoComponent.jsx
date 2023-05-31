import { Host } from "../../data"
import newsImage from "../assets/news.jpg"
import { convertDate } from "../utils/dateFormate"
import { FaPlay } from "react-icons/fa"

export default function MoreVideoComponent({ post }) {

    return (
        <div className=' '>
            <div className='relative'>
                <div className=" bg-yellow-300 h-9 w-9 rounded-full flex justify-center items-center absolute top-2 left-2">
                    <FaPlay />
                </div>
                {/* <div className=' w-32 sm:w-40 lg:w-52 h-28 sm:h-36 lg:h-48 '> */}
                {/* <img src={newsImage} alt="" className=' w-full h-full' /> */}
                <img src={post ? `${Host}/${post.thumbnail}` : newsImage} alt="" className=' w-full h-48 object-cover' />
                {/* </div> */}
            </div>
            <div className=' col-span-8 sm:col-span-9'>
                <p className=' text-[12px] font-bold'>NEWS </p>
                <div className=' cursor-pointer group'>
                    <p className=' text-sm font-bold mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out'>{post?.title || "Elon Musk’s Brain Implant Company Neuralink Says It Has US Approval To Begin Trials in People"}</p>

                </div>
            </div>
        </div>
    )
}
