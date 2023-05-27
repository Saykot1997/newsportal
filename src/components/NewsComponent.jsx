import { Host } from "../../data"
import newsImage from "../assets/news.jpg"
import { convertDate } from "../utils/dateFormate"

export default function NewsComponent({ post }) {


    return (
        <div className=' grid grid-cols-12 gap-5 mb-5 '>
            <div className=' col-span-4 sm:col-span-3 '>
                {/* <div className=' w-32 sm:w-40 lg:w-52 h-28 sm:h-36 lg:h-48 '> */}
                {/* <img src={newsImage} alt="" className=' w-full h-full' /> */}
                <img src={post ? `${Host}/${post.thumbnail}` : newsImage} alt="" className=' w-full ' />
                {/* </div> */}
            </div>
            <div className=' col-span-8 sm:col-span-9'>
                <p className=' text-[12px] font-bold'>NEWS <span className=' text-gray-500 pl-2'>{post ? convertDate(post.created_at) : "20/05/2023"}</span></p>
                <div className=' cursor-pointer group'>
                    <p className=' text-sm sm:text-xl lg:text-2xl font-bold mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out'>{post?.title || "Elon Musk’s Brain Implant Company Neuralink Says It Has US Approval To Begin Trials in People"}</p>
                    <p className=' text-gray-500 text-sm mt-2 leading-6 lg:block hidden'>{post?.subtitle || "Neuralink is one of many groups working on linking the nervous system to computers."}</p>
                </div>
            </div>
        </div>
    )
}
