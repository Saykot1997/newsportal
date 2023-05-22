import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { RiSubtractLine } from "react-icons/ri"
import { Link } from 'react-router-dom'


export default function Section({ data }) {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }
    return (
        <div className=' py-5 border-b' >
            <div className='flex justify-between items-center cursor-pointer group' onClick={toggle}>
                <span className=' font-semibold text-lg group-hover:text-gray-500 transition-all duration-75 ease-in'>{data.title}</span>
                {
                    show ?
                        <RiSubtractLine className=' cursor-pointer' />
                        :
                        <AiOutlinePlus className=' cursor-pointer' />

                }
            </div>
            {
                show &&
                <div className=' pl-5'>
                    {
                        data.options.map((option, index) => {
                            return (
                                <Link key={index} to={option.link} className=' text-sm block first:pt-3 pb-3 hover:text-gray-500 transition-all duration-150 ease-in'>{option.title}</Link>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
