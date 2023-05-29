import axios from 'axios'
import React from 'react'
import { Host } from '../../data'

export default function LoadMoreButton({ displayData, setDisplayData }) {


    const LoadMoreData = async () => {
        try {
            const res = await axios.post(`${Host}/api/loadmore`)
            setDisplayData([...displayData, ...res.data.loadmore])
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=" ml-0 md:ml-32  lg:ml-56 mt-10">
            <button onClick={LoadMoreData} className=" bg-yellow-400 hover:bg-yellow-500 font-semibold py-2 md:px-28 lg:px-32 w-full md:w-auto">LOAD MORE</button>
        </div>
    )
}
