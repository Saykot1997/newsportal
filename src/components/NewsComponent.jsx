import React from 'react'
import newsImage from "../assets/news.jpg"
import { Link } from 'react-router-dom'


export default function NewsComponent() {
    return (
        <div className=' flex gap-3 lg:gap-5 mt-5 '>
            <div className=' w-32 sm:w-40 lg:w-52 h-28 sm:h-36 lg:h-48 '>
                <img src={newsImage} alt="" className=' w-full h-full' />
            </div>
            <div className=''>
                <p className=' text-[12px] font-bold'>NEWS <span className=' text-gray-500 pl-2'>05/20/23</span></p>
                <div className=' cursor-pointer group'>
                    <p className=' text-base sm:text-xl lg:text-2xl font-bold mt-2 group-hover:text-gray-600 transition-all duration-100 ease-in-out'>UN: More Than 1 Million People Now Displaced Due to Sudan Conflict</p>
                    <p className=' text-gray-500 text-sm mt-2 leading-6 lg:block hidden'>The agency said approximately 250,000 people have left Sudan while more than 843,000 have been internally displaced with Sudan's borders.</p>
                </div>
            </div>
        </div>
    )
}
